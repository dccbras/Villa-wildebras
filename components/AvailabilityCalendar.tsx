'use client';

import React from "react";

type Availability = {
  [date: string]: "available" | "unavailable";
};

const getMonthDays = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

const toLocalDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const generateMonths = (monthsAhead: number) => {
  const now = new Date();
  const startYear = now.getFullYear();
  const startMonth = now.getMonth(); // huidige maand

  return Array.from({ length: monthsAhead }, (_, i) => {
    const date = new Date(startYear, startMonth + i, 1);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  });
};

const AvailabilityCalendar = ({ availability }: { availability: Availability }) => {
  const months = generateMonths(12); // bijv. huidige maand + 11 vooruit

  return (
    <div className="space-y-8">
      {months.map(({ year, month }) => {
        const days = getMonthDays(year, month);

        const firstDay = new Date(year, month, 1).getDay();
        const offset = (firstDay + 6) % 7;

        return (
          <div key={`${year}-${month}`} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              {new Date(year, month).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <div className="grid grid-cols-7 gap-2">
              {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((d) => (
                <div key={d} className="text-sm text-center font-semibold">
                  {d}
                </div>
              ))}

              {Array.from({ length: offset }, (_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {days.map((day) => {
  const dateStr = toLocalDateString(day);
  const status = availability[dateStr] || "unavailable";

  const todayStr = toLocalDateString(new Date());
  const isToday = dateStr === todayStr;

  return (
    <div
      key={dateStr}
      className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center
        ${status === "available" ? "bg-green-400 text-white" : "bg-red-400 text-white"}
        ${isToday ? "ring-2 ring-black" : ""}
      `}
      title={dateStr}
    >
      {day.getDate()}
    </div>
  );
})}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityCalendar;

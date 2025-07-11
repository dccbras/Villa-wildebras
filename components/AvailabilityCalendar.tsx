'use client';

import React from "react";

type Availability = {
  [date: string]: "available" | "unavailable";
};

const getMonthDays = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

// Genereer maanden van mei 2025 t/m mei 2026
const months = Array.from({ length: 13 }, (_, i) => {
  const date = new Date(2025, 6 + i, 1);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
});

const AvailabilityCalendar = ({ availability }: { availability: Availability }) => {
  return (
    <div className="space-y-8">
      {months.map(({ year, month }) => {
        const days = getMonthDays(year, month);

        // Eerste dag van de maand (0 = zondag, 1 = maandag, ...)
        const firstDay = new Date(year, month, 1).getDay();
        const offset = (firstDay + 6) % 7; // Zodat maandag = 0, zondag = 6

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

              {/* Lege vakjes vóór de eerste dag */}
              {Array.from({ length: offset }, (_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {days.map((day) => {
                const dateStr = day.toISOString().split("T")[0];
                const status = availability[dateStr] || "unavailable";
                return (
                  <div
                    key={dateStr}
                    className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center ${
                      status === "available"
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                    }`}
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

"use client";

import React, { useState, useEffect } from "react";

const getMonthDays = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

const generateMonths = (monthsAhead: number) => {
  const now = new Date();
  return Array.from({ length: monthsAhead }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
    };
  });
};

const AdminCalendar = () => {
  const [availability, setAvailability] = useState<any>({});
  const months = generateMonths(13);

  useEffect(() => {
    fetch("/api/availability")
      .then(res => res.json())
      .then(setAvailability);
  }, []);

  const toggleAvailability = async (date: string) => {
    const newStatus =
      availability[date] === "available" ? "unavailable" : "available";

    await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, status: newStatus }),
    });

    setAvailability(prev => ({ ...prev, [date]: newStatus }));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Kalenderbeheer</h1>

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
              {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map(d => (
                <div key={d} className="text-sm text-center font-semibold">
                  {d}
                </div>
              ))}

              {Array.from({ length: offset }).map((_, i) => (
                <div key={i} />
              ))}

              {days.map(day => {
                const dateStr = `${day.getFullYear()}-${String(
                  day.getMonth() + 1
                ).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;

                const status = availability[dateStr] || "unavailable";

                return (
                  <button
                    key={dateStr}
                    onClick={() => toggleAvailability(dateStr)}
                    className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center ${
                      status === "available"
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminCalendar;

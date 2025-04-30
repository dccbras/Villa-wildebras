"use client";

import React, { useEffect, useState } from "react";

type Availability = {
  [date: string]: "available" | "unavailable";
};

const getMonthDays = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

const months = Array.from({ length: 13 }, (_, i) => {
  const date = new Date(2025, 4 + i, 1);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
});

const AdminCalendar = () => {
  const [availability, setAvailability] = useState<Availability>({});

  useEffect(() => {
    const saved = localStorage.getItem("availability");
    if (saved) {
      setAvailability(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("availability", JSON.stringify(availability));
  }, [availability]);

  const toggleDate = (date: string) => {
    setAvailability((prev) => ({
      ...prev,
      [date]: prev[date] === "available" ? "unavailable" : "available",
    }));
  };

  return (
    <div className="space-y-8">
      {months.map(({ year, month }) => {
        const days = getMonthDays(year, month);
        return (
          <div key={`${year}-${month}`} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              {new Date(year, month).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"].map((d) => (
                <div key={d} className="text-sm text-center font-semibold">
                  {d}
                </div>
              ))}
              {Array.from({ length: new Date(year, month, 1).getDay() }, (_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {days.map((day) => {
                const dateStr = day.toISOString().split("T")[0];
                const status = availability[dateStr] || "unavailable";
                return (
                  <button
                    key={dateStr}
                    onClick={() => toggleDate(dateStr)}
                    className={`w-10 h-10 rounded-full text-sm font-medium ${
                      status === "available"
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                    } hover:opacity-80 transition`}
                    title={dateStr}
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

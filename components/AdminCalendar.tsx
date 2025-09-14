"use client";

import React, { useState, useEffect } from "react";

const getMonthDays = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
};

const months = Array.from({ length: 13 }, (_, i) => {
  const date = new Date(2025, 8 + i, 1);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
});

const AdminCalendar = () => {
  const [availability, setAvailability] = useState<any>({});

  useEffect(() => {
    const fetchAvailability = async () => {
      const response = await fetch("/api/availability");
      const data = await response.json();
      setAvailability(data);
    };
    fetchAvailability();
  }, []);

  const toggleAvailability = async (date: string) => {
    const currentStatus = availability[date] === "available" ? "unavailable" : "available";

    await fetch("/api/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, status: currentStatus }),
    });

    // Update lokale state
    setAvailability((prev: any) => ({
      ...prev,
      [date]: currentStatus,
    }));
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
              {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((d) => (
                <div key={d} className="text-sm text-center font-semibold">
                  {d}
                </div>
              ))}

              {/* Lege vakjes vooraan */}
              {Array.from({ length: offset }, (_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {days.map((day) => {
                const dateStr = day.toISOString().split("T")[0];
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
                    title={`${dateStr} - klik om te wisselen`}
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

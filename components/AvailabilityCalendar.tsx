"use client";

import React, { useEffect, useState } from "react";

type Availability = {
  [date: string]: "available" | "unavailable";
};

const AvailabilityCalendar = () => {
  const [availability, setAvailability] = useState<Availability>({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/availability"); // deze endpoint heeft ISR via server
      const data = await res.json();
      setAvailability(data);
    }

    fetchData();
  }, []);

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

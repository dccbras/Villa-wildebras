"use client";

import { useState, useEffect } from "react";

type Availability = { [date: string]: "available" | "unavailable" };

export default function AvailabilityCalendar() {
  const [availability, setAvailability] = useState<Availability>({});

  useEffect(() => {
    fetch("/api/availability")
      .then((res) => res.json())
      .then(setAvailability);
  }, []);

  return (
    <div>
      <h2>Beschikbaarheid</h2>
      {["2025-05-01", "2025-05-02", "2025-05-03"].map((date) => (
        <div key={date}>
          <span>{date}</span>
          <span style={{ color: availability[date] === "available" ? "green" : "red" }}>
            {availability[date] || "onbekend"}
          </span>
        </div>
      ))}
    </div>
  );
}

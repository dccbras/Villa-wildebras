// components/AdminCalendar.tsx
"use client";
import { useState, useEffect } from "react";

type Availability = { [date: string]: "available" | "unavailable" };

export default function AdminCalendar() {
  const [availability, setAvailability] = useState<Availability>({});

  useEffect(() => {
    fetch("/api/availability")
      .then((res) => res.json())
      .then(setAvailability);
  }, []);

  const toggleDate = (date: string) => {
    const newAvailability = {
      ...availability,
      [date]: availability[date] === "available" ? "unavailable" : "available",
    };
    setAvailability(newAvailability);
    fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAvailability),
    });
  };

  // Maak een simpele maandweergave of gebruik jouw kalendercode

  return (
    <div>
      <h2>Admin Kalender</h2>
      {/* Voorbeeld: 2025-05-01 t/m 2025-05-03 */}
      {["2025-05-01", "2025-05-02", "2025-05-03"].map((date) => (
        <div key={date} onClick={() => toggleDate(date)}>
          <span>{date}</span>
          <span style={{ color: availability[date] === "available" ? "green" : "red" }}>
            {availability[date] || "unknown"}
          </span>
        </div>
      ))}
    </div>
  );
}

    </div>
  );
};

export default AdminCalendar;

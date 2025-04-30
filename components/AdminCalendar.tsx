"use client";

import React, { useState, useEffect } from "react";

const AdminCalendar = () => {
  const [availability, setAvailabilityState] = useState<any>({});

  // Laad de beschikbaarheid van Redis bij het laden van de pagina
  useEffect(() => {
    const fetchAvailability = async () => {
      const response = await fetch("/api/availability");
      const data = await response.json();
      setAvailabilityState(data);
    };
    fetchAvailability();
  }, []);

  // Functie om de beschikbaarheid bij te werken in Redis
  const updateAvailability = async (date: string, status: "available" | "unavailable") => {
    await fetch("/api/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, status }),
    });

    // Update de state direct na het aanpassen
    setAvailabilityState((prev: any) => ({
      ...prev,
      [date]: status,
    }));

    // Herlaad de beschikbaarheid om de nieuwste status te krijgen
    const response = await fetch("/api/availability");
    const data = await response.json();
    setAvailabilityState(data);
  };

  return (
    <div>
      <h1>Kalenderbeheer</h1>
      <div>
        {Object.keys(availability).map((date) => (
          <div key={date} className="flex items-center mb-2">
            <span className="mr-2">{date}</span>
            <button
              onClick={() => updateAvailability(date, "available")}
              className={`px-4 py-2 rounded ${
                availability[date] === "available" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              Beschikbaar
            </button>
            <button
              onClick={() => updateAvailability(date, "unavailable")}
              className={`px-4 py-2 rounded ${
                availability[date] === "unavailable" ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              Niet Beschikbaar
            </button>
            <span
              className={`ml-4 px-2 py-1 rounded ${
                availability[date] === "available" ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {availability[date]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCalendar;


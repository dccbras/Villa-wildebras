"use client";

import React, { useState, useEffect } from "react";
import { setAvailability } from "../lib/redis";  // Je eigen Redis-service

const AdminCalendar = () => {
  const [availability, setAvailabilityState] = useState<any>({});

  // Laad de beschikbaarheid van Redis bij het laden van de pagina
  useEffect(() => {
    // Functie om de beschikbare datums op te halen uit Redis
    const fetchAvailability = async () => {
      const response = await fetch('/api/availability');
      const data = await response.json();
      setAvailabilityState(data);
    };
    fetchAvailability();
  }, []);

  // Functie om de beschikbaarheid bij te werken in Redis
  const updateAvailability = async (date: string, status: "available" | "unavailable") => {
    await fetch('/api/availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, status }),
    });

    // Update de state direct na het aanpassen
    setAvailabilityState((prev: any) => ({
      ...prev,
      [date]: status,
    }));
  };

  return (
    <div>
      <h1>Kalenderbeheer</h1>
      <div>
        {Object.keys(availability).map((date) => (
          <div key={date}>
            <span>{date}</span>
            <button onClick={() => updateAvailability(date, "available")}>Beschikbaar</button>
            <button onClick={() => updateAvailability(date, "unavailable")}>Niet Beschikbaar</button>
            <span>{availability[date]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCalendar;


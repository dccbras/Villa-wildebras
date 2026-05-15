"use client";

import { useState, useEffect } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fromDate: "",
    toDate: "",
    persons: "1",
    message: "",
  });

  const [nights, setNights] = useState(0);

  // Bereken aantal nachten
  useEffect(() => {
    if (form.fromDate && form.toDate) {
      const from = new Date(form.fromDate);
      const to = new Date(form.toDate);

      const diff = (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);

      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [form.fromDate, form.toDate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Aanvraag succesvol verzonden!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        fromDate: "",
        toDate: "",
        persons: "1",
        message: "",
      });
      setNights(0);
    } else {
      alert("Er ging iets mis, probeer opnieuw.");
    }
  } catch (error) {
    console.error(error);
    alert("Fout bij verzenden.");
  }
};

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
      <h3 className="text-xl font-semibold mb-4">Stuur vrijblijvend een boekingsaanvraag in</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Naam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Voornaam"
            required
            className="w-full border px-3 py-2 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Achternaam"
            required
            className="w-full border px-3 py-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="w-full border px-3 py-2 rounded-lg"
          onChange={handleChange}
        />

        {/* Datums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="fromDate"
            required
            className="w-full border px-3 py-2 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="date"
            name="toDate"
            required
            className="w-full border px-3 py-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Nachten */}
        <div className="text-sm text-gray-600">
          Aantal nachten: <strong>{nights}</strong>
        </div>

        {/* Personen */}
        <select
          name="persons"
          className="w-full border px-3 py-2 rounded-lg"
          onChange={handleChange}
        >
          <option value="2">2 personen</option>
          <option value="1">1 persoon</option>
        </select>

        {/* Bericht */}
        <textarea
          name="message"
          placeholder="Bericht"
          rows={4}
          className="w-full border px-3 py-2 rounded-lg"
          onChange={handleChange}
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow"
        >
          Verstuur aanvraag
        </button>
      </form>
    </div>
  );
}

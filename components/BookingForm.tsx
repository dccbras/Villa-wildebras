"use client";

import { useState, useEffect } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fromDate: "",
    toDate: "",
    persons: "2",
    message: "",
  });

  const [nights, setNights] = useState(0);
  const [loading, setLoading] = useState(false);

  // Bereken aantal nachten
  useEffect(() => {
    if (form.fromDate && form.toDate) {
      const from = new Date(form.fromDate);
      const to = new Date(form.toDate);

      const diff =
        (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);

      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [form.fromDate, form.toDate]);

  // Input handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validatie
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.fromDate ||
      !form.toDate
    ) {
      alert("Vul alle verplichte velden in.");
      return;
    }

    if (nights <= 0) {
      alert("De einddatum moet na de startdatum liggen.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // Reset formulier
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          fromDate: "",
          toDate: "",
          persons: "2",
          message: "",
        });
        setNights(0);

        // ✅ Redirect naar succespagina
        window.location.href = "/bedankt";
      } else {
        alert("Fout: " + (data?.error || "Probeer opnieuw."));
      }
    } catch (error) {
      console.error(error);
      alert("Er ging iets mis bij verzenden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
      <h3 className="text-xl font-semibold mb-4">
        Stuur vrijblijvend een boekingsaanvraag in
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Naam */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Voornaam"
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Achternaam"
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="E-mail"
          className="w-full border px-3 py-2 rounded-lg"
        />

        {/* Datums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="fromDate"
            value={form.fromDate}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            type="date"
            name="toDate"
            value={form.toDate}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Nachten */}
        <div className="text-sm text-gray-600">
          Aantal nachten: <strong>{nights}</strong>
        </div>

        {/* Personen */}
        <select
          name="persons"
          value={form.persons}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        >
          <option value="2">2 personen</option>
          <option value="1">1 persoon</option>
        </select>

        {/* Bericht */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Bericht (optioneel)"
          rows={4}
          className="w-full border px-3 py-2 rounded-lg"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow disabled:opacity-50"
        >
          {loading ? "Versturen..." : "Verstuur aanvraag"}
        </button>
      </form>
    </div>
  );
}

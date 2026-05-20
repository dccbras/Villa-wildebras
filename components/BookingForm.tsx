"use client";

import React, { useEffect, useMemo, useState } from "react";

const HIGH_SEASON_NIGHTLY = 135;
const LOW_SEASON_NIGHTLY = 100;

// Jouw interpretatie: “weekprijs” = €700 voor 6 aaneengesloten nachten (hoogseizoen)
const HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS = 700;
const WEEK_BLOCK_NIGHTS = 6;

function toLocalDate(dateStr: string) {
  // Voorkomt timezone-gedoe door altijd lokale middernacht te nemen
  return new Date(`${dateStr}T00:00:00`);
}

function addDays(d: Date, days: number) {
  const nd = new Date(d);
  nd.setDate(nd.getDate() + days);
  return nd;
}

function isHighSeason(d: Date) {
  // Hoogseizoen: mei t/m september
  const m = d.getMonth() + 1; // 1..12
  return m >= 5 && m <= 9;
}

function formatEUR(amount: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

type PriceEstimate = {
  total: number;
  highNights: number;
  lowNights: number;
  nights: number;
  weekDealsApplied: number; // hoe vaak weekprijs is toegepast
};

function calculatePrice(fromDate: string, toDate: string): PriceEstimate | null {
  if (!fromDate || !toDate) return null;

  const from = toLocalDate(fromDate);
  const to = toLocalDate(toDate);

  const diffDays = Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return null;

  // Nachtenlijst: check-in t/m dag vóór check-out
  const nightsDates: Date[] = [];
  for (let i = 0; i < diffDays; i++) {
    nightsDates.push(addDays(from, i));
  }

  const highFlags = nightsDates.map((d) => isHighSeason(d));

  let highNights = 0;
  let lowNights = 0;

  // Basis: per nacht (laag = €100, hoog = €135)
  let total = 0;
  for (let i = 0; i < nightsDates.length; i++) {
    if (highFlags[i]) {
      highNights++;
      total += HIGH_SEASON_NIGHTLY;
    } else {
      lowNights++;
      total += LOW_SEASON_NIGHTLY;
    }
  }

  // ✅ Weekprijs toepassen voor ELKE set van 6 aaneengesloten hoogseizoen-nachten
  // Bijv. 12 nachten hoog: 2x weekprijs, rest per nacht.
  let weekDealsApplied = 0;

  const fullPriceForBlock = WEEK_BLOCK_NIGHTS * HIGH_SEASON_NIGHTLY; // 6*135
  const discountPerBlock = fullPriceForBlock - HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS; // voordeel per block

  let runLength = 0;
  for (let i = 0; i < highFlags.length; i++) {
    if (highFlags[i]) {
      runLength++;
    } else {
      if (runLength >= WEEK_BLOCK_NIGHTS) {
        const blocks = Math.floor(runLength / WEEK_BLOCK_NIGHTS);
        weekDealsApplied += blocks;
        total -= blocks * discountPerBlock;
      }
      runLength = 0;
    }
  }
  // laatste run afhandelen
  if (runLength >= WEEK_BLOCK_NIGHTS) {
    const blocks = Math.floor(runLength / WEEK_BLOCK_NIGHTS);
    weekDealsApplied += blocks;
    total -= blocks * discountPerBlock;
  }

  return {
    total,
    highNights,
    lowNights,
    nights: diffDays,
    weekDealsApplied,
  };
}

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
      const from = toLocalDate(form.fromDate);
      const to = toLocalDate(form.toDate);

      const diff = Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [form.fromDate, form.toDate]);

  // Prijsindicatie
  const price = useMemo(() => calculatePrice(form.fromDate, form.toDate), [form.fromDate, form.toDate]);

  // Handige strings om mee te sturen naar de mail
  const priceFormatted = price ? formatEUR(price.total) : "";
  const priceSummary = price
    ? `Prijsindicatie: ${priceFormatted} (${price.lowNights} laagseizoen-nacht(en) × €${LOW_SEASON_NIGHTLY}, ${price.highNights} hoogseizoen-nacht(en) × €${HIGH_SEASON_NIGHTLY}${
        price.weekDealsApplied > 0
          ? `, weekprijs toegepast ×${price.weekDealsApplied} (€${HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS} per ${WEEK_BLOCK_NIGHTS} nachten)`
          : ""
      })`
    : "";

  // Input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.fromDate || !form.toDate) {
      alert("Vul alle verplichte velden in.");
      return;
    }

    if (nights <= 0) {
      alert("De einddatum moet na de startdatum liggen.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        nights,
        // ✅ nieuw: prijsindicatie mee sturen
        priceEstimate: price, // object met total/high/low/weekDealsApplied
        priceEstimateFormatted: priceFormatted, // "€ 1.235"
        priceEstimateSummary: priceSummary, // leesbare tekst
      };

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
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
      <h3 className="text-xl font-semibold mb-4">Stuur vrijblijvend een boekingsaanvraag in</h3>

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

        {/* Prijsindicatie */}
        <div className="text-sm text-gray-600">
          Prijsindicatie: <strong>{price ? formatEUR(price.total) : "—"}</strong>

          {price && (
            <div className="mt-1 text-xs text-gray-500">
              {price.lowNights > 0 && (
                <span>
                  Laagseizoen: <strong>{price.lowNights}</strong> nacht(en) × €{LOW_SEASON_NIGHTLY}
                </span>
              )}
              {price.lowNights > 0 && price.highNights > 0 && <span> • </span>}
              {price.highNights > 0 && (
                <span>
                  Hoogseizoen: <strong>{price.highNights}</strong> nacht(en) × €{HIGH_SEASON_NIGHTLY}
                </span>
              )}
              {price.weekDealsApplied > 0 && (
                <span>
                  {" "}
                  • <strong>Weekprijs toegepast</strong> ×{price.weekDealsApplied} (€{HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS} per{" "}
                  {WEEK_BLOCK_NIGHTS} nachten)
                </span>
              )}
              <div className="mt-1">
                Inclusief schoonmaakkosten, linnengoed en toeristenbelasting. Definitieve prijs altijd na bevestiging.
              </div>
            </div>
          )}
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

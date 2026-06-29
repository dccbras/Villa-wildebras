"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getTranslations } from "@/lib/getTranslations";

const HIGH_SEASON_NIGHTLY = 105;
const LOW_SEASON_NIGHTLY = 100;

const HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS = 600;
const LOW_SEASON_WEEK_PRICE_FOR_6_NIGHTS = 500;

const WEEK_BLOCK_NIGHTS = 6;

function toLocalDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`);
}

function addDays(d: Date, days: number) {
  const nd = new Date(d);
  nd.setDate(nd.getDate() + days);
  return nd;
}

function isHighSeason(d: Date) {
  // Hoogseizoen: mei t/m september
  const m = d.getMonth() + 1;
  return m >= 5 && m <= 9;
}

function getIntlLocale(locale: string) {
  if (locale === "de") return "de-DE";
  if (locale === "en") return "en-GB";
  return "nl-NL";
}

function formatEUR(amount: number, locale: string) {
  return new Intl.NumberFormat(getIntlLocale(locale), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

type PriceEstimate = {
  total: number;
  highNights: number;
  lowNights: number;
  promoNights: number;
  nights: number;
  weekDealsApplied: number;
};

function calculatePrice(fromDate: string, toDate: string): PriceEstimate | null {
  if (!fromDate || !toDate) return null;

  const from = toLocalDate(fromDate);
  const to = toLocalDate(toDate);

  const diffDays = Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return null;

  const nightsDates: Date[] = [];
  for (let i = 0; i < diffDays; i++) {
    nightsDates.push(addDays(from, i));
  }

  const highFlags = nightsDates.map((d) => isHighSeason(d));

  let highNights = 0;
  let lowNights = 0;
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

  let weekDealsApplied = 0;
  let runLength = 0;
  let currentSeason: "high" | "low" | null = null;

  for (let i = 0; i < nightsDates.length; i++) {
    const season = highFlags[i] ? "high" : "low";

    if (season === currentSeason) {
      runLength++;
    } else {
      if (runLength >= WEEK_BLOCK_NIGHTS && currentSeason) {
        const blocks = Math.floor(runLength / WEEK_BLOCK_NIGHTS);
        weekDealsApplied += blocks;

        const fullPrice =
          currentSeason === "high"
            ? WEEK_BLOCK_NIGHTS * HIGH_SEASON_NIGHTLY
            : WEEK_BLOCK_NIGHTS * LOW_SEASON_NIGHTLY;

        const weekPrice =
          currentSeason === "high"
            ? HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS
            : LOW_SEASON_WEEK_PRICE_FOR_6_NIGHTS;

        total -= blocks * (fullPrice - weekPrice);
      }

      currentSeason = season;
      runLength = 1;
    }
  }

  // Laatste blok verwerken
  if (runLength >= WEEK_BLOCK_NIGHTS && currentSeason) {
    const blocks = Math.floor(runLength / WEEK_BLOCK_NIGHTS);
    weekDealsApplied += blocks;

    const fullPrice =
      currentSeason === "high"
        ? WEEK_BLOCK_NIGHTS * HIGH_SEASON_NIGHTLY
        : WEEK_BLOCK_NIGHTS * LOW_SEASON_NIGHTLY;

    const weekPrice =
      currentSeason === "high"
        ? HIGH_SEASON_WEEK_PRICE_FOR_6_NIGHTS
        : LOW_SEASON_WEEK_PRICE_FOR_6_NIGHTS;

    total -= blocks * (fullPrice - weekPrice);
  }

  return {
    total,
    highNights,
    lowNights,
    promoNights: 0,
    nights: diffDays,
    weekDealsApplied,
  };
}

type BookingFormProps = {
  locale: string;
};

export default function BookingForm({ locale }: BookingFormProps) {
  const t = getTranslations(locale);

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

  const price = useMemo(
    () => calculatePrice(form.fromDate, form.toDate),
    [form.fromDate, form.toDate]
  );

  const priceFormatted = price ? formatEUR(price.total, locale) : "";

  const priceSummary = price
    ? `${t.booking_price_estimate_label ?? "Prijsindicatie"}: ${priceFormatted} (${price.lowNights} ${
        t.booking_low_season_nights_label ?? "laagseizoen-nacht(en)"
      } × €${LOW_SEASON_NIGHTLY}, ${price.highNights} ${
        t.booking_high_season_nights_label ?? "hoogseizoen-nacht(en)"
      } × €${HIGH_SEASON_NIGHTLY}${
        price.weekDealsApplied > 0
          ? `, ${t.booking_week_price_applied ?? "weekprijs toegepast"} ×${price.weekDealsApplied}`
          : ""
      })`
    : "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.fromDate || !form.toDate) {
      alert(t.booking_alert_required_fields ?? "Vul alle verplichte velden in.");
      return;
    }

    if (nights <= 0) {
      alert(t.booking_alert_invalid_dates ?? "De einddatum moet na de startdatum liggen.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        locale,
        nights,
        priceEstimate: price,
        priceEstimateFormatted: priceFormatted,
        priceEstimateSummary: priceSummary,
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
        window.location.href = `/${locale || "nl"}/bedankt`;
      } else {
        alert(
          `${t.booking_alert_error_prefix ?? "Fout"}: ${
            data?.error || (t.booking_alert_try_again ?? "Probeer opnieuw.")
          }`
        );
      }
    } catch (error) {
      console.error(error);
      alert(t.booking_alert_submit_failed ?? "Er ging iets mis bij verzenden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
      <h3 className="text-xl font-semibold mb-4">
        {t.booking_form_title ?? "Stuur vrijblijvend een boekingsaanvraag in"}
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
            placeholder={t.booking_first_name ?? "Voornaam"}
            className="w-full border px-3 py-2 rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder={t.booking_last_name ?? "Achternaam"}
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
          placeholder={t.booking_email ?? "E-mail"}
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
          {t.booking_nights ?? "Aantal nachten"}: <strong>{nights}</strong>
        </div>

        {/* Prijsindicatie */}
        <div className="text-sm text-gray-600">
          {t.booking_price_estimate_label ?? "Prijsindicatie"}:{" "}
          <strong>{price ? formatEUR(price.total, locale) : "—"}</strong>

          {price && (
            <div className="mt-2 text-xs text-gray-500 space-y-1">
              {price.lowNights > 0 && (
                <div>
                  {t.booking_low_season ?? "Laagseizoen"}: <strong>{price.lowNights}</strong>{" "}
                  {t.booking_night_plural ?? "nacht(en)"} × €{LOW_SEASON_NIGHTLY}
                </div>
              )}

              {price.highNights > 0 && (
                <div>
                  {t.booking_high_season ?? "Hoogseizoen"}: <strong>{price.highNights}</strong>{" "}
                  {t.booking_night_plural ?? "nacht(en)"} × €{HIGH_SEASON_NIGHTLY}
                </div>
              )}

              {price.weekDealsApplied > 0 && (
                <div>
                  <strong>{t.booking_week_price_applied ?? "Weekprijs toegepast"}</strong> ×
                  {price.weekDealsApplied}
                </div>
              )}

              <div className="mt-1">
                {t.booking_price_disclaimer ??
                  "Inclusief schoonmaakkosten, linnengoed en toeristenbelasting. Definitieve prijs altijd na bevestiging."}
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
          <option value="2">{t.booking_two_persons ?? "2 personen"}</option>
          <option value="1">{t.booking_one_person ?? "1 persoon"}</option>
        </select>

        {/* Bericht */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.booking_message_optional ?? "Bericht (optioneel)"}
          rows={4}
          className="w-full border px-3 py-2 rounded-lg"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow disabled:opacity-50"
        >
          {loading
            ? t.booking_submitting ?? "Versturen..."
            : t.booking_submit ?? "Verstuur aanvraag"}
        </button>
      </form>
    </div>
  );
}

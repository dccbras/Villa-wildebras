import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      fromDate,
      toDate,
      persons,
      message,
      nights,
      priceEstimateFormatted,
      priceEstimateSummary,
      priceEstimate,
    } = body;

    const safeMessage = (message || "").replaceAll("\n", "<br/>");

    const priceHtml = priceEstimateFormatted
      ? `
        <p><strong>Prijsindicatie:</strong> ${priceEstimateFormatted}</p>
        ${
          priceEstimate
            ? `<ul>
                <li>Nachtten totaal: ${priceEstimate.nights ?? nights ?? "-"}</li>
                <li>Laagseizoen-nachten: ${priceEstimate.lowNights ?? "-"}</li>
                <li>Hoogseizoen-nachten: ${priceEstimate.highNights ?? "-"}</li>
                <li>Weekprijs toegepast: ${priceEstimate.weekDealsApplied ?? 0}×</li>
              </ul>`
            : ""
        }
        <p style="color:#6b7280;font-size:12px;margin-top:6px;">
          Inclusief schoonmaakkosten, linnengoed en toeristenbelasting. Definitieve prijs na bevestiging.
        </p>
      `
      : `<p><strong>Prijsindicatie:</strong> —</p>`;

    const data = await resend.emails.send({
      from: "Villa Wildebras <onboarding@resend.dev>",
      to: ["dccbras@gmail.com"],
      subject: "Nieuwe boekingsaanvraag",
      html: `
        <h2>Nieuwe boekingsaanvraag</h2>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Periode:</strong> ${fromDate} t/m ${toDate}</p>
        <p><strong>Aantal personen:</strong> ${persons}</p>
        <p><strong>Aantal nachten:</strong> ${nights ?? "-"}</p>

        ${priceHtml}

        <p><strong>Bericht:</strong><br/>${safeMessage || "-"}</p>
      `,
      // Optioneel: ook een platte tekst versie (handig voor sommige mailclients)
      text: `
Nieuwe boekingsaanvraag

Naam: ${firstName} ${lastName}
Email: ${email}
Periode: ${fromDate} t/m ${toDate}
Aantal personen: ${persons}
Aantal nachten: ${nights ?? "-"}

${priceEstimateSummary ? priceEstimateSummary : "Prijsindicatie: —"}

Bericht:
${message || "-"}
      `.trim(),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

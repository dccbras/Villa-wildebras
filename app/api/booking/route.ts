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
    } = body;

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
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

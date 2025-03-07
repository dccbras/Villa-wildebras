import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 })
    }

    // Voor testdoeleinden, gebruik een ethereal.email test account
    const testAccount = await nodemailer.createTestAccount()

    // Maak een transporter object met de test account instellingen
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })

    // Stuur e-mail met gedefinieerde transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "Villawildebras@gmail.com",
      subject: `Nieuw contactformulier bericht van ${name}`,
      text: `
Naam: ${name}
E-mail: ${email}
Telefoonnummer: ${phone || "Niet opgegeven"}

Bericht:
${message}
      `,
      html: `
<p><strong>Naam:</strong> ${name}</p>
<p><strong>E-mail:</strong> ${email}</p>
<p><strong>Telefoonnummer:</strong> ${phone || "Niet opgegeven"}</p>
<p><strong>Bericht:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Er is een serverfout opgetreden." }, { status: 500 })
  }
}

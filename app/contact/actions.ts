// Vervang de huidige code met een eenvoudigere implementatie die gebruik maakt van nodemailer

"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Vul alle verplichte velden in.",
      }
    }

    // Voor testdoeleinden, gebruik een ethereal.email test account
    // In productie zou je dit vervangen door je eigen SMTP-instellingen
    const testAccount = await nodemailer.createTestAccount()

    // Maak een transporter object met de test account instellingen
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true voor 465, false voor andere poorten
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
    // Preview URL alleen beschikbaar bij gebruik van Ethereal e-mail
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    return {
      success: true,
      data: {
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info),
      },
    }
  } catch (error) {
    console.error("Server error:", error)
    return {
      success: false,
      error: "Er is een serverfout opgetreden.",
    }
  }
}


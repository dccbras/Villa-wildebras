"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactFormAPI() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    previewUrl?: string
  }>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const formData = new FormData(event.currentTarget)

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus({
          success: true,
          message: "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
          previewUrl: data.previewUrl,
        })
        // Reset form
        const form = event.currentTarget as HTMLFormElement
        form.reset()
      } else {
        setFormStatus({
          success: false,
          message: data.error || "Er is iets misgegaan. Probeer het later opnieuw.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        success: false,
        message: "Er is iets misgegaan. Probeer het later opnieuw.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Naam</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Jouw naam"
          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mailadres</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jouw@email.nl"
          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefoonnummer</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="06 12345678"
          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Bericht</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Jouw bericht..."
          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
      >
        {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
      </Button>

      {formStatus.message && (
        <div
          className={`p-4 rounded-md ${
            formStatus.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <p>{formStatus.message}</p>
          {formStatus.previewUrl && (
            <p className="mt-2">
              <a
                href={formStatus.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bekijk test e-mail (alleen in ontwikkelomgeving)
              </a>
            </p>
          )}
        </div>
      )}
    </form>
  )
}

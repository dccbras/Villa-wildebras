// app/beschikbaarheid/page.tsx
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

type Availability = {
  [date: string]: "available" | "unavailable";
};

export default async function BeschikbaarheidPage() {
  const res = await fetch(`${process.env.BASE_URL}/api/availability`, {
    next: { revalidate: 60 }, // <-- ISR instellen op 60 seconden
  });

  const availability: Availability = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Beschikbaarheid</h1>
      <AvailabilityCalendar availability={availability} />
    </main>
  );
}

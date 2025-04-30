import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Beschikbaarheid</h1>
      <AvailabilityCalendar />
    </main>
  );
}

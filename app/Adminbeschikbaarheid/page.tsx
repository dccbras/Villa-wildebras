import AdminCalendar from "@/components/AdminCalendar";

export default function AdminPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Kalenderbeheer</h1>
      <AdminCalendar />
    </main>
  );
}

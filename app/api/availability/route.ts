// app/api/availability/route.ts

export async function GET() {
  // Simpele testdata om te controleren of alles werkt
  const fakeAvailability = {
    "2025-05-01": "available",
    "2025-05-02": "unavailable",
  };

  return new Response(JSON.stringify(fakeAvailability), {
    headers: { "Content-Type": "application/json" },
  });
}


import { NextResponse } from "next/server";
import { setAvailability } from "../../../lib/redis";  // Voeg hier de Redis-communicatie toe

// Haal de beschikbaarheid op (GET)
export async function GET() {
  const availability = await getAvailability();  // Haal de beschikbaarheid op uit Redis
  return NextResponse.json(availability);
}

// Update de beschikbaarheid (POST)
export async function POST(req: Request) {
  const { date, status } = await req.json();

  // Update de beschikbaarheid in Redis
  await setAvailability(date, status);
  return NextResponse.json({ message: "Beschikbaarheid geüpdatet" });
}


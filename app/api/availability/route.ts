// app/api/availability/route.ts
import { getAvailability, setAvailability } from '../../../lib/redis';

export async function GET() {
  // Haal de actuele beschikbaarheid op uit Redis
  const availability = await getAvailability();
  return new Response(JSON.stringify(availability), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const { date, status } = await req.json();
  
  // Zet de beschikbaarheid in Redis (je kunt Redis aanpassen naar de status)
  await setAvailability(date, status);
  
  // Geef een response terug
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}


// app/api/availability/route.ts

import { getAvailability, setAvailability } from "../../../lib/redis";

export async function GET() {
  const availability = await getAvailability();

  return new Response(JSON.stringify(availability), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(req: Request) {
  const { date, status } = await req.json();

  await setAvailability(date, status);

  return new Response(
    JSON.stringify({ success: true }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

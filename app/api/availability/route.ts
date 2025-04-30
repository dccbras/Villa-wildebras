import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "beschikbaarheid"; // de key waaronder je alle data opslaat

// GET – Haal beschikbaarheid op
export async function GET() {
  const data = await redis.get(KEY);
  return NextResponse.json(data || {});
}

// POST – Sla nieuwe beschikbaarheid op
export async function POST(req: Request) {
  const body = await req.json();
  await redis.set(KEY, body);
  return NextResponse.json({ success: true });
}


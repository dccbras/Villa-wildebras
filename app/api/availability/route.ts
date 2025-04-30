import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'availability.json');

// GET: haal beschikbaarheid op
export async function GET() {
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);
  return NextResponse.json(data);
}

// POST: sla beschikbaarheid op
export async function POST(req: Request) {
  const body = await req.json();
  await fs.writeFile(filePath, JSON.stringify(body, null, 2), 'utf8');
  return NextResponse.json({ success: true });
}

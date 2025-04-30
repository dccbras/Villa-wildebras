// app/api/dev/fill-testdata/route.ts
import { NextResponse } from "next/server";
import { setAvailability } from "@/lib/redis";

export async function GET() {
  await setAvailability("2025-05-01", "available");
  await setAvailability("2025-05-02", "unavailable");
  return NextResponse.json({ message: "Testdata toegevoegd" });
}

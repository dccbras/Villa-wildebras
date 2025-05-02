export async function getAvailability() {
  const res = await fetch(`${process.env.BASE_URL}/api/availability`, {
    next: { revalidate: 60 }, // ISR: vernieuw cache elke 60 sec
  });

  if (!res.ok) {
    throw new Error("Failed to fetch availability");
  }

  return res.json();
}

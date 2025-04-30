import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://tender-parakeet-22011.upstash.io',
  token: 'AVX7AAIjcDFiZjFmY2I2YTYzMTI0NTM5YWY3Y2EwZDg1NzAzYTdiYnAxMA',
})

await redis.set('foo', 'bar');
const data = await redis.get('foo');

// lib/redis.ts
import { createClient } from 'redis';

// Gebruik omgevingsvariabelen voor de Redis configuratie
const client = createClient({
  url: process.env.REDIS_URL, // URL van je Upstash Redis
  password: process.env.REDIS_TOKEN, // Token van je Upstash Redis
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

// Functies om beschikbaarheid op te halen en in te stellen
export const getAvailability = async () => {
  const availability = await client.hGetAll("availability");
  return availability;
};

export const setAvailability = async (date: string, status: string) => {
  await client.hSet("availability", date, status);
};



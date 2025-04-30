import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

export const setAvailability = async (date: string, status: "available" | "unavailable") => {
  await redis.hset("availability", date, status);
};

export const getAvailability = async () => {
  const availability = await redis.hgetall("availability");
  return availability;
};

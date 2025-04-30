import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://tender-parakeet-22011.upstash.io',
  token: 'AVX7AAIjcDFiZjFmY2I2YTYzMTI0NTM5YWY3Y2EwZDg1NzAzYTdiYnAxMA',
})

await redis.set('foo', 'bar');
const data = await redis.get('foo');

```javascript
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function OverOns() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl font-bold">Over Ons</h1>
      <p className="text-lg text-center max-w-2xl">
        Wij zijn Albert en Daniëlle en wij hebben het tinyhouse gebouwd.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((num) => (
          <Card key={num}>
            <CardContent>
              <Image
                src={`/${num}.png`}
                alt={`Afbeelding ${num}`}
                width={400}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

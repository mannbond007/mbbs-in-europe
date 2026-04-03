import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <MapPinOff className="w-16 h-16 text-primary" />
      </div>
      <h2 className="text-4xl font-bold mb-4">Country Not Found</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        We could not find the MBBS country destination you were looking for. It might have been updated or removed.
      </p>
      <Link href="/#countries">
        <Button size="lg" className="rounded-full">
          Browse All Destinations
        </Button>
      </Link>
    </div>
  );
}

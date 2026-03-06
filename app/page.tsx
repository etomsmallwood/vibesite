import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="max-w-2xl space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          AI-Native Vibe Stack
        </h1>
        <p className="text-lg text-muted-foreground">
          Production-first. System-grounded. No design theater.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}

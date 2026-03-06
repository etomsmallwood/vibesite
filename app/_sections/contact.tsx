"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="bg-foreground py-28">
      <div className="px-8 md:px-16">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              Let&apos;s Talk
            </p>
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl">
              Have a
              <br />
              Project
              <br />
              <span className="text-accent">In Mind?</span>
            </h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-white/50">
              Whether you&apos;re building a design team, launching a product,
              or untangling a complex experience — I&apos;d love to hear about
              it.
            </p>
            <div className="mt-12 space-y-2 text-sm text-white/30">
              <p>
                <span className="text-white/50">Email</span>{" "}
                hello@ericsmallwood.co
              </p>
              <p>
                <span className="text-white/50">Based in</span> San Francisco,
                CA
              </p>
              <p>
                <span className="text-white/50">Open to</span> Advisory,
                Full-Time & Consulting
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-xs font-bold tracking-wider text-white/50 uppercase"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-bold tracking-wider text-white/50 uppercase"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-xs font-bold tracking-wider text-white/50 uppercase"
              >
                Message
              </Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="rounded-sm border-white/15 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent"
              />
            </div>
            <Button
              type="submit"
              className="self-start rounded-sm bg-accent px-8 py-3 font-bold tracking-wider text-primary uppercase transition-colors hover:bg-accent/85 active:scale-[0.97]"
            >
              Send Message →
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Jordan doesn't just make things look good — she makes organisations think differently about what design can do. Working with her on our platform transformation was the highest-leverage decision we made that year.",
    name: "Marcus Webb",
    title: "VP of Product",
    company: "Airbnb",
  },
  {
    quote:
      "Rare combination of razor-sharp strategic instinct and genuine craft. Jordan brought a level of clarity to our design system that unlocked 6 months of blocked engineering work in a single sprint.",
    name: "Priya Nair",
    title: "Chief Design Officer",
    company: "Stripe",
  },
  {
    quote:
      "She fights for the user in every room — whether that's a board meeting or a design crit. Our NPS jumped 18 points in the quarter after she led our mobile redesign. The numbers speak.",
    name: "Daniel Cho",
    title: "CEO & Co-Founder",
    company: "Luma Health",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-secondary py-28"
    >
      <div className="px-8 md:px-16">
        {/* Section header */}
        <p className="mb-16 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
          Voices
        </p>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col justify-between bg-secondary p-10"
            >
              {/* Opening mark */}
              <div>
                <span
                  aria-hidden
                  className="mb-6 block font-display text-6xl font-black leading-none text-accent"
                >
                  &ldquo;
                </span>
                <p className="text-base leading-relaxed text-foreground/80">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <footer className="mt-10 border-t border-border pt-6">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.title}, {t.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen flex-col justify-end overflow-hidden pb-20 pt-32 md:pb-28">
      {/* Corner rule lines — decorative */}
      <div className="absolute left-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-16" />
      <div className="absolute right-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:right-16" />

      <div className="relative px-8 md:px-16">
        {/* Eyebrow */}
        <p className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-accent uppercase">
          <span className="inline-block h-px w-8 bg-accent" />
          Director of Experience Design
        </p>

        {/* Display headline */}
        <h1 className="font-display text-[clamp(4rem,14vw,13rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
          Design
          <br />
          <span className="text-accent">That</span>
          <br />
          Fights
          <br />
          <span className="[text-stroke:2px_white] [-webkit-text-stroke:2px_white] text-transparent">
            For You.
          </span>
        </h1>

        {/* Divider */}
        <div className="my-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/15" />
          <span className="text-xs tracking-[0.25em] text-white/30 uppercase">
            Eric Smallwood
          </span>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        {/* Sub-copy + CTA */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-white/55">
            15 years designing products that move at the speed of ambition —
            from zero-to-one startups to Fortune 500 transformations.
          </p>
          <div className="flex shrink-0 gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded bg-accent px-7 py-3.5 text-sm font-bold tracking-wider text-primary uppercase transition-opacity hover:opacity-90"
            >
              View Work
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-white/25 px-7 py-3.5 text-sm font-bold tracking-wider text-white/70 uppercase transition-colors hover:border-white/50 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

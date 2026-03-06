const caseStudies = [
  {
    index: "01",
    brand: "Nike",
    title: "Digital Commerce Platform",
    description:
      "End-to-end redesign of the global checkout experience across web and app. Reduced friction, increased conversion 34%, and shipped in 6 markets simultaneously.",
    tags: ["E-Commerce", "Design Systems", "Mobile"],
    accent: "bg-foreground text-background",
  },
  {
    index: "02",
    brand: "Airbnb",
    title: "Host Experience 2.0",
    description:
      "Led a 12-person cross-functional team to rebuild the host onboarding journey from the ground up. Halved time-to-first-listing and boosted host activation by 28%.",
    tags: ["Service Design", "Research", "Growth"],
    accent: "bg-accent text-primary",
  },
  {
    index: "03",
    brand: "Spotify",
    title: "Social & Shared Listening",
    description:
      "Conceived and shipped Blend and collaborative playlist features, now used by 85M+ listeners. Drove a measurable lift in D30 retention across the core demographics.",
    tags: ["Consumer Product", "0-to-1", "Retention"],
    accent: "bg-background text-foreground border border-border",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-background py-28">
      <div className="px-8 md:px-16">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              Selected Work
            </p>
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-foreground md:text-7xl">
              Case
              <br />
              Studies
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <p className="text-sm text-muted-foreground">
              3 of 27 engagements
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.index}
              className="group flex flex-col justify-between rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1 bg-secondary"
            >
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-display text-6xl font-black leading-none text-foreground/10">
                    {study.index}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {study.brand}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-2xl font-black uppercase leading-tight tracking-tight text-foreground">
                  {study.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {study.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-foreground uppercase transition-colors group-hover:gap-3 group-hover:text-accent"
                >
                  View Case Study
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

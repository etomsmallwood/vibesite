const brands = [
  { name: "Nike", italic: true },
  { name: "Google", italic: false },
  { name: "Airbnb", italic: false },
  { name: "Spotify", italic: false },
  { name: "Stripe", italic: false },
  { name: "Shopify", italic: false },
];

export function Brands() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="px-8 md:px-16">
        <p className="mb-10 text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
          Brands I&apos;ve Shaped
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6 md:gap-x-16">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className={`font-display text-2xl font-black uppercase tracking-tight text-foreground/20 transition-colors duration-300 hover:text-foreground/60 md:text-3xl${brand.italic ? " italic" : ""}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

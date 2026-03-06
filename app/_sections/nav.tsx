export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 md:px-16">
      <a
        href="#"
        className="font-display text-xl font-black tracking-widest text-white uppercase transition-colors hover:text-accent"
      >
        ES
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        <a
          href="#work"
          className="text-sm font-medium tracking-wider text-white/60 uppercase transition-colors hover:text-white"
        >
          Work
        </a>
        <a
          href="#testimonials"
          className="text-sm font-medium tracking-wider text-white/60 uppercase transition-colors hover:text-white"
        >
          Voices
        </a>
        <a
          href="#contact"
          className="rounded border border-accent bg-transparent px-5 py-2 text-sm font-bold tracking-wider text-accent uppercase transition-colors hover:bg-accent hover:text-primary"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}

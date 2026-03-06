export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-foreground px-8 py-8 sm:flex-row md:px-16">
      <p className="text-xs tracking-widest text-white/25 uppercase">
        &copy; {new Date().getFullYear()} Eric Smallwood. All rights reserved.
      </p>
      <nav className="flex items-center gap-8">
        {["LinkedIn", "Dribbble", "Read.cv"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs font-medium tracking-wider text-white/30 uppercase transition-colors hover:text-white/70"
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}

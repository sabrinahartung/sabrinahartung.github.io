import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-glass" : "border border-transparent"
        }`}
      >
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold text-ink no-underline"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm shadow-glow-violet">
            ✦
          </span>
          Showcase
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-mist no-underline transition-colors hover:bg-white/10 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 !px-5 !py-2 text-sm">
            Say hi
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-white/10 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass-strong absolute left-4 right-4 top-20 z-50 rounded-2xl p-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-mist no-underline transition-colors hover:bg-white/10 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

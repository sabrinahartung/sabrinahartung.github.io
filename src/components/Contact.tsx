import { useReveal } from "../hooks/useReveal";

// 👉 Set your real contact details here.
const EMAIL = "sabrinahartung.application@proton.me";
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrina-hartung-255056110/", icon: "💼" },
  { label: "GitHub", href: "https://github.com/sabrinahartung", icon: "🐙" },
];

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-3xl">
        <div className="glass reveal relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-14">
          {/* Accent glow */}
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-gradient opacity-30 blur-3xl" />

          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.2em] text-orchid">
            Open to opportunities
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Looking for my next role
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-mist">
            I'm open to AI Engineer roles, especially in agentic AI, and to
            research-driven teams building responsible, real-world AI. If
            you're hiring or think I'd be a good fit, I'd love to hear from you.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="btn-primary text-base">
              Email me
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-5 !py-2.5 text-sm"
              >
                <span aria-hidden>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

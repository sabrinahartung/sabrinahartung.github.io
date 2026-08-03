import { useReveal } from "../hooks/useReveal";

const socials = [
  { label: "Email", href: "mailto:hello@example.com", icon: "✉️" },
  { label: "GitHub", href: "#", icon: "🐙" },
  { label: "LinkedIn", href: "#", icon: "💼" },
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
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            I am open to work
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-mist">
            I love to hear from you!
          </p>

          <a
            href="mailto:hello@example.com"
            className="btn-primary mt-8 text-base"
          >
            Send a message
            <span aria-hidden>→</span>
          </a>

          {/* Socials */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
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

import { useReveal } from "../hooks/useReveal";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Vite",
  "UI/UX",
  "WebGL",
  "Design Systems",
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Text */}
        <div>
          <p className="reveal mb-3 font-body text-sm font-medium uppercase tracking-[0.2em] text-orchid">
            About
          </p>
          <h2 className="reveal font-display text-4xl font-bold sm:text-5xl">
            Hi, I'm the person behind these projects
          </h2>
          <p
            className="reveal mt-5 text-lg leading-relaxed text-mist"
            style={{ transitionDelay: "80ms" }}
          >
            I design and build digital products that feel fast, clear and a
            little bit magical. I love working at the intersection of design and
            engineering — where a good idea meets clean code.
          </p>
          <p
            className="reveal mt-4 text-lg leading-relaxed text-mist"
            style={{ transitionDelay: "160ms" }}
          >
            When I'm not coding, you'll find me sketching interfaces, trying out
            new tools, or enjoying a very good cup of coffee.
          </p>

          {/* Skills */}
          <div
            className="reveal mt-8 flex flex-wrap gap-2.5"
            style={{ transitionDelay: "240ms" }}
          >
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist transition-colors hover:border-white/25 hover:text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Portrait / accent card */}
        <div className="reveal" style={{ transitionDelay: "160ms" }}>
          <div className="glass relative mx-auto grid aspect-square max-w-sm place-items-center overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 bg-brand-gradient opacity-20" />
            <div className="animate-float text-8xl">👋</div>
            <div className="glass-strong absolute bottom-5 left-5 right-5 rounded-2xl px-4 py-3 text-center text-sm text-mist">
              “Details aren't a detail — they are the design.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

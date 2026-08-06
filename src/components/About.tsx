import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    label: "AI / ML",
    items: ["Python", "PyTorch", "Hugging Face", "LangChain", "RAG", "MCP", "Pandas"],
  },
  { label: "Backend & APIs", items: ["FastAPI", "Django", "OpenAPI"] },
  { label: "Frontend", items: ["React", "TypeScript"] },
  { label: "Cloud & DevOps", items: ["Docker", "Kubernetes", "SAP BTP"] },
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
            Hi, I'm Sabrina
          </h2>
          <p
            className="reveal mt-5 text-lg leading-relaxed text-mist"
            style={{ transitionDelay: "80ms" }}
          >
            I'm a software developer and computer scientist with a passion for
            machine learning that delivers real-world benefits. After conducting
            research on responsible AI in the medical field, I'm now working on
            cloud-native AI systems in the SAP environment and want to shift my
            focus back toward modeling.
          </p>
          <p
            className="reveal mt-4 text-lg leading-relaxed text-mist"
            style={{ transitionDelay: "160ms" }}
          >
            When I'm not working on machine learning stuff, you'll find me
            drawing pixel art or playing Pen&Paper with friends.
          </p>

          {/* Skills — grouped, with a generalist framing line */}
          <p
            className="reveal mt-8 text-sm text-mist"
            style={{ transitionDelay: "220ms" }}
          >
          </p>
          <div
            className="reveal mt-4 space-y-4"
            style={{ transitionDelay: "260ms" }}
          >
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
              >
                <span className="flex-none pt-1.5 text-xs font-medium uppercase tracking-wider text-faint sm:w-32">
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-hairline/10 bg-hairline/5 px-3.5 py-1.5 text-sm text-mist transition-colors hover:border-hairline/25 hover:text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait / accent card */}
        <div className="reveal" style={{ transitionDelay: "160ms" }}>
          <div className="glass relative mx-auto grid aspect-square max-w-sm place-items-center overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 bg-brand-gradient opacity-20" />
            <div className="animate-float text-8xl">👩🏼‍💻</div>
            <div className="glass-strong absolute bottom-5 left-5 right-5 rounded-2xl px-4 py-3 text-center text-sm text-mist">
              “If you love what you do, you'll never have to work a day in your life.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

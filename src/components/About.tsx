import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    label: "Agentic AI & LLMs",
    items: ["RAG", "MCP", "LangChain", "Hugging Face", "Ollama", "ChromaDB"],
  },
  {
    label: "ML & Data",
    items: ["Python", "PyTorch", "TensorFlow", "Pandas"],
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
            I am a computer scientist with a wide range of experience, from data science in research to agentic AI in enterprise environments, and I am passionate about the practical application of machine learning for real-world use cases.
          </p>
          <p
            className="reveal mt-4 text-lg leading-relaxed text-mist"
            style={{ transitionDelay: "160ms" }}
          >
            My master's research focused on responsible AI in medicine:
            stress-testing models for bias, privacy, robustness and
            explainability. I bring the same lens to agentic systems, because
            an agent is only as useful as your ability to tell when to trust it.
          </p>

          {/* Skills — grouped */}
          <div
            className="reveal mt-8 space-y-4"
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

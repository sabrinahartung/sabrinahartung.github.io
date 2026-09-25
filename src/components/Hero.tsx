export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow pill */}
        <div className="animate-rise-in mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-mist">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orchid opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orchid" />
          </span>
          Sabrina Hartung · AI Engineer
        </div>

        {/* Headline */}
        <h1
          className="animate-rise-in font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Building <span className="text-gradient animate-shimmer">agentic AI</span>{" "}
          that can be measured and trusted.
        </h1>

        {/* Subline */}
        <p
          className="animate-rise-in mx-auto mt-6 max-w-xl text-lg text-mist"
          style={{ animationDelay: "160ms" }}
        >
          I build LLM agents and retrieval systems, and the evaluation that
          shows when they work, from responsible-AI research to enterprise
          environments.
        </p>

        {/* CTAs */}
        <div
          className="animate-rise-in mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a href="#projects" className="btn-primary">
            View projects
            <span aria-hidden>↓</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="animate-rise-in mx-auto mt-14 grid max-w-xl grid-cols-3 gap-3 sm:gap-4"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { n: "6", l: "years in data science & AI" },
            { n: "5+", l: "years in software development" },
            { n: "7", l: "papers on responsible AI" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-3 py-5 sm:px-4">
              <div className="font-display text-3xl font-bold text-ink">
                {s.n}
              </div>
              <div className="mt-1 text-xs text-faint sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 [@media(min-height:820px)]:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-hairline/30 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-hairline/70" />
        </div>
      </a>
    </section>
  );
}

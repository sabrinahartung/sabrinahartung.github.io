export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow pill */}
        {/* <div className="animate-rise-in mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-mist">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orchid opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orchid" />
          </span>
          Machine learning · Responsible AI
        </div> */}

        {/* Headline */}
        <h1
          className="animate-rise-in font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          I love building machine learning systems that work{" "}
          <span className="text-gradient animate-shimmer">responsibly</span> in
          the real world.
        </h1>

        {/* Subline */}
        <p
          className="animate-rise-in mx-auto mt-6 max-w-xl text-lg text-mist"
          style={{ animationDelay: "160ms" }}
        >
          A selection of projects across responsible AI, medical machine
          learning and cloud-native data systems.
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
          className="animate-rise-in mx-auto mt-14 grid max-w-lg grid-cols-4 gap-4"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { n: "6", l: "Years of Experience in Data Science and AI" },
            { n: "5+", l: "Years of Experience in Software Development" },
            { n: "6", l: "Published Scientific Papers on Responsible AI" },
            { n: "∞", l: "Curiosity for new Technologies" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5">
              <div className="font-display text-3xl font-bold text-ink">
                {s.n}
              </div>
              <div className="mt-1 text-sm text-faint">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-white/70" />
        </div>
      </a>
    </section>
  );
}

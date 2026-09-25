import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-3 font-body text-sm font-medium uppercase tracking-[0.2em] text-orchid">
            Selected work
          </p>
          <h2 className="reveal font-display text-4xl font-bold sm:text-5xl">
            Work samples
          </h2>
          <p
            className="reveal mt-4 text-lg text-mist"
            style={{ transitionDelay: "80ms" }}
          >
            From an LLM agent I'm building right now to research prototypes
            and production platforms. Each one shows how I build, and how I
            check that it works. Click a tile to dive in.
          </p>
        </div>

        {/* Grid — two rows of two */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

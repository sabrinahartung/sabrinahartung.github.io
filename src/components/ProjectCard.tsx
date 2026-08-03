import { useRef } from "react";
import type { Project } from "../data/projects";

/**
 * A single frosted-glass project tile. The whole card is a link to the
 * project's detail page (`#/project/<slug>`), with a pointer-tracking
 * spotlight and a gentle 3D tilt on hover.
 */
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    // Spotlight position
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    // Subtle tilt (max ~4deg)
    const rx = ((y / r.height) * 2 - 1) * -4;
    const ry = ((x / r.width) * 2 - 1) * 4;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      className="reveal group h-full"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <a
        ref={cardRef}
        href={`#/project/${project.slug}`}
        aria-label={`Open project: ${project.title}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-6 no-underline transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-glow-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orchid/70"
      >
        {/* Pointer spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx) var(--my), rgb(255 255 255 / 0.10), transparent 40%)",
          }}
        />

        {/* Cover */}
        <div
          className="relative mb-5 grid h-28 place-items-center overflow-hidden rounded-2xl text-4xl"
          style={{ background: project.accent }}
        >
          <span className="drop-shadow-sm">{project.emoji}</span>
          {project.badge && (
            <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {project.badge}
            </span>
          )}
        </div>

        {/* Body */}
        <h3 className="font-display text-xl font-medium text-ink">
          {project.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-orchid">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-faint"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer cue — pushed to the bottom */}
        <div className="mt-6 flex items-center gap-1.5 pt-1 text-sm font-medium text-ink">
          <span>View project</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </a>
    </div>
  );
}

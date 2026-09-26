import { useState } from "react";
import { getProject, projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import { asset, isVideo } from "../lib/asset";
import Lightbox from "./Lightbox";
import MetricsTree from "./MetricsTree";
import Roadmap from "./Roadmap";
import { diagrams } from "./diagrams";

/**
 * Project detail page, rendered when the route is `#/project/<slug>`.
 * Falls back to a friendly "not found" state for unknown slugs.
 */
export default function ProjectDetail({ slug }: { slug: string }) {
  const ref = useReveal<HTMLDivElement>();
  // Which gallery image the lightbox shows (null = closed). Declared before
  // the early return below so the hook order stays stable.
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-5xl font-bold">Project not found</h1>
        <p className="mt-4 text-mist">
          The project you're looking for doesn't exist (anymore).
        </p>
        <a href="#projects" className="btn-primary mt-8">
          ← Back to projects
        </a>
      </main>
    );
  }

  // Prev / next for footer navigation
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  // Only real images are enlargeable; the lightbox navigates among these.
  const galleryImages = project.gallery.filter(
    (g): g is { image: string; caption: string } => Boolean(g.image),
  );

  return (
    <main ref={ref} className="mx-auto max-w-5xl px-4 pb-24 pt-28">
      {/* Back link */}
      <a
        href="#projects"
        className="reveal inline-flex items-center gap-1.5 text-sm font-medium text-faint transition-colors hover:text-ink"
      >
        <span aria-hidden>←</span> Back to projects
      </a>

      {/* Cover — real image when `cover` is set, otherwise emoji + gradient */}
      <div
        className="reveal relative mt-6 grid h-52 place-items-center overflow-hidden rounded-[2rem] border-2 border-white text-7xl sm:h-64"
        style={{ background: project.accent }}
      >
        {project.cover ? (
          <img
            src={asset(project.cover)}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <span className="drop-shadow-md">{project.emoji}</span>
        )}
        {project.badge && (
          <span className="absolute right-5 top-5 rounded-full bg-black/30 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
            {project.badge}
          </span>
        )}
      </div>

      {/* Title + meta */}
      <header className="reveal mt-8">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-orchid">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-faint">
          <span>{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
        </div>
      </header>

      {/* Details bar: tech stack + links (formerly a sidebar) */}
      <div
        className="reveal glass mt-8 flex flex-col gap-5 rounded-2xl p-5 md:flex-row md:items-center md:justify-between"
        style={{ transitionDelay: "80ms" }}
      >
        <div className="min-w-0">
          <h2 className="text-xs font-medium uppercase tracking-wider text-faint">
            Built with
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-hairline/10 bg-hairline/5 px-3 py-1 text-xs text-mist"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {(project.links.demo ||
          project.links.link ||
          !!project.links.extra?.length) && (
          <div className="flex flex-none flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm"
              >
                Live demo <span aria-hidden>↗</span>
              </a>
            )}
            {project.links.link && (
              <a
                href={project.links.link}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-sm"
              >
                {project.links.description}
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.links.extra?.map((l) => (
              <a
                key={l.href}
                href={/^https?:/.test(l.href) ? l.href : asset(l.href)}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-sm"
              >
                {l.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="mt-10">
        {/* min-w-0 lets wide content (the diagram) scroll inside its own
            box instead of stretching the page */}
        <div className="reveal min-w-0">
          <h2 className="font-display text-2xl font-medium">Overview</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-mist">
            {project.overview.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl font-medium">Highlights</h2>
          <ul className="mt-4 max-w-3xl space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-mist">
                <span
                  aria-hidden
                  className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-gradient text-[0.65rem] text-white"
                >
                  ✓
                </span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          {/* Architecture diagram (only if provided) */}
          {project.architecture && (() => {
            const Diagram = diagrams[project.architecture.diagram];
            return (
              <section
                aria-label={project.architecture.title ?? "Architecture"}
                className="mt-10"
              >
                <h2 className="font-display text-2xl font-medium">
                  {project.architecture.title ?? "Architecture"}
                </h2>
                {project.architecture.caption && (
                  <p className="mt-1 text-sm text-faint">
                    {project.architecture.caption}
                  </p>
                )}
                <div className="glass mt-4 overflow-x-auto rounded-2xl p-4 sm:p-5">
                  <Diagram />
                </div>
              </section>
            );
          })()}

          {/* Roadmap timeline (only if provided) */}
          {project.roadmap && (
            <Roadmap
              phases={project.roadmap.phases}
              intro={project.roadmap.intro}
            />
          )}

          {/* Interactive metrics-coverage tree (only if provided) */}
          {project.metrics && (
            <MetricsTree
              nodes={project.metrics}
              title={project.metricsTitle}
              unit={project.metricsUnit}
            />
          )}

          {/* Gallery — only when there is at least one real image or video;
              emoji-only placeholders are not worth a section */}
          {galleryImages.length > 0 && (
            <>
              <h2 className="mt-10 font-display text-2xl font-medium">Gallery</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.gallery.map((g, i) => {
                  const tile = (
                    <div
                      className="relative grid h-24 place-items-center overflow-hidden rounded-xl text-3xl"
                      style={{ background: project.accent }}
                    >
                      {g.image ? (
                        <>
                          {isVideo(g.image) ? (
                            <video
                              src={asset(g.image)}
                              muted
                              loop
                              autoPlay
                              playsInline
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          ) : (
                            <img
                              src={asset(g.image)}
                              alt={g.caption}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          )}
                          {/* Hover hint that the media is zoomable */}
                          <span
                            aria-hidden
                            className="absolute inset-0 grid place-items-center bg-black/40 text-xl opacity-0 transition-opacity duration-200 group-hover/thumb:opacity-100"
                          >
                            🔍
                          </span>
                        </>
                      ) : (
                        <span>{g.emoji}</span>
                      )}
                    </div>
                  );

                  return (
                    <figure key={`${project.slug}-${i}`} className="glass rounded-2xl p-3">
                      {g.image ? (
                        <button
                          type="button"
                          onClick={() =>
                            setLightboxIndex(
                              galleryImages.findIndex(
                                (x) => x.image === g.image,
                              ),
                            )
                          }
                          aria-label={`Enlarge image: ${g.caption}`}
                          className="group/thumb block w-full cursor-zoom-in rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orchid/70"
                        >
                          {tile}
                        </button>
                      ) : (
                        tile
                      )}
                      {/* Caption intentionally omitted here — it only appears in
                          the enlarged Lightbox view. */}
                    </figure>
                  );
                })}
              </div>
            </>
          )}
          {project.footnotes && (
            <p className="mt-8 text-sm text-faint">{project.footnotes}</p>
          )}
        </div>

        {/* Sidebar */}
      </div>

      {/* Prev / next */}
      <nav className="reveal mt-16 grid gap-4 border-t border-hairline/10 pt-8 sm:grid-cols-2">
        <a
          href={`#/project/${prev.slug}`}
          className="glass group rounded-2xl p-5 transition-colors hover:bg-hairline/10"
        >
          <span className="text-xs text-faint">← Previous</span>
          <p className="mt-1 font-display text-lg text-ink">{prev.title}</p>
        </a>
        <a
          href={`#/project/${next.slug}`}
          className="glass group rounded-2xl p-5 text-right transition-colors hover:bg-hairline/10"
        >
          <span className="text-xs text-faint">Next →</span>
          <p className="mt-1 font-display text-lg text-ink">{next.title}</p>
        </a>
      </nav>

      {/* Click-to-enlarge gallery viewer */}
      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </main>
  );
}

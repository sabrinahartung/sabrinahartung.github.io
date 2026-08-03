import { useState } from "react";
import { getProject, projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import { asset } from "../lib/asset";
import Lightbox from "./Lightbox";

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

      {/* Body */}
      <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
        {/* Left column */}
        <div className="reveal">
          <h2 className="font-display text-2xl font-medium">Overview</h2>
          <div className="mt-4 space-y-4 text-mist">
            {project.overview.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl font-medium">Highlights</h2>
          <ul className="mt-4 space-y-3">
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

          {/* Gallery placeholders */}
          <h2 className="mt-10 font-display text-2xl font-medium">Gallery</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.gallery.map((g) => {
              const tile = (
                <div
                  className="relative grid h-24 place-items-center overflow-hidden rounded-xl text-3xl"
                  style={{ background: project.accent }}
                >
                  {g.image ? (
                    <>
                      <img
                        src={asset(g.image)}
                        alt={g.caption}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {/* Hover hint that the image is zoomable */}
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
                <figure key={g.caption} className="glass rounded-2xl p-3">
                  {g.image ? (
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex(
                          galleryImages.findIndex(
                            (x) => x.caption === g.caption,
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
          <div className="mt-4"> <p>
            {project.footnotes}
            </p>
            </div>
        </div>

        {/* Sidebar */}
        <aside className="reveal" style={{ transitionDelay: "80ms" }}>
          <div className="glass sticky top-28 rounded-3xl p-6">
            <h2 className="font-display text-lg font-medium">Project details</h2>

            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-faint">Year</dt>
                <dd className="text-ink">{project.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-faint">Role</dt>
                <dd className="text-ink">{project.role}</dd>
              </div>
            </dl>

            <h3 className="mt-6 text-sm text-faint">Built with</h3>
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

            {(project.links.demo || project.links.link) && (
              <div className="mt-6 flex flex-col gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full text-sm"
                  >
                    Live demo <span aria-hidden>↗</span>
                  </a>
                )}
                {project.links.link && (
                  <a
                    href={project.links.link}
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-ghost w-full text-sm"
                  >
                    {project.links.description}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
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

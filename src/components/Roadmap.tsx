import type { RoadmapPhase } from "../data/projects";

const dotClass: Record<RoadmapPhase["state"], string> = {
  done: "bg-violet border-violet",
  active: "bg-azure/30 border-azure",
  planned: "bg-transparent border-hairline/40 border-dashed",
};

const pillClass: Record<RoadmapPhase["state"], string> = {
  done: "border-violet/40 text-violet",
  active: "border-azure/40 text-azure",
  planned: "border-hairline/20 text-faint",
};

/** Vertical timeline of project phases, each with a checklist. */
export default function Roadmap({
  phases,
  intro,
}: {
  phases: RoadmapPhase[];
  intro?: string;
}) {
  return (
    <section aria-label="Roadmap" className="mt-10">
      <h2 className="font-display text-2xl font-medium">Roadmap</h2>
      {intro && <p className="mt-1 text-sm text-faint">{intro}</p>}

      <ol className="glass mt-4 rounded-2xl p-5">
        {phases.map((p, i) => (
          <li key={p.title} className="relative flex gap-4 pb-6 last:pb-0">
            {/* Connector line to the next phase */}
            {i < phases.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[0.4rem] top-5 h-[calc(100%-0.75rem)] w-px bg-hairline/15"
              />
            )}
            <span
              aria-hidden
              className={`relative mt-1.5 h-3.5 w-3.5 flex-none rounded-full border-2 ${dotClass[p.state]}`}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-display text-base font-medium text-ink">
                  {p.title}
                </h3>
                <span
                  className={`rounded-full border px-2 py-0.5 text-xs ${pillClass[p.state]}`}
                >
                  {p.status}
                </span>
              </div>
              <ul className="mt-2 space-y-1">
                {p.items.map((it) => (
                  <li key={it.text} className="flex gap-2 text-sm text-mist">
                    <span
                      aria-hidden
                      className={`flex-none ${it.done ? "text-violet" : "text-faint"}`}
                    >
                      {it.done ? "✓" : "○"}
                    </span>
                    <span className={it.done ? "" : "text-faint"}>
                      <span className="sr-only">
                        {it.done ? "Done: " : "Open: "}
                      </span>
                      {it.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

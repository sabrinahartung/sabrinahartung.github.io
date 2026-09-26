/**
 * Shared building blocks for the hand-drawn SVG diagrams. Colours come from
 * the theme tokens via Tailwind classes, so diagrams follow light/dark mode.
 */
export type BoxState = "built" | "active" | "planned" | "neutral";

export const boxClass: Record<BoxState, string> = {
  built: "fill-violet/15 stroke-violet",
  active: "fill-azure/10 stroke-azure",
  planned: "fill-hairline/[0.03] stroke-hairline/40 [stroke-dasharray:5_4]",
  neutral: "fill-hairline/5 stroke-hairline/25",
};

export function Box({
  x,
  y,
  w,
  h = 44,
  title,
  sub,
  sub2,
  state,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  title: string;
  sub?: string;
  /** Optional second line of sub text; give the box h >= 58 */
  sub2?: string;
  state: BoxState;
}) {
  const cx = x + w / 2;
  // Vertically centre the text block inside the box
  const lines = 1 + (sub ? 1 : 0) + (sub2 ? 1 : 0);
  const top = y + h / 2 - ((lines - 1) * 14) / 2 + 4;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={`${boxClass[state]} [stroke-width:1.5]`}
      />
      <text
        x={cx}
        y={top}
        textAnchor="middle"
        className="fill-ink text-[12px] font-medium"
      >
        {title}
      </text>
      {sub && (
        <text
          x={cx}
          y={top + 15}
          textAnchor="middle"
          className="fill-faint text-[10.5px]"
        >
          {sub}
        </text>
      )}
      {sub2 && (
        <text
          x={cx}
          y={top + 29}
          textAnchor="middle"
          className="fill-faint text-[10.5px]"
        >
          {sub2}
        </text>
      )}
    </g>
  );
}

/** Arrowhead markers; render once per diagram with a unique `id`. */
export function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={`${id}-end`}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M0,0 L10,5 L0,10 z" className="fill-hairline/60" />
      </marker>
      <marker
        id={`${id}-start`}
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M10,0 L0,5 L10,10 z" className="fill-hairline/60" />
      </marker>
    </defs>
  );
}

export function Arrow({
  id,
  d,
  both = false,
  head = true,
}: {
  /** Marker id prefix, matching the diagram's <ArrowDefs id> */
  id: string;
  d: string;
  both?: boolean;
  /** false draws a plain connector line without arrowhead */
  head?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      className="stroke-hairline/45 [stroke-width:1.5]"
      markerEnd={head ? `url(#${id}-end)` : undefined}
      markerStart={both ? `url(#${id}-start)` : undefined}
    />
  );
}

export function Lane({ y, label, x = 0 }: { y: number; label: string; x?: number }) {
  return (
    <text
      x={x}
      y={y}
      className="fill-faint text-[10px] font-medium uppercase tracking-[0.15em]"
    >
      {label}
    </text>
  );
}

/** Small free-standing annotation text (e.g. an arrow label). */
export function Note({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-faint text-[10px]">
      {children}
    </text>
  );
}

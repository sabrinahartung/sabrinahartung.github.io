/**
 * Fixed, full-viewport ambient background:
 *  - three slowly drifting gradient "blobs" in purple/blue/orchid
 *  - a subtle grid overlay for depth
 *  - a soft vignette so foreground content stays readable
 * Purely decorative → aria-hidden and pointer-events-none.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting blobs. Soft edges come from radial gradients, not a CSS
          blur filter: a 110px blur on large moving elements is re-rendered
          every frame and makes the whole page lag. */}
      <div
        className="absolute -left-60 -top-60 h-[52rem] w-[52rem] animate-drift"
        style={{ background: "radial-gradient(circle, rgb(var(--violet) / 0.30) 0%, rgb(var(--violet) / 0.12) 35%, transparent 65%)" }}
      />
      <div
        className="absolute -right-52 top-[10%] h-[48rem] w-[48rem] animate-drift-slow"
        style={{ background: "radial-gradient(circle, rgb(var(--azure) / 0.30) 0%, rgb(var(--azure) / 0.12) 35%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-18rem] left-[25%] h-[44rem] w-[44rem] animate-drift"
        style={{ background: "radial-gradient(circle, rgb(var(--orchid) / 0.25) 0%, rgb(var(--orchid) / 0.10) 35%, transparent 65%)" }}
      />

      {/* Faint grid (line color follows the theme via --grid) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--grid) / 0.6) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid) / 0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 40%, rgb(var(--night) / 0.75) 100%)",
        }}
      />
    </div>
  );
}

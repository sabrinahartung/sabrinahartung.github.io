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
      {/* Drifting blobs */}
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] animate-drift rounded-full bg-violet/30 blur-[110px]" />
      <div className="absolute -right-32 top-1/4 h-[34rem] w-[34rem] animate-drift-slow rounded-full bg-azure/30 blur-[120px]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] animate-drift rounded-full bg-orchid/25 blur-[120px]" />

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

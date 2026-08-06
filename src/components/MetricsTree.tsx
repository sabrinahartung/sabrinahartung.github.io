import { useState } from "react";
import type { MetricNode } from "../data/projects";

/** Count leaf metrics (nodes without children) under a node. */
function countLeaves(node: MetricNode): number {
  if (!node.children?.length) return 1;
  return node.children.reduce((n, c) => n + countLeaves(c), 0);
}

function TreeNode({
  node,
  depth,
  color,
}: {
  node: MetricNode;
  depth: number;
  color: string;
}) {
  const branchColor = node.color ?? color;
  const hasChildren = !!node.children?.length;
  // Top-level branches start open; deeper levels start collapsed.
  const [open, setOpen] = useState(depth === 0);

  const dotSize = depth === 0 ? "h-3 w-3" : depth === 1 ? "h-2.5 w-2.5" : "h-2 w-2";

  return (
    <li className="relative">
      {hasChildren ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center gap-2 rounded-lg py-1.5 pr-2 text-left transition-colors hover:bg-hairline/5"
        >
          <span
            aria-hidden
            className={`grid h-4 w-4 flex-none place-items-center text-faint transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          >
            ▸
          </span>
          <span
            aria-hidden
            className={`${dotSize} flex-none rounded-full`}
            style={{ background: branchColor }}
          />
          <span
            className={`text-ink ${depth === 0 ? "font-display font-medium" : "text-sm font-medium"}`}
          >
            {node.name}
          </span>
          <span className="ml-1 rounded-full border border-hairline/15 px-2 py-0.5 text-xs text-faint">
            {countLeaves(node)}
          </span>
        </button>
      ) : (
        <div className="flex items-start gap-2 py-1.5 pr-2">
          <span className="h-4 w-4 flex-none" aria-hidden />
          <span
            aria-hidden
            className={`mt-1.5 ${dotSize} flex-none rounded-full`}
            style={{ background: branchColor }}
          />
          <span className="text-sm leading-relaxed text-mist">
            <span className="font-medium text-ink">{node.name}</span>
            {node.description ? (
              <span className="text-faint"> — {node.description}</span>
            ) : null}
          </span>
        </div>
      )}

      {hasChildren && open && (
        <ul className="ml-[0.55rem] border-l border-hairline/15 pl-4">
          {node.children!.map((child) => (
            <TreeNode
              key={child.name}
              node={child}
              depth={depth + 1}
              color={branchColor}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Interactive tree ("Baumdiagramm") of coverage: expandable branches down to
 * individual leaf metrics, with connector lines and per-branch counts.
 * Data-driven via a recursive `MetricNode[]` forest.
 */
export default function MetricsTree({ nodes }: { nodes: MetricNode[] }) {
  const total = nodes.reduce((n, c) => n + countLeaves(c), 0);

  return (
    <section aria-label="Metrics coverage" className="mt-10">
      <h2 className="font-display text-2xl font-medium">Metrics coverage</h2>
      <p className="mt-1 text-sm text-faint">
        {total} metrics across {nodes.length} branches — tap a branch to expand.
      </p>

      <div className="glass mt-4 rounded-2xl p-5">
        <ul className="space-y-0.5">
          {nodes.map((n) => (
            <TreeNode key={n.name} node={n} depth={0} color="#8b5cf6" />
          ))}
        </ul>
      </div>
    </section>
  );
}

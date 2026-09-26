/**
 * Architecture of the Health FAQ Agent, following docs/architecture.md in the
 * project repo. Box style encodes build status: solid violet = built,
 * solid azure = in progress (M2), dashed = planned (M4).
 */
import { Arrow, ArrowDefs, Box, Lane, Note, boxClass } from "./parts";

const A = "hfa";

export default function HealthFaqArchitecture() {
  return (
    <svg
      viewBox="0 0 600 452"
      role="img"
      aria-labelledby="hfa-title"
      className="block h-auto w-full min-w-[560px] font-body"
    >
      <title id="hfa-title">
        Health FAQ Agent architecture: an ingest pipeline indexes SGB V and a
        FAQ layer into ChromaDB; an agent behind a FastAPI endpoint calls a
        retrieval tool and a glossary tool and answers with a local LLM;
        Langfuse, Prometheus and Grafana are planned for observability.
      </title>
      <ArrowDefs id={A} />

      {/* ---------- Ingest pipeline (built) ---------- */}
      <Lane y={14} label="Ingest pipeline" />
      <Box x={0} y={28} w={140} title="SGB V (XML)" sub="gesetze-im-internet.de" state="built" />
      <Box x={165} y={28} w={125} title="Parse & chunk" sub="by subsection" state="built" />
      <Box x={315} y={28} w={120} title="Embed" sub="bge-m3 via Ollama" state="built" />
      <Box x={460} y={28} w={140} title="ChromaDB" sub="3,002 chunks + FAQ" state="built" />
      <Arrow id={A} d="M140,50 H163" />
      <Arrow id={A} d="M290,50 H313" />
      <Arrow id={A} d="M435,50 H458" />

      <Box x={165} y={96} w={125} title="FAQ layer" sub="18 entries" state="built" />
      <Arrow id={A} d="M290,118 H375 V74" />

      {/* ---------- Query path (M2, in progress) ---------- */}
      <Lane y={184} label="Query path" />
      <Box x={0} y={198} w={110} title="Question" sub="everyday German" state="neutral" />
      <Box x={135} y={198} w={110} title="FastAPI" sub="/ask · /health" state="active" />
      <Box x={270} y={198} w={120} title="Agent loop" sub="chooses tools" state="active" />
      <Box x={460} y={198} w={140} title="Retrieval tool" sub="top k = 8–10" state="active" />
      <Arrow id={A} d="M110,220 H133" />
      <Arrow id={A} d="M247,220 H268" both />
      <Arrow id={A} d="M390,220 H458" />

      {/* retrieval ⇄ index */}
      <Arrow id={A} d="M530,196 V76" both />
      <Note x={538} y={148}>context +</Note>
      <Note x={538} y={161}>citations</Note>

      <Box x={0} y={272} w={245} title="Answer" sub="with citation, or an explicit refusal" state="active" />
      <Arrow id={A} d="M190,242 V270" />

      <Box x={270} y={272} w={120} title="llama3.2:3b" sub="local via Ollama" state="active" />
      <Arrow id={A} d="M330,244 V270" both />

      <Box x={460} y={272} w={140} title="Glossary tool" sub="terms of art" state="active" />
      <Arrow id={A} d="M390,232 H425 V294 H458" />

      {/* ---------- Observability (M4, planned) ---------- */}
      <Lane y={354} label="Observability" />
      <Box x={0} y={368} w={290} title="Langfuse" sub="a trace span per tool and LLM call" state="planned" />
      <Box x={310} y={368} w={290} title="Prometheus + Grafana" sub="request rate, p95 latency, errors, tokens" state="planned" />

      {/* ---------- Legend ---------- */}
      <g transform="translate(0 434)">
        <rect x={0} y={-9} width={16} height={11} rx={3} className={`${boxClass.built} [stroke-width:1.5]`} />
        <text x={22} y={0} className="fill-mist text-[10.5px]">Built</text>
        <rect x={70} y={-9} width={16} height={11} rx={3} className={`${boxClass.active} [stroke-width:1.5]`} />
        <text x={92} y={0} className="fill-mist text-[10.5px]">In progress</text>
        <rect x={172} y={-9} width={16} height={11} rx={3} className={`${boxClass.planned} [stroke-width:1.5]`} />
        <text x={194} y={0} className="fill-mist text-[10.5px]">Planned</text>
      </g>
    </svg>
  );
}

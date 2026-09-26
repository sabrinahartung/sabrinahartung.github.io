/**
 * Samson data platform, condensed from the project poster ("SAMSON –
 * Erkenntnisse aus Daten für smarteren Obstbau", HAW Hamburg). Three layers:
 * farm data sources → modular platform → pest forecasting.
 */
import { Arrow, ArrowDefs, Box, Lane, Note } from "./parts";

const A = "sam";

// Six data-source boxes spread across the full width
const SRC_W = 118;
const srcX = (i: number) => i * 128.4;
const sources: { title: string; sub?: string; sub2?: string }[] = [
  { title: "Pest monitoring", sub: "beat-tray samples" },
  { title: "Sensor data", sub: "weather sensors", sub2: "LoRaWAN via MQTT" },
  { title: "Irrigation" },
  { title: "Farm & fields" },
  { title: "Machinery", sub: "vehicles, equipment" },
  { title: "Apple trees", sub: "variety, fruit size", sub2: "and blossom counts" },
];

export default function SamsonArchitecture() {
  return (
    <svg
      viewBox="0 0 760 346"
      role="img"
      aria-labelledby="sam-title"
      className="block h-auto w-full min-w-[640px] font-body"
    >
      <title id="sam-title">
        Samson data platform: farm data from pest monitoring, sensors,
        irrigation, fields, machinery and apple trees is stored in a
        PostgreSQL/PostGIS database behind a Django API and a React frontend;
        field history from 2013 to 2024 feeds a probability model that
        forecasts green stink bug nymph hatching on a dashboard.
      </title>
      <ArrowDefs id={A} />

      {/* ---------- 1. Data foundation ---------- */}
      <Lane y={14} label="Data foundation" />
      {sources.map((s, i) => (
        <Box
          key={s.title}
          x={srcX(i)}
          y={28}
          w={SRC_W}
          h={58}
          title={s.title}
          sub={s.sub}
          sub2={s.sub2}
          state="neutral"
        />
      ))}
      {/* Collector: every source feeds the database */}
      {sources.map((s, i) => (
        <Arrow
          key={s.title}
          id={A}
          d={`M${srcX(i) + SRC_W / 2},86 V100`}
          head={false}
        />
      ))}
      <Arrow id={A} d={`M${SRC_W / 2},100 H${srcX(5) + SRC_W / 2}`} head={false} />
      <Arrow id={A} d="M190,100 V152" />
      <Note x={198} y={130}>store</Note>

      {/* ---------- 2. Data platform + API ---------- */}
      <Lane y={140} label="Data platform + API" />
      <Box x={0} y={154} w={220} h={58} title="PostgreSQL + PostGIS" sub="farm data incl. geodata" state="built" />
      <Box x={270} y={154} w={220} h={58} title="Django backend" sub="REST API for web" sub2="and mobile clients" state="built" />
      <Box x={540} y={154} w={220} h={58} title="React frontend" sub="farm & user management," sub2="forecast dashboard" state="built" />
      <Arrow id={A} d="M222,183 H268" both />
      <Arrow id={A} d="M492,183 H538" both />
      <Note x={380} y={232} anchor="middle">
        each service runs in its own Docker container
      </Note>

      {/* ---------- 3. Pest forecasting ---------- */}
      <Lane y={264} label="Pest forecasting" />
      <Arrow id={A} d="M190,214 V276" />
      <Note x={198} y={250}>query</Note>

      <Box x={0} y={278} w={220} h={58} title="Field history 2013–2024" sub="degree days +" sub2="beat-tray nymph counts" state="built" />
      <Box x={270} y={278} w={220} h={58} title="Probability model" sub="hatch likelihood vs. degree days" sub2="steep rise from about 220 DD" state="built" />
      <Box x={540} y={278} w={220} h={58} title="Forecast dashboard" sub="daily hatch probability, 2025" sub2="threshold hit 21 Apr (219.7 DD)" state="built" />
      <Arrow id={A} d="M220,307 H268" />
      <Arrow id={A} d="M490,307 H538" />

      {/* The dashboard lives in the React frontend */}
      <Arrow id={A} d="M650,212 V278" head={false} />
      <Note x={658} y={250}>in the web app</Note>
    </svg>
  );
}

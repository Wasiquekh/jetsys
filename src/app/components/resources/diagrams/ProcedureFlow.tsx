// Section 5 diagram: the shape of a squib test procedure.
// Gates are drawn as gates rather than as steps, and each stage is shaded by
// who holds it. This illustrates the shape of a procedure; it is not a procedure.
const ALT =
  "squib test procedure shown as a flow, with authorisation and verification gates drawn as gates rather than steps and each stage shaded by who holds it.";

type Owner = "authority" | "quality" | "operator";

const OWNER_STYLE: Record<Owner, { fill: string; stroke: string }> = {
  authority: { fill: "#e9dcb2", stroke: "#b9a76e" },
  quality: { fill: "#dfe8de", stroke: "#8aa189" },
  operator: { fill: "#f1efe6", stroke: "#cdc8b4" },
};

const ITEMS: { kind: "stage" | "gate"; label: string; owner: Owner }[] = [
  { kind: "gate", label: "Authorisation, qualification and currency signed", owner: "authority" },
  { kind: "stage", label: "Before anything is connected", owner: "authority" },
  { kind: "gate", label: "Safety devices and pins verified as fitted", owner: "authority" },
  { kind: "gate", label: "Circuit confirmed dead, structure bonded", owner: "operator" },
  { kind: "stage", label: "Instrument checks", owner: "quality" },
  { kind: "gate", label: "Within calibration period, scope covers the ceiling", owner: "quality" },
  { kind: "gate", label: "Reads correctly against a known reference", owner: "quality" },
  { kind: "stage", label: "Access and isolation", owner: "operator" },
  { kind: "gate", label: "Isolation configuration as specified, not improvised", owner: "authority" },
  { kind: "stage", label: "Taking the measurement", owner: "operator" },
  { kind: "gate", label: "Reading stable — unstable is stop-and-investigate", owner: "operator" },
  { kind: "stage", label: "Recording and disposition", owner: "quality" },
  { kind: "gate", label: "Any out-of-limits result dispositioned under authority", owner: "authority" },
  { kind: "stage", label: "Restoring the system", owner: "operator" },
  { kind: "gate", label: "Independent check and sign-off", owner: "authority" },
];

const STAGE_H = 48;
const GATE_H = 42;
const GAP = 16;
const TOP = 62;
const CX = 340;

export default function ProcedureFlow({ className }: { className?: string }) {
  let y = TOP;
  const placed = ITEMS.map((item) => {
    const h = item.kind === "stage" ? STAGE_H : GATE_H;
    const node = { ...item, y, h };
    y += h + GAP;
    return node;
  });
  const height = y - GAP + 46;

  return (
    <svg
      className={className}
      viewBox={`0 0 680 ${height}`}
      role="img"
      aria-label={ALT}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title>{ALT}</title>
      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#8f8a74" />
        </marker>
      </defs>

      <g fontFamily="inherit" fill="var(--ink, #22241e)">
        {/* who holds each stage */}
        {([
          ["authority", "Authorising authority", 24],
          ["quality", "Quality system", 246],
          ["operator", "Technician / operator", 436],
        ] as [Owner, string, number][]).map(([owner, label, x]) => (
          <g key={owner}>
            <rect x={x} y={16} width={16} height={16} rx={3} fill={OWNER_STYLE[owner].fill} stroke={OWNER_STYLE[owner].stroke} strokeWidth={1.5} />
            <text x={x + 24} y={29} fontSize="12.5">{label}</text>
          </g>
        ))}

        {placed.map((item, i) => {
          const style = OWNER_STYLE[item.owner];
          const isStage = item.kind === "stage";
          const w = isStage ? 400 : 356;
          const x = CX - w / 2;
          const next = placed[i + 1];

          return (
            <g key={item.label}>
              {next ? (
                <path
                  d={`M${CX},${item.y + item.h} L${CX},${next.y - 3}`}
                  stroke="#8f8a74"
                  strokeWidth="1.75"
                  fill="none"
                  markerEnd="url(#pf-arrow)"
                />
              ) : null}

              {isStage ? (
                <rect x={x} y={item.y} width={w} height={item.h} rx={5} fill={style.fill} stroke={style.stroke} strokeWidth={1.75} />
              ) : (
                <path
                  d={`M${x + 16},${item.y} L${x + w - 16},${item.y} L${x + w},${item.y + item.h / 2} L${x + w - 16},${item.y + item.h} L${x + 16},${item.y + item.h} L${x},${item.y + item.h / 2} Z`}
                  fill={style.fill}
                  stroke={style.stroke}
                  strokeWidth={1.5}
                  strokeDasharray="6 3"
                />
              )}

              <text
                x={CX}
                y={item.y + item.h / 2 + 4.5}
                fontSize={isStage ? "14.5" : "12.5"}
                fontWeight={isStage ? 700 : 400}
                textAnchor="middle"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        <text x={CX} y={height - 14} fontSize="12.5" textAnchor="middle" fill="var(--copy, #45463d)">
          Solid blocks are stages; dashed gates are checks that must pass before the next stage begins.
        </text>
      </g>
    </svg>
  );
}

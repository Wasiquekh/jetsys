// Section 13 diagram: four instrument classes on the two axes that decide
// whether an instrument may be connected to a bridgewire.
// Positions are relative. No values are implied and none are shown.
const ALT =
  "four instrument classes placed on axes of current under fault and low-resistance accuracy, with the acceptable region marked and only the failsafe squib tester inside it.";

const POINTS: { x: number; y: number; label: string; note?: string; anchor: "start" | "middle" | "end"; dx: number; dy: number }[] = [
  { x: 556, y: 378, label: "Failsafe squib tester", anchor: "middle", dx: 0, dy: -20 },
  { x: 604, y: 152, label: "Precision micro-ohmmeter", anchor: "end", dx: -14, dy: 4 },
  { x: 243, y: 212, label: "General multimeter", anchor: "start", dx: 14, dy: 4 },
  { x: 178, y: 112, label: "Insulation resistance tester", note: "accuracy not applicable", anchor: "start", dx: 14, dy: 0 },
];

export default function InstrumentClasses({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 486"
      role="img"
      aria-label={ALT}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title>{ALT}</title>
      <defs>
        <marker id="ic-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--ink, #22241e)" />
        </marker>
      </defs>

      <g fontFamily="inherit" fill="var(--ink, #22241e)">
        {/* the only region an instrument may be connected to a bridgewire from */}
        <rect x="420" y="318" width="244" height="104" rx="6" fill="var(--gold, #e5d6a6)" fillOpacity="0.55" stroke="#b9a76e" strokeWidth="1.75" strokeDasharray="7 4" />
        <text x="542" y="340" fontSize="13" fontWeight="700" textAnchor="middle">Acceptable region</text>

        {/* axes */}
        <path d="M120,422 L684,422" stroke="var(--ink, #22241e)" strokeWidth="1.75" fill="none" markerEnd="url(#ic-axis)" />
        <path d="M120,422 L120,64" stroke="var(--ink, #22241e)" strokeWidth="1.75" fill="none" markerEnd="url(#ic-axis)" />

        {/* y axis: current under fault */}
        <text x="34" y="244" fontSize="14" fontWeight="700" transform="rotate(-90 34 244)" textAnchor="middle">Current under fault</text>
        <text x="132" y="80" fontSize="12.5" textAnchor="start" fill="var(--copy, #45463d)">Unbounded</text>
        <text x="132" y="412" fontSize="12.5" textAnchor="start" fill="var(--copy, #45463d)">Bounded by design</text>

        {/* x axis: low-resistance accuracy */}
        <text x="402" y="470" fontSize="14" fontWeight="700" textAnchor="middle">Low-resistance accuracy</text>
        <text x="128" y="444" fontSize="12.5" textAnchor="start" fill="var(--copy, #45463d)">Poor at a few ohms</text>
        <text x="672" y="444" fontSize="12.5" textAnchor="end" fill="var(--copy, #45463d)">Milliohm, four-wire</text>

        {POINTS.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="7.5" fill="var(--accent, #595613)" />
            <circle cx={p.x} cy={p.y} r="13" fill="none" stroke="var(--accent, #595613)" strokeWidth="1.25" strokeOpacity="0.45" />
            <text x={p.x + p.dx} y={p.y + p.dy} fontSize="13.5" fontWeight="700" textAnchor={p.anchor}>
              {p.label}
            </text>
            {p.note ? (
              <text x={p.x + p.dx} y={p.y + p.dy + 16} fontSize="12" textAnchor={p.anchor} fill="var(--copy, #45463d)">
                {p.note}
              </text>
            ) : null}
          </g>
        ))}

      </g>
    </svg>
  );
}

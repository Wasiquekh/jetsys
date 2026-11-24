// Section 3 diagram: the four-wire measurement principle.
// Deliberately shows the measurement side only. There is no firing circuit in
// this drawing, and the device is a labelled block with a single bridgewire.
const ALT =
  "four-wire resistance measurement of a bridgewire with current limiting between source and device, showing the current path and the sense path separately and no firing side.";

export default function FourWireMeasurement({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 780 350"
      role="img"
      aria-label={ALT}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <title>{ALT}</title>

      <defs>
        <marker id="fw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--accent, #595613)" />
        </marker>
        <marker id="fw-arrow-sense" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--copy, #45463d)" />
        </marker>
      </defs>

      <g fontFamily="inherit" fill="var(--ink, #22241e)">
        {/* instrument grouping */}
        <rect x="14" y="54" width="214" height="238" rx="8" fill="none" stroke="var(--line, #dcd9ca)" strokeWidth="1.5" strokeDasharray="7 5" />
        <text x="22" y="44" fontSize="15" fontWeight="700">Test instrument</text>

        <rect x="38" y="76" width="164" height="50" rx="5" fill="#ffffff" stroke="var(--line, #dcd9ca)" strokeWidth="1.5" />
        <text x="120" y="106" fontSize="14" textAnchor="middle">Current source</text>

        <rect x="38" y="180" width="92" height="48" rx="5" fill="#ffffff" stroke="var(--line, #dcd9ca)" strokeWidth="1.5" />
        <text x="84" y="202" fontSize="13" textAnchor="middle">Sense</text>
        <text x="84" y="218" fontSize="13" textAnchor="middle">input</text>

        {/* the limiter: the control, so it is drawn as a block and tinted */}
        <rect x="292" y="72" width="152" height="52" rx="5" fill="var(--gold, #e5d6a6)" stroke="#c2b27f" strokeWidth="1.75" />
        <text x="368" y="94" fontSize="13" fontWeight="700" textAnchor="middle">Failsafe current</text>
        <text x="368" y="111" fontSize="13" fontWeight="700" textAnchor="middle">limiter (sealed)</text>

        {/* device under test */}
        <rect x="520" y="54" width="226" height="238" rx="8" fill="#ffffff" stroke="var(--line, #dcd9ca)" strokeWidth="1.75" />
        <text x="528" y="44" fontSize="15" fontWeight="700">Device under test</text>

        {/* current path: source -> limiter -> device, and the return */}
        <path d="M202,98 L292,98" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" />
        <path d="M444,98 L520,98" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" markerEnd="url(#fw-arrow)" />
        <path d="M520,250 L166,250 L166,126" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" markerEnd="url(#fw-arrow)" />

        {/* sense path: separate conductors, carrying negligible current */}
        <path d="M130,194 L236,194 L236,142 L520,142" stroke="var(--copy, #45463d)" strokeWidth="2" fill="none" strokeDasharray="7 4" markerEnd="url(#fw-arrow-sense)" />
        <path d="M130,214 L266,214 L266,192 L520,192" stroke="var(--copy, #45463d)" strokeWidth="2" fill="none" strokeDasharray="7 4" markerEnd="url(#fw-arrow-sense)" />

        {/* inside the device: both pairs land on the same two nodes */}
        <path d="M520,98 L644,98 L644,122" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" />
        <path d="M520,142 L644,142 L644,122" stroke="var(--copy, #45463d)" strokeWidth="2" fill="none" strokeDasharray="7 4" />
        <path d="M520,250 L644,250 L644,226" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" />
        <path d="M520,192 L644,192 L644,226" stroke="var(--copy, #45463d)" strokeWidth="2" fill="none" strokeDasharray="7 4" />

        {/* the bridgewire: one element, drawn as a resistive zigzag */}
        <path
          d="M644,122 L644,134 L631,141 L657,154 L631,167 L657,180 L631,193 L657,204 L644,212 L644,226"
          stroke="var(--ink, #22241e)"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="644" cy="122" r="4" fill="var(--ink, #22241e)" />
        <circle cx="644" cy="226" r="4" fill="var(--ink, #22241e)" />
        <text x="672" y="170" fontSize="13" fontWeight="700">Bridgewire</text>
        <text x="672" y="187" fontSize="12" fill="var(--copy, #45463d)">(one element)</text>

        {/* terminal labels */}
        <text x="532" y="90" fontSize="12" fontWeight="700" fill="var(--accent, #595613)">I+</text>
        <text x="532" y="134" fontSize="12" fontWeight="700" fill="var(--copy, #45463d)">S+</text>
        <text x="532" y="184" fontSize="12" fontWeight="700" fill="var(--copy, #45463d)">S&#8722;</text>
        <text x="532" y="242" fontSize="12" fontWeight="700" fill="var(--accent, #595613)">I&#8722;</text>

        {/* key */}
        <path d="M22,318 L62,318" stroke="var(--accent, #595613)" strokeWidth="2.5" fill="none" />
        <text x="70" y="322" fontSize="12.5">Current path</text>
        <path d="M182,318 L222,318" stroke="var(--copy, #45463d)" strokeWidth="2" fill="none" strokeDasharray="7 4" />
        <text x="230" y="322" fontSize="12.5">Sense path, negligible current</text>
        <text x="520" y="322" fontSize="12.5" fontWeight="700">Firing side not shown.</text>
      </g>
    </svg>
  );
}

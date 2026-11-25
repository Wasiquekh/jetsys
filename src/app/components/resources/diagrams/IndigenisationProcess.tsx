// Section 3 diagram: the ten-step indigenisation process.
//
// The colour bands are who holds the case, so a change of colour is a handover.
// There are four of them, which is the four times the case changes hands: after
// step 3, after step 4, after step 7 and after step 8.
//
// Two things the prose cannot draw are drawn here: the spine on the right,
// showing that the criticality class fixed at step 2 governs the depth of every
// step below it, and the return path from step 10 to step 1, which is what
// happens when obsolescence comes round against the indigenised item itself.
//
// No duration is shown against any step, deliberately - section 14 answers the
// timeline question by naming the variables rather than quoting an average.
const ALT =
  "ten-step indigenisation process, showing criticality classification at step 2 setting the qualification depth for every step below, and step 10 returning to step 1 as obsolescence recurs.";

type Band = { name: string; fill: string; stroke: string };

const BANDS: Band[] = [
  { name: "Demanding side", fill: "#f1efe6", stroke: "#cdc8b4" },
  { name: "Shared — specification agreed by both sides", fill: "#e9e3d2", stroke: "#c3b78f" },
  { name: "Developer", fill: "#dfe8de", stroke: "#8aa189" },
  { name: "Approving authority", fill: "#e9dcb2", stroke: "#b9a76e" },
  { name: "Ordering organisation, then shared in service", fill: "#e2e6ec", stroke: "#96a3b2" },
];

const STEPS: { n: number; label: string; band: number }[] = [
  { n: 1, label: "Identifying the item", band: 0 },
  { n: 2, label: "Classifying criticality", band: 0 },
  { n: 3, label: "Finding a developer", band: 0 },
  { n: 4, label: "Assembling the specification and data pack", band: 1 },
  { n: 5, label: "Design and development", band: 2 },
  { n: 6, label: "Prototyping and first article", band: 2 },
  { n: 7, label: "Qualification and testing", band: 2 },
  { n: 8, label: "Approval and certification", band: 3 },
  { n: 9, label: "Pricing, order and series supply", band: 4 },
  { n: 10, label: "Configuration control and lifecycle support", band: 4 },
];

const BOX_X = 118;
const BOX_W = 384;
const BOX_H = 44;
const CX = BOX_X + BOX_W / 2;
const STEP_GAP = 11;
const BAND_X = 58;
const BAND_W = 486;
const SPINE_X = 566;
const RETURN_X = 28;

export default function IndigenisationProcess({ className }: { className?: string }) {
  // Lay the bands out top to bottom, each one padded around its own steps.
  let y = 20;
  const bands: { band: Band; index: number; top: number; bottom: number; labelY: number }[] = [];
  const steps: { n: number; label: string; band: number; y: number }[] = [];

  BANDS.forEach((band, index) => {
    const top = y;
    y += 7;
    const labelY = y + 12;
    y += 34;
    STEPS.filter((step) => step.band === index).forEach((step) => {
      steps.push({ ...step, y });
      y += BOX_H + STEP_GAP;
    });
    y -= STEP_GAP;
    y += 9;
    bands.push({ band, index, top, bottom: y, labelY });
    y += 15;
  });

  const lastStep = steps[steps.length - 1];
  const firstStep = steps[0];
  const criticality = steps[1];
  const returnY = lastStep.y + BOX_H + 30;
  const height = returnY + 26;

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
        <marker id="ip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#8f8a74" />
        </marker>
        <marker id="ip-arrow-return" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#9d8a35" />
        </marker>
      </defs>

      <g fontFamily="inherit" fill="var(--ink, #22241e)">
        {/* who holds the case: a change of band colour is a handover */}
        {bands.map(({ band, index, top, bottom, labelY }) => (
          <g key={band.name}>
            <rect
              x={BAND_X}
              y={top}
              width={BAND_W}
              height={bottom - top}
              rx={6}
              fill={band.fill}
              fillOpacity={0.45}
              stroke={band.stroke}
              strokeWidth={1}
              strokeOpacity={0.6}
            />
            <text x={BAND_X + 12} y={labelY} fontSize="11.5" fontWeight={700} letterSpacing="0.06em" fill="#5c5649">
              {band.name.toUpperCase()}
            </text>
            {index > 0 ? (
              <text x={BAND_X + BAND_W - 12} y={top - 5} fontSize="11" textAnchor="end" fill="#8a8270">
                handover
              </text>
            ) : null}
          </g>
        ))}

        {/* the ten steps */}
        {steps.map((step, i) => {
          const band = BANDS[step.band];
          const next = steps[i + 1];

          return (
            <g key={step.n}>
              {/*
                Within a band the connector is continuous. Across a band
                boundary it is deliberately broken in two, so the arrow never
                runs through the band label and the break itself reads as the
                handover it is.
              */}
              {next && next.band === step.band ? (
                <path
                  d={`M${CX},${step.y + BOX_H} L${CX},${next.y - 3}`}
                  stroke="#8f8a74"
                  strokeWidth="1.75"
                  fill="none"
                  markerEnd="url(#ip-arrow)"
                />
              ) : null}
              {next && next.band !== step.band ? (
                <>
                  <path
                    d={`M${CX},${step.y + BOX_H} L${CX},${step.y + BOX_H + 12}`}
                    stroke="#8f8a74"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d={`M${CX},${next.y - 15} L${CX},${next.y - 3}`}
                    stroke="#8f8a74"
                    strokeWidth="1.75"
                    fill="none"
                    markerEnd="url(#ip-arrow)"
                  />
                </>
              ) : null}

              <rect
                x={BOX_X}
                y={step.y}
                width={BOX_W}
                height={BOX_H}
                rx={5}
                fill={band.fill}
                stroke={band.stroke}
                strokeWidth={1.75}
              />
              <text x={BOX_X + 16} y={step.y + BOX_H / 2 + 5} fontSize="15" fontWeight={700} fill="#8a7a2f">
                {step.n}
              </text>
              <text x={BOX_X + 44} y={step.y + BOX_H / 2 + 5} fontSize="13.5">
                {step.label}
              </text>
            </g>
          );
        })}

        {/* step 2 fixes the depth of everything below it */}
        <path
          d={`M${CX + BOX_W / 2 - 1},${criticality.y + BOX_H / 2} L${SPINE_X - 14},${criticality.y + BOX_H / 2} L${SPINE_X - 14},${lastStep.y + BOX_H / 2} L${CX + BOX_W / 2 + 3},${lastStep.y + BOX_H / 2}`}
          stroke="#b9a76e"
          strokeWidth="1.75"
          strokeDasharray="5 4"
          fill="none"
        />
        <text
          x={SPINE_X + 4}
          y={(criticality.y + lastStep.y) / 2 + BOX_H / 2}
          fontSize="11.5"
          fill="#6f6752"
          transform={`rotate(90 ${SPINE_X + 4} ${(criticality.y + lastStep.y) / 2 + BOX_H / 2})`}
          textAnchor="middle"
        >
          criticality class set at step 2 governs the depth of every step below
        </text>

        {/* obsolescence comes round again: step 10 returns to step 1 */}
        <path
          d={`M${BOX_X},${lastStep.y + BOX_H / 2} L${RETURN_X},${lastStep.y + BOX_H / 2} L${RETURN_X},${firstStep.y + BOX_H / 2} L${BOX_X - 4},${firstStep.y + BOX_H / 2}`}
          stroke="#9d8a35"
          strokeWidth="1.75"
          fill="none"
          markerEnd="url(#ip-arrow-return)"
        />
        <text x={RETURN_X + 10} y={returnY} fontSize="11.5" fill="#6f6752">
          obsolescence returns against the indigenised item — a new candidate goes back to step 1
        </text>
      </g>
    </svg>
  );
}

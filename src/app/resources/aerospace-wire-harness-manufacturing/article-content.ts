import type { ArticleSection } from "../ResourceReference";

export const title = "Aerospace Wire Harness Manufacturing";
export const metaTitle = "Aerospace & Defence Wire Harness Manufacturing | Jetsys Defence";
export const metaDescription =
  "Aerospace and defence wire harness manufacturing explained: the process, IPC/WHMA-A-620 classes, AS50881, testing and how to evaluate a harness partner. Jetsys Defence.";

export const introduction = [
  "A modern aircraft carries kilometres of wiring across thousands of terminations, and almost every one of them is a single point of failure in a system nobody can reach in flight. Harnesses are also among the hardest items on a platform to retrofit or repair once they are installed behind structure. That is why harness manufacturing for aerospace and defence is a controlled, documented, audited process rather than an assembly job — and why the standards governing it run to the level of detail they do.",
  "This page covers wire harness manufacturing for aerospace, defence and other high-reliability applications: the design and build of harnesses, cable assemblies and looms to the applicable workmanship and wiring standards. It is not about automotive or general industrial harness production, which is a different discipline at a different scale.",
  "It is written for airframe and avionics OEMs, defence programme integrators, DPSUs and research establishments, Tier-1 suppliers, and engineering teams sourcing build-to-print harness capacity. What follows describes how the work is done and what separates a qualified harness supplier from a general assembly operation.",
];

export const sections: ArticleSection[] = [
  {
    id: "what-is-wire-harness-manufacturing",
    title: "What Is Wire Harness Manufacturing?",
    blocks: [
      {
        kind: "paragraph",
        text: "Wire harness manufacturing is the design and build of bundled wiring assemblies — wires, cables, terminations, connectors and protective coverings — produced to a defined drawing and workmanship standard so they can be installed as a single unit.",
      },
      {
        kind: "paragraph",
        text: "What a harness replaces is individually routed wire. Routing, terminating and protecting several hundred wires one at a time on a platform means several hundred separate decisions made by whoever happens to be doing the work, at the point of installation, in a confined space. A harness turns all of that into one controlled, repeatable, testable assembly that is built and proven on a bench before it goes anywhere near the aircraft.",
      },
      {
        kind: "paragraph",
        text: "There are two halves to the job, and readers who have not worked in the sector often do not separate them:",
      },
      {
        kind: "list",
        items: [
          "Harness engineering — wire selection and sizing, routing and bundle definition, shielding and grounding scheme, connector selection, and the drawing set and wire list that define the assembly.",
          "Harness fabrication — cut, strip, mark, crimp, insert, lay up, bundle, protect and test.",
        ],
      },
      {
        kind: "paragraph",
        text: "A supplier may do one, the other, or both. That distinction is the whole substance of build-to-print versus build-to-spec, compared further down this page, and it causes more scope disputes than any other question in harness procurement.",
      },
      {
        kind: "paragraph",
        text: "In aerospace and defence this is a controlled process under audited standards rather than a general assembly activity — which is what the process and standards sections below set out.",
      },
      { kind: "heading", title: "Wire Harness, Cable Assembly, Cable Loom and Wiring Harness: The Terms" },
      {
        kind: "paragraph",
        text: "The variants are all searched and all appear in tenders, sometimes in the same document.",
      },
      {
        kind: "list",
        items: [
          "Wire harness / wiring harness — the general term: a bundle of individually insulated wires routed together, terminated and protected.",
          "Cable assembly — strictly, an assembly built around cable, meaning multiple conductors within a common jacket, often where shielding or high-speed data matters. In practice the terms are used interchangeably, and the governing workmanship standard says so itself rather than drawing a hard line.",
          "Cable loom / loom — the term in widest use in Indian and British aerospace. Indian aviation harness work is routinely described as loom manufacturing, so an Indian engineer may well search this word before any other.",
          "EWIS — Electrical Wiring Interconnection System: the regulatory framing that treats aircraft wiring as a system in its own right rather than a collection of parts.",
          "Harness assembly, interconnect, wiring loom — further variants seen in tenders and drawings.",
        ],
      },
      {
        kind: "paragraph",
        text: "If you are raising an enquiry, none of these terms tells a supplier what they need to know. The drawing number, the workmanship class and the connector families do.",
      },
    ],
  },
  {
    id: "why-wire-harnesses-matter-in-aerospace-and-defence",
    title: "Why Wire Harnesses Matter in Aerospace and Defence",
    blocks: [
      {
        kind: "paragraph",
        text: "Wiring was treated as a trade activity for most of aviation's history — something skilled people did well or badly, rather than something designed, analysed and qualified. The development of EWIS as a regulated discipline changed that. Aircraft wiring is now treated as a system in its own right, with its own design requirements, its own failure modes and its own place in the airworthiness regulations.",
      },
      {
        kind: "paragraph",
        text: "Seven pressures make it that way.",
      },
      {
        kind: "paragraph",
        text: "Scale and inaccessibility. A single platform carries extensive wiring across thousands of terminations, much of it routed behind structure that cannot be reached in service without significant disassembly. A defect found on the bench costs a rework. The same defect found after installation costs the aircraft's availability, and sometimes a panel that was never designed to come off twice.",
      },
      {
        kind: "paragraph",
        text: "The environment. Vibration, wide temperature swings, altitude and pressure cycling, humidity, salt fog, hydraulic fluids and fuels. Every termination has to survive all of it, simultaneously, for the service life of the platform.",
      },
      {
        kind: "paragraph",
        text: "Electromagnetic performance. Shielding, screening, bonding and grounding are part of the harness's function, not accessories bolted onto it. Shield termination quality directly determines whether the platform passes EMC qualification — and a failure there surfaces late, expensively, and is usually blamed on design before anyone looks at workmanship.",
      },
      {
        kind: "paragraph",
        text: "Weight and volume. Wiring is a meaningful weight contributor and harness routing competes for space with structure, systems and access. Wire sized generously \"to be safe\" is dead weight carried for decades, on every flight.",
      },
      {
        kind: "paragraph",
        text: "Single points of failure. Most terminations have no redundancy behind them. One bad crimp among several thousand can take out a system, and it will do so at the moment the vibration environment finds it rather than at acceptance.",
      },
      {
        kind: "paragraph",
        text: "Configuration control and traceability. Platforms are built in variants and modified across long service lives. Knowing exactly which harness configuration is installed on which aircraft, built from which materials, by whom, to which drawing revision, is a requirement rather than good practice.",
      },
      {
        kind: "paragraph",
        text: "Long service life and obsolescence. A harness design may need to be reproduced decades after it was first built, at a point when the original connectors, contacts or wire types are no longer manufactured. Obsolescence management is part of the discipline, not an afterthought.",
      },
      {
        kind: "paragraph",
        text: "Every one of these pressures is answered by a specific control in the manufacturing process. That is what the next section walks through — not the sequence of operations, but the control at each step and what fails without it.",
      },
    ],
  },
  {
    id: "manufacturing-process",
    title: "The Wire Harness Manufacturing Process, Step by Step",
    blocks: [
      {
        kind: "paragraph",
        text: "The sequence is fixed and each step gates the next, because a defect introduced early becomes progressively more expensive to find and, past a certain point, impossible to correct without scrapping work already done. A nicked strand found before crimping costs one wire. The same strand found after the backshell is on costs the harness.",
      },
      { kind: "heading", title: "1. Design, Engineering and Documentation" },
      {
        kind: "paragraph",
        text: "Wire selection and sizing for current-carrying capacity and voltage drop, routing and bundle definition, the shielding and grounding scheme, connector selection, and the drawing set and wire list that everything downstream is built from.",
      },
      {
        kind: "paragraph",
        text: "This step belongs to the customer on a build-to-print package and to the manufacturer on a build-to-spec engagement — a distinction worth settling at enquiry rather than at first article, because it determines who carries design responsibility when something does not fit.",
      },
      { kind: "heading", title: "2. Material Selection and Procurement" },
      {
        kind: "paragraph",
        text: "Wire and cable to the applicable specification, connectors, contacts, backshells, terminals, sleeving and protective materials.",
      },
      {
        kind: "paragraph",
        text: "What matters in this sector specifically: traceability to source, certificates of conformity, lot control, shelf life on potting and sealing compounds, and counterfeit-part avoidance on connectors and contacts. On long-lifecycle programmes, obsolescence management becomes part of procurement rather than a problem to solve later — the connector specified on a 1990s drawing may simply not be made any more, and the alternative has to be qualified rather than assumed.",
      },
      { kind: "heading", title: "3. Wire Cutting, Stripping and Marking" },
      {
        kind: "paragraph",
        text: "Cutting to length on automatic or semi-automatic machines, stripping to expose the conductor without nicking or breaking strands, and applying wire identification marking.",
      },
      {
        kind: "paragraph",
        text: "Strip quality is a quality gate in its own right, and it is the one most often treated as trivial. A nicked strand is a latent failure that no later test reliably finds — continuity passes, insulation resistance passes, and the wire breaks under vibration eighteen months into service. The control is correct blade setting, controlled strip length and inspection before crimping rather than after. Wire marking, meanwhile, is what makes the harness maintainable for decades: an unmarked wire in an aircraft twenty years from now is a tracing exercise.",
      },
      { kind: "heading", title: "4. Terminal Crimping and Termination" },
      {
        kind: "paragraph",
        text: "The single most important step on the page.",
      },
      {
        kind: "paragraph",
        text: "A crimp is a controlled cold-weld, not a squeeze. It requires the correct tool and applicator for that specific terminal and wire gauge, calibrated and under control. Everything else is verification, and the verification stack is what separates a harness shop from an assembly operation:",
      },
      {
        kind: "list",
        items: [
          "Crimp height measurement — the dimensional check that the conductor has been compressed to the right degree.",
          "Pull-force testing — destructive testing against the minimum values the standard sets for that gauge.",
          "Crimp force monitoring — inline, on every cycle, flagging a missing strand, a double crimp or the wrong terminal in real time rather than at inspection.",
          "Cross-section analysis — periodic, confirming conductor compression and the absence of voids.",
        ],
      },
      {
        kind: "paragraph",
        text: "The consequence of getting it wrong runs in both directions. Over-crimping damages the conductor and reduces its cross-section. Under-crimping leaves a joint that passes a continuity test on the bench and fails under vibration in service — which is why pull-force and force monitoring exist, because continuity testing cannot detect it.",
      },
      { kind: "heading", title: "5. Connector Assembly and Contact Insertion" },
      {
        kind: "paragraph",
        text: "Terminated contacts are inserted into the correct cavity of the correct connector, to the wire list; full seating is verified; backshells, strain relief, seals and keying are fitted.",
      },
      {
        kind: "paragraph",
        text: "Cavity errors are among the most common harness defects and among the hardest to spot visually once the backshell is on. That is precisely why the electrical test at step nine is a hundred per cent check rather than a sample — it is the only control that reliably catches a contact in the wrong hole.",
      },
      { kind: "heading", title: "6. Form Board Layup and Routing" },
      {
        kind: "paragraph",
        text: "The harness is laid out on a full-scale board — the form board or nail board — that fixes branch lengths, breakout points and overall geometry, so every unit built is dimensionally identical to the drawing and to every other unit.",
      },
      {
        kind: "paragraph",
        text: "This matters more in aerospace than almost anywhere else, because the harness has to fit a structure it cannot be adjusted against during installation. A branch 40 mm short on a wing harness is not trimmed to fit; it is scrapped or it forces a routing compromise that nobody signed off. The board itself is controlled tooling, built to the drawing and verified.",
      },
      { kind: "heading", title: "7. Shielding, Screening and EMI Protection" },
      {
        kind: "paragraph",
        text: "Shield termination through connector backshells or ground pigtails, overbraiding, screening of sensitive runs, and the bonding and grounding provisions including lightning return paths where the platform requires them.",
      },
      {
        kind: "paragraph",
        text: "This is where EMC qualification is won or lost. Shield termination workmanship is a common cause of late-stage EMC failures — and because those failures appear at platform level, months downstream, they are usually attributed to design before anyone goes back to look at how the shields were terminated.",
      },
      { kind: "heading", title: "8. Bundling, Lacing and Protective Covering" },
      {
        kind: "paragraph",
        text: "Lacing and tying to the specified pattern and tension, tapes, convoluted tubing and sleeving, heat-shrink including moulded transitions, clips, grommets and abrasion protection at every point the harness passes through or rests against structure.",
      },
      {
        kind: "paragraph",
        text: "Identification and part marking are applied at this stage. Over-tight lacing is a real defect rather than a cosmetic one: it deforms insulation and creates a stress concentration that works against the harness for its whole life.",
      },
      { kind: "heading", title: "9. Electrical Testing" },
      {
        kind: "paragraph",
        text: "A hundred per cent test, not a sample.",
      },
      {
        kind: "paragraph",
        text: "Point-to-point continuity against the wire list; insulation resistance between conductors, to shield and to shell; dielectric withstand — hipot — at the specified voltage; and where specified, shield continuity, bonding resistance and custom functional programs.",
      },
      {
        kind: "paragraph",
        text: "The point worth making explicitly: automated test against the wire list is what catches the cavity errors, transposed wires and routing mistakes that visual inspection cannot. A technician can inspect a finished harness for an hour and not see two contacts swapped between adjacent cavities. The test sees it in seconds.",
      },
      { kind: "heading", title: "10. Final Inspection, Labelling and Traceability" },
      {
        kind: "paragraph",
        text: "Visual inspection against the workmanship standard at the specified class, dimensional check against the drawing, identification and part marking, and the documentation package: test records, certificate of conformity, material traceability and build records tied to the specific serialised unit.",
      },
      {
        kind: "paragraph",
        text: "This is the point a sourcing reader should care about most. In aerospace and defence the documentation is part of the deliverable — a harness without its paperwork is not acceptable product, it is an object that resembles one. A supplier who can build the harness but cannot produce the record has not completed the order.",
      },
    ],
  },
  {
    id: "standards-that-govern-wire-harness-manufacturing",
    title: "Standards That Govern Wire Harness Manufacturing",
    blocks: [
      {
        kind: "paragraph",
        text: "One distinction organises this section, and buyers conflate it constantly: some standards govern how the harness is built and inspected; others govern how wiring is designed and installed on the platform. A supplier working in this sector needs to work to both, and a purchase order that names only one has left the other open.",
      },
      { kind: "heading", title: "IPC/WHMA-A-620" },
      {
        kind: "paragraph",
        text: "The workmanship standard, and the one most likely to appear on a purchase order or a drawing.",
      },
      {
        kind: "paragraph",
        text: "It is the industry-consensus standard for the requirements and acceptance of cable and wire harness assemblies, published jointly by IPC — now the Global Electronics Association — and WHMA, the Wire Harness Manufacturers Association. It covers materials, methods, tests and acceptance criteria for crimped, mechanically secured and soldered interconnections, together with the assembly activities around them: wire preparation, crimping, soldering, shielding, terminations, protective coverings, labelling and final testing.",
      },
      {
        kind: "paragraph",
        text: "What makes it work in practice is the extensive set of visual accept and reject illustrations. Those are what let two different inspectors, at a supplier and at a customer, reach the same decision about the same crimp — which is the practical reason it is specified so widely rather than anything about its technical content.",
      },
      {
        kind: "paragraph",
        text: "Two things to know about revisions, because both cause problems:",
      },
      {
        kind: "list",
        items: [
          "The current revision is F, published October 2025, superseding Revision E of December 2022. Much of what is written about this standard still describes Revision E.",
          "A drawing that names an older revision means that revision. If a legacy print says Revision B, the harness is built and inspected to Revision B, not to the newest edition. The purchase order should state the revision explicitly.",
        ],
      },
      {
        kind: "paragraph",
        text: "A space-applications variant exists for programmes that require it.",
      },
      { kind: "heading", title: "IPC-D-620" },
      {
        kind: "paragraph",
        text: "The design-side companion to the workmanship standard: design and critical process requirements for cable and wiring harnesses, covering design requirements, quality assurance, assembly and fabrication, electrical requirements, and parts, materials and processes.",
      },
      {
        kind: "paragraph",
        text: "It is far less widely known than A-620, and it is worth knowing about for a specific reason — where A-620 tells you whether a harness was built correctly, D-620 addresses whether it was designed correctly in the first place. On a build-to-spec engagement, that distinction has a contractual edge to it.",
      },
      { kind: "heading", title: "SAE AS50881 and EWIS" },
      {
        kind: "paragraph",
        text: "The installation and design standard for aerospace wiring, and the document most aerospace OEM internal wiring guides are built on. The current revision is AS50881H, issued January 2023. It replaced MIL-W-5088, which is why that older designation still appears on legacy drawings and in search queries.",
      },
      {
        kind: "paragraph",
        text: "It covers all aspects of Electrical Wiring Interconnection Systems from the selection through the installation of wiring, wiring devices, optical cabling and termination devices used in aerospace vehicles.",
      },
      {
        kind: "paragraph",
        text: "Three scope points are worth stating, because each one tells a particular reader whether it applies to them:",
      },
      {
        kind: "list",
        items: [
          "Aerospace vehicles include manned and unmanned aircraft, helicopters, lighter-than-air vehicles and missiles. A UAV or missile programme is inside the scope, not adjacent to it.",
          "Pods and attached devices are treated as part of the aircraft equipment design, and the standard covers the interface between the pod or equipment and the aircraft wiring.",
          "Wiring inside airborne electronic equipment is outside the scope — but wiring externally attached to that equipment is inside it. For an LRU manufacturer, that is exactly where the boundary sits.",
        ],
      },
      {
        kind: "paragraph",
        text: "For civil transport aircraft, EWIS requirements sit in the airworthiness regulations themselves, and the regulatory requirements on selection of parts and materials align closely with the standard's own provisions. That alignment is what turned wiring from a trade activity into a regulated system discipline.",
      },
      { kind: "heading", title: "AS9100, NADCAP and Quality Systems" },
      {
        kind: "list",
        items: [
          "AS9100 — the aerospace quality management standard, built on ISO 9001. In practice it is the entry ticket for an aerospace or defence harness supplier, in India and internationally.",
          "NADCAP — special process accreditation, with an audit criteria set specific to cable and wire harness work. What it signifies is worth being precise about: an independent audit of the manufacturing process itself, not merely of the quality system wrapped around it.",
          "Soldering standards apply where the harness includes soldered terminations, alongside the crimping requirements.",
        ],
      },
      { kind: "heading", title: "The Indian Framework: DGAQA, CEMILAC and Customer Approvals" },
      {
        kind: "paragraph",
        text: "Defence programmes run through DGAQA for quality assurance of aeronautical stores and CEMILAC for airworthiness certification of indigenously designed and developed equipment.",
      },
      {
        kind: "paragraph",
        text: "But in this sector, customer approvals carry at least as much weight as standards. HAL, DRDO laboratories, ISRO centres, BEL and the DPSUs each run their own vendor approval and audit processes, and a harness shop is typically cleared by joint audit before it supplies a programme. The pattern is well established in Indian aerospace: when HAL's subsidiary at Naini began aviation loom manufacturing, the shop's quality management system was cleared by a joint audit team of DGAQA and HAL before deliveries of LCA and ALH looms began.",
      },
      {
        kind: "paragraph",
        text: "For a supplier entering this space, the realistic sequence is worth stating plainly rather than glossing:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Quality system certification first.",
          "Then customer vendor registration.",
          "Then programme-specific qualification, usually by audit.",
        ],
      },
      {
        kind: "paragraph",
        text: "Each stage takes time and none of them can be skipped. That is useful to know whether you are sourcing a harness or becoming a supplier of them.",
      },
    ],
  },
  {
    id: "workmanship-classes-which-one-do-you-need",
    title: "Workmanship Classes: Which One Do You Need?",
    blocks: [
      {
        kind: "paragraph",
        text: "The class is specified by the customer, it drives cost directly, and getting it wrong is expensive in both directions. Over-specifying pays for inspection, documentation and rework the application does not need. Under-specifying produces a harness that passes acceptance and fails in service — which is the more expensive mistake by a wide margin.",
      },
      {
        kind: "table",
        label: "Workmanship Classes: Which One Do You Need?",
        headers: ["Class", "What it covers", "Typical applications", "What changes in practice"],
        rows: [
          ["Class 1 — General Electronic Products", "Function of the completed assembly is the main requirement", "Consumer and general-purpose equipment. Generally excluded from high-reliability work", "Widest acceptance tolerances; cosmetic imperfection accepted where function is maintained"],
          ["Class 2 — Dedicated Service Electronic Products", "Continued performance and extended life required; uninterrupted service desirable but not critical", "Industrial, telecoms, commercial equipment", "Tighter acceptance criteria than Class 1; the end-use environment would not normally be expected to cause failure"],
          ["Class 3 — High Performance Electronic Products", "Continued performance on demand is critical; downtime cannot be tolerated", "Aerospace, defence, space, life-critical equipment", "Strictest acceptance criteria, most inspection, most documentation — and a documented process control system defining process control and corrective action limits"],
        ],
      },
      {
        kind: "paragraph",
        text: "The mechanism behind that table is worth understanding, because it explains why the same physical harness costs materially more at Class 3. The standard does not simply apply stricter limits — it assigns each individual criterion a different verdict per class. The same observed condition can be acceptable at Class 1, a process indicator at Class 2, and a defect at Class 3. A process indicator is not a rejection; it is a signal that the process is drifting and should be investigated. So moving from Class 2 to Class 3 converts a set of \"keep an eye on that\" conditions into outright rejections.",
      },
      {
        kind: "paragraph",
        text: "Three practical points:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "The class must be stated in the purchase order or on the drawing. If it is not stated, it is an open question that will surface at first article inspection, at the worst possible moment. Agree it at quotation.",
          "Class affects acceptance criteria, inspection sampling and documentation — which is why the cost difference is real and not a supplier's margin. At Class 3 there is more to inspect, more to record and more to reject.",
          "Operator certification to the standard is a separate matter from the class. Many aerospace and defence customers require certified operators regardless of which class the drawing calls out, and will ask for currency records.",
        ],
      },
    ],
  },
  {
    id: "types-of-wire-harnesses-and-cable-assemblies",
    title: "Types of Wire Harnesses and Cable Assemblies",
    blocks: [
      { kind: "heading", title: "By Platform Area" },
      {
        kind: "list",
        items: [
          "Airframe and structural harnesses — the long runs that tie the platform together, routed through structure and bulkheads",
          "Engine and nacelle harnesses — built for sustained high temperature, with insulation systems and terminations selected for it",
          "Avionics bay, rack and panel harnesses — dense, short, connector-heavy, with signal integrity dominating",
          "Cockpit and control harnesses — where accessibility and repairability matter as much as build quality",
          "Landing gear and actuation harnesses — flexing, contamination and impact exposure",
          "Wing, empennage and control surface harnesses — long runs with movement at the interfaces",
        ],
      },
      { kind: "heading", title: "By Function" },
      {
        kind: "list",
        items: [
          "Power distribution harnesses — sized for current and voltage drop, where conductor size drives weight",
          "Signal and control harnesses — where screening and separation drive the design",
          "Data bus assemblies — built to the impedance and construction requirements of the bus standards the platform uses",
          "RF and coaxial assemblies — where termination technique determines performance",
          "Fibre optic assemblies — where the platform uses optical interconnect, with their own termination and cleanliness disciplines",
          "Bonding and grounding straps, earth leads and lightning return paths",
          "EMI-screened and overbraided assemblies",
        ],
      },
      { kind: "heading", title: "By Application Outside the Airframe" },
      {
        kind: "list",
        items: [
          "Ground support and test equipment harnesses",
          "Avionics test rig and ATE interface harnesses — frequently high connector count, frequently one-off",
          "Missile, munition and tactical system harnesses",
          "UAV and unmanned platform harnesses, where weight drives every decision and there is no margin to spend",
          "Satellite and space harnesses, built to the space variant of the workmanship standard with the contamination and outgassing controls those programmes carry",
          "Shelter, vehicle and naval system harnesses",
        ],
      },
      {
        kind: "paragraph",
        text: "The same process and the same standards apply across all of these. What differs is materials, connectors and qualification — which is the next section.",
      },
    ],
  },
  {
    id: "materials-wires-connectors-and-components",
    title: "Materials, Wires, Connectors and Components",
    blocks: [
      {
        kind: "paragraph",
        text: "Wire and cable. Conductor material and plating selected for temperature and environment; insulation systems selected for temperature rating, abrasion resistance, weight, and smoke and toxicity behaviour; shielded, twisted and jacketed constructions where signal integrity requires them. The sizing trade-off is the one worth remembering: wire is sized for current-carrying capacity and voltage drop together, and over-sizing is weight carried for the life of the platform on every flight it makes.",
      },
      {
        kind: "paragraph",
        text: "Connectors. Circular and rectangular families to the applicable specification, with the military circular series most commonly encountered in this sector. What matters in selection is shell style, keying and polarisation, contact arrangement, sealing and environmental class — and whether the supplier is actually tooled for that series, which is a question worth asking before the order rather than after.",
      },
      {
        kind: "paragraph",
        text: "Contacts and terminals. Crimp and solder contacts in their various sizes and platings, terminals, lugs and splices. Each is matched to a specific wire gauge range, and that matching is itself a quality control — the wrong contact for the gauge is a defect that crimp force monitoring is specifically designed to catch.",
      },
      {
        kind: "paragraph",
        text: "Backshells and strain relief. Where shield termination and mechanical protection are actually achieved rather than specified. Routinely under-specified at design stage, and routinely the cause of EMC and durability problems that get attributed elsewhere.",
      },
      {
        kind: "paragraph",
        text: "Protective coverings. Convoluted tubing, braided sleeving, heat-shrink including moulded transitions and breakout boots, lacing tape, and abrasion protection at every structural contact point.",
      },
      {
        kind: "paragraph",
        text: "Identification and marking materials suitable for the service environment and the service life — a label that is unreadable after ten years has failed at the job it exists to do.",
      },
      {
        kind: "paragraph",
        text: "Potting and sealing compounds where used, with their shelf life, mix ratios and cure controls.",
      },
      {
        kind: "paragraph",
        text: "One point a procurement reader will value: in this sector material selection is constrained by the drawing and the approved parts list. The supplier's job is traceable sourcing to the specified part, not substitution. Certificates of conformity and lot traceability are part of the deliverable, and an unapproved substitution — however technically equivalent — is a non-conformance.",
      },
    ],
  },
  {
    id: "tooling-equipment-and-shop-floor-capability",
    title: "Tooling, Equipment and Shop Floor Capability",
    blocks: [
      {
        kind: "paragraph",
        text: "This section is read as evidence rather than description. What a harness shop has on the floor tells a sourcing engineer more than any statement of intent.",
      },
      {
        kind: "list",
        items: [
          "Cut-and-strip equipment, automatic or semi-automatic, with strip quality control and blade setting under change control",
          "Crimp presses with terminal-specific applicators, plus calibrated hand tools with the correct positioners and die sets for mil-spec contacts — the hand tools matter as much as the presses, because aerospace volumes mean a great deal of work is done on them",
          "Crimp force monitoring, inline, flagging deviations on every cycle rather than at inspection",
          "Crimp height gauges and pull-force testers for verification, with cross-section capability for periodic validation",
          "Contact insertion and extraction tooling matched to each connector series — a tooling gap here becomes lead time, discovered late",
          "Form boards and harness board fixtures, built per drawing and controlled as tooling in their own right, with their own revision control",
          "Marking and identification equipment, including laser wire marking where the specification calls for it",
          "Heat-shrink and moulding equipment with controlled, measured temperature rather than a heat gun and judgement",
          "Electrical test systems — continuity, insulation resistance and dielectric withstand, programmed against the wire list",
          "ESD-controlled workstations where the harness includes sensitive terminations",
          "Controlled environment or cleanroom areas where the programme requires them, particularly on space work",
          "Calibration control across every measuring and crimping tool",
        ],
      },
      {
        kind: "paragraph",
        text: "That last item is the unglamorous one, and it is the first thing an auditor looks at. A crimp tool out of calibration produces a whole batch of suspect terminations, and without calibration records there is no way to establish how far back the problem goes. Calibration control is not administrative overhead on a harness line; it is the thing that bounds the recall.",
      },
      {
        kind: "paragraph",
        text: "One line on people, because it belongs here as much as the equipment: in this sector the trained, certified operator is a capability in the same sense the press is. Customers frequently specify operator certification to the workmanship standard, and ask for currency records alongside the tooling list.",
      },
    ],
  },
  {
    id: "testing-and-quality-assurance",
    headingId: "inspection-and-testing",
    title: "Testing and Quality Assurance",
    blocks: [
      {
        kind: "paragraph",
        text: "Three groups, because they answer three different questions: is the process in control, is this unit good, and is the design qualified for the environment.",
      },
      { kind: "heading", title: "In-Process Control" },
      {
        kind: "list",
        items: [
          "First article inspection against the drawing and wire list, before series build begins",
          "In-process inspection at defined gates rather than only at the end — which is the whole point of gating, since a defect caught at crimping costs a terminal and the same defect caught at final inspection costs the harness",
          "Crimp verification by measurement and pull test, at a defined frequency rather than when someone thinks of it",
          "Workmanship inspection against the applicable class criteria, by operators certified to that standard",
        ],
      },
      { kind: "heading", title: "Acceptance Testing, on Every Unit" },
      {
        kind: "list",
        items: [
          "Point-to-point continuity against the wire list — one hundred per cent, not sampled",
          "Insulation resistance between conductors, and to shield and shell",
          "Dielectric withstand at the specified voltage",
          "Shield continuity and bonding resistance where specified",
          "Functional or custom test programs where the customer defines them",
        ],
      },
      { kind: "heading", title: "Qualification and Environmental Testing" },
      {
        kind: "paragraph",
        text: "Where the programme calls for it, and usually once per design rather than per unit:",
      },
      {
        kind: "list",
        items: [
          "Vibration and mechanical shock",
          "Thermal cycling and temperature extremes",
          "Humidity, salt fog and fluid resistance",
          "[Thermal vacuum testing](/resources/thermal-vacuum-testing) for space applications, with the outgassing and contamination controls those programmes carry",
          "EMI and EMC testing, at assembly or platform level",
        ],
      },
      { kind: "heading", id: "traceability", title: "Traceability" },
      {
        kind: "paragraph",
        text: "Test records, build records and material certification tied to the serialised unit, retained for the period the programme requires.",
      },
      {
        kind: "paragraph",
        text: "The principle is worth stating plainly because it is the one that distinguishes this sector: the record is part of the product. A supplier who cannot produce the record cannot support the claim, and on a flight-critical assembly an unsupported claim is indistinguishable from an untested one.",
      },
    ],
  },
  {
    id: "capabilities-to-evaluate-in-a-harness-manufacturer",
    title: "Capabilities to Evaluate in a Harness Manufacturer",
    blocks: [
      {
        kind: "paragraph",
        text: "Send this to every supplier on a shortlist and ask for each line answered in writing. It is the fastest way to separate a qualified harness shop from a general assembly operation, and most of the answers are either documentary or they are not.",
      },
      {
        kind: "table",
        label: "Capabilities to Evaluate in a Harness Manufacturer",
        headers: ["Capability", "Why it matters", "What to ask for"],
        rows: [
          ["Quality system certification", "The entry condition for a qualified programme", "Certificate number, issuing body, and the scope and site it covers"],
          ["Special process accreditation", "An audit of the process, not just the system around it", "Whether cable and harness work specifically is in scope"],
          ["Workmanship standard and class", "Defines acceptance for your harness", "Standard, revision and class built and inspected to"],
          ["Operator certification", "The standard is only as good as the people applying it", "Certification to that standard, and how currency is maintained"],
          ["Engineering capability", "Determines who carries design responsibility", "Build-to-print only, or design support as well"],
          ["Wire and cable types handled", "Specialist insulation needs specialist handling", "Types processed, including high-temperature and polyimide constructions"],
          ["Connector families tooled for", "A tooling gap becomes lead time, discovered late", "Connector series and contact sizes with insertion and extraction tooling in house"],
          ["Shield termination and overbraiding", "Where EMC performance is actually achieved", "Termination methods used, and braiding capability"],
          ["Crimp verification method", "The single most revealing question on this list", "Height measurement, pull test, force monitoring, cross-section — and at what frequency"],
          ["Electrical test capability", "Catches what inspection cannot", "What is tested, against what, and whether it is one hundred per cent"],
          ["Environmental and qualification test", "Needed where the programme qualifies the harness", "In-house or partnered, and which environments"],
          ["Form board manufacture and control", "Dimensional repeatability across a production run", "Whether boards are made in house and how they are revision-controlled"],
          ["Traceability system", "Configuration control over a long service life", "What is recorded per unit, and the retention period"],
          ["First article inspection", "Where misunderstandings surface before they multiply", "The FAI process and what the report contains"],
          ["Batch size range", "Few suppliers are equally good at both ends", "Prototype quantities through to series rates"],
          ["Lead time", "Prototype responsiveness and series repeatability differ", "Quoted lead time for a prototype and for a production batch"],
          ["Obsolescence management", "A harness may be reproduced decades later", "How superseded parts are identified and alternatives qualified"],
          ["Customer approvals held", "In India this often outweighs general certification", "Which organisations have registered or audited the supplier"],
          ["Export control handling", "Applies on many defence programmes", "Documentation and compliance process"],
        ],
      },
      {
        kind: "paragraph",
        text: "One line to add to any supplier questionnaire: ask for the certificate scope, not just the certificate. A quality certification that does not cover harness manufacture, at the site actually doing the work, is a common and easily missed gap — and it is the gap that surfaces during a customer audit rather than during vendor selection.",
      },
    ],
  },
  {
    id: "applications-and-platforms",
    title: "Applications and Platforms Served",
    blocks: [
      { kind: "heading", title: "Airborne Platforms" },
      {
        kind: "list",
        items: [
          "Fixed-wing military aircraft, including indigenous fighter and trainer programmes",
          "Rotary-wing platforms and their mission systems",
          "Transport and special-mission aircraft",
          "UAVs and unmanned platforms, where weight and volume constraints are most severe and where harness mass is a measurable fraction of payload",
          "Avionics and mission system LRUs — internal harnesses and the external interface assemblies that connect them",
        ],
      },
      { kind: "heading", title: "Ground and Test Systems" },
      {
        kind: "list",
        items: [
          "Avionics test rigs, automatic test equipment and interface harnesses, frequently high connector count and frequently one-off",
          "Ground support equipment and ground test equipment",
          "Shelter and vehicle-mounted systems",
        ],
      },
      { kind: "heading", title: "Defence Systems" },
      {
        kind: "list",
        items: [
          "Radar and sensor systems",
          "Missile, munition and tactical platform harnesses",
          "Communication and electronic warfare systems",
          "Naval and shipborne systems, with their own corrosion and shock requirements",
        ],
      },
      { kind: "heading", title: "Space" },
      {
        kind: "list",
        items: [
          "Satellite and launch vehicle harnesses, built to the space variant of the workmanship standard with the contamination and outgassing controls those programmes carry",
        ],
      },
      {
        kind: "paragraph",
        text: "Harness work is one of the most actively indigenised areas in Indian aerospace and defence manufacturing. Domestic capability is established and expanding — aviation loom manufacturing for indigenous fighter and helicopter programmes has been running at scale for several years, with shops qualified by joint audit before they supply. That matters for a sourcing reader in a practical way: the question is no longer whether domestic harness capability exists, but which supplier is qualified for your programme.",
      },
    ],
  },
  {
    id: "industries",
    title: "Industries Served",
    blocks: [
      {
        kind: "list",
        items: [
          "Aerospace OEMs and airframe manufacturers — production harness supply to drawing, at programme rates and with configuration control across variants.",
          "Avionics and mission system manufacturers — LRU internal harnesses and interface assemblies, where connector density is high and runs are short.",
          "Defence public sector undertakings — approved-vendor supply into established programmes, where vendor registration precedes any order.",
          "DRDO laboratories and research establishments — development and prototype harnesses, often in single-digit quantities with fast turnaround and frequent drawing changes.",
          "Space organisations and private space companies — harnesses to space-grade workmanship and cleanliness requirements.",
          "Tier-1 and Tier-2 aerospace suppliers — outsourced harness capacity within a larger assembly scope.",
          "Ground support and test equipment manufacturers — harnesses for rigs, ATE and GSE, where the interface list changes more often than the hardware.",
          "UAV and drone manufacturers — lightweight harnesses in small to medium volumes, with weight scrutinised at gram level.",
          "MRO organisations — replacement harnesses and repair of installed assemblies, including reverse engineering where the original drawing package is incomplete.",
        ],
      },
    ],
  },
  {
    id: "how-to-select-a-wire-harness-manufacturing-partner",
    title: "How to Select a Wire Harness Manufacturing Partner",
    blocks: [
      { kind: "heading", title: "Start From the Certification Your Programme Requires" },
      {
        kind: "paragraph",
        text: "Quality system certification and, where specified, special process accreditation and the customer approvals your programme demands. If these are not in place, nothing else about the supplier matters for a qualified programme — the harness cannot be accepted whatever its quality. Establish this first and the shortlist shortens quickly.",
      },
      { kind: "heading", title: "Confirm the Workmanship Class and Operator Certification" },
      {
        kind: "paragraph",
        text: "Which standard, which revision, which class — and whether the operators who will actually build your harness hold current certification to it. Ask for currency records, not a historical certificate. Operator certification lapses, and a shop that was certified three years ago may not be today.",
      },
      { kind: "heading", title: "Decide Build-to-Print or Build-to-Spec" },
      {
        kind: "paragraph",
        text: "Whether you are handing over a complete drawing package or asking the supplier to engineer the harness. These demand different capabilities and allocate design responsibility differently. Settle it in writing at quotation — the comparison below sets out what each involves.",
      },
      { kind: "heading", title: "Check Connector and Wire Coverage" },
      {
        kind: "paragraph",
        text: "Whether the supplier is tooled for the connector families and contact sizes on your drawing, and whether they routinely process your wire types. Tooling gaps become lead time and cost, and they are typically discovered after the order when the first kit arrives.",
      },
      { kind: "heading", title: "Interrogate Crimp Verification" },
      {
        kind: "paragraph",
        text: "How crimps are verified, at what frequency, and whether crimp force monitoring is in place. This single question separates serious harness shops from general assembly operations more reliably than any other. A supplier who answers \"we inspect them\" is telling you something important.",
      },
      { kind: "heading", title: "Confirm One Hundred Per Cent Electrical Test" },
      {
        kind: "paragraph",
        text: "Not sample testing. Ask what is tested, against what, and what the record looks like. A supplier testing to a sampling plan on flight-critical harnesses has not understood the failure mode — cavity errors are not statistically distributed, they are individual mistakes on individual units.",
      },
      { kind: "heading", title: "Assess Traceability and Documentation" },
      {
        kind: "paragraph",
        text: "What the delivered documentation package contains and how long records are retained. In this sector the paperwork is part of the product, and a supplier whose documentation is assembled after the fact rather than captured during build will show it at the first audit.",
      },
      { kind: "heading", title: "Match Volume and Lead Time to the Programme" },
      {
        kind: "paragraph",
        text: "Prototype and development work needs responsiveness and tolerance for drawing churn. Production needs repeatability and capacity. Few suppliers are genuinely good at both, and it is worth asking directly which they are rather than inferring it from a capability list.",
      },
      { kind: "heading", title: "Weigh Lead Time, Local Support and Indigenous Supply" },
      {
        kind: "paragraph",
        text: "Import lead times, currency exposure, export control friction, and the value of a supplier who can take a drawing change and respond in days rather than quarters. On indigenisation-driven programmes this is frequently decisive — and on development work, where the drawing changes three times before freeze, responsiveness matters more than unit price.",
      },
      {
        kind: "paragraph",
        text: "If you are preparing an RFQ now, the four things a harness supplier actually needs are the drawing package or requirement set, the workmanship standard and class, the connector and wire schedule, and the quantity and schedule. A requirement written from those can be quoted accurately. One written without the class will be quoted at a guess, and the guess will be wrong in one direction or the other.",
      },
    ],
  },
  {
    id: "comparisons-that-help-you-decide",
    title: "Comparisons That Help You Decide",
    blocks: [
      { kind: "heading", title: "Build-to-Print vs Build-to-Spec" },
      {
        kind: "paragraph",
        text: "The most useful comparison on this page, and one many buyers have not worked through. The short version: build-to-print is a manufacturing transaction and build-to-spec is an engineering engagement. Confusing the two causes most scope disputes in harness procurement.",
      },
      {
        kind: "table",
        label: "Build-to-Print vs Build-to-Spec",
        headers: ["Factor", "Build-to-print", "Build-to-spec"],
        rows: [
          ["Who owns the design", "The customer", "The supplier, within the customer's requirements"],
          ["What the customer supplies", "Complete drawing package, wire list, approved parts list", "Functional and interface requirements, environment, constraints"],
          ["Engineering capability required of the supplier", "Manufacturing engineering and process control", "Harness design, wire sizing, shielding and grounding scheme, documentation"],
          ["Who carries design responsibility", "The customer", "The supplier, which changes the liability position"],
          ["Typical lead time", "Shorter — straight to planning and kitting", "Longer — a design and review cycle first"],
          ["Change control", "Customer-issued drawing revisions", "Negotiated against the requirement set"],
          ["Where it fits in a programme", "Production, and development once the design is frozen", "Early development, obsolescence redesign, reverse engineering"],
        ],
      },
      { kind: "heading", title: "In-House vs Outsourced Harness Manufacturing" },
      {
        kind: "paragraph",
        text: "For most OEMs and integrators, harness manufacture is a specialised process carrying its own certification burden, and outsourcing to a qualified supplier is the normal answer. An organisation with steady volume and existing certification may rightly keep it in-house — the honest answer depends on volume and on whether the certification already exists.",
      },
      {
        kind: "table",
        label: "In-House vs Outsourced Harness Manufacturing",
        headers: ["Factor", "In-house", "Outsourced"],
        rows: [
          ["Capital and tooling investment", "Presses, applicators, test systems, form boards, per connector family", "None beyond the purchase price"],
          ["Certification burden", "Carried in full, including operator certification and currency", "Carried by the supplier"],
          ["Operator training and retention", "A continuing commitment; certified harness operators are scarce", "Not your problem"],
          ["Capacity against programme peaks", "Fixed; peaks mean overtime or delay", "Flexible across the supplier's customer base"],
          ["Lead time control", "Complete", "Depends on the supplier's queue and your priority in it"],
          ["Confidentiality and export control", "Fully controlled", "Managed by agreement and supplier compliance"],
          ["Cost at low volume", "High — the overhead is carried regardless", "Lower"],
          ["Cost at high steady volume", "Competitive", "Includes the supplier's margin"],
          ["Focus", "Harness manufacture competes for attention with your core product", "The supplier's core product"],
        ],
      },
      { kind: "heading", title: "Manual vs Automated Harness Production" },
      {
        kind: "paragraph",
        text: "The honest position here matters, because a page claiming a fully automated aerospace harness line would not be credible to anyone in the sector. Aerospace harness work remains substantially manual — volumes are low, variants are many and geometry is complex. Automation concentrates in cut, strip and crimp, not in layup.",
      },
      {
        kind: "table",
        label: "Manual vs Automated Harness Production",
        headers: ["Factor", "Predominantly manual", "Semi-automated"],
        rows: [
          ["Volume suited to", "Prototype through low and medium volume", "Medium and repeat volume with stable designs"],
          ["Repeatability", "Depends on operator skill and certification", "High within the automated steps"],
          ["Cost per unit, low volume", "Lower — no setup to amortise", "Higher — setup dominates"],
          ["Cost per unit, high volume", "Higher", "Lower"],
          ["Flexibility to design change", "High — a drawing change is a work instruction change", "Lower — may require re-setup or re-programming"],
          ["Setup time", "Minimal", "Significant per configuration"],
          ["Where automation genuinely helps", "—", "Cut and strip to length, crimping with force monitoring, test programme execution"],
          ["Where it does not", "Form board layup, routing, lacing, breakout dressing", "—"],
        ],
      },
      { kind: "heading", title: "Imported vs Indigenous Harness Supply" },
      {
        kind: "paragraph",
        text: "Established overseas suppliers bring long qualification heritage on specific platforms, and this table reads as more credible for saying so plainly.",
      },
      {
        kind: "table",
        label: "Imported vs Indigenous Harness Supply",
        headers: ["Factor", "Imported", "Indigenous"],
        rows: [
          ["Qualification heritage", "Long, platform-specific, often decades", "Growing; established on indigenous programmes"],
          ["Lead time", "Longer — manufacturing slot, shipping, customs", "Shorter, domestically scheduled"],
          ["Cost and currency", "Foreign currency exposure and import duty", "Rupee-denominated"],
          ["Export control and licensing", "Real friction on defence programmes; can gate a schedule", "Not applicable"],
          ["Responsiveness to drawing changes", "Measured in weeks or longer", "Measured in days"],
          ["Spares and repeat orders", "Subject to minimum quantities and the import cycle", "Practical at small quantity"],
          ["Certification route", "As held by the overseas supplier", "Domestic route through DGAQA and CEMILAC for defence programmes"],
          ["Programme indigenisation content", "None", "Counts toward indigenisation requirements"],
        ],
      },
    ],
  },
  {
    id: "common-harness-defects-and-how-they-are-prevented",
    title: "Common Harness Defects and How They Are Prevented",
    blocks: [
      {
        kind: "paragraph",
        text: "Almost every harness defect traces back to one of three things: an uncontrolled tool, an untrained or uncertified operator, or an inspection gate that was skipped. That is worth naming up front, because it reframes the list below from a catalogue of problems into a description of what process control is actually for.",
      },
      {
        kind: "table",
        label: "Common Harness Defects and How They Are Prevented",
        headers: ["Defect", "Root cause", "Control"],
        rows: [
          ["Over-crimped termination", "Excessive compression damaging the conductor", "Correct applicator selection, crimp height measurement, periodic cross-section validation"],
          ["Under-crimped termination", "Insufficient compression — and it passes continuity", "Pull-force testing to the standard's minimums, plus crimp force monitoring on every cycle"],
          ["Nicked or severed strands", "Blade setting or strip length out of control", "Controlled blade setting, strip-length control, and inspection before crimping rather than after"],
          ["Wrong terminal for the wire gauge", "Kitting error or work instruction gap", "Work instruction, controlled kitting, and force monitoring that detects the mismatch on the cycle"],
          ["Contacts in the wrong cavity", "The commonest routing error; easy to make, hard to see", "The wire list, insertion verification, and ultimately one hundred per cent continuity test"],
          ["Incompletely seated contacts", "Insertion not completed or verified", "Seating verification and pull-check before the backshell goes on"],
          ["Shield termination defects", "Workmanship at the termination; rarely visible afterwards", "Inspection at the termination and shield continuity testing — because the alternative is finding it at EMC qualification"],
          ["Insulation damage during layup", "Handling, over-tight lacing, abrasion against fixtures", "Handling practice, lacing technique, visual inspection against the class criteria"],
          ["Dimensional errors — branch lengths, breakouts", "Form board inaccuracy or an uncontrolled board", "Form board built to drawing and controlled as tooling with its own revision state"],
          ["Identification and labelling errors", "Transcription; trivial to make", "Inspection against the drawing before release"],
        ],
      },
      {
        kind: "paragraph",
        text: "Two of these deserve a second look, because they behave differently from the rest.",
      },
      {
        kind: "paragraph",
        text: "The under-crimp is the dangerous one. It passes every bench test it will ever be given and then fails under vibration months into service, by which time the harness is behind structure. It is the clearest argument for pull-force testing and force monitoring: these are not inspection theatre, they are the only controls that detect it.",
      },
      {
        kind: "paragraph",
        text: "Shield termination defects are the expensive ones. They are rarely caught before EMC testing, which is the worst possible place to find them — platform level, late in the programme, with a long diagnostic path back to a crimp made months earlier, and usually blamed on design first.",
      },
      {
        kind: "paragraph",
        text: "None of these are exotic failures. They are ordinary process errors — which is exactly why the standards, the tooling control, the operator certification and the inspection gates exist. And it is why a buyer should evaluate those rather than the finished harness, which looks much the same whoever built it.",
      },
    ],
  },
  {
    id: "about-this-guide",
    title: "About This Guide",
    blocks: [
      {
        kind: "paragraph",
        text: "This guide sets out how wire harnesses are manufactured for aerospace and defence applications, the standards that govern the work, and what to evaluate in a harness manufacturing partner. It is published as a technical reference for engineering and sourcing teams working in the sector.",
      },
    ],
  },
];

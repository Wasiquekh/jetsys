export const metaTitle = "FEGP vs Mobile Ground Power Units for Aircraft | Jetsys Defence";

export const metaDescription = "Compare FEGP vs Mobile Ground Power Units for aircraft. Learn how stand layout, installation costs, peak demand and backup coverage shape your airport or hangar setup.";

export const draftNote = "Heading levels in this draft use # for H1, ## for H2 and ### for H3.";

export const introduction = [
  "Fixed electrical ground power (FEGP) supplies electricity to parked aircraft from a permanent installation at a gate, stand or maintenance position. A mobile ground power unit (GPU) supplies aircraft from a cart, trailer or vehicle that can move between positions. Both can support tasks such as cabin servicing and avionics checks when their output matches the aircraft’s approved external-power requirements.",
  "The choice comes down to where aircraft need power, how often those positions change and how many aircraft need power at the same time. A busy gate may justify a dedicated connection, while remote stands or changing hangar assignments may be better served by a shared mobile fleet. A site with both operating patterns can use a mix of fixed and mobile equipment.",
];

export const deployment = [
  {
    id: "fixed",
    title: "Fixed Electrical Ground Power (FEGP)",
    paragraphs: [
      "A fixed installation uses site electricity and converts it to the aircraft’s specified external-power output. A centralised 400 Hz system can distribute converted power to several stands. A point-of-use system puts the converter at or near the position it serves. Both deliver power through an aircraft cable at the stand. The location of the converter and the location of the aircraft connection depend on the site design.",
      "A bridge-mounted ground power arrangement places equipment or cable handling on the passenger boarding bridge. A ground power pit system can bring the connection to apron level. In a hangar, a fixed supply can serve a designated bay with a connection point positioned for the aircraft that use it. In each case, the cable needs enough reach for the intended aircraft positions and a place to be stowed between uses.",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Ground Power Units",
    paragraphs: [
      "Ground crews dispatch a mobile aircraft ground power unit to the stand or bay where it is needed. A towable unit moves with a suitable tug, and a vehicle-mounted GPU travels on its carrier. Self-propelled units move under their own drive. Portable carts can suit maintenance areas where staff move a compatible unit between nearby work positions.",
      "Mobile describes how the equipment is deployed. A diesel ground power unit carries fuel, a battery-electric GPU carries stored energy, and a mains-powered cart operates within reach of a compatible site outlet. Each has different requirements for replenishment or connection.",
    ],
  },
] as const;

export const applications = [
  {
    title: "Airport Gates",
    paragraphs: [
      "A frequently used gate is a candidate for fixed power when aircraft stop in predictable positions, the cable can reach their receptacles and the site can support the required electrical load. A dedicated connection can shorten the time spent waiting for a cart during closely scheduled turnarounds. Zurich Airport’s Pier E is an example of fixed 400 Hz ground power serving gate positions.",
    ],
  },
  {
    title: "Remote Aircraft Stands",
    paragraphs: [
      "Mobile ground power is practical for remote aircraft stands with intermittent demand or when aircraft assignments change during the day. Plan for travel from the equipment parking area, access along approved movement routes and time to position the GPU and stow it after use. A stand may be close enough for a quick dispatch but too far from a charger or refuelling point to support repeated assignments without a second unit.",
    ],
  },
  {
    title: "Hangars and Maintenance Bays",
    paragraphs: [
      "A permanent supply can suit a maintenance, repair and overhaul (MRO) bay where aircraft repeatedly need power for long diagnostics or ground tests. A mobile cart can be shared across bays where shorter jobs are scheduled at different times. When tests overlap, each occupied position needs access to a suitable supply for the duration of the work. Bay schedules and expected test durations help determine whether to add fixed connections or size a mobile fleet for concurrent use.",
    ],
  },
];

export const requirements = [
  {
    title: "Aircraft Output and Compatibility",
    paragraphs: [
      "Start with the approved external-power requirements for each aircraft variant and task. Typical formats include nominal 28 V DC and three-phase 115/200 V AC at 400 Hz. For a DC unit, confirm the required voltage and current in amps. For an AC unit, confirm voltage, frequency, phase and apparent-power capacity in kVA. Check continuous ratings and any specified peak load and duration. Both fixed and mobile equipment need the approved plug, cable assembly and any required control or interlock contacts.",
    ],
  },
  {
    title: "Fixed Installation Requirements",
    paragraphs: [
      "Review the available site electrical capacity and the proposed converter’s input requirements. Identify where the converter, stand connection and cable storage will go. Verify cable reach across the aircraft types and parking positions the stand must serve, including the boarding bridge’s movement where applicable. For an apron pit, account for civil works and service access. For a hangar bay, coordinate mounting and cable routing with the space needed to move aircraft and other ground support equipment.",
    ],
  },
  {
    title: "Mobile Equipment Requirements",
    paragraphs: [
      "Check the unit’s dimensions, weight, movement method and turning clearance against the routes and parking areas it will use. Verify cable reach from the proposed GPU position and the equipment’s documented suitability for the operating environment. For a diesel or battery-electric unit, assess usable runtime at the expected load and the time needed to refuel or recharge. A mains-fed cart needs a compatible outlet and enough reach for both its input cable and aircraft cable.",
    ],
  },
];

export const planning = [
  {
    title: "Availability and Peak Demand",
    paragraphs: [
      "At an equipped stand, fixed power is available when the installation and its electrical supply are serviceable. For a centralised system, check the capacity available when several connected stands draw power together. With a shared mobile fleet, estimate how many aircraft need power at once and how long each unit remains committed. Include dispatch, movement, connection and replenishment time, plus any units out for scheduled maintenance. A fleet sized around average daily demand can run short when turnarounds overlap.",
    ],
  },
  {
    title: "Installation and Operating Costs",
    paragraphs: [
      "Fixed ground power installation costs can include the converter, electrical distribution, bridge or pit works and commissioning. Operating costs include electricity, inspections and planned service of the converter, cables and connectors. Include any closures or access arrangements needed to service the installation.",
      "For mobile ground power, price the fleet needed to cover peak demand, along with towing or dispatch labour, fuel or electricity, charging infrastructure where needed and service or replacement costs. Compare quotations using the same stand coverage, aircraft power-on hours, service period and backup capacity.",
    ],
  },
  {
    title: "Mixed Deployment and Backup Coverage",
    paragraphs: [
      "An airport can install FEGP at busy gates and use mobile units for remote positions, overflow or fixed-system outages. Heathrow’s operating procedures identify a GPU as one alternative when a fixed connection is out of service. To plan similar coverage, verify that a compatible unit can reach the affected stand within the required time and that it will be available during peak operations. If the backup must also cover a site electrical outage, check whether the mobile unit depends on the same electrical feed.",
    ],
  },
];

export const selectionSteps = [
  "Map the stands and work areas that need ground power. Include gates, remote stands and hangar bays, and identify which positions see regular or occasional use.",
  "Check aircraft requirements and peak simultaneous demand. Record the approved output and connector for each aircraft, then identify where power requests overlap.",
  "Assess the electrical infrastructure and installation options. Check site capacity, mounting locations, cable routes and maintenance access at each position.",
  "Evaluate how often equipment needs to move and how quickly it must be available. Allow for dispatch, travel, positioning and refuelling or charging where relevant.",
  "Compare lifecycle costs, maintenance access and backup coverage. Apply the same service assumptions to all options and check what happens when equipment is unavailable.",
  "Decide whether fixed, mobile or mixed deployment fits the operation. Check the preferred layout against the busiest planned shift and the selected equipment specifications.",
];

export const documentation = [
  "Jetsys Defence lists bridge- and pit-mounted fixed electrical ground power configurations, as well as centralised airport ground power systems. The mobile range includes towable trailer and vehicle-mounted configurations, with diesel and battery-electric options listed in the GPU catalogue. Published output options include three-phase 115/200 V AC at 400 Hz and 28.5 V DC. Confirm which output and mounting combinations are available for the proposed model.",
  "The equipment datasheet should identify the electrical ratings, duty limits, interface and supplied cable assembly. For fixed equipment, review the installation drawings, input power requirements and access for cable handling and maintenance. For mobile equipment, review movement, parking and fuel or charging requirements. Applicable test reports and acceptance records should identify the configuration tested, the loads applied and where the output was measured. These details help show whether the proposed equipment can deliver the required power at the aircraft connector.",
];

export const faqs = [
  {
    question: "What does FEGP stand for?",
    answer: "FEGP stands for fixed electrical ground power. It is a permanent installation that supplies external electrical power to parked aircraft at equipped stands or work positions.",
  },
  {
    question: "How does FEGP differ from a mobile GPU?",
    answer: "FEGP delivers power through a fixed connection at an equipped position. A mobile GPU moves to the aircraft when required and can be redeployed to another position after the job.",
  },
  {
    question: "Can fixed and mobile ground power serve the same aircraft?",
    answer: "Yes, when each unit meets the aircraft’s approved external-power requirements for the task. Check output type, voltage, frequency and phase where applicable, load rating and the aircraft connector.",
  },
  {
    question: "Can mobile ground power units run on electricity?",
    answer: "Yes. A battery-electric GPU carries stored energy for use away from a mains outlet. A mobile mains-powered GPU can operate at positions with a compatible electrical supply within cable reach.",
  },
  {
    question: "Which option suits a remote aircraft stand?",
    answer: "A mobile GPU can suit an intermittently used stand if it can be dispatched on time and refuelled or recharged as needed. Fixed power may be practical where the stand has frequent, predictable demand and the site can support a permanent installation.",
  },
  {
    question: "What infrastructure does FEGP require?",
    answer: "FEGP requires a compatible site electrical feed, power conversion and distribution equipment, a stand connection and a way to route and stow the aircraft cable. Mounting, civil works and maintenance access depend on the site design.",
  },
  {
    question: "Can one mobile GPU serve multiple stands or bays?",
    answer: "Yes, if assignments are sequential and the unit can travel, connect and replenish its energy between jobs as needed. Overlapping demand requires enough compatible capacity to power the affected aircraft at the same time.",
  },
  {
    question: "How do I compare the cost of fixed and mobile ground power?",
    answer: "Compare equipment, installation, energy, handling, maintenance and spare capacity over the same service period. Use the same stand coverage, aircraft power-on hours and peak demand for both options.",
  },
  {
    question: "Can a mobile GPU back up fixed ground power?",
    answer: "Yes, provided the mobile GPU matches the aircraft requirements and can be dispatched when the fixed installation is unavailable. For a site power outage, confirm the backup can operate independently of the affected electrical supply.",
  },
  {
    question: "What should I verify before choosing ground power equipment?",
    answer: "Verify the approved aircraft output, connector, cable, continuous and peak ratings, and the site’s expected demand. Then check installation or movement requirements, documented duty limits, maintenance access and applicable acceptance tests for the proposed equipment.",
  },
];

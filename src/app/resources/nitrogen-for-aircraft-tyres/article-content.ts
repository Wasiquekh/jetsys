import type { ArticleSection } from "../ResourceReference";

export const title = "Why Aircraft Tyres Use Nitrogen";
export const metaTitle = "Aircraft Nitrogen Servicing Guide and Equipment | Jetsys Defence";
export const metaDescription =
  "Learn how to choose aircraft nitrogen servicing equipment for tires, landing gear struts and accumulators. Compare trolley options and request a quote from Jetsys Defence.";

export const introduction = [
  "Aircraft nitrogen servicing equipment needs to match the pressure, gas quality and connection specified for the aircraft system. A trolley that covers routine tire inflation may need a different outlet or charging kit to service a landing gear strut or hydraulic accumulator. Checking those requirements upfront helps you specify one configuration for multiple tasks where the aircraft manuals allow it.",
  "This guide explains where dry nitrogen is used, how the equipment controls pressure and what to include in a quotation request. Jetsys Defence offers multi-cylinder trolleys with optional nitrogen booster pumps, charging hoses and valve adapters. [Explore the Jetsys Defence aircraft nitrogen trolley](/products/aviation-equipment/ground-support-equipment/nitrogen-trolley).",
];

export const sections: ArticleSection[] = [
  {
    id: "what-is-aircraft-nitrogen-servicing",
    title: "What Is Aircraft Nitrogen Servicing?",
    blocks: [
      { kind: "heading", id: "why-dry-nitrogen-is-used", title: "Why Dry Nitrogen Is Used in Aircraft Maintenance" },
      {
        kind: "paragraph",
        text: "Dry nitrogen is an inert gas with low moisture content. For aircraft tires that specify it, nitrogen helps limit oxygen and moisture inside the tire. Certain landing gear shock struts and hydraulic accumulators also use dry nitrogen as their gas charge. The aircraft or component manual defines the required gas grade and the conditions for servicing.",
      },
      { kind: "heading", title: "Nitrogen Charging, Inflation and Purging" },
      {
        kind: "paragraph",
        text: "Inflation brings an aircraft tire to its specified pressure. Charging establishes the gas charge in a component such as a shock strut or accumulator. Purging displaces the gas already inside a system and requires the flow, equipment and method specified for that task. Where an approved procedure calls for nitrogen for pressure testing or leak checks, confirm the test equipment and pressure limits for that application.",
      },
    ],
  },
  {
    id: "aircraft-systems-that-require-nitrogen-servicing",
    title: "Aircraft Systems That Require Nitrogen Servicing",
    blocks: [
      { kind: "heading", title: "Aircraft Tire Inflation and Pressure Checks" },
      {
        kind: "paragraph",
        text: "For aircraft tire inflation, confirm the wheel position, the specified pressure and the condition under which that pressure is checked. Nose and main wheels can have different requirements, and temperature affects the reading. Specify a tire inflation chuck or adapter that matches the valve and a gauge range suited to the required pressure.",
      },
      { kind: "heading", title: "Landing Gear Shock Strut Servicing" },
      {
        kind: "paragraph",
        text: "In an oleo-pneumatic shock strut, the gas charge and hydraulic fluid work together to absorb landing and taxi loads. The servicing criteria can depend on strut extension, aircraft loading and temperature. Check the specified strut condition, whether fluid servicing is part of the task and what charging equipment the Aircraft Maintenance Manual requires.",
      },
      { kind: "heading", title: "Hydraulic Accumulator Pre-Charging" },
      {
        kind: "paragraph",
        text: "A hydraulic accumulator stores energy by compressing gas on one side of a separator. The specified nitrogen pre-charge is checked under the hydraulic-side conditions stated in the applicable maintenance instructions. When requesting an accumulator charging kit, provide the component identification, required pre-charge range and gas valve or adapter part number.",
      },
      { kind: "heading", title: "Tire, Strut and Accumulator Requirements Compared" },
      {
        kind: "table",
        label: "Tire, Strut and Accumulator Requirements Compared",
        headers: ["Application", "What the nitrogen does", "What to verify before selecting equipment"],
        rows: [
          ["Aircraft tire", "Maintains the specified inflation pressure", "Wheel position, valve interface, gauge range and pressure-check conditions"],
          ["Landing gear shock strut", "Provides the gas charge in an oleo-pneumatic strut", "Servicing port, strut condition, fluid requirements and specified charging criteria"],
          ["Hydraulic accumulator", "Provides the gas pre-charge so the accumulator can store hydraulic energy", "Component identification, gas valve, pre-charge range and required hydraulic-side condition"],
        ],
      },
    ],
  },
  {
    id: "how-aircraft-nitrogen-servicing-equipment-works",
    title: "How Aircraft Nitrogen Servicing Equipment Works",
    blocks: [
      { kind: "heading", title: "Nitrogen Cylinders and Cylinder Manifolds" },
      {
        kind: "paragraph",
        text: "Cylinders store the dry nitrogen. On a manifolded trolley, the manifold connects the cylinders to the regulated supply circuit. Confirm the supported cylinder sizes and valve connections, how individual cylinders are isolated, and how the frame restrains them during movement and storage.",
      },
      { kind: "heading", title: "Pressure Regulators and Gauges" },
      {
        kind: "paragraph",
        text: "A regulator reduces cylinder supply pressure to a controlled outlet pressure. An inlet gauge indicates the supply pressure, while an outlet gauge indicates the pressure at its sensing point in the delivery circuit. Choose a regulator and gauge that cover the required operating range with enough resolution to read the lowest specified pressure accurately.",
      },
      { kind: "heading", title: "Charging Hoses, Adapters and Aircraft Connections" },
      {
        kind: "paragraph",
        text: "The charging hose carries regulated gas to the aircraft connection. Compare its working pressure rating, length and end fittings with the complete configuration. On the aircraft side, confirm the specified valve adapter or inflation chuck and the clearance needed to attach it at the servicing point.",
      },
      { kind: "heading", title: "Pressure Relief and Overpressure Protection" },
      {
        kind: "paragraph",
        text: "A relief device helps protect the circuit it serves by venting gas when pressure exceeds its set point. Ask which parts of the trolley have relief protection, what settings apply and how they relate to downstream component ratings. The allowable aircraft pressure still comes from the applicable servicing instructions.",
      },
      { kind: "heading", title: "When a Nitrogen Booster Is Needed" },
      {
        kind: "paragraph",
        text: "A nitrogen booster pump raises supply pressure for tasks that need more outlet pressure than a regulator-only arrangement can deliver. It can also support some tasks as cylinder pressure falls, within the booster’s specified inlet range. Compare the required output pressure and flow, minimum inlet pressure and drive supply before specifying a booster.",
      },
    ],
  },
  {
    id: "nitrogen-servicing-equipment-and-configuration-options",
    title: "Nitrogen Servicing Equipment and Configuration Options",
    blocks: [
      { kind: "heading", title: "Portable Cylinder and Regulator Kits" },
      {
        kind: "paragraph",
        text: "A portable kit suits occasional work, a single servicing bay or locations where trolley access is limited. Check the combined weight of the cylinder, regulator and hose, and confirm the cylinder restraint and transport arrangements. Select the kit for the specific task and servicing port.",
      },
      { kind: "heading", title: "Multi-Cylinder Nitrogen Trolleys" },
      {
        kind: "paragraph",
        text: "A multi-cylinder trolley suits teams that perform repeat tasks or service several aircraft between cylinder changes. A shared platform keeps regulators, gauges, hoses and adapters together. Compare the additional gas capacity with the trolley’s footprint, loaded weight and mobility around the aircraft.",
      },
      { kind: "heading", title: "Regulator-Only vs Booster-Assisted Trolleys" },
      {
        kind: "table",
        label: "Regulator-Only vs Booster-Assisted Trolleys",
        headers: ["Configuration", "When it fits", "What to confirm"],
        rows: [
          ["Regulator-only", "Available cylinder pressure and flow meet the required outlet conditions throughout the planned servicing cycle", "Lowest usable inlet pressure, regulated range and flow at the required outlet pressure"],
          ["Booster-assisted", "The task requires a higher delivery pressure or must continue at lower cylinder supply pressures", "Inlet and outlet limits, achievable flow, drive supply and pressure protection"],
        ],
      },
      { kind: "heading", title: "Jetsys Defence Nitrogen Trolley Configurations and Accessories" },
      {
        kind: "paragraph",
        text: "The Jetsys Defence N₂-Trolley Series is available in 2-, 4-, 6- and 12-cylinder configurations. The range includes dual-stage pressure regulation, pressure gauges, relief valves and cylinder restraints. Options include a nitrogen booster pump, charging hose assemblies, valve adapter sets and a tow bar for trolley movement. Request the configuration data sheet to confirm outlet ranges, cylinder fit and what is included with the quoted unit.",
      },
    ],
  },
  {
    id: "applications-and-industries-served",
    title: "Applications and Industries Served",
    blocks: [
      { kind: "heading", title: "Commercial Airlines and Line Maintenance Teams" },
      {
        kind: "paragraph",
        text: "For frequent tire pressure checks and scheduled servicing, specify a trolley that can move between stands and reach the required servicing points. Consider peak demand during turnaround periods, the wheel and valve types across the fleet, and how often crews can change out cylinders.",
      },
      { kind: "heading", title: "MRO Facilities and Maintenance Hangars" },
      {
        kind: "paragraph",
        text: "A maintenance, repair and overhaul (MRO) facility may handle several aircraft platforms and a wider range of tasks. A trolley with suitable outlets and identified hose and adapter sets makes it easier to allocate equipment across bays. For nitrogen pressure testing, confirm the approved test method and the rating of the complete test circuit.",
      },
      { kind: "heading", title: "Business Aviation and Remote Operations" },
      {
        kind: "paragraph",
        text: "Operators with limited hangar space or infrequent servicing can compare a portable kit with a compact trolley. At remote locations, check cylinder availability and refill turnaround, and verify that the required gas grade and fitting types can be supported at the base.",
      },
      { kind: "heading", title: "Defence Aviation and Flight-Line Maintenance" },
      {
        kind: "paragraph",
        text: "Flight-line teams can specify a trolley around the assigned aircraft, servicing workload and apron conditions. Include enclosure or storage needs, wheel and towing requirements, and any inspection or handover records required for equipment acceptance.",
      },
    ],
  },
  {
    id: "how-to-choose-aircraft-nitrogen-servicing-equipment",
    title: "How to Choose Aircraft Nitrogen Servicing Equipment",
    blocks: [
      { kind: "heading", title: "Aircraft Maintenance Manual and Gas Quality Requirements" },
      {
        kind: "paragraph",
        text: "Start with the current Aircraft Maintenance Manual (AMM) or applicable Component Maintenance Manual (CMM) for the exact variant and task. Record the gas grade, required pressure range, servicing conditions and interface. If your site uses onsite nitrogen generation, verify that the delivered purity, dryness and supply pressure meet the applicable requirements.",
      },
      { kind: "heading", title: "Cylinder Supply Pressure and Regulated Outlet Pressure" },
      {
        kind: "paragraph",
        text: "Record the pressure available from the cylinders and the usable supply range as the gas is consumed. Compare it with the pressure and flow required at the outlet for each task. Ask for separate inlet and regulated outlet ratings, and have the supplier identify the range for each circuit if the trolley will support several applications.",
      },
      { kind: "heading", title: "Cylinder Capacity, Servicing Frequency and Fleet Size" },
      {
        kind: "paragraph",
        text: "Estimate how much gas your fleet uses between cylinder exchanges. Consider the number and type of tasks per shift, whether multiple bays share the equipment, and the reserve needed during busy periods or refill delays. Compare usable gas capacity at your operating pressures as well as cylinder count.",
      },
      { kind: "heading", title: "Hose, Adapter and Servicing Port Compatibility" },
      {
        kind: "paragraph",
        text: "Prepare a list of the servicing ports used by your fleet and include the aircraft or component part numbers where available. Ask for a matching hose and adapter schedule with working pressure ratings, end fittings and hose lengths. Include restricted-access locations so the proposed connection can be checked for clearance.",
      },
      { kind: "heading", title: "Portability, Storage and Cylinder Refill Logistics" },
      {
        kind: "paragraph",
        text: "Measure the storage area and the path to the aircraft, including doorways, thresholds and apron surfaces. Confirm whether your nitrogen supply company delivers replacement cylinders or your team uses a nitrogen cylinder filling station. Check compatible cylinder sizes and valves, refill or exchange turnaround, and storage for reserve cylinders.",
      },
    ],
  },
  {
    id: "manufacturing-quality-and-equipment-maintenance",
    title: "Manufacturing Quality and Equipment Maintenance",
    blocks: [
      { kind: "heading", title: "Pressure-Rated Components and Assembly Traceability" },
      {
        kind: "paragraph",
        text: "Request the equipment data sheet and parts list for the quoted assembly. Check that the regulators, gauges, valves, hoses and fittings are rated for the circuits in which they are installed. Confirm how the manufacturer identifies each trolley and its replaceable pressure components so maintenance records stay tied to the correct unit.",
      },
      { kind: "heading", title: "Leak Testing, Functional Testing and Gauge Calibration" },
      {
        kind: "paragraph",
        text: "Ask which factory checks are documented for the configuration. Leak testing checks for gas escaping from the pressure circuit under the specified conditions. Functional testing can verify regulator control and valve operation, while gauge calibration records show the measurement results and traceability. If your acceptance plan calls for leak testing with nitrogen, specify the required method and records in your enquiry.",
      },
      { kind: "heading", title: "Equipment Inspection, Service Records and Spare Parts" },
      {
        kind: "paragraph",
        text: "Request inspection intervals for hoses, valves, gauges, cylinder restraints and the trolley frame. Confirm how recalibration and relief-device servicing are recorded. Include commonly replaced hoses, seals and adapters in the quotation and ask for spare-part numbers and lead times so your team can plan for continued use.",
      },
      {
        kind: "paragraph",
        text: "Send Jetsys Defence your aircraft models, servicing tasks, required outlet pressure ranges, cylinder details and adapter list. Include the expected number of servicing jobs per shift and any acceptance documentation you need. This gives the team enough information to quote the trolley, accessories and records as a complete package.",
      },
      {
        kind: "paragraph",
        text: "[Request an aircraft nitrogen servicing equipment quote](/contact-us)",
      },
    ],
  },
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    blocks: [
      {
        kind: "faq",
        entries: [
          {
            question: "What is nitrogen servicing in aircraft maintenance?",
            answer: "It is the controlled use of dry nitrogen to inflate aircraft tires or charge systems such as landing gear shock struts and hydraulic accumulators. The applicable maintenance instructions define the gas quality, pressure and equipment for each task.",
          },
          {
            question: "Why is dry nitrogen used in aircraft tires?",
            answer: "Dry nitrogen helps limit oxygen and moisture inside the tire. Limiting oxygen reduces the risk of combustion inside the tire if it overheats. Use the inflation medium specified for the aircraft and wheel assembly.",
          },
          {
            question: "Can the same nitrogen trolley service tires, struts and accumulators?",
            answer: "Yes, when the trolley has the required regulated pressure ranges, relief protection and rated hoses and adapters for each task. Check whether the quoted configuration uses separate outlets or dedicated charging kits for different pressure ranges.",
          },
          {
            question: "Where do I find the correct nitrogen pressure for my aircraft?",
            answer: "Use the current AMM or applicable CMM for the exact aircraft variant, component and task. Check the conditions attached to the pressure figure, such as temperature, wheel position or whether the component is installed on the aircraft.",
          },
          {
            question: "What is the difference between cylinder pressure and outlet pressure?",
            answer: "Cylinder pressure is the pressure on the supply side. Outlet pressure is the pressure delivered through the regulated circuit. Compare the two at the specified measurement points and confirm that the regulator can maintain the required outlet conditions over the usable supply range.",
          },
          {
            question: "When do I need a nitrogen booster?",
            answer: "Specify a booster when the required delivery pressure is above what a regulator-only setup can maintain over the planned cylinder supply range. Confirm that the booster can deliver the required flow at that pressure and check its drive requirements.",
          },
          {
            question: "How do I choose the right cylinder capacity for my fleet?",
            answer: "Base the estimate on servicing tasks per shift, expected gas use and time between refills. Include a reserve for busy periods and use the equipment’s minimum usable inlet pressure when comparing cylinder options.",
          },
          {
            question: "How do I check whether a charging hose and adapter fit my aircraft?",
            answer: "Match the aircraft or component servicing port to the specified adapter part number and connection type. Then verify the hose end fittings, working pressure rating and reach using the equipment documentation.",
          },
          {
            question: "When is a portable nitrogen kit preferable to a trolley?",
            answer: "A portable kit can suit occasional servicing, confined access or a station that handles one task at a time. A multi-cylinder trolley is worth comparing when several aircraft or bays need service between cylinder changes.",
          },
          {
            question: "What inspection and calibration records should I check?",
            answer: "Ask for the records for the quoted assembly, including applicable leak and functional tests and the calibration status of its gauges. Verify equipment and gauge identifiers, test or calibration dates and any inspection or recalibration intervals.",
          },
        ],
      },
    ],
  },
];

import type { ArticleSection } from "../ResourceReference";

export const title = "Engine Starting Trolley vs Ground Power Unit";
export const metaTitle = "Engine Starting Trolley vs Ground Power Unit | Jetsys Defence";
export const metaDescription =
  "Compare Engine Starting Trolley vs Ground Power Unit for aircraft engine starts, 28 V DC and 400 Hz ground power. Find the right configuration and request a quote.";

export const introduction = [
  "An aircraft engine starting trolley delivers a short burst of electrical power to crank a compatible engine. A ground power unit (GPU) supplies sustained electrical power to a parked aircraft for tasks such as avionics checks, maintenance and turnaround. Some units can do both when the aircraft permits external electrical starting and the equipment is rated for both duties.",
  "The right choice depends on the aircraft’s external power requirements, the loads you need to support and how often the equipment will be used. Jetsys Defence offers portable engine starting trolleys and aircraft GPU configurations for hangars, airport stands and defence flight lines.",
];

export const sections: ArticleSection[] = [
  {
    id: "engine-starting-trolley-vs-ground-power-unit-at-a-glance",
    title: "Engine Starting Trolley vs Ground Power Unit at a Glance",
    blocks: [
      { kind: "heading", title: "Primary Purpose and Typical Applications" },
      {
        kind: "table",
        label: "Primary Purpose and Typical Applications",
        headers: ["Ground support task", "Equipment to specify", "Rating to confirm"],
        rows: [
          ["Crank a compatible aircraft engine with an electric starter", "Aircraft engine starting trolley", "Peak starting current and permitted crank duration"],
          ["Power aircraft systems during maintenance or turnaround", "Aircraft ground power unit", "Continuous output at the required voltage and, for AC, frequency"],
          ["Support electrical starts and sustained ground power", "Combined aircraft start and ground power unit", "Documented ratings for both operating modes"],
        ],
      },
      { kind: "heading", title: "Short-Duration Starting Power vs Continuous Ground Power" },
      {
        kind: "paragraph",
        text: "A start cart must sustain the starter’s high current draw during cranking while keeping voltage at the aircraft within limits. Continuous ground power calls for stable output over the full servicing or test period, including when several onboard systems are drawing power. Compare current in amps for DC equipment and apparent power in kVA for AC equipment, along with the relevant load limits.",
      },
      { kind: "heading", title: "When One Unit Can Support Both Tasks" },
      {
        kind: "paragraph",
        text: "A start-capable GPU can reduce the number of carts a team needs when both tasks use compatible electrical outputs. Confirm the start current and duration, allowable repeat starts, continuous output and connectors for each mode. A dual-output AC/DC GPU provides two electrical output types. Check the quoted model’s starting capability separately.",
      },
    ],
  },
  {
    id: "what-is-an-aircraft-engine-starting-trolley",
    title: "What Is an Aircraft Engine Starting Trolley?",
    blocks: [
      { kind: "heading", title: "How a DC Starting Trolley Supports an Electric Starter" },
      {
        kind: "paragraph",
        text: "A DC starting trolley supplies electrical power through the aircraft’s approved external start connection. The aircraft’s starter motor or starter-generator uses that power to turn the engine during cranking. The trolley must maintain the required voltage at the aircraft connection as the starter draws current.",
      },
      { kind: "heading", title: "Battery-Powered Trolleys and Portable Starting Packs" },
      {
        kind: "paragraph",
        text: "A battery-powered aircraft start cart can be positioned at an aircraft without a nearby mains outlet. A compact starting pack can suit teams that move frequently between aircraft with lighter starting demands, while a wheeled trolley can make a larger battery and heavy-duty leads easier to handle. For either format, compare the available starts per charge with the time and facilities available to recharge.",
      },
      { kind: "heading", title: "Peak Cranking Current, Voltage Drop and Start Duty Cycle" },
      {
        kind: "paragraph",
        text: "Read the peak cranking current alongside the number of seconds the trolley can sustain it and the recovery time between attempts. High current increases the voltage drop through cables and connectors, so the voltage available at the aircraft can be lower than the output measured at the trolley. Confirm performance with the cable assembly specified in the quotation.",
      },
      { kind: "heading", title: "Electric Starting Trolleys vs Pneumatic Air Start Units" },
      {
        kind: "paragraph",
        text: "An electric starting trolley supplies current to an aircraft’s electric starter. A pneumatic air start unit delivers compressed air at the required pressure and flow to drive an air turbine starter. Identify the aircraft’s starting system before specifying the ground equipment.",
      },
    ],
  },
  {
    id: "what-is-a-ground-power-unit-gpu",
    title: "What Is a Ground Power Unit (GPU)?",
    blocks: [
      { kind: "heading", title: "How a GPU Supplies Electrical Power to a Parked Aircraft" },
      {
        kind: "paragraph",
        text: "A GPU provides regulated external electricity through the aircraft’s ground power receptacle. Once the aircraft accepts the supply, it can power permitted onboard loads such as lighting, avionics and cabin or service systems. At the gate, this can reduce auxiliary power unit (APU) runtime during servicing.",
      },
      { kind: "heading", title: "28 V DC, 400 Hz AC and Dual-Output Configurations" },
      {
        kind: "paragraph",
        text: "A 28 V DC aircraft ground power unit serves aircraft specified for that class of supply. A common 400 Hz aircraft GPU configuration delivers three-phase 115/200 V AC for compatible platforms. A dual-output ground power unit can support a mixed fleet with both requirements. Check the ratings and connectors for each output and whether the model allows simultaneous use if your operation requires it.",
      },
      { kind: "heading", title: "Fixed, Mobile and Battery-Electric Ground Power Units" },
      {
        kind: "paragraph",
        text: "A fixed electrical ground power unit suits gates with predictable turnaround demand and installed power infrastructure. A towable diesel ground power unit can move between remote stands where mains power is limited. A battery-electric GPU offers quiet mobile operation with no exhaust at the point of use, with runtime and recharge planning determining how much work it can cover per shift. A solid-state unit can suit a hangar or fixed service position with a suitable electrical supply.",
      },
      { kind: "heading", title: "When a GPU Can Support an Aircraft Engine Start" },
      {
        kind: "paragraph",
        text: "A ground power unit can support aircraft engine starting when the aircraft permits an external electrical start and the GPU meets the specified voltage, current and start duty cycle. Ask for the GPU’s documented start mode and performance under cranking load.",
      },
    ],
  },
  {
    id: "applications-by-aircraft-and-operating-environment",
    title: "Applications by Aircraft and Operating Environment",
    blocks: [
      { kind: "heading", title: "Helicopters, Turboprops and Light Aircraft — External Starting Support" },
      {
        kind: "paragraph",
        text: "A portable engine starting trolley can support compatible helicopters, turboprops and light aircraft with electric starters. Fleet requirements can differ even across aircraft of the same type. Use the exact model and configuration to specify the voltage, start lead and number of consecutive starts. For extended servicing or maintenance checks, confirm the continuous rating of the proposed equipment.",
      },
      { kind: "heading", title: "Airline Gates and Remote Stands — Aircraft Turnaround Power" },
      {
        kind: "paragraph",
        text: "A fixed airport ground power unit can serve aircraft at a regular gate, while a mobile GPU can cover remote stands, overflow positions or outages in fixed power. Size the unit for the planned turnaround loads across the aircraft assigned to those positions. For a 90 kVA GPU, for example, confirm that the assigned fleet and service loads fit the unit’s documented output and overload limits.",
      },
      { kind: "heading", title: "MRO Hangars — Avionics Testing and Maintenance Power" },
      {
        kind: "paragraph",
        text: "Continuous ground power for aircraft maintenance should hold voltage and, for AC equipment, frequency within aircraft limits for the full test session. Consider the loads that may run together during diagnostics, software loading and functional checks. Include the distance from the supply position to the aircraft when specifying an aircraft ground power cart.",
      },
      { kind: "heading", title: "Remote Airfields and Defence Flight Lines — Mobile Ground Support" },
      {
        kind: "paragraph",
        text: "Where installed power is limited, a battery-powered start cart or mobile GPU can support compatible aircraft at dispersed parking positions. Plan around towing or manual handling, ambient temperature, battery charging or fuel availability, and access to service parts. These factors affect whether the unit can cover the fleet’s expected workload between service intervals.",
      },
    ],
  },
  {
    id: "technical-specifications-and-compatibility",
    title: "Technical Specifications and Compatibility",
    blocks: [
      { kind: "heading", title: "Aircraft Ground Power Requirements and Connector Compatibility" },
      {
        kind: "paragraph",
        text: "Use aircraft documentation for voltage, AC frequency and phase where applicable, allowable loads, and external start eligibility. Confirm the connector type, pin arrangement, DC polarity or AC phase sequence as applicable, and any required sensing or interlock functions. Include cable reach and routing in the specification so the supplied lead fits the service position.",
      },
      { kind: "heading", title: "Continuous Output vs Peak Starting Current" },
      {
        kind: "paragraph",
        text: "A continuous rating describes what the unit can deliver for sustained operation under its stated conditions. A peak starting rating describes a short high-current period. Ask for the continuous rating, start current at the specified duration and recovery interval in the same quotation so each can be checked against the intended duty.",
      },
      { kind: "heading", title: "Voltage Stability Under Load and Cable Voltage Drop" },
      {
        kind: "paragraph",
        text: "Cable length, conductor size and connector condition affect the voltage at the aircraft. Ask for output regulation and performance during load changes, including voltage at the aircraft end with the quoted cable and representative loads. For 400 Hz AC equipment, confirm frequency stability as well.",
      },
      { kind: "heading", title: "Repeated-Start Capacity, Runtime and Recharge Time" },
      {
        kind: "paragraph",
        text: "For a battery-powered trolley, evaluate how many starts the unit can support under the expected current draw, crank duration and temperature. For a battery-electric GPU, evaluate runtime at a representative sustained load. Check the charging supply and recharge interval against shift patterns and equipment demand.",
      },
      { kind: "heading", title: "Electrical Protection and Operating Environment" },
      {
        kind: "paragraph",
        text: "Specify the protections appropriate to the selected output, such as over- and undervoltage, overload, short-circuit and thermal protection. Depending on the design, also check DC polarity protection, AC frequency and phase protection, and emergency isolation. For outdoor service, confirm temperature limits, enclosure protection and corrosion resistance.",
      },
    ],
  },
  {
    id: "how-to-choose-between-a-starting-trolley-and-a-gpu",
    title: "How to Choose Between a Starting Trolley and a GPU",
    blocks: [
      { kind: "heading", title: "Engine Starts Only, Ground Power Only or Both" },
      {
        kind: "paragraph",
        text: "Specify a starting trolley if your recurring task is external electrical cranking. Choose a GPU rated for continuous operation if the equipment will mainly power a parked aircraft. If your crew needs both, request a combined unit with ratings for each mode and check whether overlapping tasks across multiple aircraft call for separate equipment.",
      },
      { kind: "heading", title: "Aircraft Fleet Mix and Daily Equipment Demand" },
      {
        kind: "paragraph",
        text: "List the aircraft models, required outputs, connectors, expected starts per shift and typical ground power duration. Map peak demand as well as average demand. Two aircraft may need power at the same time, and a cart in use for a long maintenance session may be unavailable for a scheduled departure.",
      },
      { kind: "heading", title: "Mobility, Charging Infrastructure and Operating Costs" },
      {
        kind: "paragraph",
        text: "Compare aircraft ground power unit price alongside energy or fuel, installation, charging infrastructure, battery replacement and scheduled service. If you’re comparing a used aircraft GPU with a new unit, ask for recent load-test results, service history and spare parts availability. Include cables, connectors and commissioning in the cost comparison.",
      },
      { kind: "heading", title: "Jetsys Defence Starting Trolley and GPU Configurations" },
      {
        kind: "paragraph",
        text: "Jetsys Defence offers portable aircraft starting trolleys in model-dependent 24 V and 28.5 V DC configurations. The GPU range includes 28.5 V DC, 400 Hz AC and dual-output options, with fixed, mobile and battery-electric formats for different operating environments. Cable length, connector configuration and mounting options can be specified for the application.",
      },
      {
        kind: "paragraph",
        text: "[Request a quotation from Jetsys Defence.](/contact-us) Share your aircraft models, intended tasks, required output and connector, expected starts per shift or ground power runtime, and operating location. Ask for the recommended configuration, documented ratings, included accessories and service options in your quote.",
      },
    ],
  },
  {
    id: "manufacturing-quality-testing-and-maintenance",
    title: "Manufacturing Quality, Testing and Maintenance",
    blocks: [
      { kind: "heading", title: "Load Testing and Electrical Protection Checks" },
      {
        kind: "paragraph",
        text: "Ask for test results for the quoted configuration, including continuous load performance or start-duty performance as applicable. Confirm that the records cover output stability and the specified protection functions. If the unit will be delivered with a custom cable, ask for verification with that cable assembly.",
      },
      { kind: "heading", title: "Configuration Records and Aircraft Compatibility Documentation" },
      {
        kind: "paragraph",
        text: "Request the model and serial identification, rating sheet, cable and connector details, and operator and maintenance manuals. Ask the supplier to state the aircraft types and duty profiles used to select the configuration. Check that delivered documentation reflects the equipment and options actually supplied.",
      },
      { kind: "heading", title: "Battery Health, Cable Inspection and Spare Parts" },
      {
        kind: "paragraph",
        text: "Follow the equipment’s inspection and service schedule for battery capacity, charger condition, cable insulation and connector wear. Ask which batteries, leads, connectors and service kits are available and what support is offered for diagnostics and replacement. For equipment shared across a fleet, check that commonly replaced parts can be sourced within the maintenance window.",
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
            question: "What is the difference between an engine starting trolley and a ground power unit?",
            answer: "A starting trolley is primarily rated for short, high-current electrical cranking. A GPU is primarily rated to supply steady electrical power while an aircraft is parked. A combination unit needs documented ratings for both jobs.",
          },
          {
            question: "Can a ground power unit start an aircraft engine?",
            answer: "Yes, if the aircraft permits external electrical starting and the GPU is rated for the required crank current, duration and voltage at the aircraft connection.",
          },
          {
            question: "Can an engine starting trolley provide continuous power for maintenance?",
            answer: "Yes, when the trolley has a regulated continuous output rated for the maintenance load and planned operating time. Check the continuous rating on the exact model before using it for extended avionics work.",
          },
          {
            question: "What is the difference between an electric starting trolley and a pneumatic air start unit?",
            answer: "An electric trolley supplies power to an electric starter. A pneumatic air start unit supplies compressed air to an air turbine starter. The aircraft’s starting system determines which equipment it requires.",
          },
          {
            question: "How do I know whether my aircraft needs 28 V DC or 400 Hz AC ground power?",
            answer: "Check the external power specifications for the exact aircraft model and configuration. Use the aircraft documentation to confirm voltage, frequency and phase where applicable, load limits and connector requirements.",
          },
          {
            question: "Why does peak cranking current matter when choosing a starting trolley?",
            answer: "The trolley must meet the starter’s current demand while maintaining the required voltage at the aircraft. Check the peak rating together with crank duration and permitted repeat attempts.",
          },
          {
            question: "Can one unit handle both engine starts and avionics testing?",
            answer: "Yes, if the model has a documented starting mode and a regulated continuous mode that meets the avionics load and power quality requirements. Confirm aircraft compatibility for each task.",
          },
          {
            question: "How do I verify aircraft connector and cable compatibility?",
            answer: "Compare the aircraft’s specified receptacle and pin functions with the proposed connector. Confirm cable reach, current rating and voltage drop using the cable that will be supplied.",
          },
          {
            question: "What affects the number of starts a battery-powered trolley can support per charge?",
            answer: "Start current, crank duration, recovery intervals, temperature, battery health and state of charge all affect capacity. Ask for repeat-start data measured under conditions that reflect your operation.",
          },
          {
            question: "What test records and documentation should I check before buying?",
            answer: "Check the configuration-specific load-test report, electrical protection checks, output and duty-cycle ratings, connector and cable details, and operating and maintenance manuals. For a used aircraft GPU, also review service history and recent test records.",
          },
        ],
      },
    ],
  },
];

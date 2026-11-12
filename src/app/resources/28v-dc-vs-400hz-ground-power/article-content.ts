export const metaTitle = "28 V DC vs 400 Hz Ground Power for Aircraft | Jetsys Defence";
export const metaDescription = "Compare 28 V DC vs 400 Hz Ground Power for aircraft. Learn which GPU output, connector and load rating suit your fleet, from ramp turnarounds to hangar maintenance.";
export const draftNote = "Heading levels in this draft use # for H1, ## for H2 and ### for H3.";

export const introduction = [
  "An aircraft external power supply keeps onboard systems available while the aircraft is parked. Depending on the aircraft and the task, an aircraft ground power unit (GPU) can support cabin lighting during boarding, power avionics for a maintenance check or provide the current needed for an approved engine start.",
  "The two labels describe different electrical properties. In 28 V DC, 28 volts is the nominal voltage of a direct-current supply. In 400 Hz AC, 400 hertz is the frequency of an alternating-current supply. The aircraft’s approved external-power requirements determine which format, output rating and connector to specify. The stand or hangar layout then determines how to deliver that power.",
];

export const formats = [
  {
    id: "28-v-dc",
    title: "28 V DC",
    paragraphs: [
      "Direct current flows in one direction. A 28 V DC ground power unit regulates its output voltage as the aircraft’s electrical load changes. A mains-powered unit can use a solid-state rectifier to convert incoming AC into regulated DC. A unit intended for engine starts also needs a specified short-duration current capability for the approved start profile.",
      "28 V DC names the nominal aircraft ground power category. 28.5 V DC can be the specified output of a particular unit, as in the Jetsys Defence DC ground power range. Cable voltage drop and load changes can affect the voltage delivered at the aircraft plug. Check the GPU’s output specification and measurement point against the aircraft’s permitted voltage range under load.",
    ],
  },
  {
    id: "400-hz-ac",
    title: "400 Hz AC",
    paragraphs: [
      "Alternating current reverses direction periodically. A frequency of 400 Hz means the AC waveform completes 400 cycles per second. A 115/200 V, 400 Hz aircraft power supply typically provides three-phase output at 115 V from phase to neutral and 200 V between phases. Aircraft designed for 400 Hz may specify a different voltage, so the full output specification matters.",
      "Why do aircraft use 400 Hz instead of 50 or 60 Hz? A higher frequency can allow smaller, lighter components such as transformers and certain motors. The aircraft’s external supply must match the frequency its electrical system expects. A mains-fed 400 Hz frequency converter for aircraft takes a compatible 50 or 60 Hz input and produces regulated 400 Hz AC at the specified voltage.",
    ],
  },
] as const;

export const usage = [
  {
    title: "Ramp turnarounds",
    paragraphs: [
      "At the stand, ground power can keep cabin lighting, flight deck systems and other supported electrical loads available for boarding, cleaning and pre-departure checks. When ground power covers the electrical loads needed at the stand, it can reduce the time the aircraft’s auxiliary power unit (APU) needs to run for electricity.",
      "The Airbus A320neo uses 400 Hz AC for external electrical power. The Dash 8-400 has a documented 28 V DC external power requirement for engine starting. These applications place different demands on ramp equipment. A unit used for a full turnaround needs sufficient continuous capacity, while an approved start requires the specified current for each part of the start profile.",
    ],
  },
  {
    title: "Hangar maintenance and production testing",
    paragraphs: [
      "Maintenance, repair and overhaul (MRO) teams use aircraft ground power for avionics diagnostics, system checks and other servicing tasks. Aircraft manufacturers may also need external power for production testing. An extended troubleshooting session puts a premium on continuous output and stable voltage under changing loads. For teams moving between bays, cable reach, clearance around the aircraft and where the GPU can be parked matter as much as the equipment’s footprint.",
    ],
  },
];

export const configurations = [
  {
    title: "Fixed and mobile ground power",
    paragraphs: [
      "Fixed electrical ground power suits gates or maintenance bays that serve aircraft regularly. It keeps the power connection at the point of use and reduces the need to dispatch a mobile GPU for each aircraft. It requires installation at the stand or bay, with adequate electrical service and a cable route that reaches the aircraft receptacle.",
      "A mobile aircraft GPU can cover remote stands or several hangar bays. A towable unit requires a suitable towing vehicle, storage and enough clearance for positioning. A portable GPU for aircraft can be practical for smaller servicing jobs where its output rating and cable reach meet the requirements.",
    ],
  },
  {
    title: "Diesel, mains and battery power",
    paragraphs: [
      "The energy source determines how the GPU runs. The output specification determines which aircraft it can serve. A diesel ground power unit can cover remote stands independently of site electrical service, with fuel, engine servicing, exhaust and operating noise to account for. A mains-powered unit needs a compatible electrical feed and can suit locations with frequent or extended power demand.",
      "A battery-powered electric ground power unit can serve mobile operations where local exhaust and engine noise are concerns. Its usefulness across a shift depends on runtime at the expected load, charger availability, recharge time and how much turnaround time is available between assignments.",
    ],
  },
  {
    title: "Single-output and combination units",
    paragraphs: [
      "A single-output GPU serves one supply format and can suit a fleet with consistent electrical requirements. A 400 Hz and 28.5 V DC combination ground power unit can cover both formats in a mixed fleet. Jetsys Defence lists a dual-mode configuration with 115/200 V, 400 Hz AC and 28.5 V DC outputs. For the specific unit, verify each output’s rating, included cables and whether the two outputs can operate simultaneously or share available capacity.",
    ],
  },
];

export const specifications = [
  {
    title: "Output ratings and power quality",
    paragraphs: [
      "For DC equipment, compare the regulated voltage and continuous current in amps. If selecting a 28 V DC ground power unit for aircraft engine starting, also check available start current, how long the unit can sustain it and any required recovery time between starts. A high peak rating is meaningful only alongside its duration and the voltage delivered at that load.",
      "For AC equipment, check voltage, frequency, phase, continuous kVA and any specified overload profile. A 90 kVA ground power unit, for example, has a stated apparent-power capacity. Its suitability also depends on the aircraft’s required voltage, power-quality limits and load profile. Where the aircraft specifies them, check voltage regulation, harmonic distortion and how the output recovers after a sudden change in load.",
    ],
  },
  {
    title: "Connectors, cables and protections",
    paragraphs: [
      "Aircraft ground power connectors must match the approved receptacle, including the pin arrangement and any sensing or interlock contacts. The aircraft documentation defines the interface. The GPU documentation identifies the supplied plug, cable assembly and available protections. Check the cable’s current rating, length and voltage drop at the expected load. Relevant protections can include overvoltage, undervoltage and overload protection, with frequency or phase monitoring for AC and polarity protection for DC where specified.",
    ],
  },
  {
    title: "Duty cycle and site conditions",
    paragraphs: [
      "Compare duty cycle, ambient temperature limits, weather exposure and ventilation requirements against the actual work area. Fixed units depend on the available electrical feed, mounting space and cable routing. For mobile units, consider towing access, parking and the fuel or charging infrastructure needed to keep the unit available. Apply the operating limits in the datasheet for the proposed model and configuration.",
    ],
  },
];

export const selectionSteps = [
  "Confirm the aircraft’s approved external-power format. Identify the exact aircraft variant and task, then check the applicable external-power requirements.",
  "Match the output rating and interface. Verify voltage and polarity for DC or voltage, frequency and phase for AC. Confirm the continuous and peak ratings, plug and cable assembly.",
  "Identify where and how often the equipment will be used. Estimate power-on time, peak demand, concurrent aircraft and movement between stands or bays.",
  "Choose a configuration and energy source. Match fixed or mobile deployment to the site’s electrical supply, charging access or fuelling arrangements.",
  "Check the proposed unit’s documentation. Compare the model-specific datasheet, configuration details and applicable test evidence with the aircraft and site requirements.",
];

export const documentation = [
  "The model-specific datasheet should state the electrical ratings, operating limits, connector options and standard equipment. Where a factory acceptance test report is part of the specification, check which configuration was tested, where output was measured and which loads and durations the tests covered. For example, a start-capable DC unit can be evaluated against a documented short-duration load profile, while an AC unit can be evaluated for voltage and frequency stability under changing loads.",
  "Applicable conformity documentation should identify the model or configuration, the requirements assessed and the scope of that assessment. The Jetsys Defence range includes 400 Hz AC and 28.5 V DC options for fixed and mobile applications. Ground power unit prices are easier to compare when each quotation covers the same scope, including the cable assembly, mounting hardware and any required acceptance testing or commissioning.",
];

export const faqs = [
  {
    question: "What is the difference between 28 V DC and 400 Hz ground power?",
    answer: "28 V DC is a direct-current supply identified by its nominal voltage. 400 Hz ground power is an alternating-current supply identified by its frequency. The AC specification also includes voltage, phase and capacity.",
  },
  {
    question: "Are 28 V DC and 28.5 V DC the same?",
    answer: "They can describe equipment in the same nominal DC category. A 28.5 V figure may be the GPU’s specified output, while 28 V identifies the nominal format. Compatibility depends on the aircraft’s allowable voltage at the connector under load and the unit’s current capability.",
  },
  {
    question: "Does 400 Hz specify the output voltage?",
    answer: "400 Hz specifies frequency alone. The datasheet gives the output voltage separately, such as 115/200 V AC, alongside the phase configuration and kVA rating.",
  },
  {
    question: "Which type of ground power does my aircraft need?",
    answer: "Use the approved external-power instructions for the exact aircraft variant and task. For example, the Pilatus PC-24 uses DC power for servicing and approved engine starts. The Airbus A320neo specifies three-phase 400 Hz AC for external electrical power.",
  },
  {
    question: "Can 28 V DC be used for an aircraft that requires 400 Hz AC?",
    answer: "An aircraft input specified for 400 Hz AC requires a compatible AC supply. Use 28 V DC only on an aircraft input and for a task approved for that DC supply.",
  },
  {
    question: "How do amps and kVA describe GPU capacity?",
    answer: "Amps measure electrical current and commonly describe a DC GPU’s continuous and starting capacity. kVA measures apparent power, an AC capacity rating that accounts for voltage and current. The real power in kilowatts depends on the load’s power factor. Check the associated load conditions and duration when comparing ratings.",
  },
  {
    question: "Can one GPU provide both 28 V DC and 400 Hz AC?",
    answer: "Yes. A combination GPU can provide both formats when configured with the appropriate outputs. Check the rating of each output and whether the configuration permits simultaneous operation.",
  },
  {
    question: "How do I check ground power plug and cable compatibility?",
    answer: "Check the aircraft receptacle specification, mating plug, pin arrangement and any control contacts. Confirm the cable length and rating, then verify that the assembly delivers power within the aircraft’s limits at the connector under load.",
  },
  {
    question: "Are both formats available in fixed and mobile configurations?",
    answer: "Yes. Both 28 V-class DC and 400 Hz AC are available in fixed and mobile configurations. The suitable arrangement depends on stand or hangar layout, the load and how often the GPU needs to move.",
  },
  {
    question: "What documents should I check before selecting a GPU?",
    answer: "Compare the aircraft’s approved external-power instructions with the proposed GPU’s datasheet, connector and cable specification, relevant test reports and any conformity documentation required by the project. Confirm that the records cover the configuration under evaluation.",
  },
];

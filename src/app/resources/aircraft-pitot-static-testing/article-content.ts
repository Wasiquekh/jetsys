export const metaTitle = "Aircraft Pitot Static Testing and Test Equipment | Jetsys Defence";
export const metaDescription = "Learn what aircraft pitot-static testing checks, when it’s needed, and how to choose a test set for leak checks, altimeter testing and air data system verification.";
export const draftNote = "Heading levels in this draft use # for H1, ## for H2 and ### for H3.";

export const introduction = [
  "Pitot-static testing checks the pressure circuits and indications that aircraft use to determine airspeed, altitude and vertical speed. Reliable readings depend on the pressure reaching the instruments or air data system and on that equipment interpreting it correctly.",
  "A leak check evaluates whether a pitot or static circuit holds pressure within the specified limits. An indication check evaluates how an instrument or air data system responds to known pressure conditions. The aircraft’s approved maintenance documentation determines which checks are needed, which parts of the system they cover and what results are acceptable.",
];

export const principles = [
  {
    title: "Pitot pressure",
    paragraphs: [
      "A pitot probe facing the airflow senses total pressure, also called pitot pressure. The difference between total and static pressure is impact pressure. A conventional airspeed indicator uses this difference to display indicated airspeed. On an aircraft with an air data computer, the computer processes the pressure inputs and supplies airspeed data to the relevant displays and systems.",
    ],
  },
  {
    title: "Static pressure",
    paragraphs: [
      "Static ports sense the surrounding atmospheric pressure. The altimeter uses static pressure to indicate altitude relative to its selected reference setting. The vertical speed indicator (VSI) uses the rate of change of static pressure to indicate climb or descent. Static pressure also provides one of the two inputs used to determine indicated airspeed.",
    ],
  },
  {
    title: "Conventional and digital installations",
    paragraphs: [
      "In a conventional installation, pressure lines feed individual instruments. In a digital installation, pressure inputs can go to an air data computer, which sends calculated values to displays and other connected systems. The installation determines whether the maintenance task calls for an individual instrument check, an air data computer check or a check of the integrated system.",
    ],
  },
  {
    title: "Leak and indication checks",
    paragraphs: [
      "A pitot-static leak test shows whether the tested circuit meets its pressure-retention criteria. A separate indication check establishes whether the instrument or air data output is within tolerance at the required test points. Use the limits and acceptance criteria specified for the aircraft, system and maintenance task.",
    ],
  },
];

export const testingTriggers = [
  {
    title: "Scheduled inspections",
    paragraphs: [
      "The pitot-static test interval depends on the aircraft’s maintenance programme, the equipment installed and the rules that apply to its operation. Scheduled inspection packages may combine static-system integrity, aircraft altimeter testing and pressure-altitude reporting checks. The required scope depends on which maintenance and regulatory requirements apply.",
      "For example, U.S. 14 CFR § 91.411 applies to airplanes and helicopters operating under instrument flight rules (IFR) in controlled airspace. The rule requires the aircraft’s static pressure systems, altimeters and automatic pressure-altitude reporting systems to have passed the applicable tests and inspections within the preceding 24 calendar months. When pitot-static and transponder testing are scheduled together, the pressure-altitude reporting check and the transponder’s own required tests have distinct acceptance criteria.",
    ],
  },
  {
    title: "After maintenance",
    paragraphs: [
      "Replacing a pressure line, fitting, instrument or air data component can trigger a post-maintenance test. The work performed determines which circuits or indications need to be verified. For operations covered by U.S. 14 CFR § 91.411, opening and closing the static system requires a static-system test and inspection, with exceptions for use of system drains and alternate static pressure valves.",
    ],
  },
  {
    title: "Unexpected indications",
    paragraphs: [
      "Inconsistent airspeed or altitude indications can also prompt pitot-static system troubleshooting. The maintenance team uses the symptom, the aircraft configuration and the approved fault-isolation guidance to determine whether to check circuit integrity, instrument response or both.",
    ],
  },
];

export const equipment = [
  {
    title: "Pitot-static leak testers",
    paragraphs: [
      "A leak tester measures pressure change over the test period to help evaluate circuit integrity. Available functions depend on the model. A unit may support one pressure circuit or both pitot and static channels. For line or hangar maintenance, compare portability, the circuits covered and whether the equipment displays, stores or exports the results your team needs.",
    ],
  },
  {
    title: "Air data test sets",
    paragraphs: [
      "An air data test set (ADTS) can generate controlled pressures corresponding to selected airspeed or altitude conditions. Suitable models support tasks such as airspeed indicator testing, aircraft altimeter testing and air data computer testing. Where the procedure calls for vertical speed indicator testing, the set needs to support the relevant change in simulated altitude over time.",
      "An air data test set with altitude and airspeed simulation can check indications at specified points as well as perform leak checks if that function is supported. A tester designed primarily for leak checks is evaluated first on the pressure channels, control and measurement capabilities needed to establish system integrity.",
    ],
  },
  {
    title: "Adapters and hoses",
    paragraphs: [
      "Pitot-static test adapters must match the aircraft ports and the interfaces on the test set. Worn seals, damaged hoses or a poor fit can affect the measured result. The maintenance team checks the condition and suitability of the full setup, along with the test instrument’s calibration status, for the required pressure range and accuracy.",
    ],
  },
  {
    title: "Equipment calibration",
    paragraphs: [
      "Testing the aircraft assesses its pressure circuits and indications. Calibrating the test equipment uses appropriate reference standards to verify its pressure measurement performance. The calibration record helps establish whether the tester is suitable for the aircraft check.",
    ],
  },
];

export const procedureSteps = [
  "Identify the aircraft and the required check. Confirm the aircraft variant, system configuration and whether the task covers a leak check, indication check or both.",
  "Review the approved maintenance documentation. Identify the test scope, limitations, acceptance criteria and requirements for the personnel performing the work.",
  "Select suitable test equipment. Match the pressure channels, range, accuracy and adapters to the task, and verify the tester’s calibration status.",
  "Apply controlled pressure conditions and monitor the response. Under the approved procedure, the test set establishes the required conditions so the maintenance team can observe pressure change or compare aircraft indications with simulated values.",
  "Evaluate and document the outcome. Compare the measured results with the applicable criteria and record the outcome in the relevant maintenance documentation.",
];

export const procedureNote = "Aircraft-specific connection sequences, operating settings and pass/fail limits come from the approved maintenance procedure for the aircraft and system being tested.";

export const results = [
  {
    title: "Interpreting test results",
    paragraphs: [
      "A pressure change outside the permitted limit can indicate leakage somewhere in the circuit or test setup. The source could be an adapter seal, a test hose, an aircraft fitting, a pressure line or a connected component. An unexpected airspeed, altitude or vertical speed indication can also result from a restriction, a test setup issue or an instrument or air data fault. Treat the reading as evidence for fault isolation and use the approved checks to identify the cause.",
    ],
  },
  {
    title: "Recording the test",
    paragraphs: [
      "The test record should identify the aircraft, the system or channel tested, and the test equipment used, including its serial or asset number and calibration status. Record the date, the check performed, the applicable procedure and acceptance criteria, the measured results and the outcome. Include follow-up actions and any additional entries required by the maintenance programme or applicable rules.",
    ],
  },
];

export const selectionIntro = "Start with the work your team performs across the fleet. A pitot-static test set should cover the applicable tasks with suitable pressure control, measurement performance and aircraft interfaces.";

export const selectionCriteria = [
  "Required checks and aircraft compatibility. Identify whether you need leak checks, altitude and airspeed simulation, vertical speed checks or air data verification. For reduced vertical separation minimum (RVSM) maintenance tasks, match the equipment to the aircraft’s applicable instructions for continued airworthiness.",
  "Pitot and static channels. Check which channels the unit supports and whether it can control them together when the maintenance procedure requires it.",
  "Range, accuracy and resolution. Match the required range and accuracy at the actual test points. Resolution describes the smallest displayed increment. The accuracy specification describes how closely the reading is expected to agree with the reference under stated conditions.",
  "Adapters and interfaces. Check which hoses, seals and adapters are included and which aircraft require a separate kit. Confirm any remote control or data interfaces needed by the maintenance team.",
  "Portability and power. Consider transport, setup space, power supply and the operating environment for hangar or field use.",
  "Calibration and test records. Review the supplied calibration documentation, service options and the ability to save or export results. Compare pitot-static test set prices for equivalent configurations, including aircraft-specific adapters and any reporting options.",
];

export const products = [
  {
    id: "air-data",
    paragraph: "Jetsys Defence Air Data Test System. The ADTS supports controlled altitude and airspeed simulation, with automated leak detection and remote operation options. Jetsys lists a simulated altitude range of −4,000 to 60,000 ft and an airspeed range of 0 to 650 kt. This configuration is relevant when the work includes aircraft instrument or air data indication checks as well as circuit integrity checks.",
  },
  {
    id: "pitot-leak",
    paragraph: "Jetsys Defence Automated Pitot Leak Tester. The tester is designed around automated pitot and static leak profiles, with pressure stabilisation, leak-rate calculation and digital readings. For a typical configuration, Jetsys lists 0.001 inHg pressure resolution on both channels. The catalogue also lists altitude and airspeed functions. When comparing it with the ADTS, check the required profiles, aircraft adapters, data export and calibration documentation for the proposed configuration.",
  },
] as const;

export const faqs = [
  {
    question: "What is pitot-static testing?",
    answer: "It is aircraft ground testing that can check pitot and static pressure circuit integrity and verify how instruments or air data systems respond to specified pressure conditions. The aircraft’s maintenance documentation defines the required checks.",
  },
  {
    question: "What is the difference between pitot pressure and static pressure?",
    answer: "Pitot pressure is the total pressure sensed by a probe facing the airflow. Static pressure is the surrounding atmospheric pressure sensed at the static ports. Their difference is used to determine indicated airspeed.",
  },
  {
    question: "What is the difference between a leak check and an indication check?",
    answer: "A leak check measures how well a pressure circuit holds a specified condition. An indication check compares the aircraft’s displayed or reported values with the expected values at selected test points.",
  },
  {
    question: "When are pitot-static checks needed after maintenance?",
    answer: "Check the post-maintenance instructions for the work performed. Opening a pressure circuit or replacing a line, instrument or air data component can require checks of the affected circuit or indications. Applicable rules may specify additional inspections or tests.",
  },
  {
    question: "How often is pitot-static testing required?",
    answer: "The maintenance programme, applicable regulations, installed equipment and type of operation determine the scheduled interval. Maintenance events or unexpected indications can trigger additional checks between scheduled inspections.",
  },
  {
    question: "Which instruments can a pitot-static test evaluate?",
    answer: "Depending on the aircraft and the approved procedure, a test can evaluate the airspeed indicator, altimeter and vertical speed indicator. Digital installations can also require checks of air data computer outputs or connected displays.",
  },
  {
    question: "How does a leak tester differ from an air data test set?",
    answer: "A dedicated leak tester is intended primarily to measure pressure retention. An air data test set can simulate altitude and airspeed conditions for indication checks and may also include leak-test functions. Check the capability of the specific model because the functions can overlap.",
  },
  {
    question: "What can cause a pitot-static leak test to fail?",
    answer: "Possible causes include a poor adapter seal, a damaged test hose, loose aircraft fittings, a leaking line or a connected component. The approved fault-isolation procedure helps identify whether the source is in the aircraft or the test setup.",
  },
  {
    question: "How does an aircraft test differ from test equipment calibration?",
    answer: "An aircraft test checks the installed system against the applicable maintenance criteria. Calibration checks the air data test set’s measurements against reference standards and documents its performance for future use.",
  },
  {
    question: "What should a pitot-static test record include?",
    answer: "Record the aircraft and test equipment identification, date, calibration status, check performed, procedure reference, applicable limits, measured results and outcome. Include any follow-up actions and entries required by the maintenance programme or applicable rules.",
  },
];

import type { ArticleSection } from "../../resources/ResourceReference";

export const title = "Custom Test Rig & Test Bench Design";
export const metaTitle = "Aerospace Test Benches & Test Rig Supply in India | Jetsys Defence";
export const metaDescription =
  "Aerospace test benches and test rigs for hydraulic, pneumatic, fuel, actuation and avionics components. Supply, integration, installation and support. Enquire with Jetsys Defence.";

export const introduction = [
  "A hydraulic actuator or an avionics computer cannot be judged by inspection. Performance only appears under load, at pressure, at temperature, driven through the full operating envelope — and an aircraft is no place to do that safely or repeatably. A test bench recreates the conditions the component will meet in service, applies them under control, and records what it did. That is the purpose: turning a question about a component into measured, repeatable evidence.",
  "This page covers test benches and rigs for aerospace and defence components and systems — hydraulic, pneumatic, fuel, actuation, avionics, electrical and system integration. It does not cover air data test sets, environmental and thermal vacuum test facilities, or fuel quality testing equipment; each of those has its own page, and this one links across rather than duplicating them.",
  "A bench is bought to satisfy a test specification — a component maintenance manual, a qualification test procedure, an acceptance test schedule. The specification comes first; the bench is engineered to it. This page is written for aerospace and defence OEMs, MRO organisations, DPSUs, DRDO laboratories and research establishments, and engineering teams specifying or replacing bench capability. Jetsys Defence supplies and integrates test benches and rigs, with installation, commissioning and support.",
];

export const sections: ArticleSection[] = [
  {
    id: "what-is-a-test-bench",
    title: "What Is a Test Bench?",
    blocks: [
      {
        kind: "paragraph",
        text: "A test bench is a controlled mechanical, fluid and electrical platform that applies defined conditions to an aerospace component or sub-assembly and measures its response, so that functional performance can be verified repeatably against a specification.",
      },
      {
        kind: "paragraph",
        text: "Every test bench, from a single-function leak tester to a full integration rig, does three things. It supplies the power, pressure, flow or signals the unit needs. It interfaces correctly with the unit under test. And it measures what happened, accurately enough for the result to count as evidence rather than an impression. Those three functions are the structure of the anatomy section further down, and they are also the quickest way to sanity-check any bench proposal.",
      },
      {
        kind: "paragraph",
        text: "The consequence worth understanding early: a test bench is engineered to a test specification rather than selected from a range. Two benches built for the same component, to two different specifications, can look nothing alike — and a bench that satisfies one organisation's procedure may be unusable for another's.",
      },
      { kind: "heading", title: "Test Bench, Test Rig, Test Stand and ATE: The Terms" },
      {
        kind: "paragraph",
        text: "These terms overlap, and the industry does not use them consistently. Saying so is more useful than inventing a taxonomy nobody follows:",
      },
      {
        kind: "list",
        items: [
          "Test bench — the general term, most often used for component-level functional testing",
          "Test rig — common for development and research work, and for larger system-level setups",
          "Test stand — widely used for fluid power and engine work, and in American usage generally",
          "ATE, automatic test equipment — where testing is driven by a test program rather than an operator, most often in avionics and electronics",
          "Tester, test set, test console — used for smaller or more specific equipment",
          "Iron bird — a full system integration rig recreating an aircraft's architecture on the ground",
        ],
      },
      {
        kind: "paragraph",
        text: "In an enquiry, what matters is not which word is used but which test specification applies and what the unit under test is.",
      },
      { kind: "heading", title: "What This Page Covers, and What It Does Not" },
      {
        kind: "paragraph",
        text: "Covered: functional test benches and rigs for hydraulic, pneumatic, fuel, actuation, avionics, electrical and system integration testing.",
      },
      {
        kind: "paragraph",
        text: "Not covered here: [air data test sets and their calibration](/resources/air-data-test-set-calibration); environmental and [thermal vacuum test facilities](/resources/thermal-vacuum-testing); and [aviation fuel quality testing equipment](/resources/aviation-fuel-testing-equipment). Each has its own page in the [ground test equipment range](/products/aviation-equipment/ground-test-equipment).",
      },
    ],
  },
  {
    id: "why-components-are-tested-on-a-bench",
    title: "Why Components Are Tested on a Bench",
    blocks: [
      {
        kind: "paragraph",
        text: "Performance only appears under load. A valve, pump or actuator reveals its real characteristics at pressure, at flow, at temperature and through its full stroke. None of that is visible on inspection, and none of it can be inferred from a dimensional check.",
      },
      {
        kind: "paragraph",
        text: "The aircraft is the wrong place to find out. On-wing testing is slow, limited in what it can exercise, hazardous for some failure modes, and impossible to repeat identically.",
      },
      {
        kind: "paragraph",
        text: "Repeatability is the point. A bench applies the same conditions in the same sequence every time, which is what makes two results comparable — between units, between batches, and between years.",
      },
      {
        kind: "paragraph",
        text: "Acceptance requires evidence, not opinion. Releasing a component to service rests on a measured result against a specified limit, recorded and traceable to the instrument that produced it.",
      },
      {
        kind: "paragraph",
        text: "Failures must be reproducible to be diagnosed. A fault reported in service is investigated by recreating it on a bench. It is also how no-fault-found units get resolved rather than recycled through the system at the operator's expense.",
      },
      {
        kind: "paragraph",
        text: "Qualification demands conditions the aircraft cannot provide. Endurance cycling, over-pressure, off-nominal and failure-case testing all need a rig deliberately built to go beyond normal operating conditions.",
      },
      {
        kind: "paragraph",
        text: "Integration behaviour is not the sum of component behaviour. Subsystems interact, and only a system-level rig exposes how.",
      },
      {
        kind: "paragraph",
        text: "Those six requirements pull in different directions, which is why the same bench technology serves three quite different jobs. Knowing which of the three a bench is for is the first question in specifying one — and the most common place a specification goes wrong.",
      },
    ],
  },
  {
    id: "the-three-purposes-a-test-bench-serves",
    title: "The Three Purposes a Test Bench Serves",
    blocks: [
      {
        kind: "table",
        label: "The Three Purposes a Test Bench Serves",
        headers: ["Purpose", "What it has to do", "Typical users", "What drives the design"],
        rows: [
          ["Development and research", "Explore behaviour, find limits, accommodate a changing design", "OEM and research engineering teams", "Flexibility and instrumentation depth"],
          ["Production acceptance", "Accept every unit off a line against a fixed procedure", "Manufacturing and quality functions", "Throughput, repeatability, operator independence"],
          ["MRO overhaul and release", "Test many part numbers after repair, to the maintenance manual", "Overhaul workshops and base repair organisations", "Breadth of coverage and turnaround time"],
        ],
      },
      { kind: "heading", title: "Development and Research Rigs" },
      {
        kind: "paragraph",
        text: "Used while a component or system is still being designed. Flexibility matters more than throughput: the rig has to accommodate changing configurations, instrument more than the final product needs, and deliberately go beyond the operating envelope to find limits. Development rigs are often one-offs, heavily instrumented, and operated by engineers rather than technicians — which also means they are rarely fully automated, because the procedure changes faster than software can be rewritten.",
      },
      { kind: "heading", title: "Production Acceptance Testing" },
      {
        kind: "paragraph",
        text: "Used to accept each unit coming off a production line against an acceptance test procedure. Here throughput, repeatability and operator independence dominate. The test is fixed, the result is pass or fail, and the bench is designed to run the same sequence many times with minimal setup and complete records. The record is as much the product of the bench as the decision is.",
      },
      { kind: "heading", title: "MRO Overhaul and Release Testing" },
      {
        kind: "paragraph",
        text: "Used to test components after repair or overhaul, to the component maintenance manual, before release to service. What makes this distinctive is the workload: a mixed flow of many part numbers, where breadth of coverage beats depth of specialisation, and where turnaround time carries direct commercial cost. Avionics MRO benches in particular carry extensive test program libraries, so a procedure does not have to be written from scratch for each unit — and early identification of no-fault-found units is a direct turnaround saving rather than a technical nicety.",
      },
      {
        kind: "paragraph",
        text: "A bench optimised for one of these three is usually a poor fit for the others. Trying to buy one bench for all three is the most common cause of disappointment in this category, and it is worth resolving before a specification is written rather than after a quotation arrives.",
      },
    ],
  },
  {
    id: "types-of-aerospace-test-benches",
    title: "Types of Aerospace Test Benches",
    blocks: [
      {
        kind: "paragraph",
        text: "Most enquiries begin here: finding the bench type that matches the component family in front of you. The table scopes the requirement; the subsections explain what makes each type technically demanding, because that is what separates a realistic quotation from an optimistic one.",
      },
      {
        kind: "table",
        label: "Types of Aerospace Test Benches",
        headers: ["Bench type", "What it tests", "What the bench must provide", "Typical users"],
        rows: [
          ["Hydraulic component test bench", "Pumps, motors, actuators, cylinders, valves, accumulators, filters, reservoirs", "Controlled flow and pressure, fluid temperature control, loading, cleanliness", "OEMs, MRO workshops, base repair organisations"],
          ["Pneumatic test bench", "Valves, regulators, actuators, bleed air and ECS components", "Conditioned and dried air at volume, compressible-flow control, stored-energy containment", "ECS and pneumatic component shops"],
          ["Fuel system test bench", "Fuel pumps, valves, metering units, fuel control units, gauging", "Testing in fuel or approved test fluid, area classification, accurate wide-range flow measurement", "Engine accessory and fuel system shops"],
          ["Actuation and flight control rig", "Flight control actuators, servo actuators, actuation systems", "Controlled opposing load plus commanded motion, two loops in real time", "Actuation OEMs, qualification and acceptance testing"],
          ["Avionics and LRU test bench", "Computers, displays, radios, navigation and surveillance units", "Interface adapters, mass interconnect, simulation I/O, test executive", "Avionics MRO, electronics manufacturers"],
          ["Electrical and electromechanical bench", "Generators, starter-generators, motors, relays, contactors, TRUs, harnesses", "Controlled mechanical drive, load banks, power quality and dielectric measurement", "Electrical accessory shops, harness manufacturers"],
          ["Balancing and rotating component bench", "Rotors, drive shafts, transmission components", "Speed control, vibration measurement, containment and guarding", "Transmission and rotorcraft shops"],
          ["Leak test bench", "Proof pressure and internal leakage, by decay, mass flow or tracer gas", "Temperature stability, sensitive flow measurement, defined procedures", "Component shops and line maintenance"],
          ["Iron bird and integration rig", "Interaction between subsystems before first flight", "Aircraft-representative architecture at full scale", "Programme-level development establishments"],
        ],
      },
      { kind: "heading", title: "Hydraulic Component Test Benches" },
      {
        kind: "paragraph",
        text: "The largest category: benches that test hydraulic components, rotating and non-rotating — pumps and motors, actuators and cylinders, valves of every kind, accumulators, filters and reservoirs. The bench must deliver controlled flow and pressure across a wide range, hold fluid temperature, apply load to the unit under test, and measure pressure, flow, position, force, speed and leakage. The real engineering difficulty is not pressure but fluid cleanliness and temperature control: a bench that contaminates the units it tests destroys far more value than it proves. Fluid compatibility matters too, since phosphate ester and mineral-based fluids are not interchangeable in a bench's seals and pipework.",
      },
      { kind: "heading", title: "Pneumatic Test Benches" },
      {
        kind: "paragraph",
        text: "Benches for pneumatic valves, regulators, actuators, bleed air and environmental control components. What differs from hydraulic work is fundamental rather than incidental: air is compressible, so control is harder and set points settle more slowly; flow volumes are far larger for the same work; and the supply has to be conditioned and dried before it reaches the unit. Noise is a siting constraint, and stored pneumatic energy carries hazards that hydraulic work does not. High-pressure gas testing, where the application calls for it, raises all of these further.",
      },
      { kind: "heading", title: "Fuel System Test Benches" },
      {
        kind: "paragraph",
        text: "Benches for fuel pumps, valves, metering units, fuel control units and gauging components. The distinguishing constraints are environmental rather than mechanical: testing in fuel or an approved test fluid, flammability and area classification for the room as well as the bench, fluid conditioning and recovery, and the genuine difficulty of measuring flow accurately across a wide range. These are among the more demanding benches both to build and to site, and the siting question should be settled before the design is.",
      },
      { kind: "heading", title: "Actuation and Flight Control Test Rigs" },
      {
        kind: "paragraph",
        text: "Rigs for flight control actuators, servo actuators and complete actuation systems. What makes them distinctive is that the rig must apply a controlled opposing load representing the aerodynamic load the actuator will work against, while simultaneously commanding the actuator through its envelope. Two control loops run against each other in real time, to tight limits, and the loading system is often the harder half of the engineering. These rigs are frequently built to run acceptance and qualification testing on several units in parallel, and the category spans primary flight control, leading edge devices and rotorcraft servo actuators.",
      },
      { kind: "heading", title: "Avionics and LRU Test Benches" },
      {
        kind: "paragraph",
        text: "Benches and automatic test equipment for line-replaceable units — computers, displays, radios, navigation and surveillance units. The architecture is worth stating plainly because it is genuinely clarifying: the unit under test connects through an interface adapter to a mass interconnect, which connects to simulation and measurement hardware, all driven by a test executive running the unit's simulated aircraft environment. Commercially, breadth of part-number coverage matters more than depth, test program libraries avoid writing procedures from scratch, and identifying a no-fault-found unit early is a direct saving.",
      },
      { kind: "heading", title: "Electrical and Electromechanical Test Benches" },
      {
        kind: "paragraph",
        text: "Benches for generators, starter-generators, motors, relays, contactors, transformer rectifier units and wiring assemblies. These need load banks, controlled mechanical drive, power quality measurement, and insulation and dielectric testing. The characteristic complication is that many of these units must be driven mechanically while being measured electrically, so the bench is really two machines working in step — which is also why drive sizing and instrumentation isolation are where these benches are won or lost.",
      },
      { kind: "heading", title: "Balancing and Rotating Component Benches" },
      {
        kind: "paragraph",
        text: "Benches for balancing rotors, drive shafts and transmission components, and for running rotating assemblies at speed. They require precise speed control, vibration measurement, and containment and guarding appropriate to the stored rotational energy. Balancing is treated as its own discipline rather than a bench function, because the measurement, the correction and the acceptance criteria are specialised — and because a balancing result is only meaningful on a mounting arrangement that represents the installation.",
      },
      { kind: "heading", title: "Leak Test Benches" },
      {
        kind: "paragraph",
        text: "Benches dedicated to leak and proof pressure testing, by pressure decay, mass flow or tracer gas methods. Internal leakage testing of installed aircraft systems is a distinct activity with its own equipment and defined procedures — ITCAN and TARAN are the procedures commonly named for aircraft hydraulic system internal leakage work. The general point about leak testing is that it demands temperature stability and patience, because thermal effects look exactly like leaks and an impatient operator will find leaks that are not there.",
      },
      { kind: "heading", title: "Iron Bird and System Integration Rigs" },
      {
        kind: "paragraph",
        text: "The largest and most complex category: a rig recreating an aircraft's complete architecture on the ground — hydraulic actuators, flight control computers, mechanical control surfaces and their interconnects — so that interactions between subsystems can be verified before anything is installed on a prototype. The purpose is to find integration behaviour component testing cannot reveal, and to retire programme risk before first flight. These are programme-scale facilities rather than items of equipment, and India has established capability in this area within the defence research establishments.",
      },
      {
        kind: "paragraph",
        text: "No pressure, flow, temperature or accuracy figures appear in this section. Those belong to a specification discussion against a particular test procedure, not to a web page — and a figure quoted without its test conditions is worse than no figure at all.",
      },
    ],
  },
  {
    id: "anatomy-of-a-test-bench",
    title: "Anatomy of a Test Bench",
    blocks: [
      {
        kind: "paragraph",
        text: "Returning to the three functions from the definition above — supply, interface, measure — every bench is these same elements at different scale. A leak tester and an iron bird differ in size and cost, not in structure. Reading a bench proposal element by element is the fastest way to find what has been left out.",
      },
      { kind: "heading", title: "The Power and Supply Section" },
      {
        kind: "paragraph",
        text: "Hydraulic power packs, pneumatic supply and conditioning, electrical supply, and the heating and cooling that sets fluid or ambient temperature. Sizing is where this goes wrong: the supply has to meet the most demanding test in the schedule, not the average one. An under-sized supply is the most common reason a bench cannot complete its own test programme, and it is expensive to correct after build.",
      },
      { kind: "heading", title: "The Unit Under Test Interface" },
      {
        kind: "paragraph",
        text: "Mounting fixtures, adapters, hoses and connectors — and for electronics, the interface adapter and mass interconnect. This is where most of the part-number-specific cost sits, and it is what decides whether a new unit can be added to an existing bench at all. Interface architecture, more than any other single choice, determines how extensible a bench turns out to be over a thirty-year life.",
      },
      { kind: "heading", title: "Instrumentation and Measurement" },
      {
        kind: "paragraph",
        text: "Pressure, flow, temperature, force, torque, position, speed, vibration and electrical measurement, each selected for range and accuracy against what the test specification demands. The discipline is to work backwards: instrument selection follows from the tolerance being verified. Over-instrumenting costs money for no gain; under-instrumenting produces results that are inadmissible, which is a far more expensive mistake because it is usually discovered late.",
      },
      { kind: "heading", title: "Control System and Test Executive" },
      {
        kind: "paragraph",
        text: "The controller that sequences the test, holds set points and runs the programme, together with the operator interface. Closed-loop control is needed wherever load or position must be held rather than merely applied. On automated benches a test executive runs stored programmes, which is what makes the result independent of who is operating the bench that day.",
      },
      { kind: "heading", title: "Data Acquisition, Recording and Reporting" },
      {
        kind: "paragraph",
        text: "Sampling, logging, limit checking, pass and fail determination, and the test report itself. On acceptance and release testing the report is the deliverable — the component cannot be released without it — so reporting is a requirement rather than a convenience, and a bench that measures correctly but reports awkwardly will be resented daily.",
      },
      { kind: "heading", title: "Fluid Conditioning and Contamination Control" },
      {
        kind: "paragraph",
        text: "Filtration, cleanliness monitoring, temperature conditioning, fluid sampling and purification. This belongs in the anatomy rather than being treated as plumbing, because the bench's fluid cleanliness directly determines whether it is testing components or damaging them. A bench that injects contamination into a serviceable unit creates work rather than clearing it.",
      },
      { kind: "heading", title: "Safety Systems and Guarding" },
      {
        kind: "paragraph",
        text: "Pressure relief, interlocks, emergency stop, containment and guarding around rotating or stored-energy equipment, and area classification where flammable fluids are involved. The point that concentrates the mind: the failure cases a bench is designed to provoke are exactly the ones its safety design has to contain.",
      },
    ],
  },
  {
    id: "how-a-test-bench-is-specified-and-built-step-by-step",
    title: "How a Test Bench Is Specified and Built, Step by Step",
    blocks: [
      {
        kind: "paragraph",
        text: "A test bench is a bespoke engineering project with a defined acceptance point, not a product with a delivery date. The sequence below is what separates a bench that passes its acceptance test from one that becomes a dispute — and whether you are commissioning a new build or specifying a bench for supply, these are the gates worth insisting on.",
      },
      { kind: "heading", title: "1. Requirement Capture From the Test Specification" },
      {
        kind: "paragraph",
        text: "Starting from the governing document — component maintenance manual, qualification test procedure, acceptance test schedule — and extracting every parameter, range, tolerance and sequence the bench must deliver. Here is the part most projects underestimate: the specification is frequently incomplete or internally inconsistent, and resolving that at the outset is the single highest-value step in the whole project. Discovered later, the same ambiguity becomes a change order.",
      },
      { kind: "heading", title: "2. Concept and Schematic Design" },
      {
        kind: "paragraph",
        text: "Hydraulic, pneumatic and electrical schematics, measurement architecture, control strategy and physical layout. This is the review point at which the customer confirms the bench will do what the specification requires, before anything is bought. A design review passed properly here is worth more than any amount of goodwill later.",
      },
      { kind: "heading", title: "3. Component Selection and Procurement" },
      {
        kind: "paragraph",
        text: "Selecting pumps, valves, instruments, controllers and structure against the design, with attention to accuracy class, availability and long-term supportability. Obsolescence is a design-time concern rather than a problem for later: the controller and instruments chosen now determine how supportable the bench will be in fifteen years, which the obsolescence section below takes up directly.",
      },
      { kind: "heading", title: "4. Manufacture, Assembly and Pipework" },
      {
        kind: "paragraph",
        text: "Frame fabrication, panel build, pipework and its internal cleanliness, wiring and instrument installation. Flushing and cleanliness verification happen before the bench is ever connected to a flight component — a new bench is a contamination source until it has been proven otherwise, and that step is not optional.",
      },
      { kind: "heading", title: "5. Control Software and Test Program Development" },
      {
        kind: "paragraph",
        text: "Control loops, sequences, limit checking, operator interface and report generation, plus the test programme library for each part number where applicable. Software is usually the schedule driver on an automated bench, and it is usually the element most under-estimated at quotation. Asking how test programmes will be developed, and by whom, is a fair question to put early.",
      },
      { kind: "heading", title: "6. Factory Acceptance Test" },
      {
        kind: "paragraph",
        text: "Proving the bench against its own specification at the builder's works, with the customer present, before shipment. The demonstration covers performance, accuracy, test sequences, safety functions and reporting. This is the gate that stops factory problems becoming site problems, and attending it is worth the travel every time.",
      },
      { kind: "heading", title: "7. Installation and Site Acceptance Test" },
      {
        kind: "paragraph",
        text: "Installation, services connection, re-commissioning and repeating acceptance in the actual operating environment. Some things only appear on site: supply quality, ambient conditions, services capacity, floor loading and access. A bench that passed at works and fails on site is usually telling you something about the building rather than the bench.",
      },
      { kind: "heading", title: "8. Calibration and Correlation" },
      {
        kind: "paragraph",
        text: "Calibrating the bench's instrumentation with traceability, and where applicable correlating results against another bench or a reference unit so that results are comparable across facilities. If the same component is tested at two sites, correlation is what makes the two sets of records mean the same thing.",
      },
      { kind: "heading", title: "9. Training, Documentation and Handover" },
      {
        kind: "paragraph",
        text: "Operator and maintenance training, operating and maintenance manuals, schematics, spares list, calibration schedule and the acceptance documentation package. A bench without its documentation cannot be maintained or recalibrated, which makes the handover package part of the asset rather than paperwork attached to it. On a thirty-year asset, it is the part most likely to be lost and most expensive to recreate.",
      },
    ],
  },
  {
    id: "standards-qualification-and-certification",
    title: "Standards, Qualification and Certification",
    blocks: [
      {
        kind: "paragraph",
        text: "There is no equivalent of a workmanship standard for test benches — no single document that says what a good bench looks like. That absence is the most useful thing this section can explain, because first-time purchasers often go looking for one. What actually governs a bench is three things: the test specification it must satisfy, the quality system of the organisation operating it, and the traceability of its measurements. Everything else is commentary.",
      },
      { kind: "heading", title: "Where the Test Specification Comes From" },
      {
        kind: "paragraph",
        text: "The governing document varies by purpose:",
      },
      {
        kind: "list",
        items: [
          "Component maintenance manual — for MRO testing, the OEM's procedure for testing a component after overhaul, before release to service",
          "Aircraft maintenance manual — for on-aircraft system testing supported by ground test equipment",
          "Qualification test procedure — for proving a new design meets its requirements",
          "Production acceptance test schedule — for accepting each unit off a line",
          "Customer or programme-specific test requirements, which frequently add to all of the above",
        ],
      },
      {
        kind: "paragraph",
        text: "The bench is engineered to this document. So the first question in any bench project is which document applies, which revision, and whether it is complete — not what the bench should cost.",
      },
      { kind: "heading", title: "OEM and Customer Acceptance of Test Equipment" },
      {
        kind: "paragraph",
        text: "This surprises people, and it is worth knowing before a specification is written. For some tests the OEM specifies or approves the test equipment itself, and particular testers are named and listed in the maintenance documentation. Where that applies, the equipment choice is not open — the manual decides it, and a technically equivalent alternative is not acceptable. For other work, the operator must demonstrate that its chosen equipment is capable of the test. Establishing which of those two situations you are in is the first thing to check, because it determines whether you are selecting equipment or simply procuring a named item.",
      },
      { kind: "heading", title: "Measurement Traceability" },
      {
        kind: "paragraph",
        text: "What makes a bench result defensible: every measurement forming part of a pass or fail decision is made with an instrument whose calibration is traceable, within its interval, and recorded. The next section takes this further, because it is the one area where a bench quietly stops being an asset and becomes a liability.",
      },
      { kind: "heading", title: "Quality Systems" },
      {
        kind: "paragraph",
        text: "Benches are designed, built and operated within an aerospace quality management framework, and calibration laboratories operate to the international standard for testing and calibration laboratory competence — which in India means accredited calibration where applicable. These frameworks govern how the work is controlled; they say nothing about which certifications any particular supplier holds, and this page makes no such claim outside the capability section below.",
      },
      { kind: "heading", title: "The Indian Framework: IMAP, CEMILAC, DGAQA and RCMA" },
      {
        kind: "paragraph",
        text: "For Indian military programmes, this is the part that determines what a bench must support — and it contains a requirement about test rigs specifically that is easy to miss:",
      },
      {
        kind: "list",
        items: [
          "The Indian Military Airworthiness Procedure (IMAP-2023) is the Ministry of Defence procedural document for the design, development, production and certification of air systems and airborne stores. It is the successor to DDPMAS, the long-standing Procedure for Design, Development and Production of Military Aircraft and Airborne Stores, which CEMILAC revised and renamed. Work still frequently refers to DDPMAS by name, so both are worth recognising.",
          "Test rigs are themselves subject to approval. Under that procedure, the technical specifications of test rigs used during development and production for verification and validation of an air system or airborne store are approved by CEMILAC, and the rigs are certified by CEMILAC or DGAQA. CEMILAC also reviews and approves test plans and procedures, with self-approval available for eligible non-critical airborne stores and associated rigs. For a bench covered by the procedure, this reframes the purchase: the rig is a certifiable item, not just capital equipment.",
          "Criticality drives the extent of testing. A system safety assessment at air system level classifies airborne stores as Safety Critical, Mission Critical or Non-Critical. The approach to certification and type approval, including how much testing is required, follows from that classification. A bench for a Safety Critical airborne store carries a heavier burden than one for a Non-Critical store.",
          "Who does what. CEMILAC is the regulatory authority for design approval and issues Type Approval, with provisional clearance available for a limited period beforehand. RCMA centres are units of CEMILAC co-located at major design and development centres, acting on its behalf. DGAQA, under the Department of Defence Production, is the quality assurance authority for military aeronautical stores.",
        ],
      },
      {
        kind: "paragraph",
        text: "Confirm the current issue of IMAP and the exact classification terms against CEMILAC directly before writing any of this into a certification plan. The structure is accurate as described; this framework has been revised more than once, and the readers of this page work to it daily.",
      },
    ],
  },
  {
    id: "calibration-and-measurement-traceability",
    title: "Calibration and Measurement Traceability",
    blocks: [
      {
        kind: "paragraph",
        text: "A test bench exists to produce evidence, and evidence is only as good as the instruments that produced it. A bench out of calibration does not produce doubtful results — it produces results that cannot be used at all, including retrospectively, back to the last valid calibration. That is the risk worth planning around.",
      },
      {
        kind: "paragraph",
        text: "What is calibrated. Pressure transducers and gauges, flow meters, thermocouples and temperature sensors, load cells, torque transducers, position and speed sensors, and the electrical measurement chain. The calibration applies to the measurement chain rather than the sensor alone: signal conditioning and acquisition are part of what is being calibrated, and a recalibrated sensor on an uncalibrated amplifier proves nothing.",
      },
      {
        kind: "paragraph",
        text: "Traceability. Calibration traced to national standards, which in India means accredited calibration where applicable.",
      },
      {
        kind: "paragraph",
        text: "Intervals and recall. Intervals set by the standard, the manufacturer's recommendation and the operator's own procedure, with a recall system so that nothing drifts past its due date unnoticed.",
      },
      {
        kind: "paragraph",
        text: "The problem nobody plans for. A bench with twenty instruments has twenty calibration due dates. If they are not deliberately aligned, the bench is partially out of calibration most of the time, and the paperwork says so even when the readings are fine. Planning calibration as a bench-level activity rather than instrument by instrument is the fix, and it is worth doing at handover rather than discovering two years in.",
      },
      {
        kind: "paragraph",
        text: "Correlation between benches. Where the same component is tested at more than one facility, the results should agree. Correlation exercises using a reference unit are how that is demonstrated, and they are also how a dispute between two sites gets settled.",
      },
      {
        kind: "paragraph",
        text: "As-found data. Recording instrument condition before adjustment, because that is what tells you whether the results produced since the last calibration were valid. Without as-found data, a drifted instrument turns every record since its last calibration into a question.",
      },
      {
        kind: "paragraph",
        text: "This is the same argument our [air data test set calibration](/resources/air-data-test-set-calibration) work makes about a single instrument, applied to a whole bench: test equipment is a controlled measurement asset, and its calibration status is part of its capability.",
      },
    ],
  },
  {
    id: "configurations-and-options",
    title: "Configurations and Options",
    blocks: [
      {
        kind: "paragraph",
        text: "A bench is configured from the test specification and the workload: how many part numbers, how many units a week, operated by whom.",
      },
      { kind: "heading", title: "Dedicated Against Universal" },
      {
        kind: "paragraph",
        text: "A bench built for one component, against one designed to cover a family or a workshop's whole workload through interchangeable interfaces. The trade-off deserves honesty: dedicated benches are simpler, faster to operate and cheaper to build, while universal benches cost more per bench and avoid owning five of them. This is the single most consequential configuration choice on the page, and it gets its own comparison below.",
      },
      { kind: "heading", title: "Level of Automation" },
      {
        kind: "paragraph",
        text: "Manual operation, semi-automated with stored set points, and fully automated running test programmes end to end with automatic reporting. Tie this choice to throughput, operator skill and the need for operator-independent results rather than to budget — automation bought for the wrong reason tends to be bypassed within a year.",
      },
      { kind: "heading", title: "Modular and Extensible Architecture" },
      {
        kind: "paragraph",
        text: "Benches designed so that further test capability or additional part numbers can be added later. What makes extensibility real rather than claimed is specific and checkable: spare instrumentation channels, spare supply capacity, an interface architecture that accepts new adapters, and control software written to be added to. A bench described as modular without those four is modular in marketing only.",
      },
      { kind: "heading", title: "Fixed, Mobile and Containerised" },
      {
        kind: "paragraph",
        text: "Workshop-installed benches, mobile and trolley-mounted equipment for hangar and flight line use, and containerised or transportable rigs for field and forward-base operation. For defence operations the transportable option is often not a preference but a requirement of where the work has to happen.",
      },
      { kind: "heading", title: "Single and Multi-Station Benches" },
      {
        kind: "paragraph",
        text: "Benches that test one unit at a time against those running several in parallel. This matters most for qualification endurance testing, which would otherwise occupy a bench for weeks on a single unit and block every other job in the queue.",
      },
      { kind: "heading", title: "Services and Siting Requirements" },
      {
        kind: "paragraph",
        text: "Electrical supply, cooling water, compressed air, drainage, extraction, floor loading, access and headroom. This belongs under configuration rather than logistics because it frequently constrains the design itself — and because a bench that cannot be installed is not a bench. Confirm the route in as well as the footprint; doorways have ended more installations than specifications have.",
      },
    ],
  },
  {
    id: "key-technical-specifications-to-evaluate",
    title: "Key Technical Specifications to Evaluate",
    blocks: [
      {
        kind: "paragraph",
        text: "This is written to be used rather than read — a checklist that can go into an RFQ substantially as it stands, so that replies arrive in a comparable form.",
      },
      {
        kind: "table",
        label: "Key Technical Specifications to Evaluate",
        headers: ["Specification", "Why it matters", "What to ask for"],
        rows: [
          ["Governing test specification", "Everything else follows from it", "The document and revision the bench is designed to satisfy"],
          ["Component types and part numbers covered", "Defines today's scope and tomorrow's cost", "The covered list, and what adding a new part number involves"],
          ["Pressure, flow and temperature ranges", "Ranges at the pump flatter the bench", "Values stated at the unit under test, not at the supply"],
          ["Measurement accuracy per parameter", "Decides whether results are admissible", "Accuracy against each tolerance being verified"],
          ["Control stability and set-point hold", "Matters wherever load or position is held", "Stability figures under the actual test condition"],
          ["Loading capability", "Required wherever the test applies a load", "Load range, control method and measurement"],
          ["Instrumentation channels", "Determines extensibility", "Channels used and spare channels provided"],
          ["Fluid type and cleanliness", "A dirty bench damages what it tests", "Fluid specification, conditioning and cleanliness level maintained"],
          ["Level of automation", "Affects throughput and operator independence", "What is automated, and whether test programmes are included"],
          ["Data acquisition and reporting", "On acceptance work the report is the deliverable", "Sampling rate, record format, report output"],
          ["Interface adapters", "Where part-number-specific cost sits", "Adapters included, plus cost and lead time for more"],
          ["Calibration", "An uncalibrated bench produces unusable records", "What is calibrated, interval, by whom, and downtime"],
          ["Safety and area classification", "Non-negotiable where flammable fluids are involved", "Interlocks, relief, guarding, classification certificates"],
          ["Services required", "Decides whether installation is possible", "Power, air, water, drainage, extraction"],
          ["Footprint and access", "Benches have to physically arrive", "Dimensions, weight, floor loading, route in"],
          ["Acceptance test scope", "The most important commercial detail", "Factory and site acceptance scope and pass criteria"],
          ["Documentation and training", "Part of the asset, not an extra", "Manuals, schematics, spares list, training provided"],
          ["Obsolescence position", "A bench outlives its own electronics", "Controller and software platform, and support horizon"],
        ],
      },
      {
        kind: "paragraph",
        text: "One suggestion worth acting on: ask for the factory acceptance test procedure at quotation stage, not at delivery. How a supplier proposes to prove the bench tells you more about the project than the specification does — and a vague answer at quotation becomes an argument at handover.",
      },
    ],
  },
  {
    id: "features-of-a-modern-test-bench",
    title: "Features of a Modern Test Bench",
    blocks: [
      {
        kind: "paragraph",
        text: "What has changed in test bench technology is mostly about consistency and record-keeping rather than new measurements:",
      },
      {
        kind: "list",
        items: [
          "Closed-loop control holding pressure, flow, load or position to the tolerance the test demands, rather than to whatever the valve happens to do",
          "Stored, programmable test sequences that run the same way every time regardless of who is operating",
          "Automatic limit checking and pass or fail determination, which takes interpretation out of the result",
          "Automatic test report generation, so the record is produced rather than transcribed — transcription being where most record disputes begin",
          "Test programme libraries covering many part numbers, particularly on avionics benches, so procedures are not written from scratch per unit",
          "Interchangeable interface adapters that extend one bench across a family of components",
          "Spare capacity designed in — instrumentation channels, supply headroom, software architecture — so the bench can grow with the workload",
          "Integrated fluid conditioning and cleanliness monitoring, protecting the units under test from the bench itself",
          "Condition monitoring and fault diagnostics on the bench, so a drifting bench is identified before it produces a batch of questionable records",
          "Networked data output into the organisation's maintenance or quality system",
          "Calibration-due indication and traceability records held against the bench rather than in a separate spreadsheet",
          "Guarding, interlocks and controlled shutdown designed around the failure cases the bench is built to provoke",
        ],
      },
      {
        kind: "paragraph",
        text: "None of this changes what the test specification requires. It changes how consistently the bench meets it, and how much of the operator's day goes into producing the record rather than the result.",
      },
    ],
  },
  {
    id: "applications-and-platforms-served",
    title: "Applications and Platforms Served",
    blocks: [
      { kind: "heading", title: "By programme stage" },
      {
        kind: "list",
        items: [
          "Development rigs supporting the design of a new component or system",
          "Qualification testing against a qualification test procedure",
          "Production acceptance testing on a manufacturing line",
          "Overhaul and release testing in an MRO workshop",
          "Repair verification and fault investigation",
          "Correlation and re-qualification after a design change",
        ],
      },
      { kind: "heading", title: "By platform" },
      {
        kind: "list",
        items: [
          "Fixed-wing military aircraft, including indigenous fighter and trainer programmes",
          "Rotary-wing platforms and their actuation and transmission systems",
          "Transport and special-mission aircraft",
          "UAVs and unmanned platforms, including their landing gear and actuation",
          "Missile and tactical systems",
          "Launch vehicles and spacecraft subsystems",
          "Commercial aircraft component overhaul",
        ],
      },
      { kind: "heading", title: "By system" },
      {
        kind: "list",
        items: [
          "Hydraulic power generation and distribution",
          "Flight control and actuation",
          "Landing gear, braking and steering",
          "Fuel systems and gauging",
          "Pneumatic and environmental control",
          "Electrical power generation and distribution",
          "Avionics, mission systems and instruments",
          "Engine accessories and engine-driven components",
        ],
      },
      {
        kind: "paragraph",
        text: "One pattern is worth noting for anyone specifying a rig now: landing gear and suspension rigs in particular are frequently adapted across platform types rather than built afresh each time. That is the practical case for designing extensibility in from the start — the rig that can be reconfigured gets used on the next programme, and the one that cannot gets replaced.",
      },
    ],
  },
  {
    id: "organisations-served",
    title: "Organisations Served",
    blocks: [
      {
        kind: "paragraph",
        text: "Test bench requirements differ sharply by organisation, and the difference is usually about workload rather than technology:",
      },
      {
        kind: "list",
        items: [
          "Aerospace and defence OEMs — production acceptance benches at programme rates, and development rigs during design",
          "DRDO laboratories and research establishments — development and qualification rigs, often one-off and heavily instrumented",
          "Defence public sector undertakings — acceptance and overhaul benches within established programmes",
          "MRO organisations and component overhaul shops — broad part-number coverage and turnaround-driven testing",
          "Avionics and electronics manufacturers — LRU test benches and automatic test equipment",
          "Tier-1 and Tier-2 aerospace suppliers — acceptance testing of components supplied into larger assemblies",
          "Air Force, Navy and Army aviation base repair organisations — second and third-line test capability, including at locations where support response matters more than specification",
          "Space organisations and private space companies — subsystem and component test rigs",
          "UAV manufacturers — actuation, landing gear and avionics test capability at smaller scale",
          "Academic and institutional laboratories — research rigs and teaching installations",
        ],
      },
      {
        kind: "paragraph",
        text: "This list describes where the capability applies rather than a customer record. If your requirement sits in one of these categories, the most productive first conversation is about the governing test specification and the workload behind it — those two between them settle most of the configuration questions on this page.",
      },
    ],
  },
  {
    id: "how-to-specify-or-select-a-test-bench",
    title: "How to Specify or Select a Test Bench",
    blocks: [
      { kind: "heading", title: "Start From the Test Specification, Not the Bench" },
      {
        kind: "paragraph",
        text: "Identify the governing document and confirm it is complete and current. Every subsequent decision follows from it, and an incomplete specification is the most common reason bench projects overrun both schedule and budget.",
      },
      { kind: "heading", title: "Decide Which of the Three Purposes It Serves" },
      {
        kind: "paragraph",
        text: "Development, production acceptance or MRO. A bench that tries to be all three usually serves none of them well, and this decision shapes everything downstream — automation level, instrumentation depth, interface design and throughput.",
      },
      { kind: "heading", title: "Define the Part-Number Scope Now and Later" },
      {
        kind: "paragraph",
        text: "Which components on day one, and which you expect to add within the bench's life. This decides dedicated against universal, and designing for extension is far cheaper than retrofitting it onto a bench that was not built to accept it.",
      },
      { kind: "heading", title: "Work Backwards From the Tolerances Being Verified" },
      {
        kind: "paragraph",
        text: "Instrument accuracy follows from the tightest tolerance the bench must prove, not from a general preference for precision. Over-specified instrumentation is expensive; under-specified instrumentation makes results inadmissible, which costs more and is found out later.",
      },
      { kind: "heading", title: "Check Services and Siting Before Design Freeze" },
      {
        kind: "paragraph",
        text: "Power, air, water, drainage, extraction, floor loading, access and headroom. Confirm the installation is physically possible before the bench is designed around an assumption about the building it is going into.",
      },
      { kind: "heading", title: "Agree the Acceptance Tests in the Contract" },
      {
        kind: "paragraph",
        text: "What will be demonstrated at works, what at site, against what pass criteria, measured with whose instruments. This is the most important commercial clause in a bench purchase and the one most often left vague until it matters.",
      },
      { kind: "heading", title: "Settle Calibration and Support Before Purchase" },
      {
        kind: "paragraph",
        text: "What gets calibrated, by whom, at what interval, and how long the bench is unavailable while it happens. In a single-bench workshop, calibration downtime is not an administrative detail — it is a capacity problem with a date on it.",
      },
      { kind: "heading", title: "Interrogate Obsolescence" },
      {
        kind: "paragraph",
        text: "Which controller, which instruments, which software platform, and how long each will be supported. A bench will outlive several generations of its own control hardware, which the next section takes up in full.",
      },
      { kind: "heading", title: "Weigh Lead Time, Local Support and Indigenous Supply" },
      {
        kind: "paragraph",
        text: "Bench projects involve site work, commissioning and changes after acceptance. A supplier who can be on site in a day is worth a great deal against one on another continent, and on indigenisation-driven programmes local supply and support is frequently decisive rather than merely preferable.",
      },
    ],
  },
  {
    id: "comparisons-that-help-you-decide",
    title: "Comparisons That Help You Decide",
    blocks: [
      { kind: "heading", title: "Dedicated vs Universal and Modular Benches" },
      {
        kind: "table",
        label: "Dedicated vs Universal and Modular Benches",
        headers: ["Factor", "Dedicated", "Universal / modular"],
        rows: [
          ["Capital cost per bench", "Lower", "Higher"],
          ["Cost per part number covered", "Higher", "Lower across a mixed workload"],
          ["Operator training", "Simpler, one procedure", "Broader, several configurations"],
          ["Setup and changeover", "Minimal", "Adapter change per unit"],
          ["Throughput on one part number", "Higher", "Lower"],
          ["Extensibility", "Limited by design", "The reason for buying it"],
          ["Complexity and failure modes", "Fewer", "More, and more to maintain"],
          ["Floor space across a workshop", "Multiplies with part numbers", "One footprint"],
        ],
      },
      {
        kind: "paragraph",
        text: "A dedicated bench is better at its one job; a universal bench is better for a workshop with a mixed workload. Compare total capital and total floor space across the whole workload rather than per bench — that is where the universal case is genuinely made or lost, and per-bench comparison always flatters the dedicated option.",
      },
      { kind: "heading", title: "Manual vs Semi-Automated vs Fully Automated" },
      {
        kind: "table",
        label: "Manual vs Semi-Automated vs Fully Automated",
        headers: ["Factor", "Manual", "Semi-automated", "Fully automated"],
        rows: [
          ["Time per test", "Longest", "Moderate", "Shortest"],
          ["Operator skill required", "High", "Moderate", "Low to operate"],
          ["Operator-to-operator variation", "Significant", "Reduced", "Effectively none"],
          ["Record generation", "Manual transcription", "Partly captured", "Generated automatically"],
          ["Endurance and long-duration tests", "Impractical", "Workable", "Ideal"],
          ["Cost", "Lowest", "Moderate", "Highest"],
          ["Flexibility to a changed procedure", "Immediate", "Good", "Requires reprogramming"],
        ],
      },
      {
        kind: "paragraph",
        text: "The counterweight is worth stating: a fully automated bench is excellent at the test it was programmed for and inflexible when the procedure changes. That is exactly why development rigs are rarely fully automated, and why automation suits production acceptance best.",
      },
      { kind: "heading", title: "Build New vs Buy Standard vs Refurbish Existing" },
      {
        kind: "table",
        label: "Build New vs Buy Standard vs Refurbish Existing",
        headers: ["Factor", "New bespoke build", "Standard product", "Refurbish existing"],
        rows: [
          ["Lead time", "Longest", "Shortest", "Moderate"],
          ["Capital cost", "Highest", "Moderate", "Lowest"],
          ["Fit to the test specification", "Exact", "Approximate", "Already proven"],
          ["Risk", "Design and acceptance risk", "Low technical risk", "Condition and documentation risk"],
          ["Certification position", "Established fresh", "Supplier-declared", "Must be re-demonstrated"],
          ["Supportable life", "Longest", "Depends on platform", "Reset by the upgrade"],
        ],
      },
      {
        kind: "paragraph",
        text: "Refurbishment deserves a fair hearing rather than being treated as the budget option. Where a bench's mechanical and fluid sections are sound, re-controlling and re-instrumenting is frequently the better engineering answer as well as the cheaper one — the next section explains why that situation is so common.",
      },
      { kind: "heading", title: "Imported vs Indigenous Test Benches" },
      {
        kind: "table",
        label: "Imported vs Indigenous Test Benches",
        headers: ["Factor", "Imported", "Indigenous supply and support"],
        rows: [
          ["Capital cost", "Higher, with freight and duty", "Generally lower"],
          ["Lead time", "Longer, plus clearance", "Shorter"],
          ["Response during the project", "Across time zones", "Local, same working day"],
          ["Site support and commissioning", "Costly to mobilise", "Local presence"],
          ["Spares and obsolescence support", "Dependent on the manufacturer", "Locally held and managed"],
          ["Export licensing", "Can apply, and can delay", "Not applicable"],
          ["Proven design heritage", "Often deep on specific families", "Varies by component family"],
        ],
      },
      {
        kind: "paragraph",
        text: "To be fair about it: established European and American bench builders have genuine depth of heritage on particular component families, and there is no credible claim otherwise. The honest indigenous argument is about responsiveness through the project, site support, spares access and long-term supportability — and the comparison is stronger for drawing that distinction clearly than for overclaiming on design heritage.",
      },
    ],
  },
  {
    id: "obsolescence-upgrade-and-life-extension",
    title: "Obsolescence, Upgrade and Life Extension",
    blocks: [
      {
        kind: "paragraph",
        text: "Test benches routinely stay in service for decades. Programmes fund the aircraft, not the test equipment, so benches are rarely replaced on a planned cycle — they are kept running until they cannot be. The result, across the industry, is a large installed base of benches whose mechanical and fluid sections are perfectly serviceable while their controllers, instruments and software belong to a previous generation. If you operate test benches, you almost certainly own one of these.",
      },
      { kind: "heading", title: "What Actually Goes Obsolete" },
      {
        kind: "paragraph",
        text: "Not the steel, the pumps or the manifolds, which last. It is the control hardware, the data acquisition, the operating system the test software runs on, the instruments whose manufacturer has discontinued them, and the spares for all of the above. A bench can be mechanically sound and unsupportable at the same time — and the two conditions are usually assessed by different people, which is why the problem surfaces late.",
      },
      { kind: "heading", title: "The Symptoms" },
      {
        kind: "paragraph",
        text: "A controller that cannot be repaired or replaced like for like. Software that only runs on an operating system no longer patched or permitted on the network. Instruments that cannot be recalibrated because the manufacturer has gone. Test programmes nobody can modify because the original engineer has retired and the source is lost. Growing downtime waiting for a part that no longer exists. Any one of these is a warning; three together mean the decision has already been made for you.",
      },
      { kind: "heading", title: "What Upgrade and Re-Control Involves" },
      {
        kind: "paragraph",
        text: "Retaining the mechanical, hydraulic and structural sections; replacing the control system, instrumentation and data acquisition; rewriting or porting the test software; recalibrating; and re-running acceptance to demonstrate that the upgraded bench still satisfies the original test specification. That last step is what makes it an engineering project rather than a parts swap — the upgraded bench has to be proven equivalent, and without that demonstration its records are open to challenge.",
      },
      { kind: "heading", title: "Planning for It When You Buy" },
      {
        kind: "paragraph",
        text: "Obsolescence is cheapest to manage at purchase, and this is where a specification can genuinely protect a thirty-year asset. Ask which controller family and software platform the bench is built on and how long each is supported. Require the source or configuration of test programmes, and the documentation to modify them, as part of the handover rather than as goodwill. Favour instruments from ranges with a replacement path. Specify spare instrumentation channels and supply headroom so capability can be added without a redesign. And keep the acceptance documentation — it is the baseline any future upgrade has to prove equivalence against, and recreating it later costs far more than storing it properly now.",
      },
      {
        kind: "paragraph",
        text: "If you are weighing an upgrade against a replacement, the build-new against refurbish comparison above sets out the trade-offs side by side.",
      },
    ],
  },
  {
    id: "engineering-supply-and-support-capability",
    title: "Engineering, Supply and Support Capability",
    blocks: [
      {
        kind: "paragraph",
        text: "A test bench is a project with a contractual acceptance point, so the question worth answering plainly is what Jetsys does in that project and what it does not.",
      },
      {
        kind: "paragraph",
        text: "What Jetsys does here. Jetsys Defence supplies and integrates aerospace test benches and test rigs: working from your test specification to identify suitable equipment, supplying it, integrating it into your services and workshop, installing and commissioning it, and supporting it through its life. The benches themselves are built by established manufacturers. Jetsys's own design and manufacturing work sits in ground support, ground handling and ground test equipment, and in indigenisation — that distinction is stated deliberately, because an experienced purchaser will check it.",
      },
      {
        kind: "paragraph",
        text: "Specification and selection support. Help reading the governing test specification — component maintenance manual, qualification test procedure or acceptance test schedule — and translating it into a defensible equipment requirement, including the questions in the specification checklist above. This is where most of the avoidable cost in a bench purchase is either designed out or locked in.",
      },
      {
        kind: "paragraph",
        text: "Integration. Interfacing a bench with existing services, workshop layout, data systems and surrounding equipment. Confirming services, footprint, access and floor loading before anything ships, rather than discovering a constraint on delivery day.",
      },
      {
        kind: "paragraph",
        text: "Installation, commissioning and acceptance. Site installation, services connection, commissioning, and support through site acceptance testing against the agreed scope.",
      },
      {
        kind: "paragraph",
        text: "Training and documentation. Operator and maintenance familiarisation, and ensuring the handover package — manuals, schematics, spares list, calibration schedule, acceptance records — arrives complete. On an asset with a thirty-year life, an incomplete handover is the most expensive thing to fix later.",
      },
      {
        kind: "paragraph",
        text: "Long-term support. Spares, consumables, recalibration coordination and help managing the obsolescence position described above.",
      },
      {
        kind: "paragraph",
        text: "Quality. Equipment is sourced, inspected on receipt and supplied under a documented process, with incoming material checked against the specification it was ordered to.",
      },
      {
        kind: "paragraph",
        text: "Indigenisation and local support. Indigenisation is a core part of what Jetsys does, and on this page the honest version of that argument is local supply, local presence through installation and commissioning, and reduced import dependence on spares and support — not local manufacture of benches built elsewhere.",
      },
      {
        kind: "paragraph",
        text: "Where we are. Jetsys Defence is based in Navi Mumbai, Maharashtra.",
      },
      {
        kind: "paragraph",
        text: "The most useful thing to send with an enquiry is the governing test specification, or the relevant extract, together with the part numbers in scope and the workload behind them. Those three settle most of the configuration questions on this page, and a quotation built on them is one you can actually compare.",
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
            question: "What is a test bench?",
            answer: "A controlled platform that applies defined conditions to a component or system and measures its response, so that performance can be verified repeatably against a specification. Every bench does three things: supplies the power, pressure or signals the unit needs, interfaces correctly with it, and measures what happened accurately enough for the result to count as evidence.",
          },
          {
            question: "What is the difference between a test bench, a test rig and a test stand?",
            answer: "Largely usage rather than substance. Test bench is the general term, most often for component-level functional testing; test rig is common for development and system-level work; test stand is widely used for fluid power and engine testing, and in American usage generally. The industry does not apply these consistently, so the useful question in an enquiry is which test specification applies, not which word was used.",
          },
          {
            question: "What is ATE, and how is it different from a test bench?",
            answer: "Automatic test equipment is a test bench whose testing is driven by a program rather than an operator, most often for avionics and electronics. The unit under test connects through an interface adapter to a mass interconnect, and a test executive runs the sequence and records the result. The difference is automation and architecture, not purpose — both exist to produce measured evidence.",
          },
          {
            question: "How is a test bench specified?",
            answer: "From the governing test specification — a component maintenance manual, a qualification test procedure or a production acceptance test schedule — which defines every parameter, range, tolerance and sequence the bench must deliver. One practical warning: that document is often incomplete or internally inconsistent, and resolving it at the start is the highest-value step in a bench project. Left unresolved, it becomes a change order.",
          },
          {
            question: "What is the difference between a dedicated and a universal test bench?",
            answer: "A dedicated bench tests one component or a narrow family; a universal bench covers a wider range through interchangeable interface adapters. Dedicated benches are simpler, faster to operate and cheaper to build. Universal benches cost more each and avoid owning several. Compare total capital and total floor space across the whole workload rather than per bench — per-bench comparison always favours the dedicated option.",
          },
          {
            question: "What is a factory acceptance test?",
            answer: "A demonstration that the bench meets its own specification at the builder's works, with the customer present, before shipment — covering performance, accuracy, test sequences, safety functions and reporting. It is repeated on site after installation as a site acceptance test. Agreeing the scope and pass criteria of both in the contract is the most important commercial detail in a bench purchase.",
          },
          {
            question: "Does a test bench need calibration?",
            answer: "Yes, and at measurement-chain level rather than sensor level — signal conditioning and acquisition are part of what is calibrated. Every instrument forming part of a pass or fail decision must be [traceably calibrated](/resources/air-data-test-set-calibration) and within its interval, or the results cannot be used, including results already produced. Align the due dates across the bench, or it will be partially out of calibration most of the time.",
          },
          {
            question: "What standards apply to aerospace test benches?",
            answer: "There is no single workmanship standard for test benches. What governs one is the test specification it must satisfy, the quality system of the organisation operating it, and the traceability of its measurements. For rigs used to verify and validate air systems or airborne stores during development and production, the Indian Military Airworthiness Procedure — successor to DDPMAS — calls for CEMILAC to approve the technical specifications and for CEMILAC or DGAQA to certify the rigs.",
          },
          {
            question: "Can an existing test bench be upgraded instead of replaced?",
            answer: "Often yes, and it is frequently the better engineering answer. The mechanical, hydraulic and structural sections usually outlast the control system, instrumentation and software by decades. Re-controlling and re-instrumenting a sound bench, then re-running acceptance to prove equivalence against the original specification, extends its life for a fraction of replacement cost. The obsolescence section above sets out what the work involves and how to plan for it.",
          },
          {
            question: "How long does a test bench take to build?",
            answer: "It depends on four things rather than on a standard figure: how complete the governing test specification is, the level of automation, how much test software is required, and the lead time on long-lead instruments and controllers. Software is usually the schedule driver on an automated bench and is usually under-estimated at quotation, so it is the item worth probing hardest.",
          },
        ],
      },
    ],
  },
];

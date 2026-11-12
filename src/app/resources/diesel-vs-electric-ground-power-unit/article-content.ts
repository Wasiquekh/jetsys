export const metaTitle = "Diesel vs Electric Ground Power Units for Aircraft | Jetsys Defence";
export const metaDescription = "Compare Diesel vs Electric Ground Power Units for aircraft. Learn how runtime, charging, fuel, maintenance and ownership costs affect your choice for ramps and hangars.";
export const draftNote = "Heading levels in this draft use # for H1, ## for H2 and ### for H3.";
export const title = "Diesel vs Electric Ground Power Units";

export const introduction = [
  "An aircraft ground power unit (GPU) supplies electricity to a parked aircraft so crews can run systems such as cabin lighting and avionics during boarding, servicing and maintenance. Diesel and electric describe how the GPU gets its energy. The aircraft-side output is a separate specification, such as nominal 28 V DC or three-phase 115/200 V AC at 400 Hz.",
  "Start with the aircraft’s approved external-power requirements. Then consider where the GPU will work, how often it will be used and whether the site can supply fuel, a suitable mains connection or charging. A busy gate, a remote stand and a maintenance hangar can each call for a different configuration even when they serve the same aircraft type.",
];

export const comparison = {
  title: "Diesel vs Electric Ground Power Units at a Glance",
  headers: ["Comparison factor", "Diesel GPU", "Mains-powered electric GPU", "Battery-electric GPU"],
  rows: [
    [
      "Energy source",
      "Onboard diesel engine driving a generator",
      "Site electricity converted to the aircraft’s specified output",
      "Onboard battery feeding power conversion electronics",
    ],
    [
      "Fuel, mains power or charging requirements",
      "Diesel supply and access to refuelling",
      "Compatible electrical feed and a connection within reach",
      "Compatible charger, sufficient site electrical capacity and time to recharge",
    ],
    [
      "Mobility and deployment",
      "Towable or vehicle-mounted configurations can serve multiple stands",
      "Fixed at a gate or bay, or mobile within reach of a suitable outlet",
      "Towable or portable options can serve stands away from a fixed feed",
    ],
    [
      "Runtime and turnaround between uses",
      "Depends on fuel capacity, consumption at load and refuelling access",
      "Can support repeated use while the supply is available and the unit stays within its duty rating",
      "Runtime depends on usable battery energy and load. Turnaround depends on time to recharge.",
    ],
    [
      "Noise and exhaust at the point of operation",
      "Engine noise and tailpipe exhaust",
      "No GPU tailpipe exhaust. Cooling equipment can generate noise.",
      "No GPU tailpipe exhaust. Fans or pumps can generate noise.",
    ],
    [
      "Maintenance requirements",
      "Engine servicing plus electrical, cable and chassis checks",
      "Electrical, cooling, connector and cable checks",
      "Electrical and cooling checks plus battery health and charger checks",
    ],
    [
      "Purchase and operating costs",
      "Equipment, fuel, engine service and refuelling logistics",
      "Equipment, installation, site electrical work and electricity",
      "Equipment, charging infrastructure, electricity and potential battery replacement",
    ],
    [
      "Typical applications",
      "Remote stands and mobile ramp work with fuel access",
      "Regular gate turnarounds, fixed hangar bays and mains-equipped workshops",
      "Apron and hangar work where mobility is needed and charging can be scheduled",
    ],
  ],
};

export const operation = {
  title: "How Diesel and Electric Ground Power Units Work",
  groups: [
    {
      id: "diesel",
      title: "Diesel Ground Power Units",
      paragraphs: [
        "A diesel ground power unit carries its own fuel. The engine drives a generator, and the unit regulates or converts the generated power to deliver the output specified for the aircraft. That independence from a site electrical feed suits mobile ground handling across dispersed stands. Operating plans need to account for refuelling access, engine servicing and the noise and exhaust produced when the engine runs.",
      ],
    },
    {
      id: "mains",
      title: "Mains-Powered Electric Ground Power Units",
      paragraphs: [
        "A mains-powered or grid-powered ground power unit draws electricity from a compatible site supply. A solid-state ground power unit can use a frequency converter to provide 400 Hz AC or a rectifier to supply DC, depending on its design. A fixed installation can serve a gate or bay, while a mobile mains-fed cart can move between work areas with compatible outlets. Input voltage, phase, available capacity and cable reach determine where the equipment can operate.",
      ],
    },
    {
      id: "battery",
      title: "Battery-Electric Ground Power Units",
      paragraphs: [
        "A battery-electric ground power unit (eGPU) stores energy onboard and uses power electronics to deliver the specified output. A mobile unit can move between aircraft and operate away from a mains outlet, then return to a compatible charger. Usable runtime depends on the model’s battery capacity, the aircraft load and the duty cycle. Charging time and availability matter most when assignments run back to back.",
      ],
    },
  ],
} as const;

export const applications = {
  title: "Applications and Operating Environments",
  groups: [
    {
      title: "Airport Gates and Regular Turnaround Operations",
      paragraphs: [
        "Fixed electrical ground power (FEGP) can suit gates with predictable aircraft movements and a suitable electrical feed. Dedicated power at the stand reduces the need to dispatch a cart for each turnaround. When several gates need power at once, stand coverage, cable reach and backup equipment matter as much as the number of units. Heathrow is an example of an airport with grid-fed fixed ground power on most stands.",
      ],
    },
    {
      title: "Remote Stands and Mobile Ground Support",
      paragraphs: [
        "A diesel GPU can serve remote stands when fuel and towing support are available. A mobile electric ground power unit can cover the same type of stand if it carries enough usable energy for the workload and has time to recharge between assignments. The travel time to the charger or refuelling point also affects how many aircraft a unit can cover in a shift. Amsterdam Airport Schiphol has used mobile electric GPUs at apron positions without fixed power.",
      ],
    },
    {
      title: "Hangars, MRO Facilities and Ground Testing",
      paragraphs: [
        "Maintenance, repair and overhaul (MRO) teams need ground power for avionics checks, diagnostics and extended testing. In enclosed hangars, ventilation, noise and site rules can favour mains-fed or battery-electric equipment. Estimate the sustained load, the duration of the longest test and how many bays need power concurrently. The fixed 400 Hz systems proposed for HAECO’s Hangar 2 modernisation would deliver power to individual maintenance bays.",
      ],
    },
  ],
};

export const specifications = {
  title: "Features and Technical Specifications to Compare",
  groups: [
    {
      title: "Aircraft Output and Compatibility",
      paragraphs: [
        "Confirm the approved external-power specification for each aircraft variant and task. A 400 Hz electric ground power unit still needs the required AC voltage, phase, continuous kVA rating and any applicable overload capability. A 28 V-class DC unit needs the approved voltage range at the aircraft connector and the specified current. Where external power is approved for engine starting, check the required peak current and its duration separately from the continuous rating. Verify the plug, cable and control or interlock contacts for the proposed model regardless of its energy source.",
      ],
    },
    {
      title: "Runtime, Duty Cycle and Replenishment",
      paragraphs: [
        "Start with the load and duration of a typical assignment, then check the busiest shift and the time available between uses. Compare diesel fuel consumption in litres per hour at representative loads, and account for any idling between jobs. For a battery GPU, check how the supplier measured runtime, including the test load, ambient temperature, starting charge, usable charge range and whether the test used a continuous or intermittent load. Compare charging times over the same state-of-charge range and at the power the site can actually deliver.",
        "For mains-fed equipment, check the input voltage, phase and electrical capacity against the unit’s datasheet. Verify that the input and aircraft output cables can reach their connection points with the unit in its planned position.",
      ],
    },
    {
      title: "Mobility, Installation and Protection",
      paragraphs: [
        "When comparing fixed vs mobile ground power units, review dimensions, operating clearances and cable routing. For towable units, check weight, towing requirements and space to manoeuvre. For fixed units, check mounting, ventilation and service access. For outdoor work, verify the documented environmental limits. The proposed model’s documentation should identify protections such as overload, overvoltage and short-circuit protection, plus frequency and phase monitoring for AC or battery protection for an eGPU where specified.",
      ],
    },
  ],
};

export const tradeOffs = {
  title: "Operating Cost, Maintenance and Environmental Trade-offs",
  groups: [
    {
      title: "Maintenance and Downtime",
      paragraphs: [
        "Diesel GPUs add engine service items such as oil, filters and cooling-system checks. Mains-powered units still need scheduled inspection of power electronics, cooling components, output cables and connectors. Battery-electric units add charger inspections, battery health monitoring and a provision for pack replacement if expected within the service life. Compare the maintenance schedule, parts lead times and whether a spare unit is needed to keep gates or hangar bays available during planned service.",
      ],
    },
    {
      title: "Total Cost of Ownership",
      paragraphs: [
        "Start with the quoted price of the aircraft ground power unit and what it takes to install, operate and maintain it. Compare quotations on the same scope, including cables, commissioning, electrical upgrades or chargers, as applicable. Estimate fuel or electricity, scheduled service, major replacement parts, spare coverage and any downtime the spare fleet cannot cover. Use the same service life, operating hours, load profile and number of aircraft served for each option.",
        "Use site fuel prices, electricity tariffs and actual duty patterns where available. If several units will charge together, include any applicable peak-demand costs. Cost per aircraft service hour gives a common basis for comparison when the options use different fuels, have different charging schedules or need different numbers of units to meet the same demand.",
      ],
    },
    {
      title: "Noise and Emissions",
      paragraphs: [
        "A diesel GPU produces engine noise and exhaust where it operates. Mains-fed and battery-electric units have no tailpipe exhaust at the point of use, though fans and other cooling components can still be audible. Compare ground power unit noise levels at the same measurement distance and a similar operating load.",
        "For a wider emissions comparison, include the production and delivery of diesel, the source of the electricity and, where relevant, battery manufacture and replacement. The outcome depends on the site’s energy mix, equipment usage and service life.",
      ],
    },
  ],
};

export const selection = {
  title: "How to Choose Between a Diesel and an Electric GPU",
  steps: [
    "Confirm the aircraft’s approved external power requirements. Record the voltage, supply type, frequency and phase where applicable, load rating and connector for each aircraft and task.",
    "Identify where the GPU will work and whether it needs to move. Map the gates, remote stands and hangar bays it must serve.",
    "Estimate the load, usage hours and time between operations. Include the busiest shift, overlapping assignments and any short-duration peak loads.",
    "Check fuel, mains power or charging availability. Account for travel to replenishment points, supply capacity and the time available before the next job.",
    "Compare site restrictions, maintenance needs and ownership cost. Use the same service life and duty assumptions for each option.",
    "Confirm the selected configuration against the supplier’s technical documentation. Match the proposed model, output ratings, connector, accessories and applicable test evidence to the operating requirements.",
  ],
};

export const documentation = {
  title: "Jetsys Configurations, Quality and Documentation",
  paragraphs: [
    "The Jetsys Defence ground power range includes mobile diesel GPUs, portable and towable battery-electric units, fixed electrical ground power and 28.5 V DC solid-state rectifier options. The catalogue lists fixed and mobile 400 Hz configurations and includes a 90 kVA rating in its AC range. These options cover different deployment and output requirements, with the available combination determined by the proposed model.",
    "The model-specific datasheet should identify the aircraft-side output, input or charging requirements, duty limits and supplied cable assembly. Where applicable, review the acceptance test report for the delivered configuration and the loads and durations covered. The maintenance manual and parts schedule help establish service intervals, planned downtime and the support needed to keep the unit available.",
  ],
};

export const faq = {
  title: "Frequently Asked Questions",
  entries: [
    {
      question: "1. What is the difference between a diesel and an electric ground power unit?",
      answer: "A diesel GPU uses an onboard engine to generate power. An electric GPU takes power from a site electrical feed or an onboard battery. Each uses equipment sized and configured for the required aircraft-side output.",
    },
    {
      question: "2. Does every electric ground power unit use a battery?",
      answer: "Electric GPUs come in mains-powered and battery-electric configurations. A mains-powered unit draws electricity while in use. A battery-electric unit draws on stored energy and recharges between assignments as needed.",
    },
    {
      question: "3. Can diesel and electric GPUs provide the same aircraft power output?",
      answer: "Yes. Different energy sources can support the same aircraft-side output when the units are configured for the same voltage, frequency and phase where applicable, load rating and approved aircraft interface.",
    },
    {
      question: "4. Which option is suitable for a remote stand without mains power?",
      answer: "A diesel GPU can work where fuel and refuelling support are available. A battery-electric unit is also an option if it has sufficient runtime at the expected load and can return to a charger in time for the next assignment.",
    },
    {
      question: "5. What affects the runtime of a battery-electric ground power unit?",
      answer: "Usable battery capacity, starting charge, aircraft load, ambient temperature, battery condition and operating pattern all affect runtime. Check the conditions used to measure any published runtime before applying it to your shift.",
    },
    {
      question: "6. What charging or electrical infrastructure does an electric GPU need?",
      answer: "A mains-powered GPU needs a supply that matches the unit’s input specification and is within cable reach. A battery-electric model needs a compatible charger, enough site capacity for the expected number of simultaneous charging sessions and time to recharge between assignments.",
    },
    {
      question: "7. How do maintenance requirements differ between diesel and electric GPUs?",
      answer: "Diesel equipment adds engine and fuel-system service. Mains-powered and battery-electric units require electrical, cable and cooling checks. Battery models also need battery and charger inspections according to the maintenance schedule.",
    },
    {
      question: "8. How do you compare the total cost of owning a diesel and an electric GPU?",
      answer: "Add equipment, infrastructure, fuel or electricity, servicing, major parts and downtime across the same service life. Apply the same aircraft load and usage assumptions, then compare the cost of delivering the same ground power service.",
    },
    {
      question: "9. How do diesel and electric GPUs compare for noise and on-site exhaust?",
      answer: "Diesel GPUs produce engine noise and tailpipe exhaust on site. Mains-fed and battery-electric GPUs avoid tailpipe exhaust at the stand. For noise-sensitive work, compare model-specific sound measurements at equivalent loads and distances.",
    },
    {
      question: "10. What aircraft and equipment specifications should I verify before choosing a GPU?",
      answer: "Verify the approved aircraft output, continuous and peak ratings, connector and cable requirements. Then check the proposed unit’s fuel, mains or charging needs, operating environment, duty limits, protections and applicable test documentation.",
    },
  ],
};

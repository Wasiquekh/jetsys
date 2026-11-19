import type { ArticleSection } from "../ResourceReference";

export const title = "Aviation & Ground Support Equipment Glossary";
export const metaTitle = "Aviation and Ground Support Equipment Glossary | Jetsys Defence";
export const metaDescription = "Explore 180 terms in the Jetsys Defence Aviation and Ground Support Equipment Glossary. Look up GSE, airfield lights, fuel testing and calibration, then find related equipment.";

export const introduction = [
  "The Aviation and Ground Support Equipment Glossary from Jetsys Defence explains the terms, abbreviations and equipment names used by ramp teams, aircraft maintenance technicians, airfield engineers, fuel quality staff and technical procurement teams. The entries cover ground support equipment, ground testing and calibration, airfield lighting and signs, aviation fuel handling, and the aircraft systems these activities support.",
  "The glossary groups terms by subject and arranges them alphabetically within each group. Use the A–Z index to find a term by name, or scan the abbreviations table for terms such as GPU, ADTS and CCR. Related terms connect definitions that commonly appear together in equipment specifications and maintenance documents."
];

export const indexIntro = "Choose a letter to see terms from across the glossary, or open a category to browse one subject. The A–Z index includes common alternate names and abbreviations alongside the main terms. Each entry expands applicable abbreviations and links to related definitions. The quick-reference table collects the abbreviations in one place. Use the return link at the end of each category to get back to the index.";

export const indexLetters: { label: string; id?: string }[] = [
  {
    "label": "0–9",
    "id": "index-0-9"
  },
  {
    "label": "A",
    "id": "index-a"
  },
  {
    "label": "B",
    "id": "index-b"
  },
  {
    "label": "C",
    "id": "index-c"
  },
  {
    "label": "D",
    "id": "index-d"
  },
  {
    "label": "E",
    "id": "index-e"
  },
  {
    "label": "F",
    "id": "index-f"
  },
  {
    "label": "G",
    "id": "index-g"
  },
  {
    "label": "H",
    "id": "index-h"
  },
  {
    "label": "I",
    "id": "index-i"
  },
  {
    "label": "J",
    "id": "index-j"
  },
  {
    "label": "K",
    "id": "index-k"
  },
  {
    "label": "L",
    "id": "index-l"
  },
  {
    "label": "M",
    "id": "index-m"
  },
  {
    "label": "N",
    "id": "index-n"
  },
  {
    "label": "O",
    "id": "index-o"
  },
  {
    "label": "P",
    "id": "index-p"
  },
  {
    "label": "Q",
    "id": "index-q"
  },
  {
    "label": "R",
    "id": "index-r"
  },
  {
    "label": "S",
    "id": "index-s"
  },
  {
    "label": "T",
    "id": "index-t"
  },
  {
    "label": "U",
    "id": "index-u"
  },
  {
    "label": "V"
  },
  {
    "label": "W",
    "id": "index-w"
  },
  {
    "label": "X"
  },
  {
    "label": "Y"
  },
  {
    "label": "Z"
  }
];

export const letterGroups: { id: string; letter: string; terms: { label: string; id: string }[] }[] = [
  {
    "id": "index-0-9",
    "letter": "0–9",
    "terms": [
      {
        "label": "28 V DC",
        "id": "28-v-dc"
      },
      {
        "label": "400 Hz ground power",
        "id": "400-hz-power"
      },
      {
        "label": "400 Hz power",
        "id": "400-hz-power"
      },
      {
        "label": "6.6 A",
        "id": "6-6-a"
      }
    ]
  },
  {
    "id": "index-a",
    "letter": "A",
    "terms": [
      {
        "label": "A",
        "id": "6-6-a"
      },
      {
        "label": "AC",
        "id": "faa-ac"
      },
      {
        "label": "AC power",
        "id": "400-hz-power"
      },
      {
        "label": "ACU",
        "id": "acu"
      },
      {
        "label": "AD",
        "id": "ad"
      },
      {
        "label": "ADC",
        "id": "air-data-computer"
      },
      {
        "label": "ADTS",
        "id": "adts"
      },
      {
        "label": "Aerodrome",
        "id": "aerodrome"
      },
      {
        "label": "AFQRJOS",
        "id": "afqrjos"
      },
      {
        "label": "AGL",
        "id": "agl"
      },
      {
        "label": "AHM",
        "id": "ahm"
      },
      {
        "label": "Air conditioning unit",
        "id": "acu"
      },
      {
        "label": "Air data computer",
        "id": "air-data-computer"
      },
      {
        "label": "Air data test set",
        "id": "adts"
      },
      {
        "label": "Air start unit",
        "id": "asu"
      },
      {
        "label": "Aircraft maintenance manual",
        "id": "amm"
      },
      {
        "label": "Aircraft on ground",
        "id": "aog"
      },
      {
        "label": "Aircraft tow bar",
        "id": "tow-bar"
      },
      {
        "label": "Aircraft tug",
        "id": "aircraft-tug"
      },
      {
        "label": "Airfield ground lighting",
        "id": "agl"
      },
      {
        "label": "Airfield lighting control and monitoring system",
        "id": "alcms"
      },
      {
        "label": "Airfield sign",
        "id": "airfield-sign"
      },
      {
        "label": "Airside",
        "id": "airside"
      },
      {
        "label": "Airside pit system",
        "id": "hydrant-system"
      },
      {
        "label": "Airworthiness directive",
        "id": "ad"
      },
      {
        "label": "ALCMS",
        "id": "alcms"
      },
      {
        "label": "ALS",
        "id": "als"
      },
      {
        "label": "Ambulift",
        "id": "ambulift"
      },
      {
        "label": "AMM",
        "id": "amm"
      },
      {
        "label": "AOG",
        "id": "aog"
      },
      {
        "label": "Approach lighting system",
        "id": "als"
      },
      {
        "label": "Apron",
        "id": "apron"
      },
      {
        "label": "APU",
        "id": "apu"
      },
      {
        "label": "AS9100",
        "id": "as9100"
      },
      {
        "label": "ASTM D1655",
        "id": "astm-d1655"
      },
      {
        "label": "ASU",
        "id": "asu"
      },
      {
        "label": "ATA Spec 103",
        "id": "ata-spec-103"
      },
      {
        "label": "ATA Specification 103",
        "id": "ata-spec-103"
      },
      {
        "label": "ATE",
        "id": "ate"
      },
      {
        "label": "ATF",
        "id": "atf"
      },
      {
        "label": "Automatic test equipment",
        "id": "ate"
      },
      {
        "label": "Auxiliary power unit",
        "id": "apu"
      },
      {
        "label": "Avgas",
        "id": "avgas"
      },
      {
        "label": "Avgas 100LL",
        "id": "avgas"
      },
      {
        "label": "Aviation fuel testing equipment",
        "id": "fuel-testing-equipment"
      },
      {
        "label": "Aviation turbine fuel",
        "id": "atf"
      },
      {
        "label": "Axle jack",
        "id": "axle-jack"
      }
    ]
  },
  {
    "id": "index-b",
    "letter": "B",
    "terms": [
      {
        "label": "Backshell",
        "id": "backshell"
      },
      {
        "label": "Baggage cart",
        "id": "baggage-cart"
      },
      {
        "label": "Baggage tractor",
        "id": "baggage-tractor"
      },
      {
        "label": "Base can",
        "id": "light-base"
      },
      {
        "label": "Base maintenance",
        "id": "line-maintenance"
      },
      {
        "label": "Below the wing",
        "id": "ground-handling"
      },
      {
        "label": "Belt loader",
        "id": "belt-loader"
      },
      {
        "label": "BIS",
        "id": "bis"
      },
      {
        "label": "Bleed air",
        "id": "bleed-air"
      },
      {
        "label": "Bowser",
        "id": "bowser"
      },
      {
        "label": "Brightness step",
        "id": "brightness-step"
      },
      {
        "label": "Bureau of Indian Standards",
        "id": "bis"
      }
    ]
  },
  {
    "id": "index-c",
    "letter": "C",
    "terms": [
      {
        "label": "Cable assembly",
        "id": "cable-assembly"
      },
      {
        "label": "Cable loom",
        "id": "wire-harness"
      },
      {
        "label": "Calibration",
        "id": "calibration"
      },
      {
        "label": "Calibration certificate",
        "id": "calibration-certificate"
      },
      {
        "label": "Calibration interval",
        "id": "calibration-interval"
      },
      {
        "label": "Candela",
        "id": "candela-and-lux"
      },
      {
        "label": "Candela and lux",
        "id": "candela-and-lux"
      },
      {
        "label": "CAR",
        "id": "car"
      },
      {
        "label": "Cargo loader",
        "id": "cargo-loader"
      },
      {
        "label": "CAT I, II, III",
        "id": "precision-approach-categories"
      },
      {
        "label": "Category I, II and III approaches",
        "id": "precision-approach-categories"
      },
      {
        "label": "Catering hi-lift",
        "id": "catering-hi-lift"
      },
      {
        "label": "CCR",
        "id": "ccr"
      },
      {
        "label": "cd",
        "id": "candela-and-lux"
      },
      {
        "label": "CEMILAC",
        "id": "cemilac"
      },
      {
        "label": "Centre for Military Airworthiness and Certification",
        "id": "cemilac"
      },
      {
        "label": "Chock-to-chock",
        "id": "chock-to-chock"
      },
      {
        "label": "Chocks",
        "id": "chocks"
      },
      {
        "label": "Civil Aviation Requirements",
        "id": "car"
      },
      {
        "label": "Clear and bright test",
        "id": "clear-and-bright-test"
      },
      {
        "label": "CMM",
        "id": "cmm"
      },
      {
        "label": "Component maintenance manual",
        "id": "cmm"
      },
      {
        "label": "Component test bench",
        "id": "test-bench"
      },
      {
        "label": "Conductivity test",
        "id": "conductivity-test"
      },
      {
        "label": "Connector",
        "id": "connector"
      },
      {
        "label": "Constant current regulator",
        "id": "ccr"
      },
      {
        "label": "Container loader",
        "id": "cargo-loader"
      },
      {
        "label": "Continuity test",
        "id": "continuity-test"
      },
      {
        "label": "Crimp",
        "id": "crimp"
      }
    ]
  },
  {
    "id": "index-d",
    "letter": "D",
    "terms": [
      {
        "label": "DC",
        "id": "28-v-dc"
      },
      {
        "label": "De-icing and anti-icing",
        "id": "de-icing-and-anti-icing"
      },
      {
        "label": "De-icing vehicle",
        "id": "de-icing-vehicle"
      },
      {
        "label": "DEF STAN 91-091",
        "id": "def-stan-91-091"
      },
      {
        "label": "Density and specific gravity",
        "id": "density"
      },
      {
        "label": "DGAQA",
        "id": "dgaqa"
      },
      {
        "label": "DGCA",
        "id": "dgca"
      },
      {
        "label": "Dielectric withstand test",
        "id": "hipot"
      },
      {
        "label": "Directorate General of Aeronautical Quality Assurance",
        "id": "dgaqa"
      },
      {
        "label": "Directorate General of Civil Aviation",
        "id": "dgca"
      },
      {
        "label": "Displaced threshold",
        "id": "displaced-threshold"
      },
      {
        "label": "Dissolved water",
        "id": "free-water"
      },
      {
        "label": "Dolly",
        "id": "dolly"
      },
      {
        "label": "DUT",
        "id": "uut"
      }
    ]
  },
  {
    "id": "index-e",
    "letter": "E",
    "terms": [
      {
        "label": "eGSE",
        "id": "egse"
      },
      {
        "label": "EI",
        "id": "afqrjos"
      },
      {
        "label": "Electric ground support equipment",
        "id": "egse"
      },
      {
        "label": "Electrical wiring interconnection system",
        "id": "ewis"
      },
      {
        "label": "Elevated fixture",
        "id": "elevated-fixture"
      },
      {
        "label": "Equipment restraint area",
        "id": "era"
      },
      {
        "label": "ERA",
        "id": "era"
      },
      {
        "label": "EWIS",
        "id": "ewis"
      }
    ]
  },
  {
    "id": "index-f",
    "letter": "F",
    "terms": [
      {
        "label": "FAA",
        "id": "faa-ac"
      },
      {
        "label": "FAA advisory circular",
        "id": "faa-ac"
      },
      {
        "label": "FAA Form 8130-3",
        "id": "ad"
      },
      {
        "label": "Factory acceptance test",
        "id": "fat"
      },
      {
        "label": "FAT",
        "id": "fat"
      },
      {
        "label": "FBO",
        "id": "ground-handling"
      },
      {
        "label": "Filter monitor",
        "id": "filter-water-separator"
      },
      {
        "label": "Filter water separator",
        "id": "filter-water-separator"
      },
      {
        "label": "Fixed-base operator",
        "id": "ground-handling"
      },
      {
        "label": "FL",
        "id": "flight-level"
      },
      {
        "label": "Flash point",
        "id": "flash-point"
      },
      {
        "label": "Flight level",
        "id": "flight-level"
      },
      {
        "label": "FOD",
        "id": "fod"
      },
      {
        "label": "Foreign object debris",
        "id": "fod"
      },
      {
        "label": "Forklift",
        "id": "forklift"
      },
      {
        "label": "Frangibility",
        "id": "frangibility"
      },
      {
        "label": "Frangible coupling",
        "id": "frangible-coupling"
      },
      {
        "label": "Free water",
        "id": "free-water"
      },
      {
        "label": "Freeze point",
        "id": "freeze-point"
      },
      {
        "label": "FSII",
        "id": "fsii"
      },
      {
        "label": "Fuel farm",
        "id": "fuel-farm"
      },
      {
        "label": "Fuel quality control",
        "id": "fuel-quality-control"
      },
      {
        "label": "Fuel sampling",
        "id": "fuel-sampling"
      },
      {
        "label": "Fuel system icing inhibitor",
        "id": "fsii"
      },
      {
        "label": "Fuel testing equipment",
        "id": "fuel-testing-equipment"
      },
      {
        "label": "FWS",
        "id": "filter-water-separator"
      }
    ]
  },
  {
    "id": "index-g",
    "letter": "G",
    "terms": [
      {
        "label": "GPU",
        "id": "gpu"
      },
      {
        "label": "Ground air conditioning",
        "id": "acu"
      },
      {
        "label": "Ground handling",
        "id": "ground-handling"
      },
      {
        "label": "Ground power unit",
        "id": "gpu"
      },
      {
        "label": "Ground support equipment",
        "id": "gse"
      },
      {
        "label": "Ground test equipment",
        "id": "ground-test-equipment"
      },
      {
        "label": "GSE",
        "id": "gse"
      },
      {
        "label": "GSE technician",
        "id": "gse"
      },
      {
        "label": "GTE",
        "id": "ground-test-equipment"
      }
    ]
  },
  {
    "id": "index-h",
    "letter": "H",
    "terms": [
      {
        "label": "Hi-pot",
        "id": "hipot"
      },
      {
        "label": "High-potential test",
        "id": "hipot"
      },
      {
        "label": "HIRL",
        "id": "runway-edge-lights"
      },
      {
        "label": "Holding position",
        "id": "holding-position"
      },
      {
        "label": "Hydrant dispenser",
        "id": "hydrant-dispenser"
      },
      {
        "label": "Hydrant system",
        "id": "hydrant-system"
      },
      {
        "label": "Hydraulic mule",
        "id": "hydraulic-test-stand"
      },
      {
        "label": "Hydraulic system",
        "id": "hydraulic-system"
      },
      {
        "label": "Hydraulic test stand",
        "id": "hydraulic-test-stand"
      },
      {
        "label": "Hz",
        "id": "400-hz-power"
      }
    ]
  },
  {
    "id": "index-i",
    "letter": "I",
    "terms": [
      {
        "label": "IATA",
        "id": "ahm"
      },
      {
        "label": "IATA Airport Handling Manual",
        "id": "ahm"
      },
      {
        "label": "IATA Ground Operations Manual",
        "id": "igom"
      },
      {
        "label": "IATA Safety Audit for Ground Operations",
        "id": "isago"
      },
      {
        "label": "IATA Unit Load Device Regulations",
        "id": "uldr"
      },
      {
        "label": "ICAO",
        "id": "icao-annex-14"
      },
      {
        "label": "ICAO Annex 14",
        "id": "icao-annex-14"
      },
      {
        "label": "IEC",
        "id": "iec-61820"
      },
      {
        "label": "IEC 61820 and IEC 61822",
        "id": "iec-61820"
      },
      {
        "label": "IGOM",
        "id": "igom"
      },
      {
        "label": "ILCMS",
        "id": "alcms"
      },
      {
        "label": "Information sign",
        "id": "information-sign"
      },
      {
        "label": "inHg",
        "id": "pressure-units"
      },
      {
        "label": "Inset fixture",
        "id": "inset-fixture"
      },
      {
        "label": "Insulation resistance",
        "id": "insulation-resistance-test"
      },
      {
        "label": "Insulation resistance test",
        "id": "insulation-resistance-test"
      },
      {
        "label": "Into-plane",
        "id": "into-plane"
      },
      {
        "label": "IP",
        "id": "afqrjos"
      },
      {
        "label": "IPC/WHMA-A-620",
        "id": "ipc-a-620"
      },
      {
        "label": "IR",
        "id": "insulation-resistance-test"
      },
      {
        "label": "Iron bird",
        "id": "iron-bird"
      },
      {
        "label": "ISAGO",
        "id": "isago"
      },
      {
        "label": "ISO",
        "id": "iso-10254"
      },
      {
        "label": "ISO 10254",
        "id": "iso-10254"
      },
      {
        "label": "ISO/IEC 17025",
        "id": "iso-17025"
      },
      {
        "label": "Isolation transformer",
        "id": "isolation-transformer"
      }
    ]
  },
  {
    "id": "index-j",
    "letter": "J",
    "terms": [
      {
        "label": "Jet A",
        "id": "jet-a-1"
      },
      {
        "label": "Jet A-1",
        "id": "jet-a-1"
      },
      {
        "label": "JIG",
        "id": "afqrjos"
      },
      {
        "label": "JP-8",
        "id": "jet-a-1"
      }
    ]
  },
  {
    "id": "index-k",
    "letter": "K",
    "terms": [
      {
        "label": "Knots",
        "id": "flight-level"
      }
    ]
  },
  {
    "id": "index-l",
    "letter": "L",
    "terms": [
      {
        "label": "L-850 and L-852",
        "id": "inset-fixture"
      },
      {
        "label": "L-858",
        "id": "airfield-sign"
      },
      {
        "label": "L-861 and L-862",
        "id": "runway-edge-lights"
      },
      {
        "label": "Landing gear",
        "id": "landing-gear"
      },
      {
        "label": "Lavatory service vehicle",
        "id": "lavatory-service-vehicle"
      },
      {
        "label": "Leak test",
        "id": "leak-test"
      },
      {
        "label": "Light base",
        "id": "light-base"
      },
      {
        "label": "Line maintenance",
        "id": "line-maintenance"
      },
      {
        "label": "Line replaceable unit",
        "id": "lru"
      },
      {
        "label": "LIRL",
        "id": "runway-edge-lights"
      },
      {
        "label": "Location sign",
        "id": "location-sign"
      },
      {
        "label": "Low visibility procedures",
        "id": "lvp"
      },
      {
        "label": "Lower deck loader",
        "id": "cargo-loader"
      },
      {
        "label": "LRU",
        "id": "lru"
      },
      {
        "label": "Lux",
        "id": "candela-and-lux"
      },
      {
        "label": "LVP",
        "id": "lvp"
      },
      {
        "label": "lx",
        "id": "candela-and-lux"
      }
    ]
  },
  {
    "id": "index-m",
    "letter": "M",
    "terms": [
      {
        "label": "Maintenance platform",
        "id": "maintenance-platform"
      },
      {
        "label": "Maintenance, repair and overhaul",
        "id": "mro"
      },
      {
        "label": "Mandatory instruction sign",
        "id": "mandatory-sign"
      },
      {
        "label": "Manoeuvring area",
        "id": "movement-area"
      },
      {
        "label": "Marshalling",
        "id": "marshalling"
      },
      {
        "label": "mbar",
        "id": "pressure-units"
      },
      {
        "label": "Measurement uncertainty",
        "id": "measurement-uncertainty"
      },
      {
        "label": "Membrane filtration",
        "id": "millipore-test"
      },
      {
        "label": "MIL-STD",
        "id": "mil-std"
      },
      {
        "label": "Millipore test",
        "id": "millipore-test"
      },
      {
        "label": "MIRL",
        "id": "runway-edge-lights"
      },
      {
        "label": "Movement area",
        "id": "movement-area"
      },
      {
        "label": "MRO",
        "id": "mro"
      }
    ]
  },
  {
    "id": "index-n",
    "letter": "N",
    "terms": [
      {
        "label": "NABL",
        "id": "nabl"
      },
      {
        "label": "Nadcap",
        "id": "as9100"
      },
      {
        "label": "National Accreditation Board for Testing and Calibration Laboratories",
        "id": "nabl"
      },
      {
        "label": "National Stock Number",
        "id": "nsn"
      },
      {
        "label": "NATO stock number",
        "id": "nsn"
      },
      {
        "label": "Nitrogen servicing cart",
        "id": "landing-gear"
      },
      {
        "label": "Nose gear bypass pin",
        "id": "landing-gear"
      },
      {
        "label": "NSN",
        "id": "nsn"
      }
    ]
  },
  {
    "id": "index-o",
    "letter": "O",
    "terms": [
      {
        "label": "Oxygen servicing cart",
        "id": "gse"
      }
    ]
  },
  {
    "id": "index-p",
    "letter": "P",
    "terms": [
      {
        "label": "PAPI",
        "id": "papi"
      },
      {
        "label": "Particulate contamination",
        "id": "millipore-test"
      },
      {
        "label": "Parts Manufacturer Approval",
        "id": "ad"
      },
      {
        "label": "Passenger boarding bridge",
        "id": "passenger-boarding-bridge"
      },
      {
        "label": "Passenger boarding steps",
        "id": "passenger-steps"
      },
      {
        "label": "Passenger steps",
        "id": "passenger-steps"
      },
      {
        "label": "PBB",
        "id": "passenger-boarding-bridge"
      },
      {
        "label": "PCA",
        "id": "pca"
      },
      {
        "label": "Picosiemens per metre",
        "id": "picosiemens-per-metre"
      },
      {
        "label": "Pilot-controlled lighting",
        "id": "alcms"
      },
      {
        "label": "Pitot-static pressure quantities",
        "id": "ps-qc-pt"
      },
      {
        "label": "Pitot-static system",
        "id": "pitot-static-system"
      },
      {
        "label": "Pitot-static tester",
        "id": "adts"
      },
      {
        "label": "PMA",
        "id": "ad"
      },
      {
        "label": "Potable water truck",
        "id": "potable-water-truck"
      },
      {
        "label": "Pre-conditioned air",
        "id": "pca"
      },
      {
        "label": "Precision approach path indicator",
        "id": "papi"
      },
      {
        "label": "Pressure units in aviation testing",
        "id": "pressure-units"
      },
      {
        "label": "Ps",
        "id": "ps-qc-pt"
      },
      {
        "label": "pS/m",
        "id": "picosiemens-per-metre"
      },
      {
        "label": "psi",
        "id": "pressure-units"
      },
      {
        "label": "Pt",
        "id": "ps-qc-pt"
      },
      {
        "label": "Pushback",
        "id": "pushback"
      },
      {
        "label": "Pushback tractor",
        "id": "pushback-tractor"
      }
    ]
  },
  {
    "id": "index-q",
    "letter": "Q",
    "terms": [
      {
        "label": "Qc",
        "id": "ps-qc-pt"
      }
    ]
  },
  {
    "id": "index-r",
    "letter": "R",
    "terms": [
      {
        "label": "Ramp",
        "id": "ramp"
      },
      {
        "label": "Rapid exit taxiway indicator lights",
        "id": "retil"
      },
      {
        "label": "Reduced vertical separation minima",
        "id": "rvsm"
      },
      {
        "label": "Refueller",
        "id": "refueller"
      },
      {
        "label": "RETIL",
        "id": "retil"
      },
      {
        "label": "RGL",
        "id": "runway-guard-lights"
      },
      {
        "label": "Runway",
        "id": "runway"
      },
      {
        "label": "Runway centreline lights",
        "id": "runway-centreline-lights"
      },
      {
        "label": "Runway distance remaining sign",
        "id": "airfield-sign"
      },
      {
        "label": "Runway edge lights",
        "id": "runway-edge-lights"
      },
      {
        "label": "Runway end lights",
        "id": "runway-end-lights"
      },
      {
        "label": "Runway guard lights",
        "id": "runway-guard-lights"
      },
      {
        "label": "Runway incursion",
        "id": "runway-incursion"
      },
      {
        "label": "Runway threshold lights",
        "id": "runway-threshold-lights"
      },
      {
        "label": "Runway visual range",
        "id": "rvr"
      },
      {
        "label": "RVR",
        "id": "rvr"
      },
      {
        "label": "RVSM",
        "id": "rvsm"
      }
    ]
  },
  {
    "id": "index-s",
    "letter": "S",
    "terms": [
      {
        "label": "SAF",
        "id": "saf"
      },
      {
        "label": "Safety cones",
        "id": "safety-cones"
      },
      {
        "label": "SAT",
        "id": "sat"
      },
      {
        "label": "SDA",
        "id": "static-dissipator-additive"
      },
      {
        "label": "Series circuit",
        "id": "series-circuit"
      },
      {
        "label": "SGHA",
        "id": "sgha"
      },
      {
        "label": "Shear pin",
        "id": "shear-pin"
      },
      {
        "label": "Site acceptance test",
        "id": "sat"
      },
      {
        "label": "SRU",
        "id": "lru"
      },
      {
        "label": "Stand",
        "id": "stand"
      },
      {
        "label": "Standard Ground Handling Agreement",
        "id": "sgha"
      },
      {
        "label": "Start cart",
        "id": "asu"
      },
      {
        "label": "Static dissipator additive",
        "id": "static-dissipator-additive"
      },
      {
        "label": "Static port",
        "id": "pitot-static-system"
      },
      {
        "label": "Stop bar",
        "id": "stop-bar"
      },
      {
        "label": "Sustainable aviation fuel",
        "id": "saf"
      }
    ]
  },
  {
    "id": "index-t",
    "letter": "T",
    "terms": [
      {
        "label": "Taxiway",
        "id": "taxiway"
      },
      {
        "label": "Taxiway centreline lights",
        "id": "taxiway-centreline-lights"
      },
      {
        "label": "Taxiway edge lights",
        "id": "taxiway-edge-lights"
      },
      {
        "label": "Taxiway location sign",
        "id": "location-sign"
      },
      {
        "label": "TBT",
        "id": "thermal-balance-test"
      },
      {
        "label": "TDZL",
        "id": "touchdown-zone-lights"
      },
      {
        "label": "Test accuracy ratio",
        "id": "measurement-uncertainty"
      },
      {
        "label": "Test bench",
        "id": "test-bench"
      },
      {
        "label": "Test program set",
        "id": "tps"
      },
      {
        "label": "Test rig",
        "id": "test-rig"
      },
      {
        "label": "Test stand",
        "id": "test-stand"
      },
      {
        "label": "Thermal balance test",
        "id": "thermal-balance-test"
      },
      {
        "label": "Thermal vacuum chamber",
        "id": "thermal-vacuum-chamber"
      },
      {
        "label": "Thermal vacuum testing",
        "id": "thermal-vacuum-testing"
      },
      {
        "label": "Threshold",
        "id": "threshold"
      },
      {
        "label": "Torr",
        "id": "pressure-units"
      },
      {
        "label": "Touchdown zone lights",
        "id": "touchdown-zone-lights"
      },
      {
        "label": "Tow bar",
        "id": "tow-bar"
      },
      {
        "label": "Towbarless tractor",
        "id": "towbarless-tractor"
      },
      {
        "label": "Towbarless tug",
        "id": "towbarless-tractor"
      },
      {
        "label": "TPS",
        "id": "tps"
      },
      {
        "label": "Traceability, metrological",
        "id": "traceability"
      },
      {
        "label": "Tripod jack",
        "id": "tripod-jack"
      },
      {
        "label": "Turnaround",
        "id": "turnaround"
      },
      {
        "label": "TVAC",
        "id": "thermal-vacuum-testing"
      }
    ]
  },
  {
    "id": "index-u",
    "letter": "U",
    "terms": [
      {
        "label": "UFC",
        "id": "mil-std"
      },
      {
        "label": "ULD",
        "id": "uld"
      },
      {
        "label": "ULDR",
        "id": "uldr"
      },
      {
        "label": "Unit load device",
        "id": "uld"
      },
      {
        "label": "Unit under test",
        "id": "uut"
      },
      {
        "label": "UUT",
        "id": "uut"
      }
    ]
  },
  {
    "id": "index-w",
    "letter": "W",
    "terms": [
      {
        "label": "Water detection kit",
        "id": "water-detection-test"
      },
      {
        "label": "Water detection test",
        "id": "water-detection-test"
      },
      {
        "label": "WHMA",
        "id": "ipc-a-620"
      },
      {
        "label": "Wire harness",
        "id": "wire-harness"
      },
      {
        "label": "Wire loom",
        "id": "wire-harness"
      }
    ]
  }
];

export const sections: ArticleSection[] = [
  {
    "id": "powered-gse",
    "title": "Ground Support Equipment — Powered",
    "blocks": [
      {
        "kind": "heading",
        "id": "acu",
        "title": "Air conditioning unit (ACU)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ACU — Air conditioning unit"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Ground air conditioning unit"
      },
      {
        "kind": "paragraph",
        "text": "An air conditioning unit is ground equipment that delivers conditioned ventilation air to a parked aircraft through a duct."
      },
      {
        "kind": "paragraph",
        "text": "ACU often identifies the equipment, while PCA can refer to the supply or the way the air is prepared. Stand equipment may be fixed or mobile. The aircraft interface distinguishes cabin ventilation air from the compressed air used for pneumatic engine starting."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pre-conditioned air (PCA) unit](#pca) · [Air start unit (ASU)](#asu)"
      },
      {
        "kind": "heading",
        "id": "asu",
        "title": "Air start unit (ASU)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ASU — Air start unit"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Start cart, pneumatic air starter"
      },
      {
        "kind": "paragraph",
        "text": "An air start unit is ground support equipment that supplies compressed air to start a compatible aircraft engine on the ground."
      },
      {
        "kind": "paragraph",
        "text": "An ASU supplies the pneumatic energy that an auxiliary power unit can provide on many aircraft. Equipment designs vary in how they generate or store that air. The aircraft documentation specifies the required airflow, pressure and connection arrangement."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Auxiliary power unit (APU)](#apu) · [Ground power unit (GPU)](#gpu) · [Pre-conditioned air (PCA) unit](#pca)"
      },
      {
        "kind": "heading",
        "id": "aircraft-tug",
        "title": "Aircraft tug"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft tug is a powered vehicle designed to move an aircraft on the ground."
      },
      {
        "kind": "paragraph",
        "text": "Tug is the broad equipment term. A conventional tug connects via a tow bar, while a towbarless tractor captures the nose wheels directly. Pushback and longer repositioning moves can call for different tug and aircraft combinations."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pushback tractor](#pushback-tractor) · [Towbarless tractor](#towbarless-tractor) · [Tow bar](#tow-bar)"
      },
      {
        "kind": "heading",
        "id": "ambulift",
        "title": "Ambulift"
      },
      {
        "kind": "paragraph",
        "text": "An ambulift is a vehicle with a height-adjustable cabin that transfers passengers who need boarding assistance between apron level and an aircraft door."
      },
      {
        "kind": "paragraph",
        "text": "Ambulifts can serve stands where boarding is by stairs. Aircraft door height and the operator's passenger-assistance process determine how the vehicle is used."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Passenger boarding steps](#passenger-steps) · [Passenger boarding bridge (PBB)](#passenger-boarding-bridge)"
      },
      {
        "kind": "heading",
        "id": "baggage-tractor",
        "title": "Baggage tractor"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Baggage tug, baggage tow tractor, bobtail in some operations"
      },
      {
        "kind": "paragraph",
        "text": "A baggage tractor is a powered vehicle that pulls baggage carts or compatible cargo dollies around an airport."
      },
      {
        "kind": "paragraph",
        "text": "The load rides on the towed cart or dolly. Some operations use bobtail as a local name for a towing vehicle. In a specification, the intended load and towing interface clarify which vehicle is meant."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Baggage cart](#baggage-cart) · [Dolly](#dolly)"
      },
      {
        "kind": "heading",
        "id": "belt-loader",
        "title": "Belt loader"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Baggage belt conveyor"
      },
      {
        "kind": "paragraph",
        "text": "A belt loader is a mobile conveyor that transfers loose baggage and cargo between apron level and an aircraft hold."
      },
      {
        "kind": "paragraph",
        "text": "The conveyor is positioned at the hold opening and serves bulk-loaded baggage or freight. Containerised loads normally move using a cargo loader and dollies suited to aircraft containers or pallets."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Cargo loader](#cargo-loader) · [Baggage cart](#baggage-cart) · [Unit load device (ULD)](#uld)"
      },
      {
        "kind": "heading",
        "id": "cargo-loader",
        "title": "Cargo loader"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Container loader, ULD loader"
      },
      {
        "kind": "paragraph",
        "text": "A cargo loader is a powered lifting platform that transfers aircraft containers or pallets between apron equipment and an aircraft cargo door."
      },
      {
        "kind": "paragraph",
        "text": "A lower deck loader serves a lower-hold door and a main deck loader serves a freighter's main cargo deck. Door sill height, unit load device dimensions and rated load determine which equipment suits the aircraft and cargo."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Unit load device (ULD)](#uld) · [Belt loader](#belt-loader) · [Dolly](#dolly)"
      },
      {
        "kind": "heading",
        "id": "catering-hi-lift",
        "title": "Catering hi-lift"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Catering truck, catering high loader"
      },
      {
        "kind": "paragraph",
        "text": "A catering hi-lift is a vehicle with a raised body or platform for transferring galley supplies through an aircraft service door."
      },
      {
        "kind": "paragraph",
        "text": "The lift brings trolleys and catering supplies to the aircraft door height. Ground operations distinguish it from a passenger lift and from cargo loaders serving hold doors."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ambulift](#ambulift) · [Cargo loader](#cargo-loader) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "de-icing-vehicle",
        "title": "De-icing vehicle"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — De-icing rig, de-icer truck"
      },
      {
        "kind": "paragraph",
        "text": "A de-icing vehicle is powered ground equipment that applies approved fluids to aircraft surfaces during ground de-icing or anti-icing."
      },
      {
        "kind": "paragraph",
        "text": "Depending on the design, an operator works from an elevating basket or enclosed cab. Fluid capability, application equipment and winter operating conditions vary between vehicles. The operator's approved programme defines the treatment."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [De-icing and anti-icing](#de-icing-and-anti-icing) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "egse",
        "title": "Electric ground support equipment (eGSE)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — eGSE — Electric ground support equipment"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Electrified GSE, electrical GSE in ground fleet discussions"
      },
      {
        "kind": "paragraph",
        "text": "Electric ground support equipment is powered GSE that uses electricity to propel the vehicle or drive its principal equipment function."
      },
      {
        "kind": "paragraph",
        "text": "Battery-powered baggage tractors and mains-powered equipment are examples. A GPU can deliver electrical power even when a diesel engine drives it, so a fleet specification identifies what powers the unit itself."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ground support equipment (GSE)](#gse) · [Ground power unit (GPU)](#gpu) · [Baggage tractor](#baggage-tractor)"
      },
      {
        "kind": "heading",
        "id": "forklift",
        "title": "Forklift"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Lift truck"
      },
      {
        "kind": "paragraph",
        "text": "A forklift is a powered industrial vehicle that lifts compatible loads on fork arms."
      },
      {
        "kind": "paragraph",
        "text": "Airport cargo and stores teams use forklifts for suitable pallets and handling frames. The load interface matters because aircraft ULDs may require dedicated transfer equipment or approved handling provisions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Cargo loader](#cargo-loader) · [Unit load device (ULD)](#uld) · [Dolly](#dolly)"
      },
      {
        "kind": "heading",
        "id": "gpu",
        "title": "Ground power unit (GPU)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — GPU — Ground power unit"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft ground power supply, external ground power unit"
      },
      {
        "kind": "paragraph",
        "text": "A ground power unit is a fixed or mobile electrical supply that powers a compatible aircraft while it is on the ground."
      },
      {
        "kind": "paragraph",
        "text": "A GPU can be a mobile engine-driven or battery-based unit, or a fixed converter serving a stand. Common aircraft supply formats include 28 V DC and 115/200 V, 400 Hz AC. The airframe determines the required voltage, frequency, connector and power capacity. Parked aircraft can use ground power for activities such as cabin preparation and maintenance, with the onboard auxiliary power unit available on applicable aircraft subject to operating procedures."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [400 Hz power](#400-hz-power) · [28 V DC](#28-v-dc) · [Auxiliary power unit (APU)](#apu) · [Ground support equipment (GSE)](#gse)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft ground power units](/resources/28v-dc-vs-400hz-ground-power)"
      },
      {
        "kind": "heading",
        "id": "hydrant-dispenser",
        "title": "Hydrant dispenser"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Hydrant servicer, hydrant cart for some towable designs"
      },
      {
        "kind": "paragraph",
        "text": "A hydrant dispenser is aircraft refuelling equipment that transfers fuel from a pressurised airport hydrant system to an aircraft."
      },
      {
        "kind": "paragraph",
        "text": "A dispenser typically connects a hydrant pit to the aircraft through a hose and equipment that meters flow and controls fuel delivery. Filtration and other monitoring arrangements depend on the applicable system and fuel quality requirements. The source of the fuel is the airport pipeline and associated storage installation. A refueller has its own tank, which gives the two equipment types different roles in airport operations and fleet planning."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydrant system](#hydrant-system) · [Refueller](#refueller) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aviation fuel handling equipment](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "lavatory-service-vehicle",
        "title": "Lavatory service vehicle"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Lavatory service truck, lav truck"
      },
      {
        "kind": "paragraph",
        "text": "A lavatory service vehicle is ground equipment that collects aircraft toilet waste and supports servicing of the aircraft lavatory system."
      },
      {
        "kind": "paragraph",
        "text": "Some designs are self-propelled and others are towed. Dedicated tanks and connections form part of the service equipment. The operation is managed separately from potable-water delivery."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Potable water truck](#potable-water-truck) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "potable-water-truck",
        "title": "Potable water truck"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft drinking-water service vehicle"
      },
      {
        "kind": "paragraph",
        "text": "A potable water truck is a dedicated vehicle that transfers drinking-quality water into an aircraft's potable-water system."
      },
      {
        "kind": "paragraph",
        "text": "A water service vehicle uses equipment dedicated to potable water. Airport operating procedures govern hygiene, water quality and segregation from lavatory servicing equipment."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Lavatory service vehicle](#lavatory-service-vehicle) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "pca",
        "title": "Pre-conditioned air (PCA) unit"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — PCA — Pre-conditioned air"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Preconditioned air unit, ground PCA unit"
      },
      {
        "kind": "paragraph",
        "text": "A pre-conditioned air unit is ground equipment that supplies cooled, heated or ventilating air to a parked aircraft as the application requires."
      },
      {
        "kind": "paragraph",
        "text": "A fixed PCA supply may be installed at a passenger boarding bridge, while a mobile unit can serve remote stands. At some stands, an apron service pit houses connections or retractable equipment such as PCA or ground power. The service shown in the stand design distinguishes those utility pits from fuel hydrant pits."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Air conditioning unit (ACU)](#acu) · [Passenger boarding bridge (PBB)](#passenger-boarding-bridge) · [Auxiliary power unit (APU)](#apu)"
      },
      {
        "kind": "heading",
        "id": "pushback-tractor",
        "title": "Pushback tractor"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Pushback tug"
      },
      {
        "kind": "paragraph",
        "text": "A pushback tractor is a powered ground vehicle designed to move an aircraft away from its parking stand during pushback."
      },
      {
        "kind": "paragraph",
        "text": "Conventional tractors connect through a compatible tow bar, while towbarless models secure the nose wheels directly. A pushback tractor can also perform towing tasks when authorised for the aircraft and intended move."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pushback](#pushback) · [Towbarless tractor](#towbarless-tractor) · [Tow bar](#tow-bar)"
      },
      {
        "kind": "heading",
        "id": "refueller",
        "title": "Refueller"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Fuel tanker, refueler in US usage"
      },
      {
        "kind": "paragraph",
        "text": "A refueller is a mobile tank vehicle that carries aviation fuel and delivers it to aircraft through onboard dispensing equipment."
      },
      {
        "kind": "paragraph",
        "text": "The vehicle brings fuel to the aircraft from an approved loading point. Aircraft type, fuel grade and the operator's delivery arrangements determine which tanker and dispensing equipment are suitable."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydrant dispenser](#hydrant-dispenser) · [Bowser](#bowser) · [Fuel farm](#fuel-farm)"
      },
      {
        "kind": "heading",
        "id": "towbarless-tractor",
        "title": "Towbarless tractor"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Towbarless tug, TBL tug"
      },
      {
        "kind": "paragraph",
        "text": "A towbarless tractor is an aircraft tug that captures and supports the nose wheels through an integrated coupling system."
      },
      {
        "kind": "paragraph",
        "text": "Compatibility depends on the aircraft's nose gear as well as the tug's approved operating limits. The same equipment family can support stand pushback and, where approved, aircraft repositioning."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aircraft tug](#aircraft-tug) · [Pushback tractor](#pushback-tractor) · [Tow bar](#tow-bar)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "non-powered-gse",
    "title": "Ground Support Equipment — Non-Powered",
    "blocks": [
      {
        "kind": "heading",
        "id": "axle-jack",
        "title": "Axle jack"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Wheel-change jack"
      },
      {
        "kind": "paragraph",
        "text": "An axle jack is a lifting device that raises an aircraft at an approved landing-gear jacking point for local maintenance."
      },
      {
        "kind": "paragraph",
        "text": "Axle jacks are often used when a wheel or brake assembly is removed. A local lift at the landing gear and a multi-point lift of the airframe serve different maintenance needs and follow aircraft-specific instructions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Tripod jack](#tripod-jack) · [Landing gear](#landing-gear) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "heading",
        "id": "baggage-cart",
        "title": "Baggage cart"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Baggage trailer, baggage trolley"
      },
      {
        "kind": "paragraph",
        "text": "A baggage cart is a non-powered trailer that carries loose bags or cargo between baggage handling areas and an aircraft stand."
      },
      {
        "kind": "paragraph",
        "text": "Baggage carts may have enclosed or open-sided bodies. A baggage tractor commonly tows carts in a train, while a dolly is typically configured for a pallet, container or other defined load."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Baggage tractor](#baggage-tractor) · [Dolly](#dolly) · [Belt loader](#belt-loader)"
      },
      {
        "kind": "heading",
        "id": "chocks",
        "title": "Chocks"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Wheel chocks, aircraft chocks"
      },
      {
        "kind": "paragraph",
        "text": "Chocks are blocks placed at aircraft wheels to restrain unintended movement while the aircraft is parked."
      },
      {
        "kind": "paragraph",
        "text": "Chock placement and removal are defined steps in a turnaround. Other vehicle types also use wheel chocks, so equipment specifications identify the intended wheel and operating surface."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Turnaround](#turnaround) · [Stand](#stand) · [Chock-to-chock](#chock-to-chock)"
      },
      {
        "kind": "heading",
        "id": "dolly",
        "title": "Dolly"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — ULD dolly, pallet dolly where configured for that load"
      },
      {
        "kind": "paragraph",
        "text": "A dolly is a low, towable platform that carries a container, pallet or other configured load between ground handling locations."
      },
      {
        "kind": "paragraph",
        "text": "A ULD dolly generally uses a transfer deck and restraints compatible with specific aircraft pallets or containers. A pallet dolly is configured for palletised loads. A baggage tractor commonly supplies the towing power."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Unit load device (ULD)](#uld) · [Cargo loader](#cargo-loader) · [Baggage tractor](#baggage-tractor)"
      },
      {
        "kind": "heading",
        "id": "gse",
        "title": "Ground support equipment (GSE)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — GSE — Ground support equipment"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft ground support equipment, airport GSE"
      },
      {
        "kind": "paragraph",
        "text": "Ground support equipment is equipment used to move, load, service, power or support an aircraft and its ground operations."
      },
      {
        "kind": "paragraph",
        "text": "Powered GSE includes items such as aircraft tugs, belt loaders and ground power units. Non-powered GSE includes tow bars, baggage carts, chocks and access stands. Some equipment is fixed at the stand and other equipment moves between aircraft. A GSE technician maintains the ground equipment fleet. An oxygen servicing cart is a specialised ground unit for approved servicing of aircraft oxygen systems. In a catalogue, the equipment function and aircraft interface give a more precise description than the category name alone. Electrification describes how applicable powered equipment operates."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Electric ground support equipment (eGSE)](#egse) · [Ground power unit (GPU)](#gpu) · [Tow bar](#tow-bar) · [Ground handling](#ground-handling)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [ground support equipment](/products/aviation-equipment/ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "maintenance-platform",
        "title": "Maintenance platform"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Access stand, aircraft maintenance stand"
      },
      {
        "kind": "paragraph",
        "text": "A maintenance platform is a raised workplace that lets technicians reach aircraft surfaces, doors or service points during inspection or maintenance."
      },
      {
        "kind": "paragraph",
        "text": "An access stand can be fixed, moveable or height-adjustable. Platform height, working area and clearance around the airframe determine which arrangement suits the task. Powered lifting platforms also exist."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Line maintenance](#line-maintenance) · [Aircraft maintenance manual (AMM)](#amm) · [Tripod jack](#tripod-jack)"
      },
      {
        "kind": "heading",
        "id": "passenger-steps",
        "title": "Passenger boarding steps"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Passenger steps, boarding stairs, towable passenger steps"
      },
      {
        "kind": "paragraph",
        "text": "Passenger boarding steps are stairs that provide access between apron level and a parked aircraft's passenger door."
      },
      {
        "kind": "paragraph",
        "text": "Towable steps rely on a separate vehicle for repositioning. Motorised passenger boarding stairs move under their own power. Both designs are matched to aircraft door sill heights and the stand arrangement."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Passenger boarding bridge (PBB)](#passenger-boarding-bridge) · [Ambulift](#ambulift) · [Stand](#stand)"
      },
      {
        "kind": "heading",
        "id": "safety-cones",
        "title": "Safety cones"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft safety cones, ramp cones"
      },
      {
        "kind": "paragraph",
        "text": "Safety cones are portable markers used to identify protected areas or hazards around a parked aircraft or ground activity."
      },
      {
        "kind": "paragraph",
        "text": "Cone locations are defined by the local turnaround procedure and the aircraft type being served. Cones provide a visual boundary for nearby personnel and equipment."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Stand](#stand) · [Turnaround](#turnaround) · [Equipment restraint area (ERA)](#era)"
      },
      {
        "kind": "heading",
        "id": "shear-pin",
        "title": "Shear pin"
      },
      {
        "kind": "paragraph",
        "text": "A shear pin is a designed sacrificial fastener that breaks under a specified load to limit the force transferred through an assembly."
      },
      {
        "kind": "paragraph",
        "text": "Some aircraft tow bars use a shear pin to protect the towing interface during an overload. Its characteristics are specific to the approved tow bar and aircraft combination."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Tow bar](#tow-bar) · [Aircraft tug](#aircraft-tug) · [Landing gear](#landing-gear)"
      },
      {
        "kind": "heading",
        "id": "tow-bar",
        "title": "Tow bar"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Towbar, aircraft tow bar, nose gear tow bar"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft tow bar is a ground handling device that connects a towing vehicle to an aircraft's approved towing attachment."
      },
      {
        "kind": "paragraph",
        "text": "A typical nose gear tow bar has a tug-end fitting, a beam and an aircraft-end head. The head and any shear protection are matched to the aircraft and approved towing arrangement. Some bars accept interchangeable heads, while other bars are dedicated to an aircraft type. Aircraft weight, attachment geometry and manoeuvring limits all affect compatibility. A towbarless tractor uses a different coupling arrangement that captures the nose wheels directly."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Shear pin](#shear-pin) · [Towbarless tractor](#towbarless-tractor) · [Pushback](#pushback) · [Landing gear](#landing-gear)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [towing equipment](/products/aviation-equipment/ground-support-equipment/aircraft-tow-bar)"
      },
      {
        "kind": "heading",
        "id": "tripod-jack",
        "title": "Tripod jack"
      },
      {
        "kind": "paragraph",
        "text": "A tripod jack is a three-legged aircraft lifting device that supports the airframe at an approved structural jacking point."
      },
      {
        "kind": "paragraph",
        "text": "Several jacks may be used together for an airframe lift when the maintenance task calls for gear movement or clearance beneath the aircraft. The maintenance documentation defines the jacking arrangement and limitations."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Axle jack](#axle-jack) · [Landing gear](#landing-gear) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "turnaround-and-ramp",
    "title": "Aircraft Turnaround and Ramp Operations",
    "blocks": [
      {
        "kind": "heading",
        "id": "aog",
        "title": "Aircraft on ground (AOG)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — AOG — Aircraft on ground"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft on ground event"
      },
      {
        "kind": "paragraph",
        "text": "Aircraft on ground is an operational status used when an aircraft is unavailable for service and needs attention before returning to operation."
      },
      {
        "kind": "paragraph",
        "text": "An AOG request may involve spares, troubleshooting, repair or test equipment. The term is also used as a logistics priority for time-sensitive aircraft recovery support."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Line maintenance](#line-maintenance) · [Maintenance, repair and overhaul (MRO)](#mro) · [NATO stock number (NSN)](#nsn)"
      },
      {
        "kind": "heading",
        "id": "airside",
        "title": "Airside"
      },
      {
        "kind": "paragraph",
        "text": "Airside is the access-controlled part of an airport that includes aircraft operating areas and associated areas designated by the airport."
      },
      {
        "kind": "paragraph",
        "text": "Airside access can include aprons, taxiways and other restricted spaces. Local access rules determine which people and vehicles may enter each area."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Apron](#apron) · [Movement area](#movement-area) · [Aerodrome](#aerodrome)"
      },
      {
        "kind": "heading",
        "id": "apron",
        "title": "Apron"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Ramp in common airport usage"
      },
      {
        "kind": "paragraph",
        "text": "An apron is an area of a land aerodrome used for aircraft parking, passenger or cargo handling, fuelling or servicing."
      },
      {
        "kind": "paragraph",
        "text": "Stands and associated equipment areas sit within the apron. In operational conversation ramp often means the same area. Airfield drawings and operating documents use the location names adopted by the airport."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ramp](#ramp) · [Stand](#stand) · [Movement area](#movement-area)"
      },
      {
        "kind": "heading",
        "id": "chock-to-chock",
        "title": "Chock-to-chock"
      },
      {
        "kind": "paragraph",
        "text": "Chock-to-chock is a time convention for recording an aircraft operation using the release and application of wheel chocks as event references."
      },
      {
        "kind": "paragraph",
        "text": "Operations systems may instead record off-block and on-block movement events. Reports identify the chosen event definitions so that ground time and elapsed aircraft operating time are interpreted consistently."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Chocks](#chocks) · [Turnaround](#turnaround) · [Apron](#apron)"
      },
      {
        "kind": "heading",
        "id": "de-icing-and-anti-icing",
        "title": "De-icing and anti-icing"
      },
      {
        "kind": "paragraph",
        "text": "De-icing and anti-icing are ground treatments that remove frozen contamination from aircraft surfaces and temporarily protect treated surfaces from further accumulation, respectively."
      },
      {
        "kind": "paragraph",
        "text": "The two terms identify different objectives within a winter ground operation. The aircraft type, prevailing conditions and the approved de-icing programme govern the applicable treatment and its limits."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [De-icing vehicle](#de-icing-vehicle) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "era",
        "title": "Equipment restraint area (ERA)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ERA — Equipment restraint area"
      },
      {
        "kind": "paragraph",
        "text": "An equipment restraint area is a marked area around an aircraft stand where equipment positioning is restricted during specified phases of aircraft movement."
      },
      {
        "kind": "paragraph",
        "text": "The airport's markings and ground handling procedure define the boundary and the applicable access rules. It is distinct from a designated equipment parking location."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Stand](#stand) · [Safety cones](#safety-cones) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "fod",
        "title": "Foreign object debris (FOD)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FOD — Foreign object debris, also foreign object damage when referring to the effect"
      },
      {
        "kind": "paragraph",
        "text": "Foreign object debris is material in an inappropriate location that can damage aircraft, systems or equipment or injure people."
      },
      {
        "kind": "paragraph",
        "text": "On an apron it can include loose hardware, packaging or broken equipment parts. In occurrence reporting, FOD can also refer to the resulting foreign object damage. The report context identifies the intended meaning."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Apron](#apron) · [Ground handling](#ground-handling) · [Runway](#runway)"
      },
      {
        "kind": "heading",
        "id": "ground-handling",
        "title": "Ground handling"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FBO — Fixed-base operator"
      },
      {
        "kind": "paragraph",
        "text": "Ground handling is the set of services that support an aircraft, its passengers, baggage or cargo while the aircraft is on the ground."
      },
      {
        "kind": "paragraph",
        "text": "Below-the-wing activities commonly include ramp and baggage work. Above-the-wing activities usually include passenger-facing tasks such as check-in and boarding. A ground handling agent can perform contracted services under an SGHA. A fixed-base operator (FBO) typically provides general aviation services such as fuelling, aircraft parking or hangar space."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IATA Airport Handling Manual (AHM)](#ahm) · [IATA Ground Operations Manual (IGOM)](#igom) · [Standard Ground Handling Agreement (SGHA)](#sgha) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "into-plane",
        "title": "Into-plane"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Into-plane fuelling, into-plane service"
      },
      {
        "kind": "paragraph",
        "text": "Into-plane fuelling is the operation of delivering aviation fuel into an aircraft at its point of service."
      },
      {
        "kind": "paragraph",
        "text": "Supply may come from a refueller or a hydrant dispenser. Airport fuel storage and distribution support the operation, which also depends on delivery-side quality controls and records."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Refueller](#refueller) · [Hydrant dispenser](#hydrant-dispenser) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "line-maintenance",
        "title": "Line maintenance"
      },
      {
        "kind": "paragraph",
        "text": "Line maintenance is aircraft maintenance carried out in the operating environment to support routine service or address defects between flights or during short ground stops."
      },
      {
        "kind": "paragraph",
        "text": "Base maintenance generally involves work planned for a hangar or another equipped facility. A C check is a scheduled heavy maintenance package where that label is used in the operator's maintenance programme."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Maintenance, repair and overhaul (MRO)](#mro) · [Aircraft on ground (AOG)](#aog) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "heading",
        "id": "mro",
        "title": "Maintenance, repair and overhaul (MRO)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — MRO — Maintenance, repair and overhaul"
      },
      {
        "kind": "paragraph",
        "text": "Maintenance, repair and overhaul is the field of work that maintains, restores or overhauls aircraft and aircraft components."
      },
      {
        "kind": "paragraph",
        "text": "MRO can also describe an organisation or facility that performs those activities. Work may span line maintenance, base maintenance and workshops for removable aircraft components."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Line maintenance](#line-maintenance) · [Line replaceable unit (LRU)](#lru) · [Component maintenance manual (CMM)](#cmm)"
      },
      {
        "kind": "heading",
        "id": "marshalling",
        "title": "Marshalling"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft marshalling, marshaling in US usage"
      },
      {
        "kind": "paragraph",
        "text": "Marshalling is the use of standard visual signals by a ground person to guide aircraft movement or communicate with the flight crew."
      },
      {
        "kind": "paragraph",
        "text": "A guideman or marshaller uses approved hand signals to guide the aircraft when a docking system is unavailable or a procedure requires a person. A wing walker may monitor clearance. Headset communication provides a separate voice channel where the operation calls for one."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Stand](#stand) · [Pushback](#pushback) · [Ground handling](#ground-handling)"
      },
      {
        "kind": "heading",
        "id": "passenger-boarding-bridge",
        "title": "Passenger boarding bridge (PBB)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — PBB — Passenger boarding bridge"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Jet bridge, aerobridge"
      },
      {
        "kind": "paragraph",
        "text": "A passenger boarding bridge is a movable enclosed walkway connecting a terminal boarding point to an aircraft door."
      },
      {
        "kind": "paragraph",
        "text": "A bridge generally serves a contact stand and accommodates aircraft within its design envelope. Remote stands commonly use mobile boarding steps or a passenger lift for assisted boarding."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Passenger boarding steps](#passenger-steps) · [Ambulift](#ambulift) · [Stand](#stand)"
      },
      {
        "kind": "heading",
        "id": "pushback",
        "title": "Pushback"
      },
      {
        "kind": "paragraph",
        "text": "Pushback is the ground movement of an aircraft away from a parking stand using approved external equipment and ground coordination."
      },
      {
        "kind": "paragraph",
        "text": "The movement is normally part of departure handling, while an aircraft can also be towed for repositioning. The ground team and flight crew coordinate the movement under the relevant local and aircraft procedures."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pushback tractor](#pushback-tractor) · [Tow bar](#tow-bar) · [Stand](#stand)"
      },
      {
        "kind": "heading",
        "id": "ramp",
        "title": "Ramp"
      },
      {
        "kind": "paragraph",
        "text": "Ramp is a widely used term for the airport apron where aircraft park, load, unload or receive ground services."
      },
      {
        "kind": "paragraph",
        "text": "Ramp operations include vehicle movement and aircraft turnaround activity. Airport procedures may distinguish apron areas or boundaries more precisely than the everyday name suggests."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Apron](#apron) · [Ground handling](#ground-handling) · [Turnaround](#turnaround)"
      },
      {
        "kind": "heading",
        "id": "stand",
        "title": "Stand"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft stand, parking stand"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft stand is a designated part of an apron where an aircraft parks for servicing, loading or boarding."
      },
      {
        "kind": "paragraph",
        "text": "A contact stand connects directly to a terminal boarding bridge. At a remote stand, passengers may reach the aircraft by bus or an approved walking route, depending on the airport."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Apron](#apron) · [Equipment restraint area (ERA)](#era) · [Passenger boarding bridge (PBB)](#passenger-boarding-bridge)"
      },
      {
        "kind": "heading",
        "id": "turnaround",
        "title": "Turnaround"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft turnaround, turnaround time"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft turnaround is the sequence of ground activities between arrival at a stand and departure from that stand."
      },
      {
        "kind": "paragraph",
        "text": "The work can include unloading, cleaning, catering, fuelling, loading and boarding. Turnaround time is measured using defined arrival and departure events, commonly on-block and off-block times. The exact event definition matters when comparing performance records."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ground handling](#ground-handling) · [Chock-to-chock](#chock-to-chock) · [Stand](#stand)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "ground-test-and-calibration",
    "title": "Ground Test Equipment and Calibration",
    "blocks": [
      {
        "kind": "heading",
        "id": "adts",
        "title": "Air data test set (ADTS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ADTS — Air data test set"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Air data tester, pitot-static tester when used for pitot-static work"
      },
      {
        "kind": "paragraph",
        "text": "An air data test set is a ground instrument that generates and measures controlled pressures for testing aircraft air data instruments and systems."
      },
      {
        "kind": "paragraph",
        "text": "The instrument applies static pressure and a pitot pressure condition to represent selected altitudes and airspeeds on the ground. A suitable set can support checks for indications, leakage or system performance as specified by the maintenance data. Range, accuracy and pressure control specifications determine suitability. Calibration concerns the tester's performance against measurement standards. The aircraft test concerns the connected aircraft or instrument."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pitot-static system](#pitot-static-system) · [Calibration](#calibration) · [Pitot-static pressure quantities (Ps, Qc, Pt)](#ps-qc-pt) · [Reduced vertical separation minima (RVSM)](#rvsm)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [air data test sets](/products/aviation-equipment/ground-test-equipment/air-data-test-system)"
      },
      {
        "kind": "heading",
        "id": "ate",
        "title": "Automatic test equipment (ATE)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ATE — Automatic test equipment"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Automated test equipment"
      },
      {
        "kind": "paragraph",
        "text": "Automatic test equipment is a hardware and software system that controls test stimuli, makes measurements and evaluates responses according to a defined test sequence."
      },
      {
        "kind": "paragraph",
        "text": "Aircraft component workshops use ATE for functions such as acceptance testing or fault isolation of replaceable units. An installation can combine instruments, switching, power supplies, interfaces and software. A test program set can adapt that installation to a particular unit. In a specification, the required interfaces, test coverage and result records describe what the automation must support."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Test program set (TPS)](#tps) · [Unit under test (UUT)](#uut) · [Line replaceable unit (LRU)](#lru) · [Test bench](#test-bench)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft component test benches](/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-component-test-bench)"
      },
      {
        "kind": "heading",
        "id": "calibration",
        "title": "Calibration"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Instrument calibration, equipment calibration"
      },
      {
        "kind": "paragraph",
        "text": "Calibration is an operation that establishes, under specified conditions, the relationship between reference standard values and instrument indications, with their associated uncertainties."
      },
      {
        "kind": "paragraph",
        "text": "Calibration lets users interpret readings against reference values and assess whether the instrument is suitable for the measurement task. A calibration certificate states what was calibrated and reports the applicable results. Adjustment changes the instrument's response and can be performed separately. In air data work, calibration of the tester and functional testing of an aircraft's pitot-static system are distinct activities with different records."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Calibration certificate](#calibration-certificate) · [Measurement uncertainty](#measurement-uncertainty) · [Traceability, metrological](#traceability) · [Air data test set (ADTS)](#adts)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [pitot-static testing and equipment calibration](/resources/aircraft-pitot-static-testing)"
      },
      {
        "kind": "heading",
        "id": "calibration-certificate",
        "title": "Calibration certificate"
      },
      {
        "kind": "paragraph",
        "text": "A calibration certificate is a record that identifies a calibrated item and reports the results of its calibration under stated conditions."
      },
      {
        "kind": "paragraph",
        "text": "A certificate typically records the instrument identity, relevant test points or range, results and associated measurement uncertainty. Any conformity statement is interpreted according to its stated scope and decision rule."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Calibration](#calibration) · [ISO/IEC 17025](#iso-17025) · [Measurement uncertainty](#measurement-uncertainty)"
      },
      {
        "kind": "heading",
        "id": "calibration-interval",
        "title": "Calibration interval"
      },
      {
        "kind": "paragraph",
        "text": "A calibration interval is the planned time or usage period between calibrations of a measuring instrument."
      },
      {
        "kind": "paragraph",
        "text": "Organisations set an interval using factors such as usage, environment, stability history and applicable requirements. The programme can adjust the interval when records show a change in instrument performance or operating conditions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Calibration](#calibration) · [Calibration certificate](#calibration-certificate) · [Traceability, metrological](#traceability)"
      },
      {
        "kind": "heading",
        "id": "continuity-test",
        "title": "Continuity test"
      },
      {
        "kind": "paragraph",
        "text": "A continuity test checks whether an intended electrical path is complete between specified points."
      },
      {
        "kind": "paragraph",
        "text": "Wire harness tests can use continuity measurements to confirm end-to-end connections against a wiring definition. Additional checks may address unintended paths, insulation integrity or electrical behaviour under other conditions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Wire harness](#wire-harness) · [Insulation resistance test (IR test)](#insulation-resistance-test) · [High-potential test (hi-pot)](#hipot)"
      },
      {
        "kind": "heading",
        "id": "fat",
        "title": "Factory acceptance test (FAT)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FAT — Factory acceptance test"
      },
      {
        "kind": "paragraph",
        "text": "A factory acceptance test is a documented check performed before delivery to verify equipment against agreed acceptance criteria at the supplier's facility or agreed location."
      },
      {
        "kind": "paragraph",
        "text": "An FAT commonly covers applicable functions, interfaces or documentation that can be demonstrated before installation. Conditions that depend on the final installation can be assessed in the site acceptance test."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Site acceptance test (SAT)](#sat) · [Test bench](#test-bench) · [Calibration certificate](#calibration-certificate)"
      },
      {
        "kind": "heading",
        "id": "ground-test-equipment",
        "title": "Ground test equipment (GTE)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — GTE — Ground test equipment"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft ground test equipment"
      },
      {
        "kind": "paragraph",
        "text": "Ground test equipment is equipment used to verify aircraft, aerospace components or associated systems under ground-based test conditions."
      },
      {
        "kind": "paragraph",
        "text": "The category includes portable air data testers, fixed component benches and facilities that reproduce selected environmental conditions. A system may supply an input, measure a response or perform both functions. The item's interfaces, test coverage, accuracy and acceptance criteria help determine what type of equipment is needed. In procurement documents, ground test equipment is sometimes grouped with GSE and sometimes treated as a separate category."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Test bench](#test-bench) · [Air data test set (ADTS)](#adts) · [Automatic test equipment (ATE)](#ate) · [Thermal vacuum chamber](#thermal-vacuum-chamber)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft ground test equipment](/products/aviation-equipment/ground-test-equipment)"
      },
      {
        "kind": "heading",
        "id": "hipot",
        "title": "High-potential test (hi-pot)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — Hi-pot — High-potential test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Hipot test, dielectric withstand test"
      },
      {
        "kind": "paragraph",
        "text": "A high-potential test is an electrical test that checks whether insulation withstands a specified voltage for a specified period under defined conditions."
      },
      {
        "kind": "paragraph",
        "text": "A dielectric withstand test uses acceptance criteria set by the applicable design or test specification. It appears in harness and electrical-equipment testing alongside continuity and insulation resistance measurements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Insulation resistance test (IR test)](#insulation-resistance-test) · [Continuity test](#continuity-test) · [Wire harness](#wire-harness)"
      },
      {
        "kind": "heading",
        "id": "hydraulic-test-stand",
        "title": "Hydraulic test stand"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Hydraulic test bench for component test applications"
      },
      {
        "kind": "paragraph",
        "text": "A hydraulic test stand is a rig that supplies controlled hydraulic conditions and measures the response of a specified component or system."
      },
      {
        "kind": "paragraph",
        "text": "A component stand may support checks on pumps, valves, actuators or other assemblies. Typical requirements address pressure, flow, fluid compatibility, cleanliness, temperature and the measurements needed to evaluate the item. A mobile hydraulic power cart, often called a hydraulic mule, typically serves an aircraft connection during servicing or functional checks. A test stand usually adds measurement and control functions for an agreed test programme."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydraulic system](#hydraulic-system) · [Test stand](#test-stand) · [Unit under test (UUT)](#uut)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft brake valve test rig](/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig)"
      },
      {
        "kind": "heading",
        "id": "insulation-resistance-test",
        "title": "Insulation resistance test (IR test)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — IR — Insulation resistance, in electrical test records"
      },
      {
        "kind": "paragraph",
        "text": "An insulation resistance test measures electrical resistance through or across insulation between specified conductive points under defined conditions."
      },
      {
        "kind": "paragraph",
        "text": "Results are commonly expressed in megohms. The applied test conditions and acceptance limits come from the relevant specification. Continuity and dielectric withstand tests address other aspects of the assembly's electrical integrity."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [High-potential test (hi-pot)](#hipot) · [Continuity test](#continuity-test) · [Electrical wiring interconnection system (EWIS)](#ewis)"
      },
      {
        "kind": "heading",
        "id": "iron-bird",
        "title": "Iron bird"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft systems integration rig"
      },
      {
        "kind": "paragraph",
        "text": "An iron bird is a ground integration rig that represents selected aircraft systems and their interfaces for system development or verification."
      },
      {
        "kind": "paragraph",
        "text": "An iron bird may combine aircraft-representative hardware, control computers and simulated inputs. Engineers use the setup to investigate system interactions and operating scenarios before or alongside aircraft integration work."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ground test equipment (GTE)](#ground-test-equipment) · [Test rig](#test-rig) · [Hydraulic system](#hydraulic-system)"
      },
      {
        "kind": "heading",
        "id": "leak-test",
        "title": "Leak test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Leakage test"
      },
      {
        "kind": "paragraph",
        "text": "A leak test checks whether fluid or gas escapes from, or enters, a system beyond the limits defined for the test."
      },
      {
        "kind": "paragraph",
        "text": "Applicable methods can use pressure change, flow measurement or other detection techniques. In pitot-static work, a test setup can include the instrument, hoses and adapters as well as the connected aircraft circuit."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Air data test set (ADTS)](#adts) · [Pitot-static system](#pitot-static-system) · [Test stand](#test-stand)"
      },
      {
        "kind": "heading",
        "id": "measurement-uncertainty",
        "title": "Measurement uncertainty"
      },
      {
        "kind": "paragraph",
        "text": "Measurement uncertainty is a parameter that describes the dispersion of values that can reasonably be attributed to the quantity being measured."
      },
      {
        "kind": "paragraph",
        "text": "Contributors can include the reference standard, instrument resolution, repeatability and environmental effects. Calibration records state the applicable uncertainty and may report an expanded uncertainty with a coverage factor. Test accuracy ratio (TAR) and test uncertainty ratio (TUR) are different ways of assessing measurement capability against a tolerance. The governing procedure defines the calculation used."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Calibration](#calibration) · [Traceability, metrological](#traceability) · [Calibration certificate](#calibration-certificate)"
      },
      {
        "kind": "heading",
        "id": "sat",
        "title": "Site acceptance test (SAT)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — SAT — Site acceptance test"
      },
      {
        "kind": "paragraph",
        "text": "A site acceptance test is a documented check of installed equipment against agreed acceptance criteria at its intended operating location."
      },
      {
        "kind": "paragraph",
        "text": "A SAT can verify interfaces, utilities and functions that depend on the installation. Its scope may use factory test records and add checks for site-specific conditions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Factory acceptance test (FAT)](#fat) · [Test bench](#test-bench)"
      },
      {
        "kind": "heading",
        "id": "test-bench",
        "title": "Test bench"
      },
      {
        "kind": "paragraph",
        "text": "A test bench is a configured workstation that applies defined inputs to a component or assembly and measures its response against test requirements."
      },
      {
        "kind": "paragraph",
        "text": "An aerospace test bench may combine fixtures, instruments, controlled supplies and data recording for the item under test. A component test bench typically supports a defined component family or set of interfaces. Some tasks use manual control and measurement, while others use programmed sequences. Test bench and test stand can overlap in everyday usage. An equipment specification clarifies which loads, mounting arrangements, signals and outputs are required."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Test stand](#test-stand) · [Test rig](#test-rig) · [Automatic test equipment (ATE)](#ate) · [Unit under test (UUT)](#uut)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft component test benches](/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-component-test-bench)"
      },
      {
        "kind": "heading",
        "id": "tps",
        "title": "Test program set (TPS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — TPS — Test program set"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Test programme set"
      },
      {
        "kind": "paragraph",
        "text": "A test program set is the test software, interface hardware and documentation used to configure compatible automatic test equipment for a particular item or item family."
      },
      {
        "kind": "paragraph",
        "text": "Depending on the system, a TPS includes an adapter, cabling, procedures and the sequence that applies stimuli and checks the unit's responses. It links the general-purpose test station to the particular interfaces and acceptance criteria."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Automatic test equipment (ATE)](#ate) · [Unit under test (UUT)](#uut) · [Line replaceable unit (LRU)](#lru)"
      },
      {
        "kind": "heading",
        "id": "test-rig",
        "title": "Test rig"
      },
      {
        "kind": "paragraph",
        "text": "A test rig is a purpose-built arrangement that holds, operates or instruments an item under defined test conditions."
      },
      {
        "kind": "paragraph",
        "text": "The term can describe anything from a fixture with sensors to a full system integration installation. A rig's specification identifies the configuration represented and the responses it measures."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Test bench](#test-bench) · [Test stand](#test-stand) · [Iron bird](#iron-bird)"
      },
      {
        "kind": "heading",
        "id": "test-stand",
        "title": "Test stand"
      },
      {
        "kind": "paragraph",
        "text": "A test stand is a test setup that supports and operates an item under controlled conditions while measuring selected outputs or responses."
      },
      {
        "kind": "paragraph",
        "text": "Test stand often describes installations for fluid, mechanical or load-bearing work. Test bench commonly describes a configurable component workstation. The terms overlap, so the item, interface and operating conditions determine the actual meaning in a specification."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Test bench](#test-bench) · [Test rig](#test-rig) · [Hydraulic test stand](#hydraulic-test-stand)"
      },
      {
        "kind": "heading",
        "id": "thermal-balance-test",
        "title": "Thermal balance test (TBT)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — TBT — Thermal balance test"
      },
      {
        "kind": "paragraph",
        "text": "A thermal balance test exposes space hardware to controlled thermal conditions to assess representative heat flows and temperatures, commonly to correlate a thermal model."
      },
      {
        "kind": "paragraph",
        "text": "A thermal balance test can be performed within a vacuum chamber. The programme defines the boundary conditions, operating states and measurements used to compare the test with model predictions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Thermal vacuum testing (TVAC)](#thermal-vacuum-testing) · [Thermal vacuum chamber](#thermal-vacuum-chamber)"
      },
      {
        "kind": "heading",
        "id": "thermal-vacuum-chamber",
        "title": "Thermal vacuum chamber"
      },
      {
        "kind": "paragraph",
        "text": "A thermal vacuum chamber is a test enclosure that combines low pressure with controlled thermal conditions to expose space hardware to a defined environment."
      },
      {
        "kind": "paragraph",
        "text": "A chamber typically integrates a vacuum vessel, pumping equipment, thermal control surfaces and feedthroughs for power, signals and instrumentation. The usable test envelope depends on the pressure capability, temperature range, thermal control and physical configuration. Fixtures and thermal interfaces also influence the conditions seen by the item. Chamber suitability is assessed against the planned test profile and the hardware's operating states."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Thermal vacuum testing (TVAC)](#thermal-vacuum-testing) · [Thermal balance test (TBT)](#thermal-balance-test) · [Pressure units in aviation testing](#pressure-units)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [thermal vacuum chamber systems](/resources/thermal-vacuum-testing)"
      },
      {
        "kind": "heading",
        "id": "thermal-vacuum-testing",
        "title": "Thermal vacuum testing (TVAC)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — TVAC — Thermal vacuum, used in thermal vacuum testing"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Thermal vacuum test"
      },
      {
        "kind": "paragraph",
        "text": "Thermal vacuum testing is environmental testing that exposes an item to specified low-pressure and temperature conditions representative of aspects of its expected operating environment."
      },
      {
        "kind": "paragraph",
        "text": "Space test programmes use TVAC to assess hardware behaviour at defined thermal conditions in vacuum. Depending on the objective, the item may be operated or monitored during selected phases. Test plans distinguish cycling tests, which can verify hardware function or workmanship under thermal exposure, from thermal balance tests used to assess heat transfer and correlate thermal models. Each programme defines its applicable profile and acceptance criteria."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Thermal vacuum chamber](#thermal-vacuum-chamber) · [Thermal balance test (TBT)](#thermal-balance-test) · [Unit under test (UUT)](#uut)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [thermal vacuum testing](/resources/thermal-vacuum-testing)"
      },
      {
        "kind": "heading",
        "id": "traceability",
        "title": "Traceability, metrological"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Calibration traceability, measurement traceability"
      },
      {
        "kind": "paragraph",
        "text": "Metrological traceability is the property of a measurement result that relates it to a reference through a documented, unbroken chain of calibrations with stated uncertainties."
      },
      {
        "kind": "paragraph",
        "text": "The chain supports comparison of measurement results to a common reference. In aerospace supply records, traceability can also refer to a part's identity and documented history, which serves a different purpose."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Calibration](#calibration) · [Calibration certificate](#calibration-certificate) · [Measurement uncertainty](#measurement-uncertainty)"
      },
      {
        "kind": "heading",
        "id": "uut",
        "title": "Unit under test (UUT)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — DUT — Device under test · UUT — Unit under test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Device under test (DUT), test article"
      },
      {
        "kind": "paragraph",
        "text": "A unit under test is the specific item connected to or placed in a test setup for evaluation."
      },
      {
        "kind": "paragraph",
        "text": "The item can be a component, assembly or system. Its identity and configuration are recorded so that the conditions, readings and findings can be tied to the correct hardware."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Automatic test equipment (ATE)](#ate) · [Test bench](#test-bench) · [Line replaceable unit (LRU)](#lru)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "airfield-lighting-and-visual-aids",
    "title": "Airfield Ground Lighting and Visual Aids",
    "blocks": [
      {
        "kind": "heading",
        "id": "agl",
        "title": "Airfield ground lighting (AGL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — AGL — Airfield ground lighting"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aeronautical ground lighting, airport ground lighting"
      },
      {
        "kind": "paragraph",
        "text": "Airfield ground lighting is the system of installed visual lights that provides guidance and position cues for aircraft using an aerodrome."
      },
      {
        "kind": "paragraph",
        "text": "An AGL installation may include approach, runway and taxiway lighting, together with associated power and control equipment. Fixture functions determine colour, placement and light distribution. Many systems use series circuits fed by constant current regulators through isolation transformers. The lighting required for a particular airfield depends on its runway operations, approach facilities, visibility needs and applicable aerodrome requirements. Illuminated signs can form part of the wider visual aids installation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Constant current regulator (CCR)](#ccr) · [Series circuit](#series-circuit) · [Airfield lighting control and monitoring system (ALCMS)](#alcms) · [Airfield sign](#airfield-sign)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield ground lighting systems](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "alcms",
        "title": "Airfield lighting control and monitoring system (ALCMS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — ALCMS — Airfield lighting control and monitoring system · ILCMS — Individual lamp control and monitoring system"
      },
      {
        "kind": "paragraph",
        "text": "An airfield lighting control and monitoring system is the equipment and software used to command airfield lighting circuits and report their operating status."
      },
      {
        "kind": "paragraph",
        "text": "An ALCMS can provide operator controls, indicate selected intensity settings and present reported faults. The installed configuration determines which regulators, circuits or devices are monitored. An individual lamp control and monitoring system adds addressable control or monitoring at fixture or device level where the installation supports it. Pilot-controlled lighting is a separate control arrangement used at some aerodromes under their published procedures."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield ground lighting (AGL)](#agl) · [Constant current regulator (CCR)](#ccr) · [Stop bar](#stop-bar)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [lighting control and monitoring](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "airfield-sign",
        "title": "Airfield sign"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aerodrome sign, runway or taxiway sign"
      },
      {
        "kind": "paragraph",
        "text": "An airfield sign is a visual aid that communicates instructions, location, direction, destination or other operational information to aircraft and vehicle operators on the movement area."
      },
      {
        "kind": "paragraph",
        "text": "Aerodrome sign systems use prescribed legends, colours and placement for each function. Mandatory instruction signs identify restrictions, while location and direction signs help crews establish where they are and where a route leads. In FAA terminology the L-858 series covers runway and taxiway signs, with suffixes identifying sign types. Runway distance remaining signs display the remaining runway length in the convention prescribed by the applicable authority."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Mandatory instruction sign](#mandatory-sign) · [Information sign](#information-sign) · [Location sign](#location-sign) · [ICAO Annex 14](#icao-annex-14)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield signs](/resources/airfield-signs-guide)"
      },
      {
        "kind": "heading",
        "id": "als",
        "title": "Approach lighting system (ALS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ALS — Approach lighting system"
      },
      {
        "kind": "paragraph",
        "text": "An approach lighting system is an array of aeronautical ground lights that gives an arriving crew visual alignment and distance cues in the approach area."
      },
      {
        "kind": "paragraph",
        "text": "The pattern depends on the approach and aerodrome design. Approach lights support recognition of the runway environment. The visual approach slope indication provided by PAPI serves a separate function."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Threshold](#threshold) · [Precision approach path indicator (PAPI)](#papi) · [Category I, II and III approaches](#precision-approach-categories)"
      },
      {
        "kind": "heading",
        "id": "brightness-step",
        "title": "Brightness step"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Intensity step"
      },
      {
        "kind": "paragraph",
        "text": "A brightness step is a selectable operating level used to set the output intensity of an airfield lighting circuit or lighting system."
      },
      {
        "kind": "paragraph",
        "text": "In a conventional series circuit, the regulator changes the selected circuit current. Fixture design determines the light output at each setting. Available steps and operating rules vary by system."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Constant current regulator (CCR)](#ccr) · [Airfield lighting control and monitoring system (ALCMS)](#alcms) · [Series circuit](#series-circuit)"
      },
      {
        "kind": "heading",
        "id": "ccr",
        "title": "Constant current regulator (CCR)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — CCR — Constant current regulator"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Series circuit regulator"
      },
      {
        "kind": "paragraph",
        "text": "A constant current regulator is a regulated power supply that maintains a selected current in an aeronautical ground lighting series circuit."
      },
      {
        "kind": "paragraph",
        "text": "The regulator varies its output voltage within its design limits as required to drive the connected circuit load. Operators select available intensity steps through the lighting controls. The resulting light output also depends on the fixture and its design. Circuit loading, regulator rating and compatibility with transformers, fixtures and controls matter in a retrofit. A nominal current of 6.6 A is common in series airfield lighting systems."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Series circuit](#series-circuit) · [Isolation transformer](#isolation-transformer) · [Brightness step](#brightness-step) · [6.6 A](#6-6-a)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [constant current regulators](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "elevated-fixture",
        "title": "Elevated fixture"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Elevated airfield light"
      },
      {
        "kind": "paragraph",
        "text": "An elevated fixture is an airfield light installed on a mounting that raises the light assembly above the surrounding ground or pavement."
      },
      {
        "kind": "paragraph",
        "text": "Elevated fixtures can provide conspicuous guidance from positions where aircraft wheels or service equipment are expected to clear them. Mounting arrangements and frangibility depend on the location and applicable requirements. Runway and taxiway edge lights are common applications, although inset fixtures can serve some edge locations where pavement use or clearance makes an above-surface fixture unsuitable. FAA L-type and suffix designations identify applicable fixture families and functions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Inset fixture](#inset-fixture) · [Frangible coupling](#frangible-coupling) · [Runway edge lights](#runway-edge-lights)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [inset and elevated taxiway lights](/products/runway-spares/runway-lights/taxiway-edge-inset-light)"
      },
      {
        "kind": "heading",
        "id": "frangible-coupling",
        "title": "Frangible coupling"
      },
      {
        "kind": "paragraph",
        "text": "A frangible coupling is a mounting component designed to break away in a specified manner when struck, helping limit the hazard from a mounted object."
      },
      {
        "kind": "paragraph",
        "text": "Airfield designers use these couplings on certain elevated lights, signs or other visual aids where frangible mounting is required. The coupling is part of the approved support arrangement. Resistance to normal operating loads and predictable failure under impact both matter, so the complete assembly and installation details carry the applicable requirements. Pavement-mounted lights use a different mechanical installation suited to surface exposure."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Frangibility](#frangibility) · [Elevated fixture](#elevated-fixture) · [Inset fixture](#inset-fixture)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield light mounting and clearance](/products/runway-spares/runway-lights/taxiway-edge-inset-light)"
      },
      {
        "kind": "heading",
        "id": "information-sign",
        "title": "Information sign"
      },
      {
        "kind": "paragraph",
        "text": "An airfield information sign is a sign that identifies an aerodrome location, direction, destination or other operational information outside the mandatory instruction category."
      },
      {
        "kind": "paragraph",
        "text": "Location signs identify the pavement or position occupied. Direction and destination signs instead indicate a route or another point. Colour and legend conventions depend on the sign function and governing aerodrome standard."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield sign](#airfield-sign) · [Location sign](#location-sign) · [Mandatory instruction sign](#mandatory-sign)"
      },
      {
        "kind": "heading",
        "id": "inset-fixture",
        "title": "Inset fixture"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — In-pavement light, inset airfield light"
      },
      {
        "kind": "paragraph",
        "text": "An inset fixture is an airfield light installed in the pavement with a low-profile top designed for locations where aircraft or vehicles may pass over it."
      },
      {
        "kind": "paragraph",
        "text": "Inset fixtures serve applications such as runway and taxiway centrelines, touchdown zones and selected edge locations. Fixture location, beam orientation, load rating, pavement opening and base arrangement all matter. The light's top may project slightly within its approved profile. In FAA specifications, families such as L-850 and L-852 cover groups of in-pavement fixtures, with suffixes identifying particular applications."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Elevated fixture](#elevated-fixture) · [Light base](#light-base) · [Runway centreline lights](#runway-centreline-lights) · [Taxiway centreline lights](#taxiway-centreline-lights)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [inset airfield lights](/products/runway-spares/runway-lights/taxiway-edge-inset-light)"
      },
      {
        "kind": "heading",
        "id": "isolation-transformer",
        "title": "Isolation transformer"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Isolating transformer, airfield series isolation transformer"
      },
      {
        "kind": "paragraph",
        "text": "An airfield isolation transformer couples power from a constant-current series circuit to an individual fixture while providing electrical separation between the primary circuit and the fixture connection."
      },
      {
        "kind": "paragraph",
        "text": "The transformer primary forms part of the series circuit and its secondary feeds the fixture. This arrangement can let the primary circuit remain intact when an individual lamp circuit opens. Transformer rating, secondary characteristics and fixture compatibility affect the installation. In a drawing or parts list, the transformer belongs to the electrical supply path. The light base is part of the supporting installation and can house connections or equipment depending on the design."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Series circuit](#series-circuit) · [Constant current regulator (CCR)](#ccr) · [Light base](#light-base)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [series isolation transformers](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "light-base",
        "title": "Light base"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Base can, shallow base, deep base"
      },
      {
        "kind": "paragraph",
        "text": "An airfield light base is a mounting enclosure or support assembly that secures a fixture and accommodates electrical connections as the design requires."
      },
      {
        "kind": "paragraph",
        "text": "A shallow base suits certain inset pavement installations with restricted depth. A deeper base may provide more space for equipment or wiring. Compatibility depends on the fixture, installation method, load requirements and applicable design."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Inset fixture](#inset-fixture) · [Elevated fixture](#elevated-fixture) · [Isolation transformer](#isolation-transformer)"
      },
      {
        "kind": "heading",
        "id": "location-sign",
        "title": "Location sign"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Taxiway location sign"
      },
      {
        "kind": "paragraph",
        "text": "A taxiway location sign identifies the taxiway or other location currently occupied by an aircraft or vehicle."
      },
      {
        "kind": "paragraph",
        "text": "A stand-alone taxiway location sign typically uses a yellow legend on a black background under ICAO and FAA conventions. Directional signs provide route information and use a different visual treatment."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Information sign](#information-sign) · [Airfield sign](#airfield-sign) · [Taxiway](#taxiway)"
      },
      {
        "kind": "heading",
        "id": "mandatory-sign",
        "title": "Mandatory instruction sign"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Mandatory sign"
      },
      {
        "kind": "paragraph",
        "text": "A mandatory instruction sign is an airfield sign that identifies a point beyond which aircraft or vehicles require specific authorisation or must comply with an applicable restriction."
      },
      {
        "kind": "paragraph",
        "text": "A runway holding-position sign gives an example of this sign function. These signs use prescribed inscriptions and a conspicuous presentation, commonly white on red. The applicable standard governs the sign legend and placement, including situations where other visual aids are installed nearby. Ground procedures determine how clearances or restrictions apply. A location sign identifies a position and belongs to a separate sign function."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield sign](#airfield-sign) · [Holding position](#holding-position) · [Stop bar](#stop-bar) · [Location sign](#location-sign)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [mandatory instruction signs](/resources/airfield-signs-guide)"
      },
      {
        "kind": "heading",
        "id": "papi",
        "title": "Precision approach path indicator (PAPI)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — PAPI — Precision approach path indicator"
      },
      {
        "kind": "paragraph",
        "text": "A precision approach path indicator is a visual aid whose pattern of red and white lights indicates an aircraft's position relative to a defined approach slope."
      },
      {
        "kind": "paragraph",
        "text": "A conventional PAPI uses a line of four light units. The observed colour combination gives a slope cue, while an approach lighting system gives broader runway alignment and environment cues."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Approach lighting system (ALS)](#als) · [Threshold](#threshold) · [Category I, II and III approaches](#precision-approach-categories)"
      },
      {
        "kind": "heading",
        "id": "retil",
        "title": "Rapid exit taxiway indicator lights (RETIL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — RETIL — Rapid exit taxiway indicator lights"
      },
      {
        "kind": "paragraph",
        "text": "Rapid exit taxiway indicator lights are runway lights arranged to give distance cues to an upcoming rapid exit taxiway."
      },
      {
        "kind": "paragraph",
        "text": "The lights help crews locate the intended exit during the landing roll where such aids are installed. The applicable aerodrome design requirements specify the arrangement and signalling."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway](#runway) · [Taxiway](#taxiway) · [Airfield ground lighting (AGL)](#agl)"
      },
      {
        "kind": "heading",
        "id": "runway-centreline-lights",
        "title": "Runway centreline lights"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Runway centerline lights in US usage"
      },
      {
        "kind": "paragraph",
        "text": "Runway centreline lights are lights installed along or close to the runway centreline to provide longitudinal guidance."
      },
      {
        "kind": "paragraph",
        "text": "They are commonly inset. Colour changes in the departure direction can provide cues about remaining runway length according to the applicable aerodrome design requirements. Runway edge and end lights mark other runway features."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Inset fixture](#inset-fixture) · [Runway edge lights](#runway-edge-lights) · [Runway end lights](#runway-end-lights)"
      },
      {
        "kind": "heading",
        "id": "runway-edge-lights",
        "title": "Runway edge lights"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — HIRL — High-intensity runway lighting · LIRL — Low-intensity runway lighting · MIRL — Medium-intensity runway lighting"
      },
      {
        "kind": "paragraph",
        "text": "Runway edge lights are lights positioned along the sides of a runway to define its lateral limits."
      },
      {
        "kind": "paragraph",
        "text": "FAA terminology distinguishes high-, medium- and low-intensity runway lighting, abbreviated HIRL, MIRL and LIRL. L-862 and L-861 are FAA fixture families that include elevated high- and medium-intensity applications respectively. Type suffixes specify the intended function."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Elevated fixture](#elevated-fixture) · [Runway centreline lights](#runway-centreline-lights) · [Runway threshold lights](#runway-threshold-lights)"
      },
      {
        "kind": "heading",
        "id": "runway-end-lights",
        "title": "Runway end lights"
      },
      {
        "kind": "paragraph",
        "text": "Runway end lights are lights that indicate the far end of the runway in the direction of operation being viewed."
      },
      {
        "kind": "paragraph",
        "text": "Runway end lights show red towards the runway. At some installations, a combined fitting can present a different indication in the opposite direction where a threshold function is also needed."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway threshold lights](#runway-threshold-lights) · [Runway centreline lights](#runway-centreline-lights) · [Threshold](#threshold)"
      },
      {
        "kind": "heading",
        "id": "runway-guard-lights",
        "title": "Runway guard lights (RGL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — RGL — Runway guard lights"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Wig-wags for some elevated configurations"
      },
      {
        "kind": "paragraph",
        "text": "Runway guard lights are visual aids that draw attention to an entrance to a runway, typically at a runway holding position."
      },
      {
        "kind": "paragraph",
        "text": "Configurations can include elevated flashing yellow units or in-pavement yellow lights under applicable standards. The lights alert users to the runway boundary. A red stop bar has a different signalling function."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Holding position](#holding-position) · [Stop bar](#stop-bar) · [Runway incursion](#runway-incursion)"
      },
      {
        "kind": "heading",
        "id": "runway-threshold-lights",
        "title": "Runway threshold lights"
      },
      {
        "kind": "paragraph",
        "text": "Runway threshold lights are lights that mark the beginning of the runway portion available for landing in the direction being approached."
      },
      {
        "kind": "paragraph",
        "text": "The lights show green towards the approach. A displaced threshold can move that visual indication away from the physical runway end. Threshold and end lighting functions are defined for each direction."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Threshold](#threshold) · [Displaced threshold](#displaced-threshold) · [Runway end lights](#runway-end-lights)"
      },
      {
        "kind": "heading",
        "id": "series-circuit",
        "title": "Series circuit"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Airfield lighting series circuit"
      },
      {
        "kind": "paragraph",
        "text": "An airfield lighting series circuit is an electrical circuit that supplies multiple fixture transformer primaries along a common current path."
      },
      {
        "kind": "paragraph",
        "text": "A constant current regulator drives the circuit and maintains the selected current within its rated conditions. Isolation transformers then couple power to individual fixtures. A fixture problem and a fault in the primary network can have different effects on the circuit. In an upgrade, fixture ratings and the connected load are considered alongside controls, transformers and the regulator to establish compatibility throughout the circuit."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield ground lighting (AGL)](#agl) · [Constant current regulator (CCR)](#ccr) · [Isolation transformer](#isolation-transformer) · [6.6 A](#6-6-a)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield lighting series circuits](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "stop-bar",
        "title": "Stop bar"
      },
      {
        "kind": "paragraph",
        "text": "A stop bar is an array of red lights across a taxiway or other designated route indicating a stop at the associated holding position when illuminated."
      },
      {
        "kind": "paragraph",
        "text": "Stop bars can be integrated with airfield lighting controls and airport operating procedures. They are used at specified holding points, including in low visibility arrangements. Local procedures and the applicable authority govern their operation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Holding position](#holding-position) · [Runway guard lights (RGL)](#runway-guard-lights) · [Airfield lighting control and monitoring system (ALCMS)](#alcms) · [Low visibility procedures (LVP)](#lvp)"
      },
      {
        "kind": "heading",
        "id": "taxiway-centreline-lights",
        "title": "Taxiway centreline lights"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Taxiway centerline lights in US usage"
      },
      {
        "kind": "paragraph",
        "text": "Taxiway centreline lights are lights arranged along a taxi route to provide guidance along its intended path."
      },
      {
        "kind": "paragraph",
        "text": "They are typically inset where traffic passes over them. The colour pattern at selected runway exits or interfaces can differ from a normal taxiway segment under the applicable design rules."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Taxiway edge lights](#taxiway-edge-lights) · [Inset fixture](#inset-fixture) · [Taxiway](#taxiway)"
      },
      {
        "kind": "heading",
        "id": "taxiway-edge-lights",
        "title": "Taxiway edge lights"
      },
      {
        "kind": "paragraph",
        "text": "Taxiway edge lights are lights placed along a taxiway's sides to indicate its edges to aircraft and vehicle operators."
      },
      {
        "kind": "paragraph",
        "text": "The lights are normally blue. Elevated and inset forms can both serve edge applications, depending on the location, fixture clearance, installation and governing airfield requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Taxiway centreline lights](#taxiway-centreline-lights) · [Elevated fixture](#elevated-fixture) · [Inset fixture](#inset-fixture)"
      },
      {
        "kind": "heading",
        "id": "touchdown-zone-lights",
        "title": "Touchdown zone lights (TDZL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — TDZL — Touchdown zone lights"
      },
      {
        "kind": "paragraph",
        "text": "Touchdown zone lights are runway lights arranged in the landing touchdown area to provide visual cues near the runway threshold."
      },
      {
        "kind": "paragraph",
        "text": "On runways equipped with this aid the lights are typically inset and arranged in rows or bars on either side of the runway centreline. Their layout depends on the applicable design standard."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway centreline lights](#runway-centreline-lights) · [Threshold](#threshold) · [Inset fixture](#inset-fixture)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "aviation-fuel",
    "title": "Aviation Fuel Handling and Quality Control",
    "blocks": [
      {
        "kind": "heading",
        "id": "avgas",
        "title": "Avgas"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aviation gasoline, aviation petrol"
      },
      {
        "kind": "paragraph",
        "text": "Avgas is aviation gasoline specified for compatible spark-ignition piston aircraft engines."
      },
      {
        "kind": "paragraph",
        "text": "Avgas 100LL is a low-lead grade that still contains lead. Aircraft and engine approvals identify the usable grade. Fuel farms and service equipment follow grade segregation requirements to preserve fuel identity."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aviation turbine fuel (ATF)](#atf) · [Fuel farm](#fuel-farm) · [Refueller](#refueller)"
      },
      {
        "kind": "heading",
        "id": "atf",
        "title": "Aviation turbine fuel (ATF)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ATF — Aviation turbine fuel"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Jet fuel, turbine fuel"
      },
      {
        "kind": "paragraph",
        "text": "Aviation turbine fuel is fuel specified for use in compatible aircraft gas turbine engines."
      },
      {
        "kind": "paragraph",
        "text": "Jet A and Jet A-1 are common civil grades. Some compression-ignition aircraft engines also have approvals for particular jet fuels. The approved fuel specification determines permitted grades and properties for the aircraft."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [Avgas](#avgas) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "bowser",
        "title": "Bowser"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Fuel bowser, aviation fuel bowser"
      },
      {
        "kind": "paragraph",
        "text": "A fuel bowser is a mobile tank or dispensing unit used to carry or supply aviation fuel on the ground."
      },
      {
        "kind": "paragraph",
        "text": "Regional usage varies. Bowser can refer to a self-propelled refueller or a tank mounted on a towable trailer. Specifications identify the fuel grade, tank arrangement and dispensing equipment to remove ambiguity."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Refueller](#refueller) · [Hydrant dispenser](#hydrant-dispenser) · [Into-plane](#into-plane)"
      },
      {
        "kind": "heading",
        "id": "clear-and-bright-test",
        "title": "Clear and bright test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Visual appearance check for aviation fuel"
      },
      {
        "kind": "paragraph",
        "text": "A clear and bright test is a visual check of a fuel sample for clarity and visible contamination such as free water or suspended particles."
      },
      {
        "kind": "paragraph",
        "text": "A clear and bright sample can still have a grade-appropriate colour. The visual appearance check works alongside other tests because water or particles can be present below the threshold visible to the eye."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Free water](#free-water) · [Water detection test](#water-detection-test) · [Fuel sampling](#fuel-sampling)"
      },
      {
        "kind": "heading",
        "id": "conductivity-test",
        "title": "Conductivity test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Jet fuel conductivity test"
      },
      {
        "kind": "paragraph",
        "text": "A fuel conductivity test measures how readily a fuel sample conducts electricity, commonly reporting jet fuel results in picosiemens per metre."
      },
      {
        "kind": "paragraph",
        "text": "Conductivity influences how quickly static charge can dissipate. A jet fuel conductivity meter reports a value for the fuel under the stated test conditions. The specification and stage of handling determine how the reading is assessed."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Picosiemens per metre (pS/m)](#picosiemens-per-metre) · [Static dissipator additive (SDA)](#static-dissipator-additive) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "density",
        "title": "Density and specific gravity"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Relative density for specific gravity"
      },
      {
        "kind": "paragraph",
        "text": "Fuel density is mass per unit volume, while specific gravity is the ratio of the fuel's density to a reference density at stated temperatures."
      },
      {
        "kind": "paragraph",
        "text": "A density result is commonly expressed in kilograms per cubic metre at a specified reference temperature. The applicable method states how to measure or correct the reading. Reporting units and temperature is necessary to compare results."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [Fuel testing equipment](#fuel-testing-equipment) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "filter-water-separator",
        "title": "Filter water separator (FWS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FWS — Filter water separator"
      },
      {
        "kind": "paragraph",
        "text": "A filter water separator is a fuel treatment assembly that removes solid contaminants and separates free water from a fuel stream."
      },
      {
        "kind": "paragraph",
        "text": "A conventional separator uses filtration and coalescence so water droplets separate and collect. A filter monitor is a different filtration design, associated with a legacy technology withdrawn from JIG standards for into-plane operations. Applicable standards and operator requirements determine the equipment used."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Free water](#free-water) · [Hydrant system](#hydrant-system) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "flash-point",
        "title": "Flash point"
      },
      {
        "kind": "paragraph",
        "text": "Flash point is the lowest temperature at which a liquid gives off enough vapour to ignite momentarily under the conditions of a specified test."
      },
      {
        "kind": "paragraph",
        "text": "A fuel specification sets a flash point limit and identifies acceptable test methods. The property is different from sustained burning, autoignition and the low-temperature behaviour measured by freeze point."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Freeze point](#freeze-point) · [ASTM D1655](#astm-d1655) · [Jet A-1](#jet-a-1)"
      },
      {
        "kind": "heading",
        "id": "free-water",
        "title": "Free water"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Undissolved water"
      },
      {
        "kind": "paragraph",
        "text": "Free water in fuel is water that exists as separate droplets or a separated layer instead of being dissolved in the fuel."
      },
      {
        "kind": "paragraph",
        "text": "Dissolved water is held in solution and can come out as temperature or conditions change. Suspended free water can make a sample appear hazy, while settled free water may collect at the bottom. Detection methods have defined sensitivities."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Clear and bright test](#clear-and-bright-test) · [Water detection test](#water-detection-test) · [Filter water separator (FWS)](#filter-water-separator)"
      },
      {
        "kind": "heading",
        "id": "freeze-point",
        "title": "Freeze point"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Freezing point of aviation fuel"
      },
      {
        "kind": "paragraph",
        "text": "The freezing point of aviation fuel is the temperature, determined by a specified test method, at which the last hydrocarbon crystals disappear as the sample warms."
      },
      {
        "kind": "paragraph",
        "text": "A maximum freezing-point limit helps define low-temperature suitability. Grade specifications and approved test methods determine the value used for fuel acceptance. Freeze point differs by grade, including between Jet A and Jet A-1."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [Flash point](#flash-point) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "fuel-farm",
        "title": "Fuel farm"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Airport fuel storage facility"
      },
      {
        "kind": "paragraph",
        "text": "An airport fuel farm is a storage and handling installation that receives, stores and distributes aviation fuel for airport operations."
      },
      {
        "kind": "paragraph",
        "text": "Fuel may leave the facility through an airport hydrant network or by loading into refuellers. Storage, grade segregation, filtration and sampling arrangements form part of the site's quality controls."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydrant system](#hydrant-system) · [Refueller](#refueller) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "fuel-quality-control",
        "title": "Fuel quality control"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aviation fuel quality control, jet fuel QC"
      },
      {
        "kind": "paragraph",
        "text": "Aviation fuel quality control is the system of checks and records used to preserve fuel grade identity and assess whether fuel meets applicable quality requirements through handling and delivery."
      },
      {
        "kind": "paragraph",
        "text": "Control points can occur at receipt, storage, transfer and into-plane service. Depending on the stage and approved programme, checks may address appearance, water, solids, density or conductivity. Sampling location, method and records affect what a result represents. Routine field checks help identify changes in condition. Fuel release and grade specification testing follow their own applicable requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Fuel sampling](#fuel-sampling) · [Clear and bright test](#clear-and-bright-test) · [Water detection test](#water-detection-test) · [AFQRJOS](#afqrjos)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aviation fuel handling and equipment](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "fuel-sampling",
        "title": "Fuel sampling"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aviation fuel sampling, jet fuel sampling"
      },
      {
        "kind": "paragraph",
        "text": "Aviation fuel sampling is the collection of fuel from a defined point for examination or testing under an applicable sampling method."
      },
      {
        "kind": "paragraph",
        "text": "Aviation fuel sampling equipment is selected for the location and test, such as an approved sample vessel for appearance or a line sampling arrangement for particulate assessment. Sampling records identify the source and time so the result can be interpreted correctly."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Fuel quality control](#fuel-quality-control) · [Clear and bright test](#clear-and-bright-test) · [Millipore test](#millipore-test)"
      },
      {
        "kind": "heading",
        "id": "fsii",
        "title": "Fuel system icing inhibitor (FSII)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FSII — Fuel system icing inhibitor"
      },
      {
        "kind": "paragraph",
        "text": "A fuel system icing inhibitor is an approved fuel additive that reduces the risk of water ice forming in a fuel system under specified conditions."
      },
      {
        "kind": "paragraph",
        "text": "Aircraft and fuel specifications govern whether, and under what conditions, the additive is permitted or required. An additive's presence is part of the fuel grade and delivery documentation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Free water](#free-water) · [Jet A-1](#jet-a-1) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "fuel-testing-equipment",
        "title": "Fuel testing equipment"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aviation fuel testing equipment, jet fuel testing kit"
      },
      {
        "kind": "paragraph",
        "text": "Aviation fuel testing equipment is the set of instruments, kits and sampling accessories used to assess properties or contamination in aviation fuel."
      },
      {
        "kind": "paragraph",
        "text": "Field equipment can include water detection kits, conductivity meters, density instruments and membrane sampling assemblies. Laboratory equipment can verify specified fuel properties under standard methods. The equipment required depends on the fuel grade, test method, sampling point and the decision the result supports. An aircraft fuel system test stand measures system behaviour such as flow or pressure, which is a separate task from checking a fuel sample's quality."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Fuel quality control](#fuel-quality-control) · [Fuel sampling](#fuel-sampling) · [Conductivity test](#conductivity-test) · [Millipore test](#millipore-test)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aviation fuel ground support equipment](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "hydrant-system",
        "title": "Hydrant system"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Airport fuel hydrant system"
      },
      {
        "kind": "paragraph",
        "text": "An airport fuel hydrant system is a fixed distribution network that carries aviation fuel from storage to delivery points at aircraft stands."
      },
      {
        "kind": "paragraph",
        "text": "Hydrant pits provide access to the pipeline connection at defined locations. A compatible hydrant dispenser connects that supply to the aircraft and supplies the delivery-side functions required by the system."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydrant dispenser](#hydrant-dispenser) · [Fuel farm](#fuel-farm) · [Into-plane](#into-plane)"
      },
      {
        "kind": "heading",
        "id": "jet-a-1",
        "title": "Jet A-1"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Jet A1, kerosene-type aviation turbine fuel"
      },
      {
        "kind": "paragraph",
        "text": "Jet A-1 is a kerosene-type aviation turbine fuel grade with a specified maximum freezing point of −47 °C."
      },
      {
        "kind": "paragraph",
        "text": "Jet A has a maximum freezing point of −40 °C under ASTM D1655. JP-8 is a separate military kerosene-type grade with requirements under MIL-DTL-83133. Grade identity also depends on the applicable specification and additive provisions. Field quality checks address the fuel sample or delivery stage under the relevant fuel programme. Aircraft approval and documented grade identity govern which fuels can be used."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aviation turbine fuel (ATF)](#atf) · [ASTM D1655](#astm-d1655) · [DEF STAN 91-091](#def-stan-91-091) · [Freeze point](#freeze-point)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aviation fuel equipment](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "millipore-test",
        "title": "Millipore test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Membrane filter test, jet fuel particulate contamination test"
      },
      {
        "kind": "paragraph",
        "text": "A Millipore test is a common name for a membrane filtration test used to assess suspended particulate contamination in an aviation fuel sample."
      },
      {
        "kind": "paragraph",
        "text": "A defined volume of fuel passes through a membrane under the applicable test method. A visual colour rating provides a qualitative indication, while a gravimetric method measures retained particulate mass. The results have different uses and are interpreted against the method specified by the programme."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Fuel sampling](#fuel-sampling) · [Fuel testing equipment](#fuel-testing-equipment) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "static-dissipator-additive",
        "title": "Static dissipator additive (SDA)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — SDA — Static dissipator additive"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Conductivity improver"
      },
      {
        "kind": "paragraph",
        "text": "A static dissipator additive is a fuel additive that increases electrical conductivity to help dissipate electrostatic charge."
      },
      {
        "kind": "paragraph",
        "text": "The fuel specification and handling programme define permitted additives and applicable conductivity limits. The additive's role complements the other controls used to manage electrostatic risks during fuel transfer."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Conductivity test](#conductivity-test) · [Picosiemens per metre (pS/m)](#picosiemens-per-metre) · [Jet A-1](#jet-a-1)"
      },
      {
        "kind": "heading",
        "id": "saf",
        "title": "Sustainable aviation fuel (SAF)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — SAF — Sustainable aviation fuel"
      },
      {
        "kind": "paragraph",
        "text": "Sustainable aviation fuel is aviation fuel made from eligible alternative feedstocks or production pathways and assessed against applicable sustainability and fuel specifications."
      },
      {
        "kind": "paragraph",
        "text": "In conventional supply chains, many synthetic components are blended within approved limits and the final fuel is released to the applicable turbine fuel specification. Sustainability reporting and technical fuel release involve different records."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aviation turbine fuel (ATF)](#atf) · [ASTM D1655](#astm-d1655) · [Fuel quality control](#fuel-quality-control)"
      },
      {
        "kind": "heading",
        "id": "water-detection-test",
        "title": "Water detection test"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Jet fuel water test, free-water detection test"
      },
      {
        "kind": "paragraph",
        "text": "A jet fuel water detection test checks a sample for free water using an approved detector and method suitable for the application."
      },
      {
        "kind": "paragraph",
        "text": "Field detection kits can reveal suspended free water that a visual appearance check may miss. The method, sample condition and detector sensitivity influence what the result can show. Programmes specify which detector and records apply."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Free water](#free-water) · [Clear and bright test](#clear-and-bright-test) · [Fuel testing equipment](#fuel-testing-equipment)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "aircraft-systems",
    "title": "Aircraft Systems and Components",
    "blocks": [
      {
        "kind": "heading",
        "id": "air-data-computer",
        "title": "Air data computer (ADC)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ADC — Air data computer"
      },
      {
        "kind": "paragraph",
        "text": "An air data computer is an airborne unit that processes inputs such as pitot pressure, static pressure and temperature to calculate air data parameters."
      },
      {
        "kind": "paragraph",
        "text": "Outputs can include indicated airspeed, pressure altitude or Mach number, depending on the system. Testing may exercise pressure inputs and monitor the reported outputs specified for the unit."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Air data test set (ADTS)](#adts) · [Pitot-static system](#pitot-static-system) · [Pitot-static pressure quantities (Ps, Qc, Pt)](#ps-qc-pt)"
      },
      {
        "kind": "heading",
        "id": "amm",
        "title": "Aircraft maintenance manual (AMM)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — AMM — Aircraft maintenance manual"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft maintenance manual is the aircraft-level maintenance publication that describes applicable procedures, limits and requirements for work on the aircraft."
      },
      {
        "kind": "paragraph",
        "text": "It can cover servicing, removal and installation, adjustments and on-aircraft tests. Component maintenance manuals are more commonly used for relevant shop work on removed units. Maintenance teams use the applicable revision and aircraft configuration."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Component maintenance manual (CMM)](#cmm) · [Line maintenance](#line-maintenance) · [Line replaceable unit (LRU)](#lru)"
      },
      {
        "kind": "heading",
        "id": "apu",
        "title": "Auxiliary power unit (APU)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — APU — Auxiliary power unit"
      },
      {
        "kind": "paragraph",
        "text": "An auxiliary power unit is an onboard source of power that supplies aircraft services independently of the main propulsion engines."
      },
      {
        "kind": "paragraph",
        "text": "Many aircraft APUs provide electrical power and compressed bleed air, though installed capabilities vary. On the ground, compatible external power, pneumatic starting air and conditioned cabin air can be supplied by separate equipment."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ground power unit (GPU)](#gpu) · [Air start unit (ASU)](#asu) · [Pre-conditioned air (PCA) unit](#pca) · [Bleed air](#bleed-air)"
      },
      {
        "kind": "heading",
        "id": "backshell",
        "title": "Backshell"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Connector backshell"
      },
      {
        "kind": "paragraph",
        "text": "A backshell is a fitting attached to the rear of an electrical connector to support and protect the cable or wire bundle entering it."
      },
      {
        "kind": "paragraph",
        "text": "Its design may provide strain relief, environmental sealing or a termination point for shielding. Backshell selection depends on the connector interface, cable arrangement and requirements for the installation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Connector](#connector) · [Wire harness](#wire-harness) · [Electrical wiring interconnection system (EWIS)](#ewis)"
      },
      {
        "kind": "heading",
        "id": "bleed-air",
        "title": "Bleed air"
      },
      {
        "kind": "paragraph",
        "text": "Bleed air is compressed air extracted from an aircraft engine compressor or an auxiliary power unit to supply pneumatic systems."
      },
      {
        "kind": "paragraph",
        "text": "Depending on the aircraft, bleed air can support engine starting, environmental control or anti-ice functions. Some architectures use electrical power for functions that other aircraft perform with bleed air."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Auxiliary power unit (APU)](#apu) · [Air start unit (ASU)](#asu) · [Air conditioning unit (ACU)](#acu)"
      },
      {
        "kind": "heading",
        "id": "cable-assembly",
        "title": "Cable assembly"
      },
      {
        "kind": "paragraph",
        "text": "A cable assembly is a length or group of conductors configured with specified terminations and protective or mounting features for an electrical connection."
      },
      {
        "kind": "paragraph",
        "text": "The term often describes an assembly built to connect defined interfaces, while a wire harness often has multiple branches routed through a larger installation. The terms can overlap. The drawing specifies conductor sizes, lengths, connectivity, connectors, materials and acceptance requirements. A shielded or ruggedised assembly may have additional provisions for termination, mechanical support or environmental protection. Aircraft installation requirements determine which features apply."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Wire harness](#wire-harness) · [Backshell](#backshell) · [Connector](#connector) · [IPC/WHMA-A-620](#ipc-a-620)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft cable assemblies](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "cmm",
        "title": "Component maintenance manual (CMM)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — CMM — Component maintenance manual"
      },
      {
        "kind": "paragraph",
        "text": "A component maintenance manual is a publication that provides applicable maintenance and test information for a specific removable aircraft component or component family."
      },
      {
        "kind": "paragraph",
        "text": "A CMM can describe inspection, disassembly, assembly and acceptance testing for shop work. Parts identification and special tooling information may also be included, depending on the publication."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aircraft maintenance manual (AMM)](#amm) · [Line replaceable unit (LRU)](#lru) · [Test bench](#test-bench)"
      },
      {
        "kind": "heading",
        "id": "connector",
        "title": "Connector"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Electrical connector"
      },
      {
        "kind": "paragraph",
        "text": "An electrical connector is an interconnection device that mates separable conductors or contacts between electrical assemblies."
      },
      {
        "kind": "paragraph",
        "text": "MIL-DTL-38999 identifies a family of miniature, high-density circular electrical connectors covered by a military detail specification. Backshells and contacts may be specified separately, so the full part and interface definition matter."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Backshell](#backshell) · [Cable assembly](#cable-assembly) · [Wire harness](#wire-harness)"
      },
      {
        "kind": "heading",
        "id": "crimp",
        "title": "Crimp"
      },
      {
        "kind": "paragraph",
        "text": "A crimp is an electrical or mechanical termination made by controlled deformation of a contact or sleeve around a conductor."
      },
      {
        "kind": "paragraph",
        "text": "Crimp height is a dimensional characteristic used to assess certain crimp terminations. A splice joins conductors, sometimes using a crimp sleeve. The applicable workmanship requirements, drawing and tooling documentation establish acceptance criteria."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Connector](#connector) · [Wire harness](#wire-harness) · [IPC/WHMA-A-620](#ipc-a-620)"
      },
      {
        "kind": "heading",
        "id": "ewis",
        "title": "Electrical wiring interconnection system (EWIS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — EWIS — Electrical wiring interconnection system"
      },
      {
        "kind": "paragraph",
        "text": "An electrical wiring interconnection system is the installed wiring and associated devices used to transmit electrical energy, data or signals between points in an aircraft."
      },
      {
        "kind": "paragraph",
        "text": "EWIS includes applicable wires, connectors, supports, protective features and terminations as defined by the governing requirements. An individual wire harness forms one part of the aircraft installation. Routing, separation, identification and maintainability matter beyond the construction of any single harness. Aircraft maintenance teams use relevant installation and maintenance data when inspecting or changing a wiring system. Component and airframe drawings address different aspects of that work."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Wire harness](#wire-harness) · [Cable assembly](#cable-assembly) · [Aircraft maintenance manual (AMM)](#amm) · [IPC/WHMA-A-620](#ipc-a-620)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft wiring systems](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "hydraulic-system",
        "title": "Hydraulic system"
      },
      {
        "kind": "paragraph",
        "text": "An aircraft hydraulic system transmits and controls power through pressurised fluid to operate aircraft mechanisms."
      },
      {
        "kind": "paragraph",
        "text": "Depending on the aircraft, hydraulic power can operate equipment such as brakes, landing gear or flight controls. Ground service equipment may supply hydraulic power. A component test stand measures responses under defined conditions for a different task."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Hydraulic test stand](#hydraulic-test-stand) · [Landing gear](#landing-gear) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "heading",
        "id": "landing-gear",
        "title": "Landing gear"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Undercarriage"
      },
      {
        "kind": "paragraph",
        "text": "Landing gear is the aircraft structure and associated equipment that supports the aircraft during ground operation, take-off and landing."
      },
      {
        "kind": "paragraph",
        "text": "Nose and main gear assemblies have different functions and service points. For aircraft that use one, a nose gear bypass pin maintains the applicable steering bypass configuration during towing. A nitrogen servicing cart supplies regulated nitrogen for approved work on compatible components such as struts or tyres."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Tow bar](#tow-bar) · [Axle jack](#axle-jack) · [Hydraulic system](#hydraulic-system) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "heading",
        "id": "lru",
        "title": "Line replaceable unit (LRU)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — LRU — Line replaceable unit · SRU — Shop replaceable unit"
      },
      {
        "kind": "paragraph",
        "text": "A line replaceable unit is an assembly designed to be removed and replaced at the line maintenance level."
      },
      {
        "kind": "paragraph",
        "text": "An LRU is commonly exchanged on the aircraft and then assessed in a workshop. An SRU, or shop replaceable unit, is replaced at the workshop level and may be a subassembly inside an LRU."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Line maintenance](#line-maintenance) · [Unit under test (UUT)](#uut) · [Component maintenance manual (CMM)](#cmm)"
      },
      {
        "kind": "heading",
        "id": "nsn",
        "title": "NATO stock number (NSN)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — NSN — NATO stock number, also National Stock Number in US usage"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — National Stock Number in US usage"
      },
      {
        "kind": "paragraph",
        "text": "A NATO stock number is a 13-digit identifier assigned to an item of supply under the NATO Codification System."
      },
      {
        "kind": "paragraph",
        "text": "A procurement enquiry can use an NSN alongside manufacturer part numbers and applicable configuration details. Shelf life is recorded separately for items whose continued suitability depends on the period and conditions of storage."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Line replaceable unit (LRU)](#lru) · [Component maintenance manual (CMM)](#cmm)"
      },
      {
        "kind": "heading",
        "id": "pitot-static-system",
        "title": "Pitot-static system"
      },
      {
        "kind": "paragraph",
        "text": "A pitot-static system is the aircraft pressure-sensing arrangement that provides pitot and static pressure inputs to instruments or air data systems."
      },
      {
        "kind": "paragraph",
        "text": "A pitot tube senses total pressure and static ports sense ambient static pressure as installed on the aircraft. Instruments or computers process the pressure information to determine parameters such as airspeed and pressure altitude. Ground checks can address leakage, indications or system response under approved maintenance data. An air data test set supplies controlled pressures, while the aircraft documentation defines which checks apply to the installation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Air data test set (ADTS)](#adts) · [Air data computer (ADC)](#air-data-computer) · [Pitot-static pressure quantities (Ps, Qc, Pt)](#ps-qc-pt) · [Aircraft maintenance manual (AMM)](#amm)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft pitot-static testing](/resources/aircraft-pitot-static-testing)"
      },
      {
        "kind": "heading",
        "id": "uld",
        "title": "Unit load device (ULD)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ULD — Unit load device"
      },
      {
        "kind": "paragraph",
        "text": "A unit load device is an aircraft cargo container or an aircraft pallet and net combination designed to consolidate and restrain a load."
      },
      {
        "kind": "paragraph",
        "text": "ULD compatibility depends on the aircraft position and approved load restraint arrangements. A cargo loader and compatible dolly support ground transfer. The ULD itself can be an aircraft component subject to handling and serviceability requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Cargo loader](#cargo-loader) · [Dolly](#dolly) · [IATA Unit Load Device Regulations (ULDR)](#uldr)"
      },
      {
        "kind": "heading",
        "id": "wire-harness",
        "title": "Wire harness"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Wiring harness, wire loom, aircraft loom"
      },
      {
        "kind": "paragraph",
        "text": "A wire harness is an organised assembly of wires, terminations and protective or support components configured to connect specified electrical equipment."
      },
      {
        "kind": "paragraph",
        "text": "An aircraft wire harness can route power or signals between several installed systems. Branch lengths, connector pin assignments, shielding, identification and protection are defined by the design. Heat-shrink tubing or overbraiding may help protect a bundle where specified. Shielding and bonding serve defined electrical functions in the installation. Harness inspection and electrical checks follow the drawing, test specification and applicable workmanship requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Cable assembly](#cable-assembly) · [Electrical wiring interconnection system (EWIS)](#ewis) · [Crimp](#crimp) · [IPC/WHMA-A-620](#ipc-a-620)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft wire harness manufacturing](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "standards-and-authorities",
    "title": "Standards, Regulations and Authorities",
    "blocks": [
      {
        "kind": "heading",
        "id": "afqrjos",
        "title": "AFQRJOS"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — AFQRJOS — Aviation Fuel Quality Requirements for Jointly Operated Systems · EI — Energy Institute · IP — Institute of Petroleum, in the names of test methods · JIG — Joint Inspection Group"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — JIG checklist, aviation fuel quality checklist"
      },
      {
        "kind": "paragraph",
        "text": "AFQRJOS is a Jet A-1 quality document used by jointly operated aviation fuel systems to bring together requirements from major fuel specifications."
      },
      {
        "kind": "paragraph",
        "text": "The checklist is maintained by the Joint Inspection Group. EI/JIG 1530 addresses quality assurance in aviation fuel manufacture, storage and distribution to airports. Energy Institute IP test methods prescribe measurement procedures for petroleum products. The relevant specification identifies which methods and limits apply."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [Fuel quality control](#fuel-quality-control) · [DEF STAN 91-091](#def-stan-91-091) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "ad",
        "title": "Airworthiness directive (AD)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — AD — Airworthiness directive · PMA — Parts Manufacturer Approval"
      },
      {
        "kind": "paragraph",
        "text": "An airworthiness directive is a mandatory instruction issued by an airworthiness authority to address an unsafe condition in an aviation product within its applicability."
      },
      {
        "kind": "paragraph",
        "text": "A service bulletin is a manufacturer's communication about an inspection, modification or other action. Its status depends on the applicable regulatory or maintenance requirements. In U.S. documentation, Parts Manufacturer Approval identifies a combined design and production approval for eligible parts. FAA Form 8130-3 records an authorised release or airworthiness approval for the use stated on the form."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aircraft maintenance manual (AMM)](#amm) · [Component maintenance manual (CMM)](#cmm) · [FAA advisory circular (AC)](#faa-ac)"
      },
      {
        "kind": "heading",
        "id": "as9100",
        "title": "AS9100"
      },
      {
        "kind": "paragraph",
        "text": "AS9100 is an aerospace quality management systems standard in the 9100 series for aviation, space and defence organisations."
      },
      {
        "kind": "paragraph",
        "text": "The standard builds on ISO 9001 with requirements tailored to the sector. It applies to an organisation's quality management system within a stated scope. A specific product or process can have separate approval and acceptance requirements. Nadcap is an accreditation programme focused on defined aerospace processes and services. Aerospace suppliers may encounter both terms as well as drawing-level requirements such as wiring workmanship criteria, each with its own scope."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IPC/WHMA-A-620](#ipc-a-620) · [ISO/IEC 17025](#iso-17025) · [Wire harness](#wire-harness)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft harness manufacturing and quality documentation](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "astm-d1655",
        "title": "ASTM D1655"
      },
      {
        "kind": "paragraph",
        "text": "ASTM D1655 is a specification that defines requirements for the civil aviation turbine fuel grades Jet A and Jet A-1."
      },
      {
        "kind": "paragraph",
        "text": "The specification addresses fuel properties and acceptable methods used to determine those properties. Its requirements cover parameters related to composition, volatility, low-temperature behaviour and other aspects of fuel quality. A specification names the grade and limits. A test method describes how a particular property is measured. Routine field quality checks support handling and distribution and may cover a smaller set of properties than grade qualification or release testing."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [DEF STAN 91-091](#def-stan-91-091) · [Fuel quality control](#fuel-quality-control) · [Freeze point](#freeze-point)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aviation fuel equipment and testing context](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment)"
      },
      {
        "kind": "heading",
        "id": "ata-spec-103",
        "title": "ATA Specification 103 (ATA Spec 103)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ATA Spec 103 — ATA Specification 103, Standard for Jet Fuel Quality Control at Airports"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — ATA 103, A4A Spec 103"
      },
      {
        "kind": "paragraph",
        "text": "ATA Specification 103 is an industry document on quality control for airport jet fuel storage and distribution."
      },
      {
        "kind": "paragraph",
        "text": "Airlines for America publishes the document under its ATA specifications programme. The specification addresses practices in airport fuel handling. A fuel grade specification such as ASTM D1655 addresses the properties of the fuel itself."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [AFQRJOS](#afqrjos) · [Fuel quality control](#fuel-quality-control) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "bis",
        "title": "Bureau of Indian Standards (BIS)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — BIS — Bureau of Indian Standards"
      },
      {
        "kind": "paragraph",
        "text": "The Bureau of Indian Standards is India's national standards body, responsible for developing and publishing Indian Standards across sectors."
      },
      {
        "kind": "paragraph",
        "text": "In aviation fuel documentation, IS 1571 is an example of an Indian Standard for aviation turbine fuel. A project can specify an Indian, international or other recognised standard according to its applicable requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Aviation turbine fuel (ATF)](#atf) · [ASTM D1655](#astm-d1655) · [Directorate General of Civil Aviation (DGCA)](#dgca)"
      },
      {
        "kind": "heading",
        "id": "cemilac",
        "title": "Centre for Military Airworthiness and Certification (CEMILAC)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — CEMILAC — Centre for Military Airworthiness and Certification"
      },
      {
        "kind": "paragraph",
        "text": "The Centre for Military Airworthiness and Certification is an Indian organisation within the Defence Research and Development Organisation responsible for military airworthiness and certification functions."
      },
      {
        "kind": "paragraph",
        "text": "Its work relates to applicable military air systems and airborne stores under India's military airworthiness framework. The relevant programme defines which certification activities, evidence and authorities apply. CEMILAC and the Directorate General of Aeronautical Quality Assurance have distinct responsibilities within that framework. A reference to either body in a technical document needs the applicable approval or requirement identified for the item and programme concerned."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Directorate General of Aeronautical Quality Assurance (DGAQA)](#dgaqa) · [Directorate General of Civil Aviation (DGCA)](#dgca) · [Electrical wiring interconnection system (EWIS)](#ewis)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft harness design and documentation](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "car",
        "title": "Civil Aviation Requirements (CAR)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — CAR — Civil Aviation Requirements, in the Indian DGCA context"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — DGCA CAR"
      },
      {
        "kind": "paragraph",
        "text": "Civil Aviation Requirements are subject-specific requirements issued by India's Directorate General of Civil Aviation under the applicable civil aviation framework."
      },
      {
        "kind": "paragraph",
        "text": "CAR documents cover areas such as aerodromes, airworthiness and operations. A reference to a CAR needs the relevant section, series, part and revision where applicable. Aerodrome projects distinguish the national requirement from international provisions that inform design. The project's jurisdiction and operating conditions determine which requirements and approvals apply. A general acronym reference is useful for finding the document family, while the specific text governs the intended application."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Directorate General of Civil Aviation (DGCA)](#dgca) · [ICAO Annex 14](#icao-annex-14) · [Aerodrome](#aerodrome) · [Airfield ground lighting (AGL)](#agl)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield ground lighting requirements and applications](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "def-stan-91-091",
        "title": "DEF STAN 91-091"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Defence Standard 91-091"
      },
      {
        "kind": "paragraph",
        "text": "DEF STAN 91-091 is a UK Defence Standard that specifies kerosene-type Jet A-1 aviation turbine fuel."
      },
      {
        "kind": "paragraph",
        "text": "The specification sets grade requirements and is one of the fuel specifications relevant to AFQRJOS. Fuel documents identify the applicable standard and grade. Similar grade names can sit within different procurement or handling requirements."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Jet A-1](#jet-a-1) · [AFQRJOS](#afqrjos) · [ASTM D1655](#astm-d1655)"
      },
      {
        "kind": "heading",
        "id": "dgaqa",
        "title": "Directorate General of Aeronautical Quality Assurance (DGAQA)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — DGAQA — Directorate General of Aeronautical Quality Assurance"
      },
      {
        "kind": "paragraph",
        "text": "The Directorate General of Aeronautical Quality Assurance is an Indian government authority that carries out quality assurance functions for military aeronautical products and programmes within its remit."
      },
      {
        "kind": "paragraph",
        "text": "DGAQA operates within the Ministry of Defence's Department of Defence Production. The applicable programme can define quality assurance involvement and the records needed for the product or work being undertaken. DGAQA and CEMILAC have distinct roles under India's military airworthiness framework. If a drawing or purchase document refers to an authority, the controlling requirement and specific approval, inspection or documentation need to be identified."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Centre for Military Airworthiness and Certification (CEMILAC)](#cemilac) · [AS9100](#as9100) · [Wire harness](#wire-harness)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft harness manufacturing and inspection](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "dgca",
        "title": "Directorate General of Civil Aviation (DGCA)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — DGCA — Directorate General of Civil Aviation"
      },
      {
        "kind": "paragraph",
        "text": "The Directorate General of Civil Aviation is India's civil aviation regulator, with responsibilities that include aviation safety oversight and applicable regulatory requirements."
      },
      {
        "kind": "paragraph",
        "text": "DGCA publishes Civil Aviation Requirements for subject areas within its remit. In aerodrome work, applicable national requirements guide questions about design, licensing and operation alongside the relevant international framework. Airport and equipment teams use the controlling documents for the particular project. Indian military airworthiness programmes have a separate framework involving authorities such as CEMILAC and DGAQA. Identifying the operational context helps locate the appropriate regulatory reference."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Civil Aviation Requirements (CAR)](#car) · [ICAO Annex 14](#icao-annex-14) · [Centre for Military Airworthiness and Certification (CEMILAC)](#cemilac) · [Directorate General of Aeronautical Quality Assurance (DGAQA)](#dgaqa)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aerodrome lighting applications](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "faa-ac",
        "title": "FAA advisory circular (AC)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — AC — Advisory circular, in FAA publications · FAA — Federal Aviation Administration"
      },
      {
        "kind": "paragraph",
        "text": "An FAA advisory circular is a U.S. Federal Aviation Administration publication that provides guidance, standards or acceptable means of addressing a subject within its stated applicability."
      },
      {
        "kind": "paragraph",
        "text": "Airport lighting specifications use AC numbers to identify document families. For example, AC 150/5345-44 addresses runway and taxiway signs and AC 150/5345-46 covers relevant light fixtures. Project and regulatory documents determine the role of a particular circular."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield sign](#airfield-sign) · [Airfield ground lighting (AGL)](#agl) · [ICAO Annex 14](#icao-annex-14)"
      },
      {
        "kind": "heading",
        "id": "ahm",
        "title": "IATA Airport Handling Manual (AHM)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — AHM — Airport Handling Manual · IATA — International Air Transport Association"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Airport Handling Manual"
      },
      {
        "kind": "paragraph",
        "text": "The IATA Airport Handling Manual is an industry manual that sets out policies and standards for airport ground handling, including ground support equipment."
      },
      {
        "kind": "paragraph",
        "text": "The manual covers areas such as aircraft and cargo handling, load control, ground handling agreements and safety management. Its GSE material supports specification and management of ground equipment. The IATA Ground Operations Manual complements it with procedural guidance for carrying out tasks. A ground services organisation uses the applicable edition and takes account of the airline, airport and contractual requirements governing the work."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IATA Ground Operations Manual (IGOM)](#igom) · [IATA Safety Audit for Ground Operations (ISAGO)](#isago) · [Standard Ground Handling Agreement (SGHA)](#sgha) · [Ground support equipment (GSE)](#gse)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft ground handling equipment](/products/aviation-equipment/ground-handling-equipment)"
      },
      {
        "kind": "heading",
        "id": "igom",
        "title": "IATA Ground Operations Manual (IGOM)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — IGOM — IATA Ground Operations Manual"
      },
      {
        "kind": "paragraph",
        "text": "The IATA Ground Operations Manual is an industry manual that describes standard procedures for carrying out aircraft ground handling and other ground operations."
      },
      {
        "kind": "paragraph",
        "text": "IGOM addresses how activities are performed and complements the Airport Handling Manual's policy and standards material. The two documents help organisations organise their procedures while accounting for local, aircraft-specific and contractual requirements. Safety management and audit programmes can refer to these materials. A training or operating instruction should identify the procedure that applies to the station and aircraft being handled, along with the relevant approved local implementation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IATA Airport Handling Manual (AHM)](#ahm) · [IATA Safety Audit for Ground Operations (ISAGO)](#isago) · [Turnaround](#turnaround) · [Ground handling](#ground-handling)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft ground handling equipment](/products/aviation-equipment/ground-handling-equipment)"
      },
      {
        "kind": "heading",
        "id": "isago",
        "title": "IATA Safety Audit for Ground Operations (ISAGO)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ISAGO — IATA Safety Audit for Ground Operations"
      },
      {
        "kind": "paragraph",
        "text": "The IATA Safety Audit for Ground Operations is an audit programme for assessing ground handling service providers against applicable programme requirements."
      },
      {
        "kind": "paragraph",
        "text": "The programme covers organisational management and ground services in scope. Its checklist and reference material support audits across defined activities. The applicable audit scope and station coverage are read from the programme documentation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IATA Airport Handling Manual (AHM)](#ahm) · [IATA Ground Operations Manual (IGOM)](#igom) · [Ground handling](#ground-handling)"
      },
      {
        "kind": "heading",
        "id": "uldr",
        "title": "IATA Unit Load Device Regulations (ULDR)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ULDR — Unit Load Device Regulations"
      },
      {
        "kind": "paragraph",
        "text": "The IATA Unit Load Device Regulations are an industry publication covering requirements and procedures for aircraft unit load devices."
      },
      {
        "kind": "paragraph",
        "text": "The publication addresses ULD handling, serviceability and other lifecycle topics relevant to operators and service providers. The aircraft's approved loading arrangements govern which container or pallet and net combinations can be used at specific positions."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Unit load device (ULD)](#uld) · [Cargo loader](#cargo-loader) · [IATA Airport Handling Manual (AHM)](#ahm)"
      },
      {
        "kind": "heading",
        "id": "icao-annex-14",
        "title": "ICAO Annex 14"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ICAO — International Civil Aviation Organization"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Annex 14 to the Chicago Convention, Aerodromes"
      },
      {
        "kind": "paragraph",
        "text": "ICAO Annex 14 contains international Standards and Recommended Practices for aerodromes, with Volume I addressing aerodrome design and operations."
      },
      {
        "kind": "paragraph",
        "text": "Volume I covers physical characteristics, markings, lights, signs and other aerodrome provisions. Volume II addresses heliports. ICAO's Aerodrome Design Manual, Part 4, expands on visual aids as design guidance. National authorities implement applicable provisions within their own regulatory frameworks. A lighting or signage specification therefore identifies the relevant volume, provisions and national requirements for the location and type of operation. Detailed fixture standards also inform equipment selection."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield ground lighting (AGL)](#agl) · [Airfield sign](#airfield-sign) · [Aerodrome](#aerodrome) · [Civil Aviation Requirements (CAR)](#car)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield lighting and visual aids](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "iec-61820",
        "title": "IEC 61820 and IEC 61822"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — IEC — International Electrotechnical Commission"
      },
      {
        "kind": "paragraph",
        "text": "IEC 61820 is a series of standards for electrical installations for aeronautical ground lighting, and IEC 61822 is the superseded standard for specified 6.6 A constant current regulators."
      },
      {
        "kind": "paragraph",
        "text": "IEC 61820-3-2:2023 replaced IEC 61822:2009 and covers power electronic converter systems for series-circuit airfield lighting. A regulator or converter specification should identify the relevant part, edition and electrical architecture. Legacy drawings can still refer to IEC 61822. In an upgrade, the regulator, connected load, controls and fixture interfaces all inform compatibility, along with the electrical requirements that apply to the project."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Constant current regulator (CCR)](#ccr) · [Series circuit](#series-circuit) · [6.6 A](#6-6-a) · [Airfield ground lighting (AGL)](#agl)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield lighting electrical systems](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "ipc-a-620",
        "title": "IPC/WHMA-A-620"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — WHMA — Wiring Harness Manufacturers Association"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — A-620, cable and wire harness assembly workmanship standard"
      },
      {
        "kind": "paragraph",
        "text": "IPC/WHMA-A-620 is a workmanship and acceptance standard for cable and wire harness assemblies."
      },
      {
        "kind": "paragraph",
        "text": "The standard addresses topics such as crimps, splices, soldered connections and assembly practices. Class 3 refers to high-performance or harsh-environment applications under the standard's product classification. The engineering and contract documents determine the applicable class, revision and any addendum. A workmanship standard supports inspection and acceptance of the assembly. The drawing and applicable airworthiness requirements separately define the design, materials and installed configuration that the item must meet."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Wire harness](#wire-harness) · [Cable assembly](#cable-assembly) · [Crimp](#crimp) · [Electrical wiring interconnection system (EWIS)](#ewis)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft harness workmanship and inspection](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
      },
      {
        "kind": "heading",
        "id": "iso-10254",
        "title": "ISO 10254"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — ISO — International Organization for Standardization"
      },
      {
        "kind": "paragraph",
        "text": "ISO 10254 is an international vocabulary standard for air cargo and airport ground equipment."
      },
      {
        "kind": "paragraph",
        "text": "Its terminology supports consistent use in manuals, specifications and related documents. Equipment programmes may also use more specialised definitions from an aircraft manufacturer, airport or IATA manual when the governing document specifies them."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Unit load device (ULD)](#uld) · [Ground support equipment (GSE)](#gse) · [IATA Airport Handling Manual (AHM)](#ahm)"
      },
      {
        "kind": "heading",
        "id": "iso-17025",
        "title": "ISO/IEC 17025"
      },
      {
        "kind": "paragraph",
        "text": "ISO/IEC 17025 is an international standard for the competence, impartiality and consistent operation of testing and calibration laboratories."
      },
      {
        "kind": "paragraph",
        "text": "Accreditation against the standard applies to a defined scope of laboratory activities. For calibration, the scope can identify quantities, ranges and calibration and measurement capabilities. An instrument having a calibration certificate and a laboratory holding accreditation are distinct facts. The laboratory's published scope and the certificate for the individual instrument can be used together to confirm whether a particular calibration falls within that scope."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [National Accreditation Board for Testing and Calibration Laboratories (NABL)](#nabl) · [Calibration](#calibration) · [Calibration certificate](#calibration-certificate) · [Measurement uncertainty](#measurement-uncertainty)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [equipment calibration in pitot-static testing](/resources/aircraft-pitot-static-testing)"
      },
      {
        "kind": "heading",
        "id": "mil-std",
        "title": "MIL-STD"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — MIL-STD — Military standard, in U.S. defence standardisation · UFC — Unified Facilities Criteria"
      },
      {
        "kind": "paragraph",
        "text": "MIL-STD is a prefix used for U.S. military standards that establish requirements, test methods or practices for defined defence applications."
      },
      {
        "kind": "paragraph",
        "text": "The full document number, revision and applicable provisions identify the requirement. A military detail specification uses the MIL-DTL prefix instead. Unified Facilities Criteria, or UFC documents, are a separate U.S. Department of Defense series for facilities."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Connector](#connector) · [AS9100](#as9100) · [FAA advisory circular (AC)](#faa-ac)"
      },
      {
        "kind": "heading",
        "id": "nabl",
        "title": "National Accreditation Board for Testing and Calibration Laboratories (NABL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — NABL — National Accreditation Board for Testing and Calibration Laboratories"
      },
      {
        "kind": "paragraph",
        "text": "The National Accreditation Board for Testing and Calibration Laboratories is India's accreditation body for defined laboratory and other conformity assessment activities within its remit."
      },
      {
        "kind": "paragraph",
        "text": "For calibration laboratories, accreditation against ISO/IEC 17025 is tied to the listed scope. A scope can specify measurements, ranges and calibration and measurement capabilities. A calibration certificate records the result for a particular instrument, while the scope describes the activity for which the laboratory has been accredited. The activity and required measurement range are considered when assessing the relevance of a laboratory's accreditation for an air data test set."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [ISO/IEC 17025](#iso-17025) · [Calibration](#calibration) · [Calibration certificate](#calibration-certificate) · [Traceability, metrological](#traceability)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [air data test equipment calibration considerations](/resources/aircraft-pitot-static-testing)"
      },
      {
        "kind": "heading",
        "id": "sgha",
        "title": "Standard Ground Handling Agreement (SGHA)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — SGHA — Standard Ground Handling Agreement"
      },
      {
        "kind": "paragraph",
        "text": "The IATA Standard Ground Handling Agreement is a contract template for arranging ground handling services between airlines and ground service providers."
      },
      {
        "kind": "paragraph",
        "text": "The agreement sets out a framework for defining services, responsibilities and commercial terms. The executed contract and its annexes identify the services and operating arrangements agreed for the stations in scope."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [IATA Airport Handling Manual (AHM)](#ahm) · [IATA Ground Operations Manual (IGOM)](#igom) · [Ground handling](#ground-handling)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "airfield-infrastructure",
    "title": "Airfield Infrastructure and Operations",
    "blocks": [
      {
        "kind": "heading",
        "id": "aerodrome",
        "title": "Aerodrome"
      },
      {
        "kind": "paragraph",
        "text": "An aerodrome is an area set aside for aircraft to arrive, depart or move on the surface, together with the facilities that support those activities."
      },
      {
        "kind": "paragraph",
        "text": "An airport is a type of aerodrome. The aerodrome reference code links selected design specifications to the characteristics of the aircraft intended to use the facilities. The applicable aerodrome framework defines the code and its use."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway](#runway) · [Movement area](#movement-area) · [ICAO Annex 14](#icao-annex-14)"
      },
      {
        "kind": "heading",
        "id": "precision-approach-categories",
        "title": "Category I, II and III approaches"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — CAT I, II, III — Category I, II and III, in precision approach terminology"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — CAT I, CAT II and CAT III"
      },
      {
        "kind": "paragraph",
        "text": "Category I, II and III are categories of precision approach and landing operations defined by applicable decision height and visibility or runway visual range criteria."
      },
      {
        "kind": "paragraph",
        "text": "The categories describe operational minima under a governing framework. An aerodrome's lighting and other infrastructure are only part of the operating environment. Navigation aids, aircraft capability, operator approval and published procedures also affect which operations are authorised. Airfield design takes account of the intended operations and the applicable national requirements. Approach lighting, runway lighting and surface movement controls perform different functions within that arrangement."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway visual range (RVR)](#rvr) · [Low visibility procedures (LVP)](#lvp) · [Approach lighting system (ALS)](#als) · [ICAO Annex 14](#icao-annex-14)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield lighting for precision approaches](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "displaced-threshold",
        "title": "Displaced threshold"
      },
      {
        "kind": "paragraph",
        "text": "A displaced threshold is a runway threshold located inward from the physical start of the runway in the approach direction."
      },
      {
        "kind": "paragraph",
        "text": "The offset can affect the distance available for landing in that direction. Published declared distances and markings identify how the pavement before the threshold can be used under applicable procedures."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Threshold](#threshold) · [Runway](#runway) · [Runway threshold lights](#runway-threshold-lights)"
      },
      {
        "kind": "heading",
        "id": "frangibility",
        "title": "Frangibility"
      },
      {
        "kind": "paragraph",
        "text": "Frangibility is the characteristic of an object designed to break, deform or yield on impact so that it presents a lower hazard to an aircraft."
      },
      {
        "kind": "paragraph",
        "text": "Aerodrome requirements identify locations and objects for which frangibility is necessary. Elevated visual aids in such locations may use purpose-designed supports or couplings. Frangibility is assessed for the applicable assembly, mounting and impact conditions. The hardware must also meet its normal service requirements. Clearances, fixture profiles and pavement mounting are related design considerations where aircraft or vehicles may pass close to visual aids."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Frangible coupling](#frangible-coupling) · [Elevated fixture](#elevated-fixture) · [Inset fixture](#inset-fixture) · [ICAO Annex 14](#icao-annex-14)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield fixture placement and mounting](/products/runway-spares/runway-lights/taxiway-edge-inset-light)"
      },
      {
        "kind": "heading",
        "id": "holding-position",
        "title": "Holding position"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Runway holding position where associated with a runway"
      },
      {
        "kind": "paragraph",
        "text": "A holding position is a designated point where an aircraft or vehicle may be required to hold under the applicable markings, signals or clearance procedures."
      },
      {
        "kind": "paragraph",
        "text": "A runway holding position can protect a runway or an associated protected area. Markings and signs identify the position. Stop bars or runway guard lights can provide additional visual cues under the applicable aerodrome design."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Mandatory instruction sign](#mandatory-sign) · [Stop bar](#stop-bar) · [Runway guard lights (RGL)](#runway-guard-lights)"
      },
      {
        "kind": "heading",
        "id": "lvp",
        "title": "Low visibility procedures (LVP)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — LVP — Low visibility procedures"
      },
      {
        "kind": "paragraph",
        "text": "Low visibility procedures are aerodrome arrangements for maintaining protected aircraft and vehicle operations when visibility falls to defined levels."
      },
      {
        "kind": "paragraph",
        "text": "The procedures can address taxi routing, vehicle access, protecting navigation aid sensitive areas and controlling entry to runways. The airport's published thresholds and approved local procedures determine how the arrangements apply."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Runway visual range (RVR)](#rvr) · [Stop bar](#stop-bar) · [Category I, II and III approaches](#precision-approach-categories)"
      },
      {
        "kind": "heading",
        "id": "movement-area",
        "title": "Movement area"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Aircraft movement area"
      },
      {
        "kind": "paragraph",
        "text": "The movement area is the aerodrome space for aircraft departure, landing and taxiing, including both the manoeuvring area and the aprons under the ICAO definition."
      },
      {
        "kind": "paragraph",
        "text": "The manoeuvring area is the part used for take-off, landing and taxiing excluding aprons in that framework. Local and national definitions may use different boundaries, so airside maps and procedures identify the operational areas for the specific airport."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airside](#airside) · [Apron](#apron) · [Runway](#runway) · [Taxiway](#taxiway)"
      },
      {
        "kind": "heading",
        "id": "runway",
        "title": "Runway"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — RWY on aerodrome charts"
      },
      {
        "kind": "paragraph",
        "text": "A runway is a prepared rectangular strip at a land aerodrome where aircraft take off and land."
      },
      {
        "kind": "paragraph",
        "text": "Runway identifiers distinguish operating directions. Thresholds, markings, lights and declared distances describe the facilities and pavement available for each direction of use."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Threshold](#threshold) · [Runway edge lights](#runway-edge-lights) · [Taxiway](#taxiway)"
      },
      {
        "kind": "heading",
        "id": "runway-incursion",
        "title": "Runway incursion"
      },
      {
        "kind": "paragraph",
        "text": "A runway incursion occurs when an aircraft, vehicle or person is incorrectly present within the area protected for aircraft take-offs and landings."
      },
      {
        "kind": "paragraph",
        "text": "Holding positions, markings, signs and control procedures help protect runway access. An occurrence is assessed using the applicable reporting criteria and circumstances."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Holding position](#holding-position) · [Stop bar](#stop-bar) · [Runway guard lights (RGL)](#runway-guard-lights)"
      },
      {
        "kind": "heading",
        "id": "rvr",
        "title": "Runway visual range (RVR)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — RVR — Runway visual range"
      },
      {
        "kind": "paragraph",
        "text": "Runway visual range describes the distance from which runway markings or lights identifying the runway edges or centreline are visible to a pilot positioned on the centreline."
      },
      {
        "kind": "paragraph",
        "text": "RVR is used in published operating minima and may be reported for different runway zones. It describes runway-specific visibility and is distinct from a general aerodrome visibility observation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Low visibility procedures (LVP)](#lvp) · [Category I, II and III approaches](#precision-approach-categories) · [Runway centreline lights](#runway-centreline-lights)"
      },
      {
        "kind": "heading",
        "id": "taxiway",
        "title": "Taxiway"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — TWY on aerodrome charts"
      },
      {
        "kind": "paragraph",
        "text": "A taxiway is a designated route that aircraft use to taxi between areas of an aerodrome."
      },
      {
        "kind": "paragraph",
        "text": "The network can link runways, aprons and other operating areas. Routing can be supported by centreline markings, lights and signs. A rapid exit taxiway serves a particular runway exit function."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Apron](#apron) · [Rapid exit taxiway indicator lights (RETIL)](#retil) · [Taxiway centreline lights](#taxiway-centreline-lights)"
      },
      {
        "kind": "heading",
        "id": "threshold",
        "title": "Threshold"
      },
      {
        "kind": "paragraph",
        "text": "The threshold marks where the landing portion of a runway begins for an aircraft approaching from a given direction."
      },
      {
        "kind": "paragraph",
        "text": "A runway threshold can be at the pavement end or displaced inward. Markings and lights identify the threshold where specified. The threshold in one direction and the end marking for the opposite direction can share a location."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Displaced threshold](#displaced-threshold) · [Runway threshold lights](#runway-threshold-lights) · [Runway end lights](#runway-end-lights)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "units-and-measures",
    "title": "Units, Measures and Common Abbreviations",
    "blocks": [
      {
        "kind": "heading",
        "id": "28-v-dc",
        "title": "28 V DC"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — DC — Direct current"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — 28-volt direct current power"
      },
      {
        "kind": "paragraph",
        "text": "28 V DC is a nominal direct-current supply format used by compatible aircraft and ground equipment."
      },
      {
        "kind": "paragraph",
        "text": "The aircraft's specified voltage tolerances, connector, current and starting or operating requirements determine which ground supply can be used. Aircraft requiring 400 Hz AC use a different supply format."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [400 Hz power](#400-hz-power) · [Ground power unit (GPU)](#gpu)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [28 V DC and 400 Hz ground power](/resources/28v-dc-vs-400hz-ground-power)"
      },
      {
        "kind": "heading",
        "id": "400-hz-power",
        "title": "400 Hz power"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — AC power — Alternating-current power · Hz — Hertz"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — 400 Hz ground power, 400-cycle aircraft power"
      },
      {
        "kind": "paragraph",
        "text": "400 Hz power is alternating-current electrical power delivered at a frequency of 400 cycles per second and used on many aircraft."
      },
      {
        "kind": "paragraph",
        "text": "A common external supply format is three-phase 115/200 V AC at 400 Hz, with voltage stated phase-to-neutral and phase-to-phase respectively. Fixed converters and mobile GPUs can provide this format where the aircraft requires it. Selection also depends on delivered capacity, power quality, connector and aircraft interface. A site may distribute utility-frequency power to a fixed converter, with the converter supplying the specified aircraft frequency at the stand."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Ground power unit (GPU)](#gpu) · [28 V DC](#28-v-dc) · [Auxiliary power unit (APU)](#apu) · [Ground support equipment (GSE)](#gse)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [400 Hz aircraft ground power](/resources/28v-dc-vs-400hz-ground-power)"
      },
      {
        "kind": "heading",
        "id": "6-6-a",
        "title": "6.6 A"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — A — Ampere"
      },
      {
        "kind": "paragraph",
        "text": "6.6 A is a common nominal series-circuit current rating in aeronautical ground lighting."
      },
      {
        "kind": "paragraph",
        "text": "The number describes circuit current, expressed in amperes. A constant current regulator maintains the selected operating current within its design limits. Intensity steps can operate at lower current settings, and an installation may use another architecture. Regulators, transformers and fixtures are selected as compatible parts of the circuit. The fixture and its transformer specifications describe the secondary load, while photometric data give the optical output."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Constant current regulator (CCR)](#ccr) · [Isolation transformer](#isolation-transformer) · [Series circuit](#series-circuit) · [IEC 61820 and IEC 61822](#iec-61820)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [airfield lighting series circuits](/resources/airfield-ground-lighting)"
      },
      {
        "kind": "heading",
        "id": "candela-and-lux",
        "title": "Candela and lux"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — cd — Candela · lx — Lux"
      },
      {
        "kind": "paragraph",
        "text": "Candela is the SI unit of luminous intensity in a direction, and lux is the SI unit of illuminance on a surface."
      },
      {
        "kind": "paragraph",
        "text": "An airfield fixture's photometric specification can state intensity by direction in candela. A measurement of the light incident on a surface uses lux. The quantities describe different aspects of a lighting installation."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Airfield ground lighting (AGL)](#agl) · [Elevated fixture](#elevated-fixture) · [Inset fixture](#inset-fixture)"
      },
      {
        "kind": "heading",
        "id": "flight-level",
        "title": "Flight level (FL)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — FL — Flight level"
      },
      {
        "kind": "paragraph",
        "text": "A flight level is a surface of constant atmospheric pressure referenced to a standard pressure setting and expressed in hundreds of feet."
      },
      {
        "kind": "paragraph",
        "text": "FL 290 represents 29,000 feet of pressure altitude on the standard reference. Air data testing uses controlled pressures to represent specified altitude conditions on the ground. Aircraft speed is commonly expressed in knots, where one knot is one nautical mile per hour."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Reduced vertical separation minima (RVSM)](#rvsm) · [Pitot-static pressure quantities (Ps, Qc, Pt)](#ps-qc-pt) · [Air data test set (ADTS)](#adts)"
      },
      {
        "kind": "heading",
        "id": "picosiemens-per-metre",
        "title": "Picosiemens per metre (pS/m)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — pS/m — Picosiemens per metre"
      },
      {
        "kind": "paragraph",
        "text": "Picosiemens per metre is a unit of electrical conductivity used to report measurements for aviation turbine fuels."
      },
      {
        "kind": "paragraph",
        "text": "One picosiemens per metre is one trillionth of a siemens per metre. Fuel quality records pair the measured value with the method and conditions required by the applicable programme."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Conductivity test](#conductivity-test) · [Static dissipator additive (SDA)](#static-dissipator-additive) · [Jet A-1](#jet-a-1)"
      },
      {
        "kind": "heading",
        "id": "ps-qc-pt",
        "title": "Pitot-static pressure quantities (Ps, Qc, Pt)"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — Ps — Static pressure · Qc — Impact pressure · Pt — Total pressure"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Pₛ, q꜀ and Pₜ in air data notation"
      },
      {
        "kind": "paragraph",
        "text": "Pitot-static pressure quantities are static pressure Ps, total or pitot pressure Pt, and impact pressure Qc, equal to Pt minus Ps."
      },
      {
        "kind": "paragraph",
        "text": "Static pressure represents the surrounding atmosphere at the sensing location, and total pressure is the pressure sensed by the pitot system. An air data test set can control these pressure conditions to represent selected flight parameters. Instrument documentation states the quantity and units for each channel or indication."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pitot-static system](#pitot-static-system) · [Air data test set (ADTS)](#adts) · [Air data computer (ADC)](#air-data-computer)"
      },
      {
        "kind": "heading",
        "id": "pressure-units",
        "title": "Pressure units in aviation testing"
      },
      {
        "kind": "paragraph",
        "text": "Expansions — inHg — Inches of mercury · mbar — Millibar · psi — Pounds-force per square inch"
      },
      {
        "kind": "paragraph",
        "text": "Pressure units in aviation testing express the force per unit area or equivalent pressure used in instruments, specifications and test records."
      },
      {
        "kind": "paragraph",
        "text": "Psi expresses pounds-force per square inch. Inches of mercury, or inHg, are used in some aviation pressure records. A millibar, or mbar, equals one hectopascal. Torr is a unit used in vacuum measurements and is one seven-hundred-and-sixtieth of a standard atmosphere. The report also identifies whether values are absolute, gauge or differential."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Pitot-static pressure quantities (Ps, Qc, Pt)](#ps-qc-pt) · [Thermal vacuum chamber](#thermal-vacuum-chamber) · [Air data test set (ADTS)](#adts)"
      },
      {
        "kind": "heading",
        "id": "rvsm",
        "title": "Reduced vertical separation minima (RVSM)"
      },
      {
        "kind": "paragraph",
        "text": "Expansion — RVSM — Reduced vertical separation minima"
      },
      {
        "kind": "paragraph",
        "text": "Also known as — Reduced vertical separation minimum in some regulatory usage"
      },
      {
        "kind": "paragraph",
        "text": "Reduced vertical separation minima is an airspace concept that permits 1,000 feet of vertical separation between eligible aircraft in designated airspace, typically from FL 290 through FL 410 inclusive."
      },
      {
        "kind": "paragraph",
        "text": "The applicable authority and operator programme determine aircraft eligibility and the relevant operational and maintenance requirements. Altimetry performance matters because pressure altitude supports the separation concept. Certain maintenance tasks can require checks of the aircraft's altitude reporting or air data system with suitable calibrated equipment. The RVSM designation identifies the operating context. The aircraft's approved maintenance instructions and the governing requirements specify any individual check and applicable tolerances."
      },
      {
        "kind": "paragraph",
        "text": "Related terms — [Flight level (FL)](#flight-level) · [Air data test set (ADTS)](#adts) · [Calibration](#calibration) · [Pitot-static system](#pitot-static-system)"
      },
      {
        "kind": "paragraph",
        "text": "Learn more — [aircraft air data and pitot-static testing](/resources/aircraft-pitot-static-testing)"
      },
      {
        "kind": "paragraph",
        "text": "[Back to the A–Z index](#glossary-index)"
      }
    ]
  },
  {
    "id": "abbreviations-quick-reference",
    "title": "Abbreviations Quick Reference",
    "blocks": [
      {
        "kind": "table",
        "label": "Abbreviations Quick Reference",
        "headers": [
          "Abbreviation",
          "Stands for",
          "Category"
        ],
        "rows": [
          [
            "A",
            "Ampere",
            "Units and measures"
          ],
          [
            "AC",
            "Advisory circular, in FAA publications",
            "Standards and authorities"
          ],
          [
            "AC power",
            "Alternating-current power",
            "Units and measures"
          ],
          [
            "ACU",
            "Air conditioning unit",
            "Powered GSE"
          ],
          [
            "AD",
            "Airworthiness directive",
            "Standards and authorities"
          ],
          [
            "ADC",
            "Air data computer",
            "Aircraft systems"
          ],
          [
            "ADTS",
            "Air data test set",
            "Ground testing"
          ],
          [
            "AFQRJOS",
            "Aviation Fuel Quality Requirements for Jointly Operated Systems",
            "Standards and authorities"
          ],
          [
            "AGL",
            "Airfield ground lighting",
            "Airfield lighting"
          ],
          [
            "AHM",
            "Airport Handling Manual",
            "Standards and authorities"
          ],
          [
            "ALCMS",
            "Airfield lighting control and monitoring system",
            "Airfield lighting"
          ],
          [
            "ALS",
            "Approach lighting system",
            "Airfield lighting"
          ],
          [
            "AMM",
            "Aircraft maintenance manual",
            "Aircraft systems"
          ],
          [
            "AOG",
            "Aircraft on ground",
            "Turnaround and ramp"
          ],
          [
            "APU",
            "Auxiliary power unit",
            "Aircraft systems"
          ],
          [
            "ASU",
            "Air start unit",
            "Powered GSE"
          ],
          [
            "ATA Spec 103",
            "ATA Specification 103, Standard for Jet Fuel Quality Control at Airports",
            "Standards and authorities"
          ],
          [
            "ATE",
            "Automatic test equipment",
            "Ground testing"
          ],
          [
            "ATF",
            "Aviation turbine fuel",
            "Aviation fuel"
          ],
          [
            "BIS",
            "Bureau of Indian Standards",
            "Standards and authorities"
          ],
          [
            "CAR",
            "Civil Aviation Requirements, in the Indian DGCA context",
            "Standards and authorities"
          ],
          [
            "CAT I, II, III",
            "Category I, II and III, in precision approach terminology",
            "Airfield infrastructure"
          ],
          [
            "CCR",
            "Constant current regulator",
            "Airfield lighting"
          ],
          [
            "cd",
            "Candela",
            "Units and measures"
          ],
          [
            "CEMILAC",
            "Centre for Military Airworthiness and Certification",
            "Standards and authorities"
          ],
          [
            "CMM",
            "Component maintenance manual",
            "Aircraft systems"
          ],
          [
            "DC",
            "Direct current",
            "Units and measures"
          ],
          [
            "DGAQA",
            "Directorate General of Aeronautical Quality Assurance",
            "Standards and authorities"
          ],
          [
            "DGCA",
            "Directorate General of Civil Aviation",
            "Standards and authorities"
          ],
          [
            "DUT",
            "Device under test",
            "Ground testing"
          ],
          [
            "eGSE",
            "Electric ground support equipment",
            "Powered GSE"
          ],
          [
            "EI",
            "Energy Institute",
            "Standards and authorities"
          ],
          [
            "ERA",
            "Equipment restraint area",
            "Turnaround and ramp"
          ],
          [
            "EWIS",
            "Electrical wiring interconnection system",
            "Aircraft systems"
          ],
          [
            "FAA",
            "Federal Aviation Administration",
            "Standards and authorities"
          ],
          [
            "FAT",
            "Factory acceptance test",
            "Ground testing"
          ],
          [
            "FBO",
            "Fixed-base operator",
            "Turnaround and ramp"
          ],
          [
            "FL",
            "Flight level",
            "Units and measures"
          ],
          [
            "FOD",
            "Foreign object debris, also foreign object damage when referring to the effect",
            "Turnaround and ramp"
          ],
          [
            "FSII",
            "Fuel system icing inhibitor",
            "Aviation fuel"
          ],
          [
            "FWS",
            "Filter water separator",
            "Aviation fuel"
          ],
          [
            "GPU",
            "Ground power unit",
            "Powered GSE"
          ],
          [
            "GSE",
            "Ground support equipment",
            "Non-Powered GSE"
          ],
          [
            "GTE",
            "Ground test equipment",
            "Ground testing"
          ],
          [
            "Hi-pot",
            "High-potential test",
            "Ground testing"
          ],
          [
            "HIRL",
            "High-intensity runway lighting",
            "Airfield lighting"
          ],
          [
            "Hz",
            "Hertz",
            "Units and measures"
          ],
          [
            "IATA",
            "International Air Transport Association",
            "Standards and authorities"
          ],
          [
            "ICAO",
            "International Civil Aviation Organization",
            "Standards and authorities"
          ],
          [
            "IEC",
            "International Electrotechnical Commission",
            "Standards and authorities"
          ],
          [
            "IGOM",
            "IATA Ground Operations Manual",
            "Standards and authorities"
          ],
          [
            "ILCMS",
            "Individual lamp control and monitoring system",
            "Airfield lighting"
          ],
          [
            "inHg",
            "Inches of mercury",
            "Units and measures"
          ],
          [
            "IP",
            "Institute of Petroleum, in the names of test methods",
            "Standards and authorities"
          ],
          [
            "IR",
            "Insulation resistance, in electrical test records",
            "Ground testing"
          ],
          [
            "ISAGO",
            "IATA Safety Audit for Ground Operations",
            "Standards and authorities"
          ],
          [
            "ISO",
            "International Organization for Standardization",
            "Standards and authorities"
          ],
          [
            "JIG",
            "Joint Inspection Group",
            "Standards and authorities"
          ],
          [
            "LIRL",
            "Low-intensity runway lighting",
            "Airfield lighting"
          ],
          [
            "LRU",
            "Line replaceable unit",
            "Aircraft systems"
          ],
          [
            "LVP",
            "Low visibility procedures",
            "Airfield infrastructure"
          ],
          [
            "lx",
            "Lux",
            "Units and measures"
          ],
          [
            "mbar",
            "Millibar",
            "Units and measures"
          ],
          [
            "MIL-STD",
            "Military standard, in U.S. defence standardisation",
            "Standards and authorities"
          ],
          [
            "MIRL",
            "Medium-intensity runway lighting",
            "Airfield lighting"
          ],
          [
            "MRO",
            "Maintenance, repair and overhaul",
            "Turnaround and ramp"
          ],
          [
            "NABL",
            "National Accreditation Board for Testing and Calibration Laboratories",
            "Standards and authorities"
          ],
          [
            "NSN",
            "NATO stock number, also National Stock Number in US usage",
            "Aircraft systems"
          ],
          [
            "PAPI",
            "Precision approach path indicator",
            "Airfield lighting"
          ],
          [
            "PBB",
            "Passenger boarding bridge",
            "Turnaround and ramp"
          ],
          [
            "PCA",
            "Pre-conditioned air",
            "Powered GSE"
          ],
          [
            "PMA",
            "Parts Manufacturer Approval",
            "Standards and authorities"
          ],
          [
            "Ps",
            "Static pressure",
            "Units and measures"
          ],
          [
            "pS/m",
            "Picosiemens per metre",
            "Units and measures"
          ],
          [
            "psi",
            "Pounds-force per square inch",
            "Units and measures"
          ],
          [
            "Pt",
            "Total pressure",
            "Units and measures"
          ],
          [
            "Qc",
            "Impact pressure",
            "Units and measures"
          ],
          [
            "RETIL",
            "Rapid exit taxiway indicator lights",
            "Airfield lighting"
          ],
          [
            "RGL",
            "Runway guard lights",
            "Airfield lighting"
          ],
          [
            "RVR",
            "Runway visual range",
            "Airfield infrastructure"
          ],
          [
            "RVSM",
            "Reduced vertical separation minima",
            "Units and measures"
          ],
          [
            "SAF",
            "Sustainable aviation fuel",
            "Aviation fuel"
          ],
          [
            "SAT",
            "Site acceptance test",
            "Ground testing"
          ],
          [
            "SDA",
            "Static dissipator additive",
            "Aviation fuel"
          ],
          [
            "SGHA",
            "Standard Ground Handling Agreement",
            "Standards and authorities"
          ],
          [
            "SRU",
            "Shop replaceable unit",
            "Aircraft systems"
          ],
          [
            "TBT",
            "Thermal balance test",
            "Ground testing"
          ],
          [
            "TDZL",
            "Touchdown zone lights",
            "Airfield lighting"
          ],
          [
            "TPS",
            "Test program set",
            "Ground testing"
          ],
          [
            "TVAC",
            "Thermal vacuum, used in thermal vacuum testing",
            "Ground testing"
          ],
          [
            "UFC",
            "Unified Facilities Criteria",
            "Standards and authorities"
          ],
          [
            "ULD",
            "Unit load device",
            "Aircraft systems"
          ],
          [
            "ULDR",
            "Unit Load Device Regulations",
            "Standards and authorities"
          ],
          [
            "UUT",
            "Unit under test",
            "Ground testing"
          ],
          [
            "WHMA",
            "Wiring Harness Manufacturers Association",
            "Standards and authorities"
          ]
        ]
      }
    ]
  },
  {
    "id": "related-reading",
    "title": "Related Reading",
    "blocks": [
      {
        "kind": "list",
        "items": [
          "[Airfield ground lighting](/resources/airfield-ground-lighting) · [Runway and taxiway signs](/resources/airfield-signs-guide)",
          "[Aircraft ground test equipment](/products/aviation-equipment/ground-test-equipment) · [Aircraft component test benches](/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-component-test-bench)",
          "[Aircraft pitot-static testing and calibration](/resources/aircraft-pitot-static-testing) · [Thermal vacuum testing](/resources/thermal-vacuum-testing)",
          "[Aviation fuel ground support equipment](/products/aviation-equipment/ground-supply-equipment/fuel-consumption-trolley/aviation-fuel-ground-support-equipment) · [Aircraft wire harnesses and cable assemblies](/products/aviation-equipment/ground-support-equipment/aircraft-looms-cables-harnesses)"
        ]
      }
    ]
  },
  {
    "id": "sources-and-further-reference",
    "title": "Sources and Further Reference",
    "blocks": [
      {
        "kind": "list",
        "items": [
          "Ground support and handling — IATA Airport Handling Manual, IATA Ground Operations Manual, IATA Safety Audit for Ground Operations programme materials, IATA Unit Load Device Regulations, ISO 10254 and ICAO Doc 10121, Manual on Ground Handling.",
          "Airfield lighting, signs and aerodromes — ICAO Annex 14, Volume I, and ICAO Doc 9157, Part 4, Visual Aids. See the applicable parts of IEC 61820, FAA AC 150/5340-30, FAA AC 150/5345-44, FAA AC 150/5345-46 and the applicable DGCA Civil Aviation Requirements.",
          "Aircraft systems, testing and calibration — FAA Aviation Maintenance Technician Handbook — Airframe, ISO/IEC 17025, the JCGM International Vocabulary of Metrology, NABL 100B and ECSS-E-ST-10-03, Testing.",
          "Aviation fuel — ASTM D1655 and the applicable ASTM test methods, including ASTM D2276, D2624 and D4176. See also DEF STAN 91-091, EI/JIG 1530, JIG AFQRJOS, ATA Specification 103 and IS 1571.",
          "Harnesses and aerospace quality — IPC/WHMA-A-620, AS9100, MIL-DTL-38999 and the Indian Military Technical Airworthiness Requirements."
        ]
      }
    ]
  }
];

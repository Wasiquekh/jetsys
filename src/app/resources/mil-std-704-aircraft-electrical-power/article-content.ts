import type { ArticleSection } from "../ResourceReference";

export const title = "MIL-STD-704 Explained for Aircraft Electrical Power";
export const metaTitle = "MIL-STD-704: Aircraft Electric Power Characteristics | Jetsys Defence";
export const metaDescription = "MIL-STD-704 explained: what the standard covers, how the revisions differ, which one applies to your platform, the seven power groups, and what it requires of ground power.";

export const introduction = [
  "MIL-STD-704 is the United States Department of Defense interface standard defining the electric power characteristics supplied to equipment on military aircraft — voltage, frequency, waveform, and the limits power stays within under normal, abnormal and emergency conditions. It is an interface standard in the literal sense: it sits between the aircraft's electrical system and whatever is connected to it, and it binds both sides.",
  "Equipment designers need it to know what their box must tolerate. Test engineers need it to know what has to be demonstrated. And anyone supplying ground power needs it to know what the aircraft will accept at its external power connector, because the standard governs that supply too.",
  "This page covers what the standard specifies, how the revisions differ, which one applies to a given platform, and how compliance is actually demonstrated."
];

export const sections: ArticleSection[] = [
  {
    "id": "what-mil-std-704-is",
    "title": "What MIL-STD-704 Is",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The full designation is Department of Defense Interface Standard: Aircraft Electric Power Characteristics. It is a United States military standard rather than an international one — a distinction that matters, and one Section 14 returns to, because the standard is cited well beyond the US."
      },
      {
        "kind": "paragraph",
        "text": "What it establishes is the requirements and characteristics of the electric power provided at the input terminals of electric utilization equipment. That term is the standard's own, and it is worth fixing on first meeting: utilization equipment is anything drawing power from the aircraft's electrical system. Readers encounter it constantly in the handbooks and in test reports, and it marks the boundary the whole standard is built around."
      },
      {
        "kind": "paragraph",
        "text": "The characteristics covered are voltage, frequency, phase, power factor, ripple, maximum current and electrical noise, together with the abnormal conditions equipment must withstand, including overvoltage and undervoltage — for both AC and DC systems."
      },
      {
        "kind": "paragraph",
        "text": "It binds both sides of that interface. The aircraft's electrical system must supply power within the defined envelope, and equipment connected to it must function across that envelope. Its stated purpose is compatibility between the aircraft electric system, external power and airborne utilization equipment — and the explicit inclusion of external power is the part most readers miss."
      },
      {
        "kind": "paragraph",
        "text": "The standard was first issued on 6 October 1959, superseding an earlier engineering specification, and has been revised repeatedly since."
      }
    ]
  },
  {
    "id": "what-the-standard-does-not-do-characteristics-not-tests",
    "title": "What the Standard Does Not Do: Characteristics, Not Tests",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 defines power characteristics. It does not define test procedures."
      },
      {
        "kind": "paragraph",
        "text": "That single sentence resolves the most common misunderstanding about the standard. People routinely say MIL-STD-704 testing, and what they mean is testing against the procedures in MIL-HDBK-704, a separate handbook series published in eight parts. The limits live in the standard; the methods, setups and pass criteria live in the handbooks."
      },
      {
        "kind": "paragraph",
        "text": "The confusion is understandable. A document that sets limits equipment must operate within naturally implies testing, and in practice the two are always used together. But the distinction has a practical consequence: a requirement reading shall comply with MIL-STD-704F specifies an envelope, not a test programme. The test programme has to be derived from it — which means selecting the power groups and operating conditions that actually apply, as Sections 5 and 6 set out, and then picking up the corresponding handbook part."
      },
      {
        "kind": "paragraph",
        "text": "There is a second boundary worth stating in the same breath, because it causes almost as much confusion: MIL-STD-704 does not cover electromagnetic interference. That belongs to MIL-STD-461. The two standards are routinely conflated in requirement documents, and Section 13 separates them properly."
      }
    ]
  },
  {
    "id": "scope-and-boundaries",
    "title": "Scope and Boundaries",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The standard applies at the interface between the aircraft electric power system and the utilization equipment — that is, at the equipment's input terminals, not at the generator. Where a measurement is taken is part of the requirement, not a detail of how it is checked."
      },
      {
        "kind": "paragraph",
        "text": "The point of regulation. Generated power characteristics are specified as measured at the point of regulation, which is where the aircraft's electrical system controls its output. The difference between the characteristics at the point of regulation and those at the equipment's terminals is what the allowable voltage drop along the distribution accounts for. Readers who miss this distinction misread the limits tables, and it is the single most common reason two published sources appear to disagree about the same figure."
      },
      {
        "kind": "paragraph",
        "text": "The scope boundary. MIL-STD-704F with Change 1 defines aircraft power characteristics but excludes electromagnetic interference and voltage spikes. The applicable revision and aircraft requirements determine how power quality and electromagnetic compatibility are verified."
      },
      {
        "kind": "paragraph",
        "text": "What that boundary means in practice. Revision F defines conducted switching spikes — brief voltage excursions not exceeding 50 microseconds — as a normal characteristic of aircraft electrical power. That definition does not establish spike compatibility requirements within MIL-STD-704. Section 4.2.1 refers voltage-spike compatibility to the applicable aircraft requirements."
      },
      {
        "kind": "paragraph",
        "text": "What is excluded. Revision F with Change 1 explicitly excludes electromagnetic interference and voltage spikes. Spike compatibility is specified by the applicable aircraft requirements. Related electromagnetic compatibility, lightning and electromagnetic pulse requirements are established separately for the programme."
      },
      {
        "kind": "heading",
        "title": "Where the boundary matters"
      },
      {
        "kind": "paragraph",
        "text": "The practical confusion runs in both directions: an engineer treating a voltage spike as a MIL-STD-704 limit, or dismissing a genuine power quality excursion as an EMC matter. Check the scope and requirements in the applicable revision, the selected test method, and the aircraft's EMI and spike requirements. Duration and frequency alone do not establish which standard applies."
      }
    ]
  },
  {
    "id": "revision-history-and-which-revision-applies",
    "title": "Revision History and Which Revision Applies",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Start with the point that matters most, because it is counter-intuitive and it changes every number further down this page: a newer revision of MIL-STD-704 does not supersede an older one in practice."
      },
      {
        "kind": "paragraph",
        "text": "Military aircraft remain in service for decades, and an aircraft's electrical power system was designed to whichever revision was current at the time. Equipment going onto that aircraft is qualified against that revision. The current revision says as much itself: although it supersedes all previous editions formally, it records that previous editions cited in contracts for legacy aircraft electrical systems remain in effect for the procurement of utilization equipment, and that copies should be retained because the government no longer stocks them."
      },
      {
        "kind": "paragraph",
        "text": "So the first question on any MIL-STD-704 programme is not which revision is newest. It is which revision the platform was designed to."
      },
      {
        "kind": "heading",
        "title": "How the standard has changed"
      },
      {
        "kind": "table",
        "label": "How the standard has changed",
        "headers": [
          "Revision",
          "Date",
          "Principal change",
          "Power systems covered"
        ],
        "rows": [
          [
            "Original",
            "6 October 1959",
            "First issue, superseding the earlier engineering specification for aircraft electric power",
            "28 V DC, and 115/200 V AC at 400 Hz from a three-phase, four-wire wye source"
          ],
          [
            "A",
            "9 August 1966",
            "Restructured, with lettered categories used for DC limits. Three change notices followed on 7 February 1968, 5 May 1970 and 11 April 1973",
            "Three-phase and single-phase 115 V 400 Hz AC, and 28 V DC"
          ],
          [
            "B",
            "17 November 1975",
            "Added 270 V DC as an alternative standard system, and 230/400 V AC three-phase at 400 Hz as a further alternative",
            "As revision A, plus the two alternatives"
          ],
          [
            "C",
            "30 December 1977",
            "Revision details to be confirmed against the document",
            "As revision B"
          ],
          [
            "D",
            "30 September 1980",
            "Notice 1 followed on 31 March 1988. Revision details to be confirmed against the document",
            "As revision C"
          ],
          [
            "E",
            "1 May 1991",
            "Reissued as a Department of Defense interface standard, the title changing to Aircraft Electric Power Characteristics",
            "As revision D"
          ],
          [
            "F",
            "12 March 2004",
            "Current technical revision, with Change 1 dated 5 December 2016 and Notice 4 validation dated 24 June 2026. Seven power groups, adding variable-frequency and 60 Hz AC",
            "SAC, TAC, SVF, TVF, SXF, LDC and HDC"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "The two gaps in the third column are deliberate. Revision dates throughout this table are confirmed; the substantive content of the changes at revisions C and D could not be, and a plausible sentence is worse than an acknowledged gap on a page like this one."
      },
      {
        "kind": "heading",
        "title": "Working out which revision applies"
      },
      {
        "kind": "list",
        "items": [
          "The platform's specification or interface control document states it. That is the authoritative answer, and it is usually quicker to find than to reason about.",
          "A requirement citing MIL-STD-704 with no revision letter is an open question, not an invitation to assume the latest. Resolve it with the customer before any test planning, because the answer can change the limits the equipment must meet.",
          "Equipment intended for several platforms may have to meet more than one revision. The limits differ, and the emergency ranges for the low-voltage DC system are the clearest example of where they differ enough to matter.",
          "A compliance claim that does not state a revision tells you nothing. Section 10 returns to this."
        ]
      },
      {
        "kind": "heading",
        "title": "Change notices"
      },
      {
        "kind": "paragraph",
        "text": "Change notices can correct errors and update requirements between revisions, so the revision letter alone is not a complete identifier. Validation notices record that a document has been reviewed and remains valid for use. They do not introduce a new technical revision. Revision F with Change 1 is not identical to revision F as originally issued, and a procedure or a compliance claim should state both the revision and the applicable change."
      }
    ]
  },
  {
    "id": "the-power-systems-and-power-groups",
    "title": "The Power Systems and Power Groups",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The current revision specifies seven aircraft electric power systems. Equipment is not tested against the standard as a whole — it is tested against the power group or groups it will actually be connected to. Identifying the right power group is therefore the first step in planning any compliance programme, and it is what determines which part of the handbook series governs the testing."
      },
      {
        "kind": "heading",
        "title": "The seven power groups"
      },
      {
        "kind": "table",
        "label": "The seven power groups",
        "caption": "MIL-STD-704 power groups",
        "headers": [
          "Code",
          "Description",
          "Nominal voltage",
          "Frequency",
          "Phase"
        ],
        "rows": [
          [
            "SAC",
            "Single-phase, constant frequency AC",
            "115 V rms line-to-neutral",
            "400 Hz",
            "Single"
          ],
          [
            "TAC",
            "Three-phase, constant frequency AC",
            "115/200 V",
            "400 Hz",
            "Three"
          ],
          [
            "SVF",
            "Single-phase, variable frequency AC",
            "115 V rms line-to-neutral",
            "360 to 800 Hz",
            "Single"
          ],
          [
            "TVF",
            "Three-phase, variable frequency AC",
            "115/200 V",
            "360 to 800 Hz",
            "Three"
          ],
          [
            "SXF",
            "Single-phase AC at 60 Hz",
            "115 V rms line-to-neutral",
            "60 Hz",
            "Single"
          ],
          [
            "LDC",
            "Low-voltage DC",
            "28 V",
            "—",
            "—"
          ],
          [
            "HDC",
            "High-voltage DC",
            "270 V",
            "—",
            "—"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "The three-letter codes deserve prominence rather than a footnote. They are how the standard, the handbooks and every commercial test system refer to these systems, and an engineer who meets TVF in a requirement document and cannot decode it is stuck at the first line."
      },
      {
        "kind": "heading",
        "title": "Notes that matter"
      },
      {
        "kind": "list",
        "items": [
          "Variable frequency is a revision F addition. Earlier revisions covered fixed frequency only. The change follows directly from more-electric-aircraft architectures, where generators are driven at engine speed rather than through a constant-speed drive, so output frequency varies with engine running conditions.",
          "The 60 Hz group exists to support commercial off-the-shelf equipment, not as a general aircraft power system. Readers meeting SXF without that context consistently assume it is more significant than it is.",
          "Single-phase AC is used on a line-to-neutral basis only.",
          "Power is not to be half-wave rectified. A short clause with real design consequences, and one that catches designers who have specified a rectifier front end without reading the standard carefully.",
          "AC systems are grounded-neutral and wire-connected, single or three phase, supplying a sine wave at the nominal voltage and frequency.",
          "DC systems are two-wire or negative ground return.",
          "230/400 V AC appears as an authorised alternative in some revisions rather than as a standard system in its own right.",
          "270 V DC is increasingly significant on newer platforms as electrical loads grow, because carrying the same power at higher voltage means lower current and therefore lighter cabling. It is the direction of travel rather than a niche case."
        ]
      }
    ]
  },
  {
    "id": "aircraft-electrical-operating-conditions",
    "title": "Aircraft Electrical Operating Conditions",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The standard does not define a single envelope. It defines different limits for the different states an aircraft's electrical system can be in, and equipment has to behave appropriately in each. This section explains the states; the next gives the numbers."
      },
      {
        "kind": "heading",
        "title": "The operating conditions"
      },
      {
        "kind": "list",
        "items": [
          "Normal. The condition the electrical system is in nearly all the time. Equipment must operate and deliver its full specified performance anywhere within the normal range. The terms normal low steady state and normal high steady state — NLSS and NHSS — name the bounds of that range, and they appear throughout the handbooks and in test reports.",
          "Abnormal. A malfunction has occurred in the electrical system and its protective devices have not yet restored normal conditions. Equipment is generally not required to perform fully in this state, but it must not be damaged and it must recover once normal conditions return.",
          "Emergency. Primary generation has been lost and the aircraft is operating on a reduced power source. Limits are wider still, and only equipment essential to safe flight is expected to function.",
          "Electric starting. Engine start draws very heavily on the DC system, and bus voltage falls substantially below the normal range for the duration — indicatively as low as around 12 V on a 28 V system. Equipment must tolerate it without damage.",
          "Power transfer. Switching between power sources produces a momentary interruption. The standard caps the duration of these transfer gaps, indicatively at 50 milliseconds, and equipment must ride through them."
        ]
      },
      {
        "kind": "heading",
        "title": "Why the distinction matters"
      },
      {
        "kind": "paragraph",
        "text": "The critical point, and the one most often lost in a requirement document: operate through and survive are different requirements."
      },
      {
        "kind": "paragraph",
        "text": "Equipment must deliver full performance throughout normal conditions. In abnormal and emergency conditions it may only be required to survive without damage and resume afterwards. Confusing the two produces one of two expensive outcomes — equipment over-designed to perform in states where performance was never required, or a qualification failure because full performance was assumed to be needed only in normal conditions when the specification said otherwise."
      },
      {
        "kind": "paragraph",
        "text": "This is why a compliance claim has to state not just which conditions were tested but what was required in each, a point Section 10 develops."
      },
      {
        "kind": "paragraph",
        "text": "The operating condition definitions above are correct in substance. The standard's own definitions are specific, and a procedure document should take its wording from the standard rather than from this page."
      }
    ]
  },
  {
    "id": "steady-state-voltage-and-frequency-limits",
    "title": "Steady-State Voltage and Frequency Limits",
    "blocks": [
      {
        "kind": "heading",
        "title": "Reading the limits correctly"
      },
      {
        "kind": "paragraph",
        "text": "This comes before any numbers, because without it the numbers mislead."
      },
      {
        "kind": "paragraph",
        "text": "Limits in MIL-STD-704 are specified at two different places: at the point of regulation, and at the utilization equipment's input terminals. The difference between the two is the allowable voltage drop along the aircraft's distribution."
      },
      {
        "kind": "paragraph",
        "text": "That single fact explains most of the apparent contradictions in published material about this standard. An engineer comparing figures from two sources will frequently find they disagree, and the usual reason is not that one is wrong — it is that one quotes point-of-regulation values and the other quotes equipment-terminal values. A 28 V DC normal steady-state range quoted at the equipment terminals and the same requirement quoted at the point of regulation are two descriptions of one requirement, separated by the permitted drop."
      },
      {
        "kind": "paragraph",
        "text": "The practical consequences are worth stating plainly:"
      },
      {
        "kind": "list",
        "items": [
          "A figure quoted without saying where it is measured is incomplete.",
          "Agreement between two websites is not corroboration, because errors in this area have propagated by copying.",
          "The allowable drop is small in absolute terms, which is what makes cable sizing a compliance matter rather than an installation convenience — Section 11 develops this for ground power."
        ]
      },
      {
        "kind": "heading",
        "title": "The limits themselves"
      },
      {
        "kind": "paragraph",
        "text": "The steady-state limits are set out in the standard as a matrix: for each power group, a voltage range and a frequency range under each operating condition, at each measurement point. The structure to expect is:"
      },
      {
        "kind": "table",
        "label": "The limits themselves",
        "headers": [
          "Column",
          "Contains"
        ],
        "rows": [
          [
            "Power group",
            "SAC, TAC, SVF, TVF, SXF, LDC or HDC"
          ],
          [
            "Operating condition",
            "Normal, abnormal, emergency, starting, transfer"
          ],
          [
            "Measurement point",
            "Point of regulation, or equipment input terminals"
          ],
          [
            "Voltage",
            "Minimum and maximum for that combination"
          ],
          [
            "Frequency",
            "Minimum and maximum, for the AC groups"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "The values themselves are not reproduced on this page. That is a deliberate editorial decision rather than an omission, and the reasoning is worth giving because it is also advice:"
      },
      {
        "kind": "list",
        "items": [
          "The limits differ by revision, and this page covers seven revisions. A figure correct for revision F may be wrong for revision C, and a table presenting them side by side has to be right in every cell to be useful at all.",
          "Published secondary sources on these values contradict each other, for the measurement-point reason above and because values correct for one revision are frequently published under a general heading with no revision stated.",
          "The standard and its handbooks are available at no charge, as Section 15 sets out. There is no good reason to work from a third-hand figure when the document itself is a free download."
        ]
      },
      {
        "kind": "paragraph",
        "text": "What can be said with confidence, and is useful at the planning stage:"
      },
      {
        "kind": "list",
        "items": [
          "The variable-frequency groups cover 360 to 800 Hz, against the fixed 400 Hz of the constant-frequency groups.",
          "DC bus voltage during engine start falls well below the normal range — indicatively to around 12 V on a 28 V system. This is the limit that most often surprises designers arriving from commercial or industrial electronics, where nothing comparable is expected.",
          "Normal and abnormal DC ranges have been comparatively stable across the later revisions, while the emergency ranges are where revisions differ most. That is the concrete reason the revision question in Section 4 matters: equipment qualified to one revision's emergency limits is not automatically compliant with another's.",
          "Three-phase groups carry phase balance and voltage modulation requirements in addition to the steady-state range."
        ]
      },
      {
        "kind": "paragraph",
        "text": "Take every actual value from the revision of the standard your platform was designed to, and record which measurement point it refers to when you write it into a procedure."
      }
    ]
  },
  {
    "id": "transients-spikes-and-power-interrupts",
    "title": "Transients, Spikes and Power Interrupts",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Steady-state limits are the easy part of a compliance programme. Most failures happen on the transient requirements, because they stress parts of a design that steady-state testing never touches."
      },
      {
        "kind": "paragraph",
        "text": "Voltage transients. Excursions outside the steady-state range, defined by both amplitude and duration together. A transient requirement is a curve rather than a single number: a larger excursion is permitted for a shorter time, and the envelope describes the trade. Equipment that survives a brief large excursion may still fail a smaller one sustained for longer."
      },
      {
        "kind": "paragraph",
        "text": "Conducted switching spikes. Revision F defines these as excursions not exceeding 50 microseconds that can occur during normal operation. Voltage spikes are excluded from MIL-STD-704's scope, and compatibility with them is specified by the applicable aircraft requirements."
      },
      {
        "kind": "paragraph",
        "text": "Power interrupts and transfer gaps. Switching between sources produces an interruption, and the standard caps its duration — indicatively 50 milliseconds. Equipment must ride through it, which is why holdup capacitance is a standard feature of aircraft power supply design rather than an optional refinement."
      },
      {
        "kind": "paragraph",
        "text": "Frequency transients, for the AC groups, where frequency as well as voltage departs the steady-state range for a defined period."
      },
      {
        "kind": "paragraph",
        "text": "Phase reversal. Three-phase equipment may encounter a reversed phase sequence from incorrect installation and must not be damaged by it."
      },
      {
        "kind": "paragraph",
        "text": "Ripple. DC systems specify maximum ripple amplitude and distortion factor, limiting the AC content superimposed on the DC supply."
      },
      {
        "kind": "heading",
        "title": "What equipment puts back onto the bus"
      },
      {
        "kind": "paragraph",
        "text": "This is routinely overlooked and deserves its own heading. MIL-STD-704 is not only a specification of what equipment must tolerate — it also constrains what equipment is permitted to do to the aircraft's power quality."
      },
      {
        "kind": "paragraph",
        "text": "The constraints cover inrush current at switch-on, current distortion and harmonic content, ripple current drawn, power factor, and pulsed or cyclic loading. Equipment that draws badly degrades power quality for everything else on the same bus, or forces the aircraft's generation capacity to be sized upward to absorb it."
      },
      {
        "kind": "paragraph",
        "text": "A designer who reads the standard as a tolerance specification only has read half of it — and it is the half that gets discovered during integration rather than during qualification."
      },
      {
        "kind": "paragraph",
        "text": "This page does not reproduce the transient envelope graphs from the standard. They differ by revision and by power group, and a redrawn curve is both a copyright problem and an accuracy risk. Read them in the document for the revision that applies."
      }
    ]
  },
  {
    "id": "mil-hdbk-704-and-compliance-testing",
    "title": "MIL-HDBK-704 and Compliance Testing",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Having established that MIL-STD-704 contains no tests, the obvious next question is where the tests are. They are in MIL-HDBK-704."
      },
      {
        "kind": "heading",
        "title": "What MIL-HDBK-704 is"
      },
      {
        "kind": "paragraph",
        "text": "MIL-HDBK-704 is a Department of Defense handbook series giving test methods and procedures for determining whether airborne utilization equipment complies with the electric power characteristics defined in MIL-STD-704, across its revisions."
      },
      {
        "kind": "paragraph",
        "text": "Its structure is neat, and explaining it makes the whole compliance process legible:"
      },
      {
        "kind": "table",
        "label": "What MIL-HDBK-704 is",
        "headers": [
          "Part",
          "Covers"
        ],
        "rows": [
          [
            "Part 1",
            "General guidance: compliance tests, the power groups, the aircraft electrical operating conditions, and utilization equipment specifications"
          ],
          [
            "Parts 2 to 8",
            "Application of the compliance tests to each individual power group, one part per group"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "Seven power groups, seven application parts, plus one general part. Once an engineer knows which power group their equipment sits in, they know which handbook part governs their test programme — which is why the power group identification in Section 5 is the first real decision rather than an administrative step."
      },
      {
        "kind": "paragraph",
        "text": "The handbooks also give the test methods their identifiers, built from the power group code and a number, so that a test report entry names both the group and the specific test. Steady-state, abnormal and emergency tests occupy distinct number ranges within each group."
      },
      {
        "kind": "heading",
        "title": "How a compliance programme is built"
      },
      {
        "kind": "paragraph",
        "text": "The practical sequence:"
      },
      {
        "kind": "list",
        "items": [
          "Establish the revision the platform's electrical power system was designed to. Not the newest — the applicable one.",
          "Identify the power group or groups the equipment connects to. Equipment drawing from more than one supply has more than one.",
          "Select the handbook part matching each power group.",
          "Determine the operating conditions the equipment must be tested in: normal, abnormal, emergency, starting and transfer.",
          "Establish what is required in each — full performance, or survival without damage. These are different requirements and the distinction has to be settled before testing, not argued afterwards.",
          "Confirm the laboratory can generate the required conditions, including the transients and interrupts, and that its instrumentation is calibrated with traceability.",
          "Test, and document. The report is the deliverable."
        ],
        "ordered": true
      },
      {
        "kind": "heading",
        "title": "What the tests actually look for"
      },
      {
        "kind": "paragraph",
        "text": "In concrete terms rather than as a procedure list: that the equipment operates and holds its specified performance at the normal low and normal high steady-state limits; that it behaves as required at the abnormal and emergency limits; that it rides through transfer interruptions; that single-phase equipment draws only line-to-neutral power; that it does not draw more power than permitted; that it holds power factor within limits; that its inrush and distortion stay inside what the standard allows; and that it does not use half-wave rectification."
      },
      {
        "kind": "paragraph",
        "text": "That last list is the point at which MIL-STD-704 compliance stops being abstract. Most of it is checkable at design review, long before an item reaches a laboratory."
      }
    ]
  },
  {
    "id": "what-a-compliance-claim-has-to-be-backed-by",
    "title": "What a Compliance Claim Has to Be Backed By",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "\"MIL-STD-704 compliant\" on a datasheet, with nothing after it, means almost nothing."
      },
      {
        "kind": "paragraph",
        "text": "The standard spans seven revisions, seven power groups and five operating conditions, with different performance required in each. A claim that specifies none of those has not said what was tested. A meaningful claim states five things:"
      },
      {
        "kind": "table",
        "label": "What a Compliance Claim Has to Be Backed By",
        "headers": [
          "What must be stated",
          "Why it matters"
        ],
        "rows": [
          [
            "Revision",
            "Limits differ between revisions, and the emergency ranges differ most"
          ],
          [
            "Power group or groups",
            "Compliance in one group says nothing about another"
          ],
          [
            "Operating conditions tested",
            "Normal only is a far weaker claim than all five conditions"
          ],
          [
            "Performance required in each",
            "Operated through, or survived without damage — these are not the same"
          ],
          [
            "Test evidence",
            "Who tested it, to what procedure, with what calibrated and traceable instrumentation"
          ]
        ]
      },
      {
        "kind": "heading",
        "title": "A specific trap worth naming"
      },
      {
        "kind": "paragraph",
        "text": "Equipment that works at 400 Hz is not automatically a variable-frequency solution. Operating at a frequency is not the same as being qualified across the frequency envelope the variable-frequency groups require, and the gap between the two is exactly the kind of thing discovered late, during integration, and expensively. If a platform specifies SVF or TVF, a 400 Hz qualification does not answer it."
      },
      {
        "kind": "heading",
        "title": "Questions to ask a supplier"
      },
      {
        "kind": "list",
        "items": [
          "Which revision was the equipment qualified to, and is it the revision the platform requires?",
          "Which power groups were tested?",
          "Were all applicable operating conditions tested, or only normal?",
          "Was the equipment required to operate through each condition, or only to survive it?",
          "Which laboratory performed the testing, and is its instrumentation calibration traceable?",
          "Is a test report available, or only a statement of compliance?"
        ]
      },
      {
        "kind": "paragraph",
        "text": "The last question separates evidence from assertion, and it is the one most worth asking first."
      },
      {
        "kind": "paragraph",
        "text": "Note on this page's own position: everything above is a standard being applied to other suppliers, which means it is the standard this page would be held to in return. No claim appears anywhere on this site that any Jetsys equipment is MIL-STD-704 compliant, because a claim like that is only worth making when all five items in the table above can be produced on request. A reference page that teaches a reader how to evaluate compliance is useful whether or not its publisher sells compliant equipment."
      }
    ]
  },
  {
    "id": "external-power-and-ground-power-equipment",
    "title": "External Power and Ground Power Equipment",
    "blocks": [
      {
        "kind": "heading",
        "title": "The standard applies to external power too"
      },
      {
        "kind": "paragraph",
        "text": "Almost everything written about MIL-STD-704 approaches it from the utilization equipment side: you are building an avionics box, here is what it must tolerate. That is only half of what the standard governs."
      },
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 also sets requirements for external electric power — the supply delivered to the aircraft through its external power connector while it is on the ground. This is not an inference. The standard's own statement of purpose names three things it exists to keep compatible: the aircraft electric system, external power, and airborne utilization equipment."
      },
      {
        "kind": "paragraph",
        "text": "The reasoning behind it is worth spelling out, because it changes how a ground power unit should be specified. The aircraft's avionics do not know and do not care where their power came from. Equipment qualified to tolerate the MIL-STD-704 envelope is entitled to assume power stays inside that envelope — whether it arrives from the aircraft's own generators, from its auxiliary power unit, or from a ground power unit parked on the ramp. A ground supply that wanders outside the envelope is presenting qualified avionics with conditions they were never qualified against, and doing so while the aircraft is on the ground with people working on it."
      },
      {
        "kind": "heading",
        "title": "What this requires of a ground power unit"
      },
      {
        "kind": "paragraph",
        "text": "Output within limits, under varying load. The difficult part is not producing 115 V at 400 Hz on a bench with a steady resistive load. It is holding voltage and frequency inside the limits while aircraft loads switch on and off abruptly — hydraulic pumps, galley equipment, avionics racks powering up. Regulation under step load change is the real measure of a ground power unit, and it is the figure least often quoted."
      },
      {
        "kind": "paragraph",
        "text": "Transient behaviour. Connection, disconnection and load steps all produce transients, and those transients have to stay inside the standard's envelopes just as the aircraft's own supply does."
      },
      {
        "kind": "paragraph",
        "text": "Harmonic content and waveform quality. The standard specifies a sine wave with limits on distortion. A supply at exactly the right nominal voltage with a poor waveform is out of specification, and a power quality analyser will show it where a multimeter will not."
      },
      {
        "kind": "paragraph",
        "text": "Cable voltage drop — and this one deserves emphasis. The allowable drop between the point of regulation and the equipment's input terminals is small in absolute terms. At the currents involved in DC ground power in particular, that is a demanding constraint, and it makes cable cross-section and cable length a compliance matter rather than a convenience. The consequence is worth stating directly: a ground power unit that meets its specification at its own output terminals can still deliver out-of-limit power at the aircraft, through the cable alone. A unit tested on a short bench lead and installed with a long run is a different proposition electrically. This is almost never explained, and it is the most practically useful thing in this section."
      },
      {
        "kind": "paragraph",
        "text": "Both supply types. 28 V DC for battery charging and DC services, and 115/200 V at 400 Hz for AC loads. Equipment serving a mixed fleet may need both, within their respective limits."
      },
      {
        "kind": "heading",
        "title": "Fixed and mobile ground power"
      },
      {
        "kind": "paragraph",
        "text": "The same limits apply whether the supply is a [fixed installation](/resources/fixed-electrical-ground-power-fegp) at a hardstand or pit, or a mobile unit driven to the aircraft — but the engineering problems differ. Fixed installations face long cable runs from a central converter and the voltage drop that implies. Mobile units face the stability of their own prime mover under load step, and the condition of a cable that is dragged across a ramp daily."
      },
      {
        "kind": "heading",
        "title": "Other requirements that apply to ground power"
      },
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 is not the only document a military ground power unit is specified against. NATO standardisation agreements covering aircraft ground power supply are commonly cited alongside it, and military ground power equipment may additionally have to meet emissions, noise and environmental requirements that civil airport ground power does not. Confirm which documents a particular programme cites rather than assuming the standard alone covers it."
      }
    ]
  },
  {
    "id": "specifying-and-evaluating-equipment-against-mil-std-704",
    "title": "Specifying and Evaluating Equipment Against MIL-STD-704",
    "blocks": [
      {
        "kind": "heading",
        "title": "If you are writing a requirement"
      },
      {
        "kind": "list",
        "items": [
          "State the revision. A citation without a revision letter is an ambiguity that will surface later, usually at the point where it is most expensive to resolve.",
          "State the power group or groups. The group determines which handbook part applies and therefore what the test programme is.",
          "State which operating conditions apply, and what is required in each — operate through, or survive without damage. Leaving this unstated is how a supplier and a customer end up with different understandings of the same contract.",
          "State what evidence is required: test report, test laboratory, calibration traceability. Specifying the evidence is cheaper than arguing about it.",
          "Do not cite the standard as a whole when only part of it applies. A requirement citing all of MIL-STD-704 for a 28 V DC device invites either an inflated test programme or a negotiation, and neither is a good use of a schedule."
        ]
      },
      {
        "kind": "heading",
        "title": "If you are evaluating equipment"
      },
      {
        "kind": "paragraph",
        "text": "Start with the five-point test in Section 10, then add the considerations specific to selection:"
      },
      {
        "kind": "list",
        "items": [
          "Whether the equipment was qualified to the revision your platform needs, or merely to some revision",
          "Whether the qualification covers the operating conditions you will actually subject it to",
          "Whether the evidence is a test report or an assertion",
          "For multi-platform equipment, whether it covers every revision in scope",
          "What the equipment puts back onto the bus, not only what it tolerates. This is the point from Section 8 and it is routinely skipped in evaluation, because the datasheet rarely volunteers it"
        ]
      },
      {
        "kind": "heading",
        "title": "Common mistakes"
      },
      {
        "kind": "list",
        "items": [
          "Assuming the latest revision applies",
          "Testing only normal conditions and claiming compliance",
          "Confusing MIL-STD-704 with MIL-STD-461",
          "Treating a 400 Hz capability as variable-frequency qualification",
          "Ignoring cable voltage drop in ground power installations",
          "Citing the standard without a revision letter and discovering the ambiguity at acceptance"
        ]
      }
    ]
  },
  {
    "id": "related-standards-and-how-they-fit-together",
    "title": "Related Standards and How They Fit Together",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 is one document in a family, and most of the confusion around it comes from not knowing where its boundaries sit."
      },
      {
        "kind": "table",
        "label": "Related Standards and How They Fit Together",
        "headers": [
          "Standard",
          "What it covers",
          "Relationship to MIL-STD-704"
        ],
        "rows": [
          [
            "MIL-HDBK-704-1 to -8",
            "Test methods and procedures for demonstrating compliance",
            "The companion handbook series. MIL-STD-704 sets the limits; these say how to test against them"
          ],
          [
            "MIL-STD-461",
            "Electromagnetic interference emissions and susceptibility",
            "Separate and complementary. MIL-STD-704F excludes electromagnetic interference and voltage spikes. The applicable aircraft EMI and spike requirements define that part of the qualification programme"
          ],
          [
            "MIL-STD-1760",
            "Aircraft to store electrical interconnection",
            "Defines the aircraft-to-store interface, whose power connections are specified by reference to MIL-STD-704"
          ],
          [
            "MIL-E-7016",
            "Aircraft electric load and power source capacity analysis",
            "Load analysis, sizing the generation. MIL-STD-704 defines the characteristics that generation must then deliver"
          ],
          [
            "MIL-STD-1399",
            "Shipboard electric power, US Navy",
            "The naval shipboard counterpart: different platform, equivalent role"
          ],
          [
            "RTCA DO-160",
            "Environmental conditions and test procedures for airborne equipment, civil",
            "The civil counterpart, with a power input section that is the closest analogue. Different document, different limits"
          ],
          [
            "MIL-STD-810",
            "Environmental engineering considerations and laboratory tests",
            "Unrelated to electrical power, but frequently bundled with MIL-STD-704 in requirements and worth distinguishing"
          ],
          [
            "NATO ground power agreements",
            "Aircraft ground power supply",
            "Commonly specified alongside MIL-STD-704 for military ground power equipment"
          ]
        ]
      },
      {
        "kind": "heading",
        "title": "The distinction that matters most"
      },
      {
        "kind": "paragraph",
        "text": "MIL-STD-461 deserves its own paragraph, because it is the standard most often confused with this one and the confusion is expensive."
      },
      {
        "kind": "paragraph",
        "text": "Separate them by their stated scope. MIL-STD-704 defines aircraft electric power characteristics, while MIL-STD-461 addresses electromagnetic interference emissions and susceptibility. Revision F of MIL-STD-704 excludes EMI and voltage spikes, with spike compatibility specified by the applicable aircraft requirements. Meeting one standard does not demonstrate compliance with the other. A platform can require both, with the applicable tests and acceptance criteria defined separately."
      },
      {
        "kind": "paragraph",
        "text": "A requirement document that cites one when it means the other is a common and avoidable source of delay."
      }
    ]
  },
  {
    "id": "mil-std-704-in-indian-defence-programmes",
    "title": "MIL-STD-704 in Indian Defence Programmes",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 is a United States Department of Defense standard, but it is routinely cited in procurement and design documentation well outside the United States, including in Indian defence programmes. The reason is straightforward: platforms, subsystems and avionics are sourced internationally, and equipment carries its origin standards with it. Where a platform or a subsystem was designed against MIL-STD-704, the requirement propagates to anything that integrates with it."
      },
      {
        "kind": "paragraph",
        "text": "On how that sits alongside Indian qualification, one principle holds and is worth stating because it is often assumed the other way round: a MIL-STD-704 qualification is evidence within an Indian certification process, not a substitute for one. Indian military airworthiness certification and quality assurance run through their own authorities and their own procedure, and a foreign qualification is something those authorities take account of rather than something that displaces them."
      },
      {
        "kind": "paragraph",
        "text": "This section is deliberately short. How standards are cited and accepted in practice varies by programme and by contract, and it is the kind of detail a defence procurement reader would spot an error in immediately. Anything more specific — which Indian standards are cited in place of MIL-STD-704 where one exists, how a foreign qualification is treated in a particular certification route, or which authority accepts what evidence — should be checked against a tender document, an authority publication, or someone with direct programme experience before it is published. A short accurate section beats a long uncertain one."
      }
    ]
  },
  {
    "id": "obtaining-the-standard-and-the-handbooks",
    "title": "Obtaining the Standard and the Handbooks",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "MIL-STD-704 and the MIL-HDBK-704 parts are publicly available at no charge. There is no reason to work from a third-hand figure."
      },
      {
        "kind": "paragraph",
        "text": "ASSIST, the Department of Defense's official standardisation document repository, is the authoritative source and the one to use when currency matters."
      },
      {
        "kind": "paragraph",
        "text": "EverySpec is a widely used alternative that also carries superseded revisions — which, given Section 4, is often exactly what is needed. The current revision formally supersedes all previous editions, but it records that earlier editions cited in contracts for legacy aircraft electrical systems remain in effect for procurement of utilization equipment, and that copies should be retained because the government no longer stocks them. In other words, the superseded revisions are not historical curiosities; for a legacy platform, one of them is the governing document."
      },
      {
        "kind": "paragraph",
        "text": "Download the revision your platform requires, not simply the newest one, and keep a copy with the project file."
      }
    ]
  },
  {
    "id": "frequently-asked-questions",
    "title": "Frequently Asked Questions",
    "blocks": [
      {
        "kind": "faq",
        "entries": [
          {
            "question": "What is MIL-STD-704?",
            "answer": "MIL-STD-704 is the United States Department of Defense interface standard defining the electric power characteristics at the interface between a military aircraft's power system and the equipment connected to it. It covers voltage, frequency, phase, power factor, ripple, electrical noise and abnormal conditions, for both AC and DC systems, and it applies to external ground power as well as to power generated on board."
          },
          {
            "question": "What is the current revision of MIL-STD-704?",
            "answer": "Revision F, issued 12 March 2004, with Change 1 dated 5 December 2016. DLA's latest validation is Revision F Notice 4, dated 24 June 2026. This validation does not introduce a new technical revision. The qualifier matters more than the answer: a newer revision does not retire the older ones in practice, because platforms are qualified to whichever revision was current when their electrical system was designed, and the standard itself records that earlier editions remain in effect for legacy aircraft contracts."
          },
          {
            "question": "Does MIL-STD-704 include test procedures?",
            "answer": "No. The standard defines power characteristics; the test methods are in MIL-HDBK-704, published in eight parts — one of general guidance and seven applying the tests to each power group. When people say MIL-STD-704 testing, what they mean is testing against the handbook procedures. A requirement to comply with MIL-STD-704 specifies an envelope, not a test programme."
          },
          {
            "question": "Which revision of MIL-STD-704 applies to my equipment?",
            "answer": "Whichever revision the platform's electrical power system was designed to, which is not necessarily the most recent. The platform specification or interface control document is the authority. Equipment intended for several platforms may need to meet more than one revision, and a citation with no revision letter is an ambiguity to resolve with the customer rather than an invitation to assume the latest."
          },
          {
            "question": "What is the difference between MIL-STD-704 and MIL-STD-461?",
            "answer": "MIL-STD-704 defines aircraft electric power characteristics. MIL-STD-461 addresses electromagnetic interference emissions and susceptibility. Revision F of MIL-STD-704 excludes EMI and voltage spikes, and spike compatibility is specified by the applicable aircraft requirements. Check the scope and tests required by the programme. Compliance with one standard does not demonstrate compliance with the other."
          },
          {
            "question": "What voltages does MIL-STD-704 cover?",
            "answer": "Under the current revision: 115 V AC at 400 Hz single and three phase, 115 V AC variable frequency from 360 to 800 Hz, 115 V AC at 60 Hz, 28 V DC and 270 V DC. Earlier revisions covered less — the original addressed only 28 V DC and 115/200 V AC at 400 Hz, and 230/400 V AC appears as an authorised alternative rather than a standard system."
          },
          {
            "question": "What are the power groups in MIL-STD-704?",
            "answer": "Seven: SAC and TAC for single and three-phase 400 Hz AC, SVF and TVF for single and three-phase variable-frequency AC, SXF for 60 Hz AC, LDC for 28 V DC and HDC for 270 V DC. Equipment is tested against the group or groups it connects to, and the group determines which part of MIL-HDBK-704 governs the test programme."
          },
          {
            "question": "Does MIL-STD-704 apply to ground power units?",
            "answer": "Yes. The standard's stated purpose covers external power alongside the aircraft's own system and its utilization equipment, so a ground power unit must deliver within the same envelope — and under varying load, which is the harder requirement. Cable voltage drop counts against the allowance, so a unit meeting specification at its own terminals can still deliver out-of-limit power at the aircraft."
          },
          {
            "question": "What is the difference between normal, abnormal and emergency operation?",
            "answer": "They are three defined states of the aircraft electrical system, each with different limits. Equipment must deliver full performance in normal conditions; in abnormal and emergency conditions it may only be required to survive without damage and recover afterwards. Electric starting and power transfer are two further defined conditions, each with its own requirements."
          },
          {
            "question": "Is MIL-STD-704 the same as DO-160?",
            "answer": "No. DO-160 is the civil counterpart, covering environmental conditions and test procedures for airborne equipment, with a power input section that is the closest analogue to MIL-STD-704. They are different documents with different limits and different test methods, and compliance with one does not demonstrate compliance with the other."
          }
        ]
      }
    ]
  }
];

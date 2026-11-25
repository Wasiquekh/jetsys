import type { ArticleSection } from "../ResourceReference";

export const metaTitle =
  "How Defence Indigenisation Works in India: Process Guide | Jetsys Defence";
export const metaDescription =
  "How defence indigenisation works in India: item selection, the Positive Indigenisation Lists, procurement routes, indigenous content rules, qualification and certification.";
export const title = "How Defence Indigenisation Works";

// The crumb this page contributes to Home > Resources > ... . Declared so that
// the BreadcrumbList in the structured data says exactly what the breadcrumb on
// the page says, rather than the shortened meta title.
export const breadcrumbLabel = "How Defence Indigenisation Works";

export const datePublished = "2026-11-25";
export const dateModified = "2026-11-25";

// The framework described on this page is the one in force as at this date.
// It is stated in the introduction, in section 2, and in the final rows of the
// section 5 and section 16 tables. If draft DAP 2026 is notified, those are the
// places that change together.
export const frameworkAsAt = "24 November 2026";

export const introduction = [
  "Defence indigenisation is the process of replacing an imported defence item with one designed, developed, qualified and produced in India. How defence indigenisation works, in outline: an item is identified, a developer is found, a specification and data pack are assembled, a prototype is made and qualified against the original, an approving authority certifies the result, and series supply begins.",
  "Two different things decide whether a case succeeds. The policy framework decides which items are indigenised and on what commercial terms. The engineering and qualification work decides whether a given item actually can be. Most published accounts of the subject cover only the first, which is why a sanctioned, funded, listed item can still fail.",
  "This page is written for a supplier working out whether to take on an item, an engineer handed a case, and a planner choosing a route. It is not procedural advice on a specific procurement, and it does not substitute for the governing document in force. Where a reader’s real question is procedural, the governing document and the contracting authority decide it.",
  "The framework described here is the framework in force as at 24 November 2026. Draft DAP 2026 is expected to replace DAP 2020 and had not been notified on that date.",
];

// The sixteen numbered sections. Section 17 of the source copy
// ("Engineering, Documentation and Supply Capability") is deliberately not
// published: its capability and approval facts are unconfirmed, and a thin
// capability section is worse than none. These sixteen are what the
// "On this page" navigation lists; the FAQ is rendered after them.
//
// The anchor ids below are set by hand and must not move if a heading is
// reworded. #engineering-work, #qualification-and-certification and
// #documentation-set are the three the Resources hub card links into.
export const sections: ArticleSection[] = [
  {
    id: "what-it-means",
    title: "1. What Defence Indigenisation Means",
    blocks: [
      { kind: "paragraph", text: "Indigenisation is an item-level engineering and qualification process, and it is not the same thing as manufacturing location, import substitution or indigenous design. (Both spellings are in current use; this page follows the s form used in the official document titles — Positive Indigenisation List, Indian Naval Indigenisation Plan, Manual of Indigenisation — rather than the indigenization spelling.) The rest of this page is difficult to follow if those four ideas are treated as one, so they are separated first." },

      { kind: "heading", title: "Indigenisation, import substitution and indigenous design" },
      { kind: "paragraph", text: "These three sit on one spectrum and are routinely used as synonyms. Import substitution replaces a source: the same item, procured in India instead of from abroad, with no requirement that anything about the item change. Indigenisation replaces the item with a domestically designed and produced equivalent, usually against an existing specification, and usually having to demonstrate equivalence to the original. Indigenous design starts from a requirement rather than from an existing part, and produces something that has no original to be measured against." },
      { kind: "paragraph", text: "This page is about the middle band, because that is where most live work sits. An item exists, it is imported, a specification of some kind exists, and the task is to produce an Indian equivalent that an approving authority will accept." },

      { kind: "heading", title: "How indigenisation differs from Make in India" },
      { kind: "paragraph", text: "Make in India is a manufacturing-location policy. Indigenisation is an item-level engineering and qualification process that takes place inside it. The two answer different questions: one asks where an item was made, the other asks whether the item itself — its design, its materials, its processes and the evidence behind them — is Indian." },
      { kind: "paragraph", text: "The practical consequence is the one most often missed. An item can be made in India and still not count as indigenous content, because content is measured against a defined cost base and a defined set of inclusions, not against the address of the factory. That distinction is what section 5 turns on." },

      { kind: "heading", title: "What counts as indigenous" },
      { kind: "paragraph", text: "Indigenous content is a measured, certified percentage rather than a yes or no. An item is not simply indigenous or foreign; a contract carries a figure, calculated on a defined cost base, certified by a named party, and open to verification afterwards." },
      { kind: "paragraph", text: "The thresholds that apply differ by acquisition category and by whether the design is indigenous. Section 5 sets them out with the condition attached to each, which is the part secondary accounts routinely drop. No threshold is quoted here, so that one figure cannot appear twice on the page and drift apart after a policy change." },

      { kind: "heading", title: "Why operators pursue it" },
      { kind: "paragraph", text: "Spares availability and lead time. Ageing fleets consume spares at rates their original support plans did not anticipate, and an imported spare carries an order cycle that does not shorten on request. A qualified domestic source shortens the cycle and puts it inside the operator’s own planning horizon." },
      { kind: "paragraph", text: "Obsolescence. Imported parts outlive the commercial interest of the organisations that made them. When a maker exits a product line, changes a process or withdraws a material, the part becomes unavailable at any price, and indigenisation becomes the only route to continued support." },
      { kind: "paragraph", text: "Foreign exchange and lifecycle cost. Imported spares are paid for in foreign currency across the whole service life of a platform, not once at acquisition. Lifecycle cost, rather than first cost, is usually where the case is made." },
      { kind: "paragraph", text: "Security of supply. A source that can be interrupted is a source that has to be planned around. Holding a qualified domestic alternative removes that dependency from the support chain, which is a capability argument rather than a commercial one." },
    ],
  },
  {
    id: "framework",
    title: "2. The Policy and Institutional Framework",
    blocks: [
      { kind: "paragraph", text: "An indigenisation case changes hands five or six times, so the map of bodies has to come before the process. One procedure sets the commercial rules, two departments run the lists, a portal carries the demand, and a separate set of authorities decides whether the result is acceptable." },

      { kind: "heading", title: "The governing acquisition procedure" },
      { kind: "paragraph", text: "The Defence Acquisition Procedure 2020 is the framework in force for capital acquisition, and it is the document that defines the acquisition categories, the indigenous content rules and the Make routes referred to throughout this page. DAP 2020 replaced the Defence Procurement Procedure 2016. Revenue procurement, which covers maintenance and sustenance, is governed separately by the Defence Procurement Manual 2025." },
      { kind: "paragraph", text: "A draft Defence Acquisition Procedure 2026 was released on 10 and 11 February 2026 with comments invited until 3 March 2026, and it is intended to supersede DAP 2020 once approved. As at 24 November 2026 it is in the final stages of approval and has not been notified, so DAP 2020 continues to govern. A separate procedure for the acquisition of aerospace systems is being developed and is to be added to DAP 2026 later. Every forward-looking statement about DAP 2026 on this page is held in this one place, so that the page becomes a single-paragraph edit on the day it is notified." },

      { kind: "heading", title: "The Positive Indigenisation List" },
      { kind: "paragraph", text: "A Positive Indigenisation List is a dated import embargo on named items. It is not a ban from the date of notification: each item carries its own indicative timeline, after which it may be procured only from Indian industry. The naming confuses almost everyone who meets it — the list is called positive because it affirms what will be sourced domestically, and it operates as a negative import list." },
      { kind: "paragraph", text: "Two streams run in parallel. The Department of Military Affairs notifies lists covering items and systems for the services. The Department of Defence Production notifies lists covering items imported by the defence public sector undertakings. The sixth list, notified on 18 August 2026, carried 405 items — 389 for DPSUs and 16 for the Indian Coast Guard — with an estimated business potential of about ₹3,070 crore and indicative timelines generally falling between December 2026 and December 2029. That took the running total across all six lists to 5,417 items." },

      { kind: "heading", title: "The SRIJAN portal" },
      { kind: "paragraph", text: "SRIJAN is the shop window rather than the embargo. DPSUs and Service Headquarters post items they currently import, and Indian vendors register interest against them. Launched in August 2020, it had carried more than 33,000 items offered for indigenisation up to June 2026, and DPSUs had placed procurement orders on domestic vendors worth about ₹10,000 crore up to March 2026, including in-house production." },
      { kind: "paragraph", text: "An item on the portal and an item on a list are not the same thing, and the two counts differ by an order of magnitude because they measure different things. Conflating them is the single most common error in writing on this subject. Wherever this page gives a count, it states what the count covers and the date it is current to." },

      { kind: "heading", title: "The development and funding routes" },
      { kind: "paragraph", text: "Beyond the lists and the portal, three named routes exist to fund and structure development: the Make procedure in its three sub-categories, the iDEX programme run through the Defence Innovation Organisation, and the Technology Development Fund. They differ in who pays for development, who owns the resulting design and what order commitment comes with it. Section 4 sets out each one and compares them." },

      { kind: "heading", title: "Who does what" },
      {
        kind: "table",
        label: "Bodies involved in an indigenisation case and where the reader meets each one",
        caption: "Table 1 — Who does what",
        headers: ["Body", "Role", "Where the reader meets it"],
        rows: [
          ["Ministry of Defence — Department of Defence", "Issues the acquisition procedure and the acquisition policy framework", "Before the case starts; sets the rules everything else runs under"],
          ["Department of Defence Production", "Notifies the DPSU indigenisation lists; runs the SRIJAN portal; oversees the DPSUs", "Item selection and item posting"],
          ["Department of Military Affairs", "Notifies the indigenisation lists covering items and systems for the services", "Item selection"],
          ["Service Headquarters", "The demanding side: states the requirement, holds the specification, offers items for indigenisation", "Item identification, criticality classification, acceptance"],
          ["Defence public sector undertakings", "Demanding and offering side for items in their own supply chains; also place the orders", "Item posting, development, order and series supply"],
          ["Defence Research and Development Organisation", "Design authority on systems of its own development; transfers technology to production agencies", "Specification and data pack, transfer of technology"],
          ["DGQA", "Quality assurance and inspection authority across the broader range of defence stores", "Prototype inspection, first article, lot acceptance"],
          ["DGAQA", "Quality assurance authority for aeronautical stores", "Prototype inspection, first article, lot acceptance"],
          ["CEMILAC and the Regional Centres for Military Airworthiness", "Military airworthiness certification", "Approval and certification"],
          ["Bureau of Indian Standards", "Indian standards, including those applied to defence materials and products", "Specification, material and process selection"],
          ["Defence Innovation Organisation and iDEX", "Run the innovation and startup route, including challenge-based development", "Finding a developer, funding development"],
        ],
      },
    ],
  },
  {
    id: "the-process",
    title: "3. How Defence Indigenisation Works: The Process End to End",
    blocks: [
      { kind: "paragraph", text: "An indigenisation case runs through ten steps, and it changes hands four times along the way. The second step is the one that governs the rest: the criticality class fixed there decides the depth of qualification, the authority that must approve the result and the documentation the case has to produce. Each step below is set out the same way — what happens, who holds it, what it produces — so the sequence can be read down a single column." },
      { kind: "paragraph", text: "The colour changes down the column are the handovers, and the handovers are where cases stall." },
      { kind: "diagram", name: "indigenisation-process" },

      { kind: "heading", title: "1. Identifying the item" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "An imported item is selected as a candidate. The usual grounds are import dependence, unit cost, order lead time, obsolescence risk and criticality to availability. Selection happens either because a Service Headquarters or a DPSU posts the item on the SRIJAN portal, or because the item is placed on a Positive Indigenisation List with a dated embargo against it." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The demanding side: a Service Headquarters, a DPSU, or the department that notifies the list. A vendor can propose an item, but cannot put one on a list." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A named candidate item with a part number, an indicative quantity, and either a portal posting or a list entry with a timeline against it. Nothing about the item has yet been specified." },

      { kind: "heading", title: "2. Classifying criticality" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "The item is classified by the consequence of its failure — flight safety critical, major, minor or non-critical, in the terms used for the platform concerned. Everything downstream follows from this single decision: how deeply the item must be qualified, which authority has to approve it, how much documentation is required, and therefore what the case costs and how long it runs." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The design authority for the parent system, not the vendor and not the organisation placing the order. The classification cannot be negotiated down." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A criticality class against the item, and with it the qualification depth, approval route and document set that the remaining eight steps will have to satisfy." },

      { kind: "heading", title: "3. Finding a developer" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "Interest is invited and assessed. Depending on the route this takes the form of an expression of interest against a portal posting, a formal Request for Proposal, or a challenge under the innovation route. The assessing side looks for demonstrated engineering capability rather than supply history: whether the organisation can write a specification, run a qualification campaign, control its own sub-tier and produce the evidence file." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The demanding side runs the assessment. Vendor registration and any required industrial licensing sit with the vendor before this point, not after it." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A selected development partner, a route and category under which the work will be done, and a commercial basis for the development phase." },

      { kind: "heading", title: "4. Assembling the specification and data pack" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "The developer is given what the demanding side holds about the item, which is usually less than expected. A part number, a form-fit-function description and sometimes a sample is a common starting position. The gap between that and a manufacturable, qualifiable specification is closed by measurement, analysis and agreement, and the resulting specification is written rather than inherited. Section 6 sets out what is typically missing and how the gap is closed." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The demanding side supplies what exists. Responsibility for turning it into a specification is shared, and the specification is agreed by both sides before design work is committed." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "An agreed technical specification, an acceptance basis, and a documented statement of what equivalence to the original item will mean for this case." },

      { kind: "heading", title: "5. Design and development" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "The item is designed to the agreed specification. Where the data permits and the licence position allows, measurement of an existing article informs the design. Where it does not, the item is designed clean against the specification. Materials, special processes and sub-tier sources are selected here, drawings and process routes are produced, and the choices made at this step are the ones qualification will test." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The developer, working against the agreed specification and the criticality class." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A drawing set, material and process specifications, a bill of materials naming sub-tier sources, and the identified need for any special process approvals." },

      { kind: "heading", title: "6. Prototyping and first article" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "Tooling, jigs, fixtures and gauges are made, and a first article is manufactured through the intended production route rather than a one-off route. First article inspection establishes dimensional and material conformity against the drawing set, and any special processes used must already be approved at an approved facility." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The developer manufactures. The quality assurance authority inspects and witnesses to the extent the criticality class requires." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A first article, a first article inspection report, material and process certificates, and a production route that has been exercised rather than assumed." },

      { kind: "heading", title: "7. Qualification and testing" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "A qualification test plan is agreed before testing starts, and the article is tested against it at a facility whose scope of accreditation covers the tests concerned. Qualification demonstrates equivalence to the approved behaviour of the original item, which is a different thing from compliance with a fresh requirement. Section 7 sets out who has to say yes and what each authority needs to see." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "Shared. The developer runs the campaign and bears its cost; the approving authority agrees the plan, witnesses what it requires and accepts the result." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "An agreed qualification test plan and a qualification test report, together with the test evidence that the approval in the next step will rest on." },

      { kind: "heading", title: "8. Approval and certification" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "The approving authority reviews the design, the qualification evidence and the production arrangements, and issues type approval or its equivalent for the class of item concerned. An approval is specific: it covers a named item, built to a named standard, at a named facility. It does not travel to a modified item, a different facility or a changed process." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The airworthiness authority for airborne items, the quality assurance authority for the broader range, and both where a case passes through each of them." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "An approval or type certificate with a defined scope and validity, and clearance to proceed to production quantities." },

      { kind: "heading", title: "9. Pricing, order and series supply" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "Bulk production clearance follows approval, price is settled, and the first production order is placed. Pricing an indigenised item is not the import price less duty: development has to be amortised, qualification was a cost in its own right, and the order quantity drives the unit price more than the manufacturing route does. Section 14 covers the commercial mechanics." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "The organisation placing the order, negotiating with the developer. Indigenous content is certified and verified at this step." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A priced order, an indigenous content certificate, a configuration baseline, and a repeatable supply arrangement with lot-by-lot acceptance." },

      { kind: "heading", title: "10. Configuration control and lifecycle support" },
      { kind: "heading", level: 4, title: "What happens" },
      { kind: "paragraph", text: "Once the item is in service, every change to it re-enters the approval chain — a material substitution, a process change, a new sub-tier source, a facility move. Approvals need to be kept current. Obsolescence then returns, this time against the indigenised item’s own components and processes, and an indigenised item can need re-indigenising." },
      { kind: "heading", level: 4, title: "Who holds it" },
      { kind: "paragraph", text: "Shared across the demanding side, the developer and the approving authority, and the step where ownership is least often written down at the start." },
      { kind: "heading", level: 4, title: "What it produces" },
      { kind: "paragraph", text: "A controlled configuration, a change approval record, and — when obsolescence bites — a new candidate item, which returns the process to step 1." },
    ],
  },
  {
    id: "routes",
    title: "4. Routes and Options: Which Indigenisation Route Applies",
    blocks: [
      { kind: "paragraph", text: "The same item can travel several different routes, and the route decides who pays for development, who owns the design at the end and whether an order is assured. The process in section 3 does not change; the commercial exposure does, completely. Each route below is described in the same order — who it is for, who funds development, who holds the design, and what order commitment comes with it." },

      { kind: "heading", title: "Positive Indigenisation List items" },
      { kind: "paragraph", text: "Development against a dated embargo. This route suits an organisation that wants demand certainty above all else, because the import route closes on a published timeline and the item has to come from Indian industry afterwards. Development is normally funded by the developer, against a demand that the embargo protects. The design rests with whoever develops it, within the limits of the specification supplied. The order commitment is strong in principle, but it is a commitment to a requirement rather than a contract: the embargo creates the demand, and a separate procurement still awards it." },

      { kind: "heading", title: "SRIJAN-posted items" },
      { kind: "paragraph", text: "Items that DPSUs and Service Headquarters currently import and have published for indigenisation. This route suits an organisation looking for volume of opportunity and willing to carry commercial risk, because the number of items posted is an order of magnitude larger than the number on the lists. Development is funded by the vendor. The design usually rests with the developer. There is no embargo behind a portal posting, so order certainty is weaker and the vendor carries more of the risk — the item may be indigenised and then ordered in quantities that do not repay the work." },

      { kind: "heading", title: "Make-I, Make-II and Make-III" },
      { kind: "paragraph", text: "The Make procedure separates three situations by who funds and who owns." },
      { kind: "paragraph", text: "Make-I is government-funded development. It suits capital-intensive prototype development that industry would not fund alone, and the government meets a defined share of the development cost against milestones. It is the route with the heaviest procedural load." },
      { kind: "paragraph", text: "Make-II is industry-funded development against an assured order. The developer carries the development cost and the government commits to procure on successful prototype development and acceptance. It suits import substitution of items where the requirement is clear and the engineering risk is manageable." },
      { kind: "paragraph", text: "Make-III is indigenous manufacture of an item that is not indigenously designed, typically under transfer of technology from a foreign original. It is import substitution rather than indigenous design, and it exists so that an item made in India under licence has a defined place in the framework." },

      { kind: "heading", title: "iDEX, the Defence Innovation Organisation and the Technology Development Fund" },
      { kind: "paragraph", text: "The innovation and startup routes operate at earlier technology readiness and smaller contract values than the Make procedure. iDEX, run through the Defence Innovation Organisation, works on a challenge basis: a problem is published, applicants propose, and selected applicants are funded to develop a prototype. The Technology Development Fund supports development by Indian industry, including MSMEs and startups, on technologies not currently available domestically." },
      { kind: "paragraph", text: "These routes suit an organisation with a technology rather than a part — something that does not yet have a specification to be built against. Development is part-funded. Design ownership is usually retained by the developer, which is the main commercial attraction. Order commitment is the weakest of any route here, because a prototype that works still has to pass through qualification and a procurement." },

      { kind: "heading", title: "Acquisition categories as an indigenisation route" },
      { kind: "paragraph", text: "An acquisition category does not commission indigenisation directly. It pulls indigenisation through the supply chain, by setting an indigenous content figure that a prime has to reach and leaving the prime to find the sub-tier sources that get them there. Buy (Indian-IDDM), Buy (Indian) and Buy and Make (Indian) under DAP 2020 all work this way, and most sub-tier indigenisation work reaches a small supplier through a prime rather than through a list." },
      { kind: "paragraph", text: "This route suits a supplier with a qualified capability and no direct relationship with the demanding side. Development is funded commercially between prime and sub-tier. Design ownership follows the contract. Order certainty is the highest of any route when it exists at all, because the order is already placed — and the lowest to obtain, because the prime has to want the source. The draft DAP 2026 proposes consolidating Buy (Indian) and Buy and Make (Indian) into a single category; section 2 carries the status." },

      { kind: "heading", title: "Offsets and transfer of technology" },
      { kind: "paragraph", text: "Indigenisation can also arrive as an obligation on a foreign supplier rather than as a domestic initiative. Where a contract carries an offset obligation, or a strategic partnership or licensed production arrangement brings technology with it, work is placed with Indian industry because the contract requires it." },
      { kind: "paragraph", text: "The engineering problem is different in this case, and usually easier in one respect and harder in another. A data pack arrives with the deal, so the specification gap that dominates most cases is smaller. But the design is not the developer’s, the right to modify it is limited, and the arrangement ends when the obligation is discharged — which is why a transfer-of-technology capability does not automatically become a design capability." },

      {
        kind: "table",
        label: "Indigenisation routes compared by funding, design rights and order certainty",
        caption: "Table 2 — Route comparison",
        headers: ["Route", "Who it suits", "Who funds development", "Who holds design rights", "Order certainty", "Typical item type"],
        rows: [
          ["Positive Indigenisation List item", "A supplier wanting protected demand and a published timeline", "The developer", "The developer, within the supplied specification", "Strong in principle; a procurement still awards it", "LRUs, sub-systems, spares, components, raw materials named on a list"],
          ["SRIJAN-posted item", "A supplier wanting breadth of opportunity and able to carry risk", "The developer", "The developer", "Weak; no embargo stands behind a posting", "Imported items in DPSU and Service supply chains"],
          ["Make-I", "Prototype development too capital-intensive for industry alone", "Government share against milestones, with industry contribution", "Settled by the Make provisions and the contract", "Procurement follows successful development", "Systems and major sub-systems"],
          ["Make-II", "Import substitution with a clear requirement and manageable risk", "The developer", "The developer", "Assured order on successful prototype development", "Sub-systems, assemblies, equipment"],
          ["Make-III", "Manufacture in India of a foreign-designed item", "The developer, under the licence terms", "The foreign original", "Tied to the parent programme", "Licensed items, imported spares and assemblies"],
          ["iDEX and Technology Development Fund", "An organisation with a technology rather than a part", "Part-funded through the scheme", "Usually retained by the developer", "Weakest; prototype to procurement is a separate journey", "Early-stage technologies, novel sub-systems, software-led items"],
          ["Acquisition category pull (IDDM, Buy (Indian), Buy and Make (Indian))", "A qualified sub-tier supplier working through a prime", "Commercially, between prime and sub-tier", "Per the prime’s contract", "Highest once won; hardest to obtain", "Any item in a prime’s indigenous content calculation"],
          ["Offsets and transfer of technology", "A supplier with capacity and quality approvals", "The foreign supplier, as part of discharging the obligation", "The foreign original", "Defined by the obligation, and it ends with it", "Build-to-print parts, assemblies, sub-assemblies"],
        ],
      },
    ],
  },
  {
    id: "indigenous-content",
    title: "5. Indigenous Content: How It Is Defined, Calculated and Verified",
    blocks: [
      { kind: "paragraph", text: "Indigenous content is a percentage with a condition attached, and the condition is what published figures usually drop. That is why two accurate sources can appear to disagree about the threshold for the same acquisition category: one is quoting the figure for an indigenously designed product and the other the figure for a product that is not, without either saying so." },

      { kind: "heading", title: "The thresholds by category" },
      { kind: "paragraph", text: "Under DAP 2020, three acquisition categories carry indigenous content obligations that bear directly on indigenisation. In each case the figure is a minimum, it is calculated on cost, and the base it is calculated on is defined by the procedure rather than chosen by the vendor." },
      { kind: "paragraph", text: "The table states the condition in the same cell as the number, and names the base the percentage is taken on. Reading a figure without its condition is the single most common error in secondary accounts of this subject." },
      {
        kind: "table",
        label: "Minimum indigenous content by acquisition category, with the condition attached to each",
        caption: "Table 3 — Indigenous content thresholds under DAP 2020",
        headers: ["Acquisition category", "Minimum indigenous content", "Condition attached", "What the percentage is taken on"],
        rows: [
          ["Buy (Indian-IDDM)", "50%", "Applies only where the product is indigenously designed, developed and manufactured; the design requirement is part of the category, not an alternative to the content figure", "Cost basis of the base contract price"],
          ["Buy (Indian)", "50%", "Where the product is indigenously designed", "Cost basis of the base contract price"],
          ["Buy (Indian)", "60%", "Where the product is not indigenously designed — the higher figure is what the category asks in place of indigenous design", "Cost basis of the base contract price"],
          ["Buy and Make (Indian)", "50%", "Of the Make portion only, not of the whole contract — this is the distinction most often lost when the figure is quoted", "Cost basis of the Make portion of the contract"],
          ["Draft DAP 2026 — proposal, not in force", "Towards 60%", "Proposed increase to the Buy (Indian-IDDM) threshold, with tighter certification and verification requirements. Draft released February 2026; not notified as at 24 November 2026 — see section 2", "As the draft defines it"],
        ],
      },

      { kind: "heading", title: "What counts and what does not" },
      { kind: "paragraph", text: "Indigenous content is calculated on a cost basis against a defined base contract price, and the governing procedure sets out what may and may not be included in the indigenous figure. The broad principle is that value genuinely added in India counts and value imported does not, with the detail turning on how imported inputs, bought-out items, services and taxes are treated." },
      { kind: "paragraph", text: "That detail is not reproduced here, deliberately. The calculation rules belong to the procedure in force, they change between versions of it, and a contract is governed by the document named in that contract. For any specific case, the governing document and the contracting authority are the only authority on what counts." },

      { kind: "heading", title: "The sub-tier problem" },
      { kind: "paragraph", text: "This is the part that explains why indigenous content figures and industrial reality can diverge. Content is measured at the level the contract defines — typically at the prime’s contract — and a prime can reach its threshold while significant parts of its own supply chain remain imported." },
      { kind: "paragraph", text: "The mechanism is arithmetic rather than evasion. Assembly, integration, testing, Indian-made structure and Indian labour all add value in India and count towards the figure. An imported forging, a foreign-made bearing or an imported semiconductor inside an otherwise Indian sub-assembly reduces the figure but does not disqualify it. Reach the threshold on the value that does count, and an item can be compliant, correctly certified and still dependent on an imported input that no one in the chain has a second source for." },
      { kind: "paragraph", text: "This is why the strategic value of indigenisation sits further down the supply chain than the headline figures suggest, and why raw materials, semi-finished stock and special processes appear on indigenisation lists alongside complete sub-systems." },

      { kind: "heading", title: "Certification and verification" },
      { kind: "paragraph", text: "Indigenous content is certified rather than declared. The certificate rests on the vendor’s own cost records, the bill of materials and the sub-tier invoices behind it, and it is given by a party the procedure names — which is why the quality of a vendor’s own costing and sub-tier records decides whether a certificate can be given at all." },
      { kind: "paragraph", text: "Verification is tightening rather than loosening. The draft DAP 2026 proposes stricter certification and audit of indigenous content, which in practice means that a figure a vendor cannot evidence from its own records is a figure it should not certify. A supplier that intends to work in this space should assume that the records behind the number will be examined." },
    ],
  },
  {
    id: "engineering-work",
    title: "6. The Engineering Work Behind an Indigenisation Case",
    blocks: [
      { kind: "paragraph", text: "Everything above explains which items get indigenised. This section explains why a sanctioned, funded, listed item still fails. The policy framework can put an item on a list, find a developer and pay for the work, and the case will still stop at a material it cannot specify, a process it cannot get approved, or a data pack that was never going to be enough." },

      { kind: "heading", title: "Reverse engineering and where it stops" },
      { kind: "paragraph", text: "Most indigenisation begins with an existing article and a question the drawings do not answer. Measurement is where that starts, and understanding its limits is what separates a costed case from an open-ended one." },
      { kind: "heading", level: 4, title: "What measurement recovers" },
      { kind: "paragraph", text: "Geometry, to whatever accuracy the metrology supports. Fits and clearances between mating parts. Tolerances inferred from function, from witness marks and from measuring several articles rather than one. Surface finish and surface condition. Assembly order and the sequence a thing must be built in. Mass, balance and, for many items, the broad material family." },
      { kind: "heading", level: 4, title: "What measurement cannot recover" },
      { kind: "paragraph", text: "Heat treatment history — two parts of identical composition and identical dimensions behave differently if one was treated differently, and the difference shows up in fatigue life rather than in inspection. The process route, which determines grain structure, residual stress and where a part will eventually crack. The reason a tolerance is where it is, which means there is no way to know which tolerances are critical and which are convenient. The design margin, and therefore how much of the original’s capability was deliberate reserve." },
      { kind: "paragraph", text: "A part copied dimensionally is not a qualified part. That sentence is the whole of this section, and cases that fail usually failed because it was treated as a formality." },

      { kind: "heading", title: "Material identification and the equivalent grade problem" },
      { kind: "paragraph", text: "Composition analysis identifies what a material is made of. It does not identify the specification it was procured to, and that is the thing the qualification will care about. A material specification carries far more than chemistry: mechanical property minima, heat treatment condition, test and inspection requirements, directionality, grain flow, cleanliness, and the acceptance criteria an approving authority will measure the indigenous article against." },
      { kind: "paragraph", text: "An equivalent grade is equivalent on the attributes someone chose to compare. Two grades can match on composition and differ on the property that matters for the application — fracture toughness, stress corrosion resistance, high-temperature behaviour, fatigue performance. Where an equivalence is claimed, it has to be claimed against named properties and demonstrated against them, not asserted on the basis of a cross-reference table. This is the most common point at which an otherwise sound case has to go back and re-test." },

      { kind: "heading", title: "Special processes" },
      { kind: "paragraph", text: "Heat treatment, plating, chemical conversion and other surface treatment, welding and brazing, shot peening, non-destructive testing. These are approved as processes at approved facilities. They are not bought as operations from whoever can perform them, and an approval attaches to a named process at a named facility rather than to the company that holds it." },
      { kind: "paragraph", text: "This is where indigenisation schedules most often slip, and the reason is structural rather than careless. A part can be manufactured before its special processes are approved. Nothing stops the metal being cut. What cannot happen is the part being used — so the case arrives at qualification with hardware in hand and an approval still in progress, and the programme waits on an approval that was never on anyone’s critical path. Disciplines where the acceptance basis is a workmanship standard rather than a dimension behave the same way, as the [workmanship standards for aerospace wiring](/resources/aerospace-wire-harness-manufacturing) show." },
      { kind: "paragraph", text: "The practical consequence is that special process approval should be scheduled from the start of a case, in parallel with design, and its availability should be confirmed before a route that depends on it is chosen." },

      { kind: "heading", title: "The data pack" },
      { kind: "paragraph", text: "The gap between what a developer is given and what a developer needs is the single largest source of cost overrun in indigenisation work." },
      { kind: "heading", level: 4, title: "What is usually supplied" },
      { kind: "paragraph", text: "A part number. A form-fit-function description, often brief. An illustrated parts catalogue reference. Sometimes a sample article, and sometimes a used one. Occasionally an outline drawing with controlling dimensions. For an item under transfer of technology, considerably more; for an imported spare whose original maker has no interest in supporting its replacement, considerably less." },
      { kind: "heading", level: 4, title: "What is usually missing" },
      { kind: "paragraph", text: "The material specification, as distinct from the material. The process route. Acceptance criteria — what has to be true for the item to be accepted, stated in measurable terms. The qualification history of the original item, which would have shown what it was tested to and what it was tested against. Any record of modifications made to the original over its service life." },
      { kind: "heading", level: 4, title: "How the gap is closed" },
      { kind: "paragraph", text: "By measurement across several articles rather than one. By material and metallurgical analysis, including section examination where a sample can be sacrificed. By teardown of a used article, which shows wear patterns and failure modes that a new one does not. And above all by writing a specification and having it agreed, rather than assuming an inherited one. An indigenisation case that does not produce an agreed specification has not produced anything that can be qualified." },

      { kind: "heading", title: "Tooling, fixtures and test equipment" },
      { kind: "paragraph", text: "The item is not the only thing that has to be developed. Jigs, fixtures, gauges, inspection aids and the test rig needed to qualify the item are all development work in their own right, and for a hydraulic, pneumatic or electrical item the test rig frequently costs more than the first article." },
      { kind: "paragraph", text: "This is rarely in the original estimate, for an understandable reason: the estimate is built from the part, and the part is the visible deliverable. A rig that can apply the right pressures, temperatures, flows or electrical conditions, instrumented to an accuracy the approving authority will accept and calibrated traceably, is a piece of ground test equipment that has to be specified, built and proven before the item it exists to qualify can be tested." },

      { kind: "heading", title: "Form, fit and function equivalence" },
      { kind: "paragraph", text: "Equivalence is demonstrated, not asserted. Form means the indigenised item occupies the same envelope and interfaces identically. Fit means it installs and removes using the same provisions, with the same clearances, into the same adjacent structure. Function means it behaves the same way across the full range of conditions the original was approved for — not merely at the nominal operating point, which is where an inadequate test programme usually stops." },
      { kind: "paragraph", text: "The counter-intuitive consequence is that an item which is better than the original can still fail qualification. A component with a higher rating, a tighter tolerance or a longer life than the original may change the behaviour of the system around it, and the approval it is seeking is an approval of equivalence to a known article. Improvement is a modification, with its own approval route, and treating it as a free upgrade is a reliable way to extend a case by a full qualification cycle." },
    ],
  },
  {
    id: "qualification-and-certification",
    title: "7. Qualification, Testing and Certification",
    blocks: [
      { kind: "paragraph", text: "The reader’s question here is short and rarely answered directly: who has to say yes, and what do they need to see. Two separate authorities are usually involved — one for airworthiness and one for quality assurance — and the depth at which each engages was decided back at step 2." },

      { kind: "heading", title: "Criticality decides the depth" },
      { kind: "paragraph", text: "The criticality class set when the item was classified governs everything in this section. A flight safety critical item and a non-critical item follow the same ten steps, at entirely different depths, through different approval chains and with different evidence requirements." },
      { kind: "paragraph", text: "The classification is made by the design authority for the parent system. It is not made by the vendor, it is not made by the organisation placing the order, and it cannot be negotiated down by agreement between them. A vendor who assumes a lower class than the one actually applied will under-scope the test programme and discover it after the prototype exists, which is the failure mode section 12 describes." },

      { kind: "heading", title: "The qualification test plan" },
      { kind: "paragraph", text: "Qualification begins with a document, not with a test. The qualification test plan sets out what will be tested, to what standard, at which facility, with what instrumentation and acceptance criteria, and what level of witnessing is required. It is agreed with the approving authority before testing starts, because a test run outside an agreed plan generally cannot be retrofitted into the evidence file." },
      { kind: "paragraph", text: "The principle underneath it is the one most often misunderstood. Qualification of an indigenised item demonstrates equivalence to the approved behaviour of the original item. It is not compliance with a fresh requirement written from scratch, and it is not a general demonstration that the item is fit for purpose. The original’s approved performance is the benchmark, which is why section 6 insists that an agreed statement of what equivalence means for the case is part of the specification." },

      { kind: "heading", title: "Airworthiness certification" },
      { kind: "paragraph", text: "For air systems and airborne stores, airworthiness certification is the responsibility of the Centre for Military Airworthiness and Certification, which works through its Regional Centres for Military Airworthiness. CEMILAC is the design approval authority; the regional centres are where most of a case’s day-to-day engagement happens." },
      { kind: "paragraph", text: "The governing procedure is the Indian Military Airworthiness Procedure 2023, IMAP-2023, issued in August 2023. It carries provisions covering the indigenous substitution of airborne stores specifically, which is the part that bears directly on indigenisation work. IMAP-2023 superseded DDPMAS Version 1.0 of February 2021, which had in turn superseded DDPMAS-2002. Any source still naming a DDPMAS document as the current procedure is out of date." },
      { kind: "paragraph", text: "An approval describes a specified item, built to a specified standard, from a specified source. It does not travel. A modification to the item, a change of manufacturing facility, a change of special process source or a change of sub-tier supplier takes the case back into the approval chain, and section 12 treats the loss of that discipline as a failure mode in its own right." },

      { kind: "heading", title: "Quality assurance" },
      { kind: "paragraph", text: "Quality assurance is a separate function from airworthiness certification, carried out by separate authorities, and a single case passes through both. The Directorate General of Aeronautical Quality Assurance is the quality assurance authority for aeronautical stores, covering inspection, clearance and acceptance. The Directorate General of Quality Assurance performs the equivalent function across the broader range of defence stores." },
      { kind: "paragraph", text: "The division is worth stating plainly because vendors routinely assume that one approval implies the other. Airworthiness certification addresses whether the design is acceptable. Quality assurance addresses whether what has been built conforms to that design and may be accepted. Both are required, they are obtained from different bodies, and they are not interchangeable." },

      { kind: "heading", title: "Test facilities and accreditation" },
      { kind: "paragraph", text: "Qualification testing happens either at the developer’s own facility, at an independent accredited laboratory, or at a government or defence test establishment, and which of these is acceptable depends on the test and on the approving authority." },
      { kind: "paragraph", text: "Accreditation decides whether a result will be accepted. The general marker for a testing or calibration laboratory in India is NABL accreditation to ISO/IEC 17025, which means the laboratory has been assessed as competent for named tests within a defined scope. The scope is the part that is overlooked. A laboratory accredited for one test is not thereby accredited for an adjacent one, and a report issued outside an accredited scope may not be accepted as qualification evidence, however competently the test was performed. The same principle applies to the measurement behind a result, which is why [calibration and accredited measurement](/resources/air-data-test-set-calibration) matters as much as the test itself, and it applies to [environmental qualification testing](/resources/thermal-vacuum-testing) where the conditions have to be both achieved and demonstrably measured." },

      { kind: "heading", title: "First article inspection and acceptance" },
      { kind: "paragraph", text: "A qualified design still has to become an accepted delivery. First article inspection establishes that the first production article conforms dimensionally and in material to the approved drawing set, through the intended production route. IMAP-2023 enabled industry-standard first article inspection requirements for vendors and sub-contractors, which has the practical effect of aligning defence first article inspection with the format aerospace suppliers already use." },
      { kind: "paragraph", text: "After the first article, each lot carries its own acceptance documentation: inspection records, material and process certificates, pre-despatch inspection, and whatever conformity statement the contract specifies. Section 8 sets out the full documentation set and who accepts each part of it." },

      {
        kind: "table",
        label: "Approving authorities, what each approves and the step at which it engages",
        caption: "Table 4 — Approving authorities",
        headers: ["Authority", "What it approves", "What it issues", "At which step"],
        rows: [
          ["Design authority for the parent system", "Criticality classification, the specification, and the basis on which equivalence will be judged", "Classification and an agreed specification", "Steps 2 and 4"],
          ["CEMILAC, through the Regional Centres for Military Airworthiness", "Design and airworthiness of air systems and airborne stores", "Design and airworthiness approvals under IMAP-2023", "Steps 7 and 8"],
          ["DGAQA", "Conformity and acceptance of aeronautical stores", "Inspection clearance and acceptance", "Steps 6, 8 and 9"],
          ["DGQA", "Conformity and acceptance across the broader range of defence stores", "Inspection clearance and acceptance", "Steps 6, 8 and 9"],
          ["Accredited test or calibration laboratory", "Nothing — it reports, within its accredited scope", "Test and calibration reports under its NABL scope", "Step 7"],
        ],
      },
    ],
  },
  {
    id: "documentation-set",
    title: "8. The Documentation Set an Indigenisation Case Produces",
    blocks: [
      { kind: "paragraph", text: "At the end of a case what is handed over is not a part. It is a part plus the evidence that it is the part." },

      { kind: "heading", title: "Why the documentation is the deliverable" },
      { kind: "paragraph", text: "A vendor who can manufacture the item but cannot produce the file has not finished the case. The approving authority cannot approve a result it cannot trace, the organisation placing the order cannot accept a lot it cannot verify, and a configuration that is not recorded cannot be controlled in service. The file is also what makes the second order possible: without it, every repeat becomes a fresh argument about what was agreed." },
      { kind: "paragraph", text: "This is the most common point at which an engineering-capable supplier and a qualification-capable supplier separate. Both can make the part. Only one can evidence it." },

      { kind: "heading", title: "The document set" },
      {
        kind: "table",
        label: "The documents an indigenisation case produces, who produces each and who accepts it",
        caption: "Table 5 — The document set",
        headers: ["Document", "Who produces it", "Who accepts it", "What it is for"],
        rows: [
          ["Technical specification", "Developer, agreed with the demanding side", "Design authority", "Defines the item and the basis on which equivalence will be judged"],
          ["Drawing set", "Developer", "Design authority", "The controlled definition of the item as designed"],
          ["Material and process specifications", "Developer", "Design authority and quality assurance authority", "Names what the item is made of and how it is made, including special processes"],
          ["Bill of materials with sub-tier sources", "Developer", "Quality assurance authority; the organisation placing the order", "Identifies every input and where it comes from; the basis of the content calculation"],
          ["Qualification test plan", "Developer, agreed before testing", "Approving authority", "Defines what will be tested, to what, where, and what counts as a pass"],
          ["Qualification test report", "Developer or the test facility", "Approving authority", "The evidence the approval rests on"],
          ["First article inspection report", "Developer", "Quality assurance authority", "Demonstrates the first production article conforms through the intended route"],
          ["Material and process certificates", "Sub-tier sources and process houses", "Quality assurance authority", "Traces each input and each special process to an approved source"],
          ["Approval or type certificate", "Approving authority", "The organisation placing the order", "States what is approved, to what standard, from which source, and until when"],
          ["Indigenous content certificate", "Developer, certified as the procedure requires", "The organisation placing the order", "States the content figure and the base it was calculated on"],
          ["Configuration baseline", "Developer, agreed with the design authority", "Design authority", "Fixes what is being supplied, so that any later change is visible as a change"],
        ],
      },

      { kind: "heading", title: "Traceability and record retention" },
      { kind: "paragraph", text: "Traceability runs in both directions and has to hold for the life of the item. Forward, from a material heat or batch to the parts made from it and the assemblies those parts went into. Backward, from a part in service to the certificates, processes and inspections behind it. For a flight safety critical item this is what makes a fleet-wide response possible when a defect is found in one article, and [lot traceability and material certification](/resources/aerospace-wire-harness-manufacturing#traceability) are where that chain is usually broken or held." },
      { kind: "paragraph", text: "Retention periods are set by the approving authority and by the contract, not by the supplier’s own document policy. They are frequently longer than a commercial records schedule would suggest, because the obligation is tied to the service life of the item rather than to a financial year. A supplier taking on defence work should establish the applicable retention requirement at the start of a case rather than discovering it when records are requested, by which time the question is whether they still exist." },
    ],
  },
  {
    id: "what-gets-indigenised",
    title: "9. What Gets Indigenised: Categories of Items",
    blocks: [
      { kind: "paragraph", text: "Item families differ enormously in how hard they are to indigenise, and the difficulty rarely tracks the price. A machined bracket and an avionics line replaceable unit can carry similar contract values and completely different risk, because what makes a family hard is the evidence it demands rather than the part it produces." },

      { kind: "heading", title: "Mechanical and structural parts" },
      { kind: "paragraph", text: "Brackets, fittings, housings, levers, links, machined and fabricated parts. This is usually where a supplier enters the field, and for good reasons: geometry is measurable, material is identifiable, the production route is visible in the part, and qualification is proportionate to the function." },
      { kind: "paragraph", text: "What makes it harder than it looks is everything that is not geometry — the heat treatment condition, the surface treatment, and whether the part is fatigue-rated. A structural part in a fatigue-critical location is not a simple machining job in any sense that matters." },

      { kind: "heading", title: "Hydraulic, pneumatic and fuel system components" },
      { kind: "paragraph", text: "Valves, actuators, couplings, filters, accumulators, seals and the assemblies they sit in. Harder than mechanical parts, because behaviour under pressure, temperature, flow and contamination has to be demonstrated rather than inferred from the drawing." },
      { kind: "paragraph", text: "The constraint is usually the rig. Demonstrating that a valve cracks at the right pressure, leaks within limits across its temperature range and survives its endurance cycles requires test equipment that frequently does not exist and has to be developed alongside the item. Sealing materials add their own difficulty: elastomer compounds are specified by performance in a fluid at a temperature, and an equivalent compound is a claim that has to be tested." },

      { kind: "heading", title: "Electrical interconnect, harnesses and connectors" },
      { kind: "paragraph", text: "Harnesses, looms, connectors, backshells, terminations, shielding and bonding. This family is governed by workmanship standards as much as by drawings, which changes what qualification means: the acceptance basis is how the article was made and inspected, not only what it measures." },
      { kind: "paragraph", text: "The parts themselves are often straightforward. The approvals behind them — operator certification, process control, tooling calibration, inspection regime — are the real barrier to entry, and they are also what makes the capability durable once it exists." },

      { kind: "heading", title: "Avionics, line replaceable units and electronics" },
      { kind: "paragraph", text: "The hardest family, for four reasons that compound. Component obsolescence runs on a commercial electronics cycle rather than a platform cycle, so a design can become unbuildable before it is qualified. Firmware and software may not be transferable at all, and where they are not, form-fit-function equivalence is unreachable. Qualification runs against environmental and electrical standards rather than dimensions, and that includes behaviour against the [aircraft electrical power characteristics](/resources/mil-std-704-aircraft-electrical-power) the item has to tolerate. And the approval chain is at its deepest, because most airborne electronics carries a high criticality class." },
      { kind: "paragraph", text: "This is the family where the honest answer is most often that indigenous design, rather than indigenisation of an existing unit, is the shorter route." },

      { kind: "heading", title: "Ground support and ground test equipment" },
      { kind: "paragraph", text: "Items that support the aircraft rather than fly on it: tow bars, jacks, trestles, ground power, servicing rigs, and the [ground test equipment](/products/aviation-equipment/ground-test-equipment) used to test and set up systems. The approval path is different and frequently shorter, because an item that does not fly is not subject to airworthiness certification in the same way — though it may still be subject to quality assurance, and anything that interfaces with an aircraft system is specified against that system’s requirements." },
      { kind: "paragraph", text: "There is a point worth making plainly here. The equipment needed to qualify an indigenised item is itself frequently imported. A test set, a calibration standard or a measurement instrument that is not available domestically is a dependency in the indigenisation chain itself, and it is one that the headline item counts do not show." },

      { kind: "heading", title: "Consumables, seals, bearings and fasteners" },
      { kind: "paragraph", text: "High volume, low unit value, and disproportionately specification-sensitive. A fastener is defined by its material, its treatment, its thread form, its head configuration and its strength class, and a dimensionally identical fastener in the wrong condition is a defect that passes visual inspection." },
      { kind: "paragraph", text: "Because unit values are low, these are usually indigenised as a family rather than item by item — a range of sizes in a specification, qualified together, rather than a single part number. That changes the commercial arithmetic: the development cost is shared across the family, and the order quantity that justifies it is the family’s, not the item’s." },

      { kind: "heading", title: "Raw materials and semi-finished stock" },
      { kind: "paragraph", text: "Alloys, forgings, castings, bar, sheet, extrusions, composite prepreg. This is where the sub-tier problem from section 5 becomes concrete. An item can be manufactured in India from imported stock, and the indigenous content arithmetic changes depending on where the line is drawn between the item and its inputs." },
      { kind: "paragraph", text: "It is also the slowest family to indigenise and the one with the largest effect on everything above it. A qualified domestic source for an alloy in a specified condition unlocks every item made from it, which is why raw materials appear on indigenisation lists alongside complete sub-systems despite looking like the least glamorous entry on them." },
    ],
  },
  {
    id: "sectors",
    title: "10. Sectors and Platforms Where Indigenisation Applies",
    blocks: [
      { kind: "paragraph", text: "The ten steps are the same across every sector, but the step that bites hardest is different in each. Across [the sectors served](/industries), the variable is which approval governs and how deep it reaches." },

      { kind: "heading", title: "Fixed wing aircraft" },
      { kind: "paragraph", text: "Airworthiness certification is the dominant constraint and the approval chain is the longest here. Most airborne items carry a criticality class that pulls them into full design approval, and the depth of qualification follows from that rather than from the complexity of the part." },
      { kind: "paragraph", text: "The item types are broad — structural parts, system components, avionics, interconnect, consumables — but they share a characteristic: the evidence requirement is set by where the item sits in the aircraft, not by what it costs. Transport and trainer fleets add a further factor, since long service lives make obsolescence the usual trigger for a case." },

      { kind: "heading", title: "Rotary wing" },
      { kind: "paragraph", text: "Dynamic components and fatigue-critical parts dominate, and qualification depth is the governing constraint. Rotor system components, transmission parts and control linkages operate under cyclic loading, which means fatigue substantiation rather than static strength is the question an approving authority will ask." },
      { kind: "paragraph", text: "Fatigue testing is slow, equipment-intensive and difficult to shorten, so the gap between a part that can be made and a part that can be approved is wider in this sector than almost any other." },

      { kind: "heading", title: "Unmanned systems" },
      { kind: "paragraph", text: "A newer certification environment, a higher tolerance for indigenous design, and shorter approval chains than manned aviation. Because much of the sector is domestically designed in the first place, the work is more often indigenous development than substitution of an imported item." },
      { kind: "paragraph", text: "The practical consequence is that the specification problem described in section 6 is smaller — there is often a design authority to talk to — while the component obsolescence problem is larger, because these platforms draw heavily on commercial electronics." },

      { kind: "heading", title: "Land systems" },
      { kind: "paragraph", text: "Larger assemblies, higher volumes and quality assurance rather than airworthiness as the governing approval. The absence of an airworthiness chain shortens the approval route, and the volumes make the commercial case easier to justify: development amortises over a quantity that repeats." },
      { kind: "paragraph", text: "What replaces airworthiness as the hard part is environmental and durability qualification — shock, vibration, dust, temperature range and the ballistic or blast requirements that apply to protected systems." },

      { kind: "heading", title: "Naval and marine" },
      { kind: "paragraph", text: "Environmental qualification and corrosion dominate. Salt spray, immersion, humidity and galvanic compatibility turn material and surface treatment selection into the central engineering question rather than a detail of it." },
      { kind: "paragraph", text: "The refit cycle changes the obsolescence arithmetic in a way that is specific to this sector. Long intervals between refits mean an item specified at one refit may be obsolete by the next, so indigenisation cases are often planned against a refit window rather than against a shortage. That makes lead time predictable and makes missing the window expensive." },

      { kind: "heading", title: "Airfield infrastructure and ground systems" },
      { kind: "paragraph", text: "Runway and taxiway lighting, ground power, ground support and ground test equipment, and the fixed installations around an operating base. A distinct approval environment, frequently governed by published international standards rather than by platform specifications — [airfield ground lighting](/resources/airfield-ground-lighting) is a clear example, where photometric and electrical performance is defined by standard." },
      { kind: "paragraph", text: "That makes the specification side of a case markedly easier: there is a published requirement to design against rather than an original article to reverse engineer. It makes the qualification side no easier at all. Demonstrating photometric performance, environmental endurance and electrical compatibility against a published standard still requires accredited test capability, and a supplier that reads “standard exists” as “qualification is simple” will find the same rig and accreditation problems as anyone else." },
    ],
  },
  {
    id: "what-it-delivers",
    title: "11. What Indigenisation Delivers",
    blocks: [
      { kind: "paragraph", text: "Every benefit below has a condition attached, and the condition is usually time. These are the benefits of indigenisation as a practice, and they accrue to four different parties on four different timescales." },

      { kind: "heading", title: "For the operator" },
      { kind: "paragraph", text: "The operator gains spares lead time, availability on ageing fleets, freedom from a single foreign source and a lower lifecycle cost. The mechanism is straightforward: a qualified domestic source removes an international order cycle, an export approval and a currency exposure from the support chain, and replaces them with a domestic order." },
      { kind: "paragraph", text: "The condition is that none of this arrives until the item is approved and in series supply, which is a long way after the case starts. An indigenisation programme does not improve availability while it is running. It improves availability afterwards, which is why cases have to be started against the obsolescence that is coming rather than the shortage that has already happened." },

      { kind: "heading", title: "For the design authority or DPSU" },
      { kind: "paragraph", text: "Supply chain depth, a second source, active obsolescence management, and the ability to modify an item without renegotiating with a foreign original. The last of these is the one most often undervalued. A design authority that owns or can access the definition of an item can change it; one that cannot is dependent on the commercial interest of an organisation that may have none." },
      { kind: "paragraph", text: "The condition is that the second source has to be real. A source that is qualified but never ordered from decays — approvals lapse, the people who ran the case move on, and the tooling is reallocated. Second-source capability survives only if it is exercised." },

      { kind: "heading", title: "For the Indian supplier" },
      { kind: "paragraph", text: "Three things, in increasing order of value. A protected demand where the item sits on a list with an embargo date. A qualification credential that transfers to adjacent work, because an approval held for one item demonstrates to the next organisation that the supplier can complete a case. And an engineering capability — specification writing, qualification campaign management, sub-tier control, evidence discipline — that is difficult to acquire any other way and that distinguishes a supplier from a source." },
      { kind: "paragraph", text: "The condition is that the first case is usually not profitable on its own terms. What is being bought with it is the credential and the capability, and a supplier that prices and plans the first case as though it were a normal order will reach the wrong conclusion about whether to continue." },

      { kind: "heading", title: "For the industrial base" },
      { kind: "paragraph", text: "The slowest benefit and the only one that compounds. Special process capability, accredited test infrastructure and a qualified sub-tier do not exist until some case requires them, and once they exist they serve every case afterwards. A heat treatment facility approved for an aerospace specification, a laboratory accredited for a class of environmental tests, a forging source qualified to a material standard — each of these is a barrier removed for every subsequent item in that family." },
      { kind: "paragraph", text: "The condition is continuity of demand. Infrastructure built for one programme and then left idle does not persist, and the capability has to be rebuilt the next time it is needed." },

      {
        kind: "table",
        label: "What indigenisation delivers, the mechanism behind each benefit and what each depends on",
        caption: "Table 6 — What indigenisation delivers",
        headers: ["Benefit", "Mechanism that produces it", "What it depends on"],
        rows: [
          ["Shorter spares lead time", "A domestic order cycle replaces an international one, with no export approval step", "The item being approved and in series supply, not merely developed"],
          ["Availability on ageing fleets", "A domestic source continues after the original maker has lost interest in the product line", "The case being started before the shortage, against predicted obsolescence"],
          ["Lower lifecycle cost", "Recurring foreign currency spend across the service life is replaced by domestic spend", "Order quantity sufficient to amortise development and qualification"],
          ["Security of supply", "The dependency on a source that can be interrupted is removed", "A second source that is actually ordered from, so the approval stays current"],
          ["Freedom to modify", "The design definition is held or accessible domestically", "Design rights settled at the start of the case, not at the end"],
          ["Transferable qualification credential", "A held approval evidences that the supplier can complete a case, not just make a part", "A documented case file that can be shown, redacted, to the next organisation"],
          ["Deeper industrial base", "Special processes, accredited test capability and a qualified sub-tier persist beyond the case that created them", "Continuity of demand; idle capability does not survive"],
        ],
      },
    ],
  },
  {
    id: "where-cases-fail",
    title: "12. Where Indigenisation Cases Fail",
    blocks: [
      { kind: "paragraph", text: "Six failure modes account for most stalled cases, and all six are visible before they bite. Each is described below by what it looks like, why it happens, and the step at which it could have been caught." },

      { kind: "heading", title: "The data pack was never going to be enough" },
      { kind: "paragraph", text: "What it looks like. The case was costed and scheduled as a copying exercise. Months in, the developer is writing a specification, selecting materials against inferred requirements and designing around unknowns. The estimate was for manufacture and the work is design." },
      { kind: "paragraph", text: "Why it happens. The data pack looked sufficient because it contained a part number, a description and a sample. Nobody asked what was missing until somebody needed it." },
      { kind: "paragraph", text: "Where it could have been caught. Step 4. An explicit review of what the pack contains against what qualification will require turns an unpleasant discovery into a priced assumption." },

      { kind: "heading", title: "Material or process substituted without demonstrating equivalence" },
      { kind: "paragraph", text: "What it looks like. A grade is selected as equivalent on a cross-reference, or a process is sourced from a facility that performs it differently. The part passes dimensional inspection. It then fails qualification — or, considerably worse, passes qualification and fails in service, because the property that differed is one the test programme did not exercise." },
      { kind: "paragraph", text: "Why it happens. Equivalence is assessed on the attributes that are easy to compare, and composition is the easiest of all. Fracture toughness, fatigue performance and stress corrosion behaviour are not visible in a composition table." },
      { kind: "paragraph", text: "Where it could have been caught. Step 5. Equivalence claimed against named properties, and tested against them, costs a fraction of what it costs to discover the gap later." },

      { kind: "heading", title: "Qualification underestimated" },
      { kind: "paragraph", text: "What it looks like. The prototype exists and the test programme does not. Test scope turns out to be wider than assumed, the facility with the right accredited scope has a queue, and witnessing requirements that nobody checked add weeks to every test." },
      { kind: "paragraph", text: "Why it happens. Qualification is planned from the item rather than from the criticality class, and the class was never confirmed in writing with the design authority." },
      { kind: "paragraph", text: "Where it could have been caught. Steps 2 and 7. Confirming the class, then agreeing the test plan and booking facility capacity before the prototype is cut, converts the single largest schedule risk into a known cost." },

      { kind: "heading", title: "Special process approval not in place" },
      { kind: "paragraph", text: "What it looks like. Finished hardware that cannot be used. The part is complete, inspected and conforming, and the heat treatment, plating or non-destructive testing behind it was performed at a facility whose approval for that process is not in place." },
      { kind: "paragraph", text: "Why it happens. Nothing in the manufacturing route stops an unapproved process being performed, so the constraint is invisible until acceptance. It is listed separately from the item above because the cause is scheduling rather than engineering, and the fix is different: the approval has to be started early, not corrected later." },
      { kind: "paragraph", text: "Where it could have been caught. Step 5, when processes were selected, by confirming approval status before the route was committed rather than before the part was delivered." },

      { kind: "heading", title: "The economics only work once" },
      { kind: "paragraph", text: "What it looks like. The case completes successfully, the item is approved, and the order quantity never repeats. Development and qualification were amortised over a forecast that did not materialise, and the second order arrives at a price the organisation cannot sustain." },
      { kind: "paragraph", text: "Why it happens. The demand signal behind a portal posting or a single order is weaker than it appears, and an embargo date creates a requirement rather than a contract." },
      { kind: "paragraph", text: "Where it could have been caught. Step 3, when the route was chosen. Section 4 separates the routes by order certainty precisely because this is the question that decides whether a case is worth taking." },

      { kind: "heading", title: "Configuration control lost after induction" },
      { kind: "paragraph", text: "What it looks like. The item is in service and something has changed — a sub-tier source, a process house, a material batch specification, a facility. No single change seemed significant enough to re-enter the approval chain. The approval on file no longer describes what is being supplied." },
      { kind: "paragraph", text: "Why it happens. The case team disbands after series supply begins, and the discipline that governed step 8 is not transferred to whoever runs the account afterwards." },
      { kind: "paragraph", text: "Where it could have been caught. Step 10, by treating configuration control as an owned, resourced activity with a named holder rather than as an obligation that everyone assumes someone else is meeting." },
    ],
  },
  {
    id: "evaluating-a-partner",
    title: "13. How to Evaluate an Indigenisation Partner",
    blocks: [
      { kind: "paragraph", text: "Six criteria separate an organisation that can complete an indigenisation case from one that can supply a part. They are listed in the order an assessing organisation can realistically apply them, and the first is both the most important and the hardest to see from outside." },

      { kind: "heading", title: "Engineering capability against trading capability" },
      { kind: "paragraph", text: "Two very different businesses present similarly. One can locate an equivalent part, import it or have it made, and deliver it against a part number. The other can take an item with an incomplete definition, write a specification, select materials and processes, run a qualification campaign and produce the evidence file." },
      { kind: "paragraph", text: "Both are legitimate, and the first is often exactly what is needed. They are not interchangeable for an indigenisation case, and a capability statement rarely distinguishes them, because both describe themselves in the same language. The distinction shows up in what an organisation can produce on request, not in what it says about itself — which is why the next five criteria are all about evidence." },

      { kind: "heading", title: "Documentation discipline" },
      { kind: "paragraph", text: "Ask to see the document set from a completed case, redacted as necessary. The response to that request is more informative than any capability presentation. An organisation that has completed cases will have the file, will understand why it is being asked for, and will redact it rather than refuse it. An organisation that has not will offer certificates, photographs or a list of customers instead." },
      { kind: "paragraph", text: "What you are looking for is not polish. It is whether the specification, the test plan, the test report and the first article inspection report are internally consistent, and whether the configuration baseline matches what is currently being supplied." },

      { kind: "heading", title: "Access to qualification and test facilities" },
      { kind: "paragraph", text: "Test capability can be owned, accredited in-house, or arranged with an external laboratory. All three are workable, and none is inherently better. What is not workable is not knowing which applies." },
      { kind: "paragraph", text: "The specific question is about scope rather than equipment. A laboratory is accredited for named tests within a defined scope, so the useful question is whether the scope covers the tests this item will need, and if it does not, which laboratory’s does and whether capacity has been confirmed. An organisation that answers with a list of equipment has not answered the question." },

      { kind: "heading", title: "Approvals actually held" },
      { kind: "paragraph", text: "An approval is specific. It covers a named item or category, to a named standard, from a named facility, valid until a named date. A general claim to hold an approval is not an approval, and a claim that cannot be stated in those four terms should be read as a claim about intent." },
      { kind: "paragraph", text: "This matters in both directions. An approval held for an adjacent item is genuinely relevant evidence of capability, and an assessing organisation that dismisses it because the part number differs will rule out capable suppliers. The test is whether the approval can be described precisely, not whether it matches exactly." },

      { kind: "heading", title: "Sub-tier control" },
      { kind: "paragraph", text: "Whether the organisation knows and controls its own sources, and whether it can evidence that control. This connects directly to section 5: indigenous content is certified on the basis of the bill of materials and the sub-tier invoices behind it, so an organisation that cannot trace its own inputs cannot certify a figure it can defend." },
      { kind: "paragraph", text: "The practical check is whether named sources exist for the critical inputs, whether those sources are approved where approval is required, and whether a change of source triggers a defined internal process. An organisation that buys on availability has a supply chain rather than a controlled one." },

      { kind: "heading", title: "Lifecycle commitment" },
      { kind: "paragraph", text: "Who answers in year eight. The original approval will need revalidating, a sub-tier source will have changed, the engineer who ran the case will have moved on, and the item will still be in service." },
      { kind: "paragraph", text: "This is the criterion that is easiest to agree to and hardest to evidence, so look for structural answers rather than assurances: whether case records are held as a controlled archive rather than on an individual’s drive, whether configuration control has a named owner, and whether the organisation has in fact supported an earlier case across a change of personnel." },

      {
        kind: "table",
        label: "Questions worth asking an indigenisation partner, and what a substantive answer looks like",
        caption: "Table 7 — Questions worth asking",
        headers: ["Question worth asking", "What a substantive answer looks like"],
        rows: [
          ["Can we see a document set from a completed case, redacted?", "A real file, redacted rather than refused, in which the specification, test plan, test report and first article inspection report are consistent with each other"],
          ["Which approvals do you hold, for what, from whom, and valid until when?", "Four specifics per approval. An approval described only by the name of the authority is not described"],
          ["How is this item’s qualification testing going to be done?", "A named facility, confirmation that its accredited scope covers these tests, and a view on capacity — not a list of equipment"],
          ["Which special processes does this item need, and where are they approved?", "The processes identified by name, each mapped to an approved facility, with approval status confirmed rather than assumed"],
          ["Who are the sub-tier sources for the critical inputs?", "Named sources, approval status where required, and a defined internal process for changing one"],
          ["How would you establish what this item is actually made of?", "Composition analysis plus a route to the specification — an answer that treats material and material specification as different questions"],
          ["What happens if qualification fails on the first attempt?", "An account of a case where it did, what the cause was and what changed as a result"],
          ["Who holds the design at the end, and what can each side do with it?", "A clear position, raised early rather than deferred to contracting"],
          ["Who will hold configuration control once the item is in service?", "A named role with a defined process, not an assurance that it will be looked after"],
        ],
      },
    ],
  },
  {
    id: "timelines-and-cost",
    title: "14. Timelines, Cost and Commercial Mechanics",
    blocks: [
      { kind: "paragraph", text: "Two questions have been outstanding since section 3: how long does a case take, and who pays for it. The first has no single honest answer, and the second depends entirely on the route." },

      { kind: "heading", title: "What drives the timeline" },
      { kind: "paragraph", text: "No duration is given anywhere on this page, and the omission is deliberate. Six variables drive how long a case runs, and they vary independently:" },
      {
        kind: "list",
        items: [
          "The criticality class. This sets qualification depth, approval route and documentation volume. The difference between a non-critical item and a flight safety critical one is not a margin, it is a different programme.",
          "Whether a usable data pack exists. A case with a specification is an engineering project. A case without one includes writing and agreeing a specification first, and that is a phase in its own right.",
          "Whether special processes need approval. An item using only already-approved processes at already-approved facilities runs on a different schedule from one that requires a facility to obtain an approval.",
          "Test facility availability. The right accredited scope with available capacity is not always the same thing as the right accredited scope.",
          "Approving authority workload. Review and witnessing are scheduled against the authority’s queue, not the vendor’s.",
          "Whether the item sits on a list with a published date. A published timeline creates pressure on every party, which changes behaviour on all of the above.",
        ],
      },
      { kind: "paragraph", text: "Any single published figure for how long indigenisation takes is an average across cases that have nothing in common with each other. A flight safety critical rotating component with no data pack and a new special process, and a non-critical machined bracket with a full drawing set, sit in the same statistic. Naming the variables is more useful than quoting the average, and it is the only version of the answer that survives contact with a specific item." },

      { kind: "heading", title: "Who carries the development cost" },
      { kind: "paragraph", text: "Four patterns, following the routes in section 4. Government-funded development, where a defined share of the development cost is met against milestones under Make-I. Industry-funded development against an assured order, as under Make-II, where the developer carries the cost and the commitment to procure is the consideration. Industry-funded at risk, which is the position for most portal-posted items and for much list-driven work, where the developer carries the cost against a demand that is real but not contracted. And development absorbed into a larger contract, which is what happens when a prime indigenises a sub-tier input to reach its own content figure." },
      { kind: "paragraph", text: "The funding route and the risk profile are the same decision, not two decisions. An organisation choosing a route on the basis of which is easiest to enter has chosen a risk position without examining it." },

      { kind: "heading", title: "Pricing an indigenised item" },
      { kind: "paragraph", text: "The price of an indigenised item is not the import price less duty, and expecting it to be is the most common commercial misunderstanding in this field." },
      { kind: "paragraph", text: "Four costs sit in an indigenised price that do not sit in an import price. Development has to be amortised across the order quantity. Qualification was a cost in its own right, frequently larger than the first production batch. Tooling, fixtures and any test rig built for the case have to be recovered. And holding an approval current — periodic review, re-validation, the effort of configuration control — is a recurring cost of being an approved source." },
      { kind: "paragraph", text: "This is also why the first order is rarely representative. Development and qualification are recovered disproportionately in early quantities, and a price agreed on the first batch is a poor predictor of the price at volume, in either direction." },

      { kind: "heading", title: "Intellectual property and data rights" },
      { kind: "paragraph", text: "Who owns the design produced by a case differs by route, and section 4’s table sets out the general position for each. The principle that matters more than the detail is this: design rights are settled at the start of a case or they are not settled at all." },
      { kind: "paragraph", text: "A case that reaches qualification without a clear position on who owns the specification, the drawings and the qualification evidence will reach it anyway, and the question will then be resolved under pressure, with an approved item and a commercial relationship both at stake. The specific allocation is a matter for the contract and for legal advice; the timing of the conversation is an engineering management decision, and it belongs at the beginning." },
    ],
  },
  {
    id: "compared-with-alternatives",
    title: "15. Indigenisation Compared With the Alternatives",
    blocks: [
      { kind: "paragraph", text: "Indigenisation is one of four strategies for an item that is hard to get, and it is not always the right one. The comparison that matters is between approaches rather than between organisations, and the honest version of it starts by conceding that three of the four are sometimes better." },
      { kind: "paragraph", text: "Time to first delivery is given in relative terms. Any absolute figure would be an average across cases with nothing in common, for the reasons section 14 sets out." },
      {
        kind: "table",
        label: "Four strategies for a hard-to-get item compared by time, cost, design authority, approval burden and obsolescence exposure",
        caption: "Table 8 — Four strategies compared",
        headers: ["Approach", "Time to first delivery", "Development cost", "Design authority", "Approval burden", "Obsolescence exposure", "What it suits"],
        rows: [
          ["Continue importing", "Shortest, while the source holds", "None", "The foreign original", "None beyond existing acceptance", "Highest — the exposure is entirely the original maker’s decision", "Low volume, low criticality, a healthy source, short remaining fleet life"],
          ["Licensed production under transfer of technology", "Short to moderate; the data pack arrives with the licence", "Borne within the licence commercials", "The foreign original", "Moderate — conformity to a supplied definition", "High — the definition still belongs to someone else", "A complete data pack is available and the constraint is commercial rather than technical"],
          ["Indigenisation of an existing item", "Long", "Substantial, and carried by whoever the route says", "Domestic, within the limits of the specification", "High — full qualification against the original’s approved behaviour", "Low for the item; returns against its own sub-tier", "A known item, a known specification, an interrupted or expensive source"],
          ["Fresh indigenous design", "Longest", "Highest", "Fully domestic", "Highest — design approval from first principles", "Lowest, and managed domestically", "No acceptable original exists, or the requirement has moved beyond it"],
        ],
      },

      { kind: "heading", title: "When continuing to import is the right answer" },
      { kind: "paragraph", text: "Sometimes it is, and a page that claims otherwise loses every reader who knows it. Importing remains correct where volume is low, criticality is low, the source is healthy and commercially engaged, and the remaining service life of the fleet is short enough that an indigenisation case would complete near the end of it." },
      { kind: "paragraph", text: "The cost of indigenising an item is largely fixed regardless of how many are needed, so low volume is the condition that most often decides this. An indigenisation case for a part needed twice a decade will not repay itself, however irritating the lead time." },

      { kind: "heading", title: "When licensed production fits" },
      { kind: "paragraph", text: "Licensed production fits where a complete data pack arrives with the licence. That single fact removes the specification gap described in section 6, which is the largest source of cost and schedule risk in an indigenisation case, and replaces it with a conformity problem." },
      { kind: "paragraph", text: "The constraint moves from engineering to commercial terms: what the licence permits, how long it runs, whether it allows modification, and what happens at the end of it. It builds manufacturing capability reliably and design capability not at all, which matters when the licence expires." },

      { kind: "heading", title: "When indigenisation of an existing item fits" },
      { kind: "paragraph", text: "The majority case, and the subject of this page. A known item, a known or recoverable specification, and a source that has become interrupted, expensive or indifferent. Volume is sufficient to amortise the work, the item is not so complex that fresh design would be cheaper, and the fleet has enough life remaining to benefit." },
      { kind: "paragraph", text: "This is also the approach with the best ratio of capability gained to risk taken, because the target is defined: there is an original to be measured against, and success is demonstrable rather than a matter of judgement." },

      { kind: "heading", title: "When fresh indigenous design fits" },
      { kind: "paragraph", text: "When no acceptable original exists, when the requirement has moved beyond what the original was designed for, or when the original is so entangled with proprietary software or electronics that equivalence cannot be demonstrated at all. Section 9 notes that avionics frequently falls into this category." },
      { kind: "paragraph", text: "It is the longest route, the most expensive, and the only one that produces an asset nobody else holds: a design, owned domestically, that can be modified, upgraded and exported without reference to anyone." },
    ],
  },
  {
    id: "reference-documents",
    title: "16. Standards, Procedures and Reference Documents",
    blocks: [
      { kind: "paragraph", text: "This is a register of the documents that govern the process described above, and of where each one applies. What follows paraphrases what each document governs; none of it reproduces what any of them says, and a specific case is governed by the document named in that contract. Several documents are available only from the issuing body or from an official government source, and where that is so the issuing body is named here in words rather than linked." },
      { kind: "paragraph", text: "Some of the terms used across these documents, particularly on the ground equipment side, are collected in the [glossary of aviation and ground support terms](/resources/aviation-ground-support-equipment-glossary)." },
      {
        kind: "table",
        label: "Reference documents, the issuing body for each and where it sits in the process",
        caption: "Table 9 — Reference documents",
        headers: ["Document or standard", "Issuing body", "What it governs", "Where it sits in the process"],
        rows: [
          ["Defence Acquisition Procedure 2020", "Ministry of Defence, Department of Defence", "Capital acquisition: acquisition categories, indigenous content requirements, the Make procedure, offsets, leasing and the strategic partnership model", "Sets the commercial framework; governs steps 3, 4, 5 and 9"],
          ["Draft Defence Acquisition Procedure 2026", "Ministry of Defence, Department of Defence", "Proposed replacement for DAP 2020: fewer categories, higher indigenous content, TRL-based acquisition, new bulk and low-cost routes. Draft only — not notified as at 24 November 2026", "Not in force; see section 2"],
          ["Defence Procurement Manual 2025", "Ministry of Defence", "Revenue procurement, covering maintenance and sustenance, as distinct from capital acquisition", "Governs much repeat spares procurement after step 9"],
          ["Positive Indigenisation Lists", "Department of Defence Production; Department of Military Affairs", "Named items under a dated import embargo, each with its own indicative timeline", "Step 1, item identification"],
          ["Indian Military Airworthiness Procedure 2023 (IMAP-2023)", "Ministry of Defence; CEMILAC", "Design, development, production and export of indigenous air systems and airborne stores, including provisions for indigenous substitution. Supersedes DDPMAS Version 1.0, which superseded DDPMAS-2002", "Steps 2, 7 and 8 for airborne items"],
          ["Indian Military Technical Airworthiness Requirements (IMTAR-21)", "CEMILAC", "The technical airworthiness requirements applied alongside IMAP-2023", "Steps 7 and 8"],
          ["DGAQA governing instructions", "Directorate General of Aeronautical Quality Assurance", "Quality assurance, inspection, clearance and acceptance of aeronautical stores", "Steps 6, 8 and 9"],
          ["DGQA governing instructions", "Directorate General of Quality Assurance", "Quality assurance and inspection across the broader range of defence stores", "Steps 6, 8 and 9"],
          ["Indian Standards", "Bureau of Indian Standards", "Material, product and test method standards applied in Indian manufacture, including in defence applications", "Steps 5 and 7"],
          ["ISO/IEC 17025, through NABL accreditation", "International standards bodies; NABL in India", "Competence requirements for testing and calibration laboratories, assessed against a defined scope", "Step 7, and any calibration supporting it"],
          ["AS9100", "Aerospace industry standards body", "Quality management system requirements for aviation, space and defence organisations", "Supplier qualification, before step 3"],
          ["AS9102", "Aerospace industry standards body", "First article inspection requirements and reporting format, enabled for vendors and sub-contractors under IMAP-2023", "Step 6"],
        ],
      },
    ],
  },
];

// Rendered after the sixteen numbered sections and deliberately kept out of the
// "On this page" list, which carries the sixteen numbered sections only.
// The trailing bracketed cross-reference in each answer is on-page navigation;
// page.tsx strips it from the FAQPage schema text.
export const faqSection: ArticleSection = {
  id: "faqs",
  title: "Frequently Asked Questions",
  blocks: [
    {
      kind: "faq",
      entries: [
        {
          question: "What is defence indigenisation?",
          answer: "Defence indigenisation is the process of replacing an imported defence item with one designed, developed, qualified and produced in India. It differs from import substitution, which changes the source of an item without changing the item, and from indigenous design, which starts from a requirement rather than from an existing part. In practice most work sits in the middle: an existing item, an existing specification, and a domestic equivalent that has to prove equivalence. [What defence indigenisation means](#what-it-means)",
        },
        {
          question: "How does defence indigenisation work in India?",
          answer: "An item is identified and placed on a Positive Indigenisation List or posted on the SRIJAN portal; its criticality is classified, which sets the depth of everything after it; a developer is found; a specification and data pack are assembled; the item is designed, prototyped and qualified against the original; an approving authority certifies it; and series supply begins. A tenth step, configuration control, runs for as long as the item is in service. [The process end to end](#the-process)",
        },
        {
          question: "What is the Positive Indigenisation List and what does being on it mean?",
          answer: "A Positive Indigenisation List is a dated import embargo on named items, not a ban from the date of notification. Each item carries its own indicative timeline, after which it must be sourced from Indian industry. Two streams run in parallel, one covering items for the services and one covering items imported by the defence public sector undertakings, and the detail of individual items sits on the SRIJAN portal. [The policy and institutional framework](#framework)",
        },
        {
          question: "Is defence indigenisation the same as Make in India?",
          answer: "No. Make in India is a manufacturing-location policy; defence indigenisation is an item-level engineering and qualification process that takes place inside it. The practical difference is that an item can be manufactured in India and still not count as indigenous content, because content is measured against a defined cost base rather than against where the factory is. [What defence indigenisation means](#what-it-means)",
        },
        {
          question: "How is indigenous content calculated?",
          answer: "As a certified percentage on a defined cost base, with the minimum threshold varying by acquisition category and by whether the product is indigenously designed. That condition is the part usually dropped when a figure is quoted, and it is why published thresholds appear to disagree. The thresholds, with the condition attached to each and the base each is taken on, are set out in full in the thresholds table. [Indigenous content](#indigenous-content)",
        },
        {
          question: "How long does it take to indigenise a defence item?",
          answer: "There is no single honest figure. Six variables decide it: the criticality class, whether a usable data pack exists, whether special processes need approval, test facility availability, approving authority workload, and whether the item carries a published embargo date. Any average quoted for indigenisation lead time is taken across cases that have nothing in common with each other. [Timelines, cost and commercial mechanics](#timelines-and-cost)",
        },
        {
          question: "Who approves an indigenised aviation component?",
          answer: "Two separate authorities, and both are required. Airworthiness certification for air systems and airborne stores rests with CEMILAC, working through its Regional Centres for Military Airworthiness under the Indian Military Airworthiness Procedure 2023 (IMAP-2023). Quality assurance, inspection and acceptance rest with DGAQA for aeronautical stores. How deeply each engages is set by the criticality class, not by the value of the item. [Qualification, testing and certification](#qualification-and-certification)",
        },
        {
          question: "Is reverse engineering allowed in defence indigenisation?",
          answer: "The constraint is rarely permission; it is sufficiency. Measurement recovers geometry, fits, surface condition and assembly order. It does not recover heat treatment history, the process route, the reason a tolerance is where it is, or the design margin. A dimensionally identical part is therefore not a qualified part, and a case costed as a copying exercise that turns out to be a design task is the most common way an indigenisation programme overruns. [The engineering work behind a case](#engineering-work)",
        },
        {
          question: "What does a supplier need in order to take on an indigenisation case?",
          answer: "Five things: engineering capability as distinct from sourcing capability, access to qualification testing within an appropriate accredited scope, routes to approved special processes, documentation discipline sufficient to produce a complete evidence file, and control over its own sub-tier sources. The last of these also determines whether an indigenous content figure can be certified and defended. [How to evaluate an indigenisation partner](#evaluating-a-partner)",
        },
        {
          question: "What is the difference between Make-I, Make-II and Make-III?",
          answer: "Make-I is government-funded development, where a defined share of the development cost is met against milestones. Make-II is industry-funded development against an assured order on successful prototype development. Make-III is indigenous manufacture of an item that is not indigenously designed, typically under transfer of technology. The difference is who funds the work and who ends up owning the design. [Routes and options](#routes)",
        },
      ],
    },
  ],
};

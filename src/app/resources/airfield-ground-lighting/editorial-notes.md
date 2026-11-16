# Airfield Ground Lighting editorial notes

The notes retain the original draft instructions, source wording for editorial changes and passages awaiting verification.

## Document instructions and metadata

```text
Airfield Ground Lighting — Website Page Content
Jetsys Defence · Prepared Nov 16, 2026 · @Naafis Gazi
How to use this document
Positioning: written to position 1 — Jetsys Defence as a supplier of airfield ground lighting fixtures, signs, components and spares. Sections 14 and 17 reflect that choice. Nothing on the page claims turnkey installation, commissioning, DGCA approval capability or a complete system supply, because the outline is explicit that those are verified routinely by Indian airport operators.
Version: the full page, approximately 7,600 words across all 18 sections. The outline recommends full length for this keyword specifically, and Sections 2, 4, 6, 15 and 16 are each written to stand alone as supporting pages later.
Standards and technical values have been checked against the issuing bodies, and three differ from the outline. The most significant: IEC 61822 was withdrawn in October 2023. Corrections are listed at the end.
No CTA block. The outline's final instruction is explicit that the page ends with the FAQs. Commercial intent is carried inside Sections 9, 14 and 17 instead. This conflicts with the general requirements sheet, which asks for enquiry prompts — the implementation notes show how to add one if that is preferred.
Every heading carries its HTML level. Tables are written as tables. Claims to confirm before publishing are marked [Verify], and this page carries more of them than a normal product page because airfield lighting is compliance-driven.
Page metadata
Suggested URL
/products/airfield-ground-lighting/
The outline recommends promoting this to a category of its own rather than nesting it under Runway Spares, with the existing Runway Lights and Signboards pages becoming children that link up to it. That recommendation is worth acting on before the page is published rather than after — "Runway Spares" reads as a parts bin, while airfield ground lighting is a recognised system category with far greater search volume, and the lights, signs, components and spares all sit naturally beneath it.
Meta Title — 66 characters
Airfield Ground Lighting Fixtures, Signs & Spares | Jetsys Defence
Alternative with location signal, 73 characters: Airfield Ground Lighting: Fixtures, Signs & Spares India | Jetsys Defence
Meta Description — 173 characters
Airfield ground lighting explained — light types, colour code, series circuits, standards and specification. Jetsys Defence supplies AGL fixtures, signs and spares in India.
Alternative, 167 characters: Airfield ground lighting explained: runway and taxiway light types, the colour code, series circuits and standards. AGL fixtures, signs and spares from Jetsys Defence.
The H1 stays as the bare primary keyword. The qualifier and the location signal go in the title tag, so the page does not announce itself as a product listing to the knowledge audience — which is the larger share of the traffic and the share most likely to link to the page.
H1 — Airfield Ground Lighting
(Introduction follows with no heading.)
```

## Airfield light colours and FAQ 3

The colour table and operational examples require confirmation against the applicable DGCA Civil Aviation Requirements and the current Annex 14. The FAQ uses a general explanation of how colours are used. [ICAO Annex 14 catalogue](https://store.icao.int/en/annexes/annex-14)

```text
Light
Colour
What it tells the pilot
Runway edge lights
Variable white; yellow over the final section of an instrument runway; red between the runway start and a displaced threshold
Where the usable runway edges are, and that the end is approaching
Runway threshold lights
Green, seen from the approach
Where the landing surface begins
Runway end lights
Red, seen from the runway
Where the runway ends
Runway centreline lights
Variable white from the threshold to 900 m from the runway end; alternate red and variable white from 900 m to 300 m; red from 300 m to the end
Runway alignment during roll-out, and how much runway remains
Touchdown zone lights
Variable white
Where the aircraft should touch down
Taxiway centreline lights
Green
The taxiway route to follow
Taxiway edge lights
Blue
The taxiway edges
Stop bars
Red, facing the aircraft approaching the holding position
Do not cross; a clearance is required
Runway guard lights
Yellow, flashing
You are approaching a runway holding position
Rapid exit taxiway indicator lights
Yellow
Distance remaining to the next high-speed exit
Visual approach slope indicators
Red and white in combination
Whether the aircraft is on, above or below the approach slope
Obstruction lights
Red, or flashing white at high intensity
An obstacle, with intensity graded by height and position
Aerodrome beacon
Alternating white and green at a land aerodrome
The aerodrome's location and that it is a land aerodrome
Two details on this table are worth stating precisely, because they are the ones most often got wrong on supplier pages.
The runway edge caution zone. Over the last 600 m of the runway, or one-third of its length, whichever is less, the edge lights show yellow instead of white. The wording differs between authorities — ICAO Annex 14 says these lights may show yellow, while the European certification specification says they should — and the FAA applies the last 2,000 ft or half the runway length, whichever is less. On an Indian aerodrome, follow the applicable DGCA requirement.
The centreline colour change. The transitions at 900 m and 300 m from the runway end are what let a pilot judge remaining runway visually. On runways shorter than 1,800 m the alternating section starts earlier, because the full 900 m band would otherwise extend past the midpoint.
[Verify — confirm every colour in this table, and both details above, against the current edition of ICAO Annex 14 Volume I and the applicable DGCA CAR before publishing. These are the first things an aerodrome engineer will check, and one wrong entry undermines the whole page.]
The core code: runway edge white, threshold green, runway end red, runway centreline white changing to red and white and then red as the end approaches, touchdown zone white, taxiway centreline green, taxiway edge blue, stop bars red and runway guard lights flashing yellow. The code is standardised internationally so a pilot reads the same meaning at any aerodrome. The full table is above.
```

## Series circuit maintenance

FAA maintenance guidance calls for an electrically safe work condition before work near exposed energized components. An isolation transformer does not make live maintenance safe. [FAA AC 150/5340-26C, sections 2.2.4 and 2.5](https://www.faa.gov/documentlibrary/media/advisory_circular/150-5340-26c.pdf)

```text
Each fixture is fed through a series isolation transformer, which takes current from the primary loop and delivers it to the lamp at a limited secondary voltage. It achieves three things at once:
1.  It isolates each fixture electrically from the primary circuit, which carries a high voltage.
2.  It keeps a lamp failure from opening the circuit, because the transformer's primary winding remains in the loop.
3.  It allows a fixture to be disconnected and worked on without shutting down the rest of the loop.
```

## Regulator classes and FAQ 4

FAA AC 150/5345-10H is active and specifies both 6.6 A and 20.0 A output classes. The FAQ identifies 6.6 A as one nominal rating and keeps compatibility specific to the circuit and components. [FAA AC 150/5345-10H, section 1.2](https://www.faa.gov/documentLibrary/media/Advisory_Circular/150_5345-10H.pdf)

```text
A constant current regulator is the power source for a series lighting circuit, delivering a precise, selectable current to the loop rather than a fixed voltage. 6.6 A is the long-standing nominal value the whole equipment ecosystem is built around — fixtures, lamps, isolation transformers and regulators are all specified to it, which is what makes equipment interchangeable between manufacturers and installations.
```

## Brightness steps and secondary power changeover

```text
[Verify — confirm the standard current value for each brightness step against the applicable specification before quoting any figure on the page.]
A standby supply is part of the lighting system rather than a building service, and the permitted changeover time tightens sharply as the approach category increases. At Category I, fifteen seconds is generally permitted for the approach lighting. At Category II and III the inner approach lights, runway centreline and touchdown zone lights must be back within about one second — which is a requirement no ordinary standby generator can meet alone, and is why these installations use uninterruptible supplies or continuously running sets.
[Verify — confirm the permitted changeover time for each lighting element and each category against the current ICAO Annex 14 and the applicable DGCA CAR before publishing.]
• Secondary power changeover time, falling from seconds to about one second on the critical elements
```

## Regulatory references and equipment standards

The FAA lists AC 150/5345-10H as active. IEC confirms that IEC 61820-3-2:2023 replaces IEC 61822. Keep the exact DGCA reference and current BIS fitting standard open for confirmation. [FAA advisory circular listing](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/1026286), [IEC 61820-3-2:2023](https://webstore.iec.ch/en/publication/67387)

```text
[Verify — confirm the current revision letter of each advisory circular before publishing. The FAA reissues these, and a stale revision letter is checkable in seconds.]
This is where the outline needed correcting, and where a specification written from older reference material will now be out of date.
• DGCA. The Civil Aviation Requirements set the aerodrome design and operations rules for Indian aerodromes, aligned to ICAO Annex 14, and DGCA approval is required for new lighting installations and for upgrades that change an aerodrome's approved category. [Verify — obtain the current CAR reference directly from DGCA. Do not cite a CAR number from memory or from a secondary source.]
• BIS. Indian Standards cover aerodrome lighting fittings in two long-standing series — IS 7785 for elevated type fittings and IS 11071 for inset type fittings, each published in parts by application: general requirements, runway edge, runway centreline, approach, touchdown zone, taxiway and visual approach slope indicators. IS 8901 covers 6.6 A constant-current tungsten filament lamps for aerodrome lighting fittings.
One thing to know about the BIS position before quoting it in a specification: the IS 7785 and IS 11071 series date from the mid-1970s and 1984 and were aligned to the seventh edition of Annex 14. BIS has been working on a consolidated standard covering inset and elevated luminaires for aerodromes and heliports, aligned to the IEC approach, which supersedes both series. [Verify — confirm with BIS which standard is currently in force for the fitting type in question, and its revision, before naming it on the page or in a quotation.]
```

## Approach categories and FAQ 7

Keep quantified operating minima and category-specific equipment requirements with the source draft pending confirmation for the applicable jurisdiction.

```text
Category
Decision height
Runway visual range
Lighting typically required
CAT I
Not lower than 60 m (200 ft)
Not less than 550 m, or visibility not less than 800 m
Precision approach CAT I lighting system, runway edge, threshold and end lights; runway centreline and touchdown zone lighting on many installations
CAT II
Lower than 60 m (200 ft), not lower than 30 m (100 ft)
Not less than 300 m
CAT II/III approach lighting system, runway centreline and touchdown zone lights, taxiway centreline lights, stop bars, runway guard lights
CAT IIIA
Lower than 30 m (100 ft), or no decision height
Not less than 175 m
As CAT II, with tighter serviceability and faster standby power changeover
CAT IIIB
Lower than 15 m (50 ft), or no decision height
Less than 175 m but not less than 50 m
As CAT IIIA, with the most demanding serviceability and monitoring requirements
CAT IIIC
No decision height
No RVR limitation
A defined classification, not normally implemented for routine civil operations
What escalates as the category tightens:
• Taxiway centreline lighting, stop bars and runway guard lights, which become mandatory rather than advisable
• Individual lamp monitoring rather than circuit-level monitoring, because adjacent failures must be detected rather than inferred
[Verify — decision height and runway visual range values must be confirmed against the current DGCA CAR and ICAO Annex 14 before publishing. These values vary between authorities, and CAT II RVR in particular is stated differently in different national frameworks.]
The categories describe how low the decision height and visibility can go for a precision approach. Each step down requires more lighting: longer approach systems, runway centreline and touchdown zone lights, taxiway centreline lights, stop bars and runway guard lights, tighter serviceability limits, individual lamp monitoring, and faster standby power changeover. The specific minima are set by the applicable regulation.
```

## Airports and operators

The heading on the page describes application areas. The draft heading and its verification instruction are retained below.

```text
H2 — Airports and Operators Served
[Verify — if Jetsys Defence has supplied any of these, add one factual closing line naming them. If not, the list stands as a statement of where the products apply and must not imply a customer record. Do not name specific airports or projects without written permission — airport supply references are frequently confidential and are always verified.]
```

## Serviceability criteria and photometric testing intervals

```text
The regulations define, for each lighting system and each category of operation, what proportion of its lights must be serviceable. The proportion tightens as the approach category tightens. For Category II and III operations the objective is that all approach and runway lights are serviceable, and in any event that at least 95 per cent are serviceable in each of the inner 450 m of the approach lighting system, the runway centreline lights, the threshold lights and the edge lights; at least 90 per cent in the touchdown zone lights; at least 85 per cent in the approach lighting system beyond 450 m; and at least 75 per cent in the runway end lights. For Category I operations the approach system objective is lower, at 85 per cent.
Two refinements make this harder than a simple percentage. Adjacent failures are treated far more seriously than scattered ones, because two failures side by side create a gap in the pattern the pilot reads, and the rules restrict them specifically. And a light counts as unserviceable when its main beam average intensity falls below half the specified value, or when its filter is missing or damaged, or when it shows the wrong colour — not only when it is dark.
[Verify — confirm the permitted serviceability proportions and the adjacency rules for each category against the current ICAO Annex 14 Volume I and the applicable DGCA CAR before publishing.]
[Verify — confirm the required photometric testing frequency for each fixture type and category against the applicable DGCA requirement before stating an interval.]
```

## Quality, compliance and supply capability

```text
H2 — Quality, Compliance and Supply Capability
Airfield lighting is a certification-driven business. An airport operator cannot install a fixture that lacks documented compliance, whatever else it offers, so vague quality language in this section is read as having nothing to declare.
What Jetsys Defence does here. Jetsys Defence supplies airfield ground lighting fixtures, signs, components and spares. It is not positioned as a turnkey AGL contractor: design, installation, commissioning and DGCA approval of a complete installation are not offered here, and a specifier needing those should expect them from a contractor appointed for the purpose. Stating that plainly is more useful than a claim that gets tested during vendor evaluation.
Standards compliance. Which standards the supplied equipment is certified to, and who certified it. In airfield lighting this is the first question asked and the one this whole section rests on. [Verify — state only certifications actually held, naming the standard, the certifying body and the covered variants. The published website lists no ISO, AS9100, BIS licence or AAI vendor approval, and nothing above implies any. If they exist but are unpublished, confirm before writing them in.]
Test evidence supplied. Photometric test reports showing measured intensity distribution, chromaticity verification against the aeronautical ground light colour boundaries, ingress protection and load test results for inset fixtures, and type test certificates. Naming what accompanies a delivery is far more persuasive than any adjective, because every item on that list is checkable.
Approval routes supported. Whether supplied equipment is accepted against AAI technical specifications, and what documentation Jetsys provides towards an operator's own DGCA approval process for an installation. [Verify — this one carries the highest risk on the page. Do not imply an approval that is not held, and do not imply that Jetsys obtains approvals on an operator's behalf unless that is contractually true.]
Quality management framework. The quality system under which equipment is supplied and inspected, and the incoming inspection and acceptance testing applied before despatch.
Supply capability and stock. Lead times, local stock holding for common fixtures and spares, and how an urgent requirement for an operational runway is handled. This is a genuine differentiator in airfield lighting rather than a courtesy: an aerodrome with failed fixtures is on a serviceability clock, and the question is not whether a replacement exists but whether it arrives before the category is downgraded.
Indigenisation and local support. Locally supplied and supported equipment, shorter lead times, domestic spares holding, and a support engineer who can reach the site. Against an imported product this is where the comparison is actually won, and it aligns with Make in India and defence indigenisation procurement requirements.
Engineering and application support. Compatibility assessment for retrofits — matching a proposed fixture to the installed regulators, isolation transformers, bases and connectors before an order is placed — and application engineering help in selecting equipment against an aerodrome's category and existing installation. For a components and spares supplier this is the most valuable thing offered alongside the product, because incompatibility is where retrofit projects fail.
After-sales support. Spares availability, replacement lead times, technical support on installed equipment, and training for airfield maintenance technicians where required.
No product performance figures appear in this section by design. Intensity, power, rated life and IP rating belong on the datasheet of a specific supplied product, not on a category page. Generic figures elsewhere on this page are framed as typical and must stay that way. [Verify — do not add performance figures, certification claims, approvals, airport names or project references to this section without written confirmation. On safety-critical airfield equipment an unsupported compliance claim is the one error that cannot be walked back.]
```

## Prepublication checklist and implementation notes

```text
Before you publish
Standards and technical values — checked, with three corrections
Checked against the issuing bodies while writing. Three differ materially from the outline.
Item
Outline said
Checked position
IEC constant current regulator standard
IEC 61822 specifies CCRs with 6.6 A nominal output
IEC 61822 was withdrawn in October 2023 and replaced by IEC 61820-3-2:2023, Requirements for power supplies — Particular requirements for series circuits, written around power electronic converter systems
FAA regulator specification
AC 150/5345-10
Current revision is H (2014). Confirmed classification: L-827 monitor, L-828 regulator without monitoring, L-829 with monitoring; Class 1 = 6.6 A, Class 2 = 20.0 A; Style 1 = three brightness steps, Style 2 = five
BIS fitting standards
BIS publishes separate standards for elevated and inset types
Correct — IS 7785 (elevated) and IS 11071 (inset), in parts by application, plus IS 8901 for 6.6 A lamps. But these date from 1975–1984 and were aligned to the 7th edition of Annex 14; BIS has a consolidated inset-and-elevated luminaire standard superseding both series. Confirm which is in force
Runway centreline colour change
900 m / 300 m
Confirmed: variable white to 900 m from the runway end, alternate red and variable white 900 m to 300 m, red for the final 300 m. Shorter runways start the alternating section earlier
Runway edge caution zone
Last 600 m or one-third
Confirmed, with a nuance worth keeping: ICAO says these lights may show yellow, the European specification says should, and the FAA uses the last 2,000 ft or half the runway
CAT serviceability
Percentages tighten by category
Confirmed: CAT II/III needs 95 % in the inner 450 m of approach lights, centreline, threshold and edge; 90 % touchdown zone; 85 % approach beyond 450 m; 75 % runway end. CAT I approach system 85 %. A light is unserviceable below 50 % of specified intensity, or with a damaged filter or wrong colour
Verification checklist
[ ] Colour code table — Section 3. Confirm every row against the current ICAO Annex 14 Volume I and the applicable DGCA CAR. This is the first thing an aerodrome engineer checks.
[ ] CAT I/II/III minima — Section 6. Decision height and RVR values vary between authorities; CAT II RVR in particular is stated differently in different frameworks. Confirm against DGCA.
[ ] Serviceability percentages — Section 16. Confirm against the current Annex 14 Chapter 10 and DGCA CAR, including the adjacency rules.
[ ] Brightness step currents — Section 4. No figures are quoted in the draft. Add them only from the applicable specification.
[ ] Secondary power changeover times — Section 4. The draft describes these qualitatively. Confirm before converting to figures.
[ ] DGCA CAR number — Section 5. Obtain directly from DGCA. The draft deliberately cites no CAR number.
[ ] BIS standard currently in force — Section 5. Confirm with BIS whether IS 7785 / IS 11071 or the consolidated luminaire standard applies to each fitting type.
[ ] FAA advisory circular revisions — Section 5. Confirm the current revision letter of each AC named.
[ ] Photometric testing frequency — Section 16. Confirm the required interval before stating one.
[ ] Certifications and approvals — Section 17. The published website lists no ISO, AS9100, BIS licence or AAI vendor approval, and the draft claims none. Add only what is held, with the certifying body and the covered variants.
[ ] Airport and project names — Sections 13 and 17. None appear in the draft. Do not add any without written permission.
[ ] No product performance figures — confirm none were added to Section 17 during review.
Keywords deliberately held back
Turnkey, contractor and installation keywords — "airfield ground lighting contractors India", "airfield lighting turnkey contractor", "airfield ground lighting installation", "testing and commissioning", "O&M services", "airfield electrical works", "system integrator". All are high-intent, and all are excluded because the positioning is components and spares. The outline is explicit that turnkey claims are verified routinely. If Jetsys moves to system supply or turnkey delivery, these become a separate page rather than additions to this one.
"AAI airfield lighting projects" and city installation keywords — Bangalore, Delhi, Hyderabad. These imply a project record and a service footprint. AAI appears in the draft only as the body that issues technical specifications, which is factual. Convert these into claims only against a real record.
"Airfield ground lighting cost per runway", "project timeline", "AGL tender", "AMC" — these belong to a contractor's page, not a supplier's. An AMC offering could be added as a short block if Jetsys provides one for supplied equipment.
"Airfield lighting manufacturers" — used in the draft only in the generic sense. If Jetsys manufactures rather than supplies, that is a materially stronger claim and should be stated explicitly in Section 17 once confirmed. [Verify]
"Runway marking and painting", "ILS and lighting integration", "NAVAIDS" — adjacent scope that the page touches only where it genuinely overlaps. Left out rather than implied.
Implementation notes
Promote AGL to its own category first
The outline's structural recommendation is worth acting on before this page is published. "Runway Spares" reads as a parts bin; airfield ground lighting is a recognised system category with far greater search volume, and the lights, signs, components and spares all belong beneath it.
Proposed structure: /products/airfield-ground-lighting/ becomes the hub, with the existing Runway Lights and Signboards pages moved beneath it as children linking up. Redirect the old URLs rather than leaving duplicates.
The cluster this page can anchor
Sections 2, 4, 6, 15 and 16 are each strong enough to become their own supporting page later, and each has independent search demand:
1.  Runway lighting types and configurations
2.  Taxiway lighting and runway incursion prevention
3.  Constant current regulators and series circuits
4.  LED vs halogen airfield lighting conversion
5.  AGL maintenance and serviceability
Each links back to this page, which is how the hub earns its authority. Build them only when there is something to say beyond what is already here — a thin supporting page costs more than it returns.
The CTA conflict, and how to resolve it
The two instruction sets disagree, as they did on the thermal vacuum page. The content structure says plainly: no CTA blocks, no quote requests, no contact prompts, page ends with the FAQs. The general requirements sheet asks for content encouraging enquiry and quotation requests.
The draft follows the content structure. Commercial intent is carried inside the body instead — the specification checklist is written as something to send to suppliers, the selection section closes by naming the four facts a supplier needs to quote compatibly, and Section 17 answers the questions the selection section raised.
If an enquiry prompt is wanted, add it after the FAQs rather than reworking the body:
H2 — Discuss an Airfield Ground Lighting Requirement
Send the runway's approved and intended category, the installed regulator and base types, the closure window available and the standard your tender names. We will come back with compatible equipment, the compliance documentation that accompanies it, and a quotation written against your installation.
Schema markup
• FAQPage on the FAQ section, all ten questions marked up
• ProductGroup for the equipment range, matching the components-and-spares positioning — not Service, which would imply installation
• BreadcrumbList reflecting the /products/airfield-ground-lighting/ path
• Organization with the Navi Mumbai address from the site footer
• DefinedTerm on the colour code table — it is reference content and competes well for definition queries
The five graphics to commission
This is the most visual of the three pages, and the assets carry real weight:
1.  A labelled runway and taxiway layout diagram showing every light type in position, colour-coded. The single most valuable and most linkable graphic on the page. For Section 2.
2.  A series circuit schematic — regulator, cable loop, isolation transformers, fixtures. Makes Section 4 land in one glance.
3.  The colour code as a visual key, not only a table. Highly shareable reference content, and the asset most likely to be cited by other sites.
4.  A CAT I/II/III comparison graphic showing how the lighting escalates between categories. For Section 6.
5.  Photographs of the actual fixtures and signs Jetsys supplies. On this page product photography is close to mandatory — a specifier wants to see the hardware, and stock photographs of unidentified runway lights actively undercut a supplier claim.
Internal linking
Out from this page: Runway Lights, Signboards, Indigenization, Industries. In to this page: the Products landing page, and the Runway Lights and Signboards pages once they sit beneath it.
Keyword coverage
The primary keyword appears in the H1, title tag, meta description, introduction and eight body sections — roughly a dozen placements across approximately 7,600 words, well under 0.2 % density. Secondary keywords sit in the sections the outline's own mapping assigns them. Long-tail question keywords are carried by the FAQ headings and by Sections 3, 4 and 16, which between them answer most of the knowledge-intent queries in the list.
No external links are used. No competitor is named. No buyer-review phrasing appears anywhere in the content.
```

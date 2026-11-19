# MIL-STD-704 editorial notes

The requested H1 and URL override the working title and suggested URL in the attachment. The user approved verified corrections to scope, spike descriptions and revision-notice history. Other supplied body wording, including the author’s openly unconfirmed revision C/D table cells and indicative starting/transfer figures, is retained. The draft’s metadata is retained.

The source’s build and implementation instructions appear here. The conditional Avionics Test Equipment link has no matching dedicated page in the current resource set. The draft’s claim that glossary reconciliation was already completed does not match the glossary currently in the repository, so nonexistent term targets are not linked.

The existing phrase “fixed installation” links to the published fixed-versus-mobile ground-power resource. The visible sentence is preserved.

## Repository check

The [DLA ASSIST document record for MIL-STD-704](https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=35901) lists revision F with Change 1 dated 5 December 2016 as active. The latest validation notice is Notice 4 dated 24 June 2026. The record also lists revision A Change Notice 3 dated 11 April 1973, which is additional historical information beyond the two earlier notices named in the draft. The article now includes the third revision A notice, the exact Change 1 date and the latest revision F validation notice, with validation distinguished from a technical change.

## Applied scope and spike corrections

MIL-STD-704F with Change 1, available through the DLA record above, excludes voltage-spike requirements from its scope in §1.1 and §4.2.1. Its §3.18 defines the short spike phenomenon; defining it does not establish a spike test requirement under this standard. The corrected sections “Scope and Boundaries” and “Transients, Spikes and Power Interrupts” distinguish those two points. Spike compatibility is referred to the applicable aircraft electromagnetic-interference and voltage-spike requirements.

The universal 20 kHz boundary used in the supplied “Scope and Boundaries” copy, the MIL-STD-461 row of the related-standards table, and FAQ 5 is absent from revision F with Change 1. Those passages now describe the documents’ scopes without using that cutoff as a revision-independent dividing line.

The approved corrections are limited to those scope and spike descriptions, the additional revision A notice, the latest revision F validation notice and the distinction between validation notices and technical changes. The original passages are preserved below.

## Original wording of corrected passages

### Section 3 — scope boundary

> The time and frequency boundary. The standard covers power characteristics lasting longer than 50 microseconds, or occurring at frequencies below 20 kilohertz. Anything faster or higher in frequency falls under electromagnetic compatibility requirements instead.

### Section 3 — normal switching spikes

> What that boundary means in practice. Conducted switching spikes — brief voltage excursions not exceeding 50 microseconds — are treated as a normal characteristic of aircraft electrical power rather than as a fault condition. Equipment is expected to tolerate them. A designer who treats every spike as an out-of-specification event has misread which document governs it.

### Section 3 — exclusions

> What is excluded. Electromagnetic interference and emissions, lightning and electromagnetic pulse effects, and platform-level electromagnetic compatibility. Those belong to MIL-STD-461 and its companions, covered in Section 13.

### Section 3 — where the boundary matters

> The practical confusion runs in both directions: an engineer treating a fast transient as a MIL-STD-704 problem when it belongs to the electromagnetic compatibility programme, or dismissing a genuine power quality excursion as an EMC matter. The test is duration and frequency rather than appearance. If the disturbance persists beyond 50 microseconds or sits below 20 kilohertz, it is a power quality phenomenon and this standard governs it. If it is faster or higher, it is not.

### Section 4 — revision A table cell

> Restructured, with lettered categories used for DC limits. Two notices followed, in February 1968 and May 1970

### Section 4 — revision F table cell

> Current revision, with Change 1 issued in December 2016. Seven power groups, adding variable-frequency and 60 Hz AC

### Section 4 — change notices

> Changes and notices are issued between revisions to correct errors and update requirements, so the revision letter alone is not a complete identifier. Revision F with Change 1 is not identical to revision F as originally issued, and a procedure or a compliance claim should state both.

### Section 8 — conducted switching spikes

> Conducted switching spikes. Excursions not exceeding 50 microseconds, treated as a normal characteristic of aircraft power rather than a fault. Equipment is expected to tolerate them; it does not get to call them a failure.

### Section 13 — MIL-STD-461 relationship table cell

> Separate and complementary. MIL-STD-704 stops at 50 microseconds and 20 kHz; faster and higher-frequency phenomena belong here

### Section 13 — distinction between standards

> The clean way to separate them is the time and frequency boundary from Section 3. MIL-STD-704 governs power quality phenomena lasting longer than 50 microseconds and occurring below 20 kilohertz. MIL-STD-461 governs what is faster and higher in frequency. Meeting one says nothing whatever about meeting the other, and a platform will usually require both — as separate test programmes, in different laboratories, against different acceptance criteria.

### FAQ 2 — current revision

> Revision F, issued 12 March 2004, with Change 1 dated December 2016. The qualifier matters more than the answer: a newer revision does not retire the older ones in practice, because platforms are qualified to whichever revision was current when their electrical system was designed, and the standard itself records that earlier editions remain in effect for legacy aircraft contracts.

### FAQ 5 — MIL-STD-704 and MIL-STD-461

> MIL-STD-704 covers power quality — voltage, frequency and disturbances lasting longer than 50 microseconds or below 20 kilohertz. MIL-STD-461 covers electromagnetic interference, which is faster and higher in frequency. They are complementary, most platforms require both as separate test programmes, and meeting one says nothing about meeting the other.

## Original planning copy and metadata

~~~text
MIL-STD-704 — Page Content for Jetsys Defence
Nov 19, 2026 · @Naafis Gazi
A reference page, not a product page: fifteen H2 sections plus FAQs explaining the standard in full, with the external power section written to be better than anything else available on it. No capability claims and no compliance claims appear anywhere. Revision dates and power group codes below are verified against the Department of Defense standardisation repository; limit values are only stated where they could be confirmed, and the gaps are marked rather than filled.
Page metadata
Field
Content
Count
Meta Title
MIL-STD-704: Aircraft Electric Power Characteristics | Jetsys Defence
70 characters
Meta Description
MIL-STD-704 explained: what the standard covers, how the revisions differ, which one applies to your platform, the seven power groups, and what it requires of ground power.
172 characters
H1
MIL-STD-704: Aircraft Electric Power Characteristics Explained
—
URL
/resources/mil-std-704/
—
Breadcrumb
Home › Resources › Engineering Standards › MIL-STD-704
—
This is a reference page, not a product page. No capability claim and no compliance claim appears anywhere in the body. A false MIL-STD-704 compliance claim in front of a defence procurement team is not a minor error, and Section 10 sets a standard this page would itself be held to. The commercial work is done by two internal links in Section 11.
Two conflicts with the standard requirements block, resolved and flagged. The requirements ask for sales-focused, conversion-oriented copy; this brief forbids product pitch in the body, and the brief wins for the reason above. The requirements also forbid external links, while Section 15 is about where to obtain the standard — so the repositories are named in words without being hyperlinked, which serves the reader without breaking the rule.
American spelling is retained for the standard's own vocabulary: utilization equipment, not utilisation. An automatic British-English pass would corrupt it.
H1 — MIL-STD-704: Aircraft Electric Power Characteristics Explained
~~~

## Source link directions

~~~text
[Internal link: Aircraft Ground Power]
[Internal link: Avionics Test Equipment — when built]
~~~

## Source build note

~~~text
[Build note: the standard requirements block for this project forbids external links, so ASSIST and EverySpec are named here rather than linked. If that rule is relaxed for resource pages, these two are worth linking — outbound links to authoritative references help a reference page rather than harming it, and a page about a standard that does not tell the reader where to get the standard looks evasive.]
~~~

## Original implementation notes

~~~text
Implementation notes
What was verified, and what was not
This is the discipline the brief asked for, stated plainly so nobody has to guess which parts are load-bearing.
Confirmed against primary or repository sources
Position taken on the page
Full revision dates: original 6 Oct 1959, A 9 Aug 1966, B 17 Nov 1975, C 30 Dec 1977, D 30 Sep 1980, E 1 May 1991, F 12 Mar 2004
All stated in the Section 4 table. The brief left D and E blank; both are now filled
Change and notice dates: A Notice 1 Feb 1968 and Notice 2 May 1970, D Notice 1 31 Mar 1988, F Change 1 Dec 2016
Stated
The original superseded an earlier engineering specification and covered only 28 V DC and 115/200 V AC at 400 Hz from a three-phase four-wire wye source
Stated in Section 4
Revision E is where the title changed to a Department of Defense interface standard
Stated in the Section 4 table
The current revision's own supersession provision: earlier editions cited for legacy aircraft electrical systems remain in effect for procurement of utilization equipment
Paraphrased in Sections 4 and 15. This is the strongest thing on the page — the standard confirming its own revisions do not retire each other
The purpose statement covers the aircraft electric system, external power and airborne utilization equipment
Quoted in substance in Sections 1 and 11, and in FAQ 8. It is what makes Section 11 defensible rather than inferred
All seven power group codes, descriptions, nominal voltages and frequencies, including 360 to 800 Hz for the variable-frequency groups
The Section 5 table
The eight-part handbook structure, Part 1 general and Parts 2 to 8 per power group
Section 9
Variable frequency as a revision F addition; earlier revisions fixed frequency only
Section 5
The 50 microsecond and 20 kHz scope boundary
Sections 3, 8 and 13
Not confirmed
Position taken
Every steady-state voltage and frequency limit value
No limit values are published on the page. Section 7 explains the structure, explains why published figures disagree, and directs the reader to the document for the applicable revision. This is a deliberate decision, explained in the section itself
What substantively changed at revisions C and D
The table says so in those cells rather than guessing
Transient envelope values and surge figures
Described in kind, not in numbers. The envelope graphs are deliberately not redrawn
The 12 V starting figure and 50 ms transfer cap
Stated as indicative and flagged as such in the text
The specific external power clause requirements
Section 11 argues from the purpose statement, which is confirmed, rather than from clause detail
The NATO ground power standard number
Referred to generically as NATO standardisation agreements, with no number given. Confirm the designation and its status before adding one
DO-160 section number and its specific limits
Named without a section number or any limit comparison
Anything about Indian application beyond the general principle
Section 14 cut to three short paragraphs with an explicit note. Per the brief: a short accurate section beats a long uncertain one
One error in circulation, for the record: at least one published source describes seven MIL-HDBK-704 handbooks. There are eight parts — one general and seven per power group. The arithmetic gives it away, and it is a good illustration of why Section 7 takes no figure from secondary material.
Still to do before publishing
1.  Have it reviewed by someone who works with the standard. This is the one page in the set where that is worth the delay.
2.  Fill the Section 7 limits from the revisions your readers actually work to, if you want them on the page. State the measurement point for every value, and give each revision its own column. A table with a gap is professional; a wrong number is not.
3.  Confirm the C and D change content and complete the Section 4 table.
4.  Confirm the NATO ground power designation before naming it.
5.  Resolve Section 14 against a tender document or someone with programme experience, or leave it as it stands.
Schema markup
• TechArticle as the page type — a better fit than Article for technical reference content
• FAQPage for Section 16. Appropriate here, unlike on the glossary
• BreadcrumbList and Organization as elsewhere
• DefinedTerm on the seven power group codes is worth considering: they are genuinely definitional and it is cheap to add
Tables
Six tables, which is a lot for one page and correct here — technical readers scan tables and skip prose, and tables are what gets pulled for specification queries. They must work on a phone: a wide table that scrolls sideways on mobile is worse than two narrower ones. The Section 5 power group table is the one most likely to be screenshotted, so give it a real caption.
Visual elements
1.  Worth building: one diagram showing where the standard applies — generator, point of regulation, distribution, equipment input terminals, with the external power connector feeding in from a ground power unit. That single diagram carries Sections 3, 7 and 11 at once, and it is the asset most likely to be linked to or reused.
2.  Worth considering: a timeline of the revisions. Cheap, and it makes Section 4 scannable.
3.  Do not redraw the transient envelope graphs. Copyright, and they differ by revision and power group.
Internal linking
Five links from a page of this length, deliberately sparse — a reference page that links out constantly reads as a funnel.
From
To
Anchor
Section 11, fixed and mobile
Aircraft Ground Power (topic area 1, when built)
fixed and mobile ground power
Section 12
Avionics Test Equipment (when built)
avionics test equipment
Sections 5, 6 and 9, first use of each term
Glossary anchors
the term itself
In: from the resources hub topic area 8, which currently lists MIL-STD-704 as plain text — making that a link is the first and most important step. Then from the Aircraft Ground Power page when it is built. That pair is the strongest on the site: this page is the authority, that one is the commercial page, and they reinforce each other.
Glossary reconciliation — already done
All three changes that brief asked for are built into the glossary rather than retrofitted, because its standards and units categories had not been written when this brief arrived. A MIL-STD-704 core entry was added; 400 Hz power and 28 V DC were repointed here from the ground support equipment category; 270 V DC was added and linked here; and utilization equipment, point of regulation, MIL-HDBK-704 and MIL-STD-461 were added as entries cross-referencing it.
Keeping this page and the ground power page apart
When topic area 1 is built, scope the two explicitly before writing the second:
This page owns
The ground power page owns
What the standard requires
What equipment is available and how to choose it
Revisions, power groups, limits
28 V DC against 400 Hz as an application question
Why external power must stay in the envelope
Diesel against electric, fixed against mobile, sizing, cables
Compliance and evidence
Models, configurations, specifications
The rule: this page explains the requirement, that page sells against it. If the ground power page starts explaining power groups, or this page starts comparing diesel and electric units, they have begun competing.
The architecture decision still outstanding
This brief raises something that needs settling before much more is published: product pages under /products/ and resource articles on the same subjects will compete with each other. The recommendation is one page per subject, placed where the dominant intent is, with the resources hub acting as a navigation layer that links to it rather than holding articles of its own. The glossary and this page are the exceptions — genuinely informational, no product behind them, and they belong under /resources/ and nowhere else.
What success looks like
This page will not rank first for MIL-STD-704 — that term is held by the encyclopedias, the standards repositories and a well-resourced set of test equipment manufacturers. It should rank for the revision, power group, operating condition and external power queries, and it should become the page the rest of the site links to whenever power quality comes up. Judge it on those rankings, on time on page, and on whether it earns external links. A well-made standards reference is the most link-attractive page type there is.
~~~

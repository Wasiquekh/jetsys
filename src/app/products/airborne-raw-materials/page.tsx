import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";

export const metadata = {
  title: "Aerospace Raw Materials, Fasteners & Adhesives",
  description:
    "Explore aerospace-grade low-carbon steel, carbon steel, fasteners and structural adhesives for aviation manufacturing and maintenance.",
  keywords: [
    "aerospace raw materials",
    "low carbon steel",
    "carbon steel",
    "aerospace fasteners",
    "aircraft adhesives",
    "aviation materials",
  ],
  openGraph: {
    title: "Aerospace Raw Materials, Fasteners & Adhesives",
    description:
      "High-grade materials engineered to support strength, consistency and dependable aerospace production.",
    type: "website",
  },
};

const strengths = [
  ["01", "Material Integrity", "Materials selected to support dependable strength, consistency and manufacturing performance."],
  ["02", "Aerospace Suitability", "Products specified around demanding aviation fabrication and maintenance applications."],
  ["03", "Controlled Quality", "Reliable material characteristics help teams achieve repeatable production outcomes."],
  ["04", "Structural Performance", "Metals, fasteners and adhesives support secure assemblies under operational loads."],
  ["05", "Supply Readiness", "A focused portfolio helps reduce sourcing complexity across aerospace production workflows."],
];

const categories = [
  {
    href: "#",
    image: "/images/Steel (Carbon).svg",
    title: "Steel (Low Carbon)",
    eyebrow: "Formability & Fabrication",
    description:
      "Versatile low-carbon steel suited to formed components, brackets and fabricated structures requiring dependable workability.",
  },
  {
    href: "#",
    image: "/images/Steel (Carbon).svg",
    title: "Steel (Carbon)",
    eyebrow: "Strength & Durability",
    description:
      "Higher-strength carbon steel materials selected for demanding parts where durability and load performance are essential.",
  },
  {
    href: "#",
    image: "/images/Fasteners.svg",
    title: "Fasteners",
    eyebrow: "Secure Assembly",
    description:
      "Precision fastening products designed to support secure joints, repeatable installation and dependable aerospace assemblies.",
  },
  {
    href: "#",
    image: "/images/Airborne Glues.svg",
    title: "Airborne Glues",
    eyebrow: "Structural Bonding",
    description:
      "Aerospace bonding solutions developed for controlled adhesion, durable assemblies and efficient multi-material construction.",
  },
];

export default function Page() {
  return (
    <div className="overflow-hidden bg-[#f6f4ed] text-[#292820]">
      <Header />
      <StickyHeader />

      <main>
        <section className="relative isolate min-h-[620px] overflow-hidden bg-[#191a14]">
          <Image
            src="/images/Airborne Raw Materials.png"
            fill
            priority
            sizes="100vw"
            alt="High-grade airborne raw materials for aerospace manufacturing"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171811] via-[#171811]/90 to-[#171811]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(221,197,105,0.2),transparent_36%)]" />

          <div className="container relative z-10 flex min-h-[620px] items-center py-20">
            <div className="max-w-3xl" data-reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ddc569]">
                <span className="h-px w-12 bg-[#ddc569]" />
                Aerospace materials
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Material strength engineered to{" "}
                <span className="text-[#ddc569]">take flight</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Aerospace-grade steels, precision fasteners and bonding materials
                selected to support structural performance, production consistency and
                next-generation aviation manufacturing.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#equipment-categories"
                  className="rounded-sm bg-[#ddc569] px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-[#171811] transition hover:-translate-y-1 hover:bg-[#ead888]"
                >
                  Explore raw materials
                </a>
                <Link
                  href="/contact"
                  className="rounded-sm border border-white/30 px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:border-[#ddc569] hover:text-[#ddc569]"
                >
                  Discuss a requirement
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ddc569] to-transparent" />
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div data-reveal>
              <p className="section-kicker">Built around the operation</p>
              <h2 className="section-title">
                Material capability that strengthens every build
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#5c594e]" data-reveal>
              <p>
                Aerospace structures begin with materials that perform predictably
                throughout forming, fastening, bonding and service. Inconsistent raw
                material can affect production quality, structural reliability and
                manufacturing efficiency.
              </p>
              <p>
                Our portfolio brings together low-carbon steel, carbon steel,
                precision fasteners and aerospace adhesives. Each product category
                supports dependable fabrication, controlled assembly and durable
                performance across aviation manufacturing and maintenance workflows.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3 sm:grid-cols-3">
                {["Aerospace-grade", "Consistent", "Production-ready"].map((item) => (
                  <div key={item} className="border-l-2 border-[#9d8a35] pl-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#292820]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#25271f] py-20 md:py-24">
          <div className="container">
            <div className="mb-12 max-w-2xl" data-reveal>
              <p className="section-kicker !text-[#ddc569]">Engineering principles</p>
              <h2 className="section-title !text-white">
                Selected for the realities of aerospace production
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
              {strengths.map(([number, title, copy], index) => (
                <article
                  key={title}
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="group relative min-h-[260px] bg-[#25271f] p-6 transition-colors hover:bg-[#303328]"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-[#ddc569]">
                    {number}
                  </span>
                  <div className="mt-14 h-px w-10 bg-[#ddc569] transition-all duration-500 group-hover:w-full" />
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipment-categories" className="equipment-section relative overflow-hidden py-20 md:py-28">
          <div className="equipment-grid absolute inset-0 opacity-25" />
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#b49d42]/10 blur-[110px]" />
          <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#ddc569]/10 blur-[130px]" />

          <div className="container relative z-10">
            <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end" data-reveal>
              <div className="max-w-2xl">
                <p className="section-kicker">Product portfolio</p>
                <h2 className="section-title">
                  Explore airborne raw material categories
                </h2>
              </div>
              <p className="max-w-md border-l border-[#9d8a35]/50 pl-5 text-sm leading-7 text-[#686459]">
                Explore material categories selected to support fabrication,
                structural assembly, secure fastening and aerospace-grade bonding.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((category, index) => (
                <Link
                  key={category.title}
                  href={category.href}
                  data-reveal
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                  className="equipment-card group relative min-h-[350px] overflow-hidden rounded-[3px] border border-[#d8d2bf] bg-white/95 p-7 md:p-9"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 border-b border-l border-[#e5e0d1] bg-[#f7f5ee]" />
                  <span className="absolute right-5 top-3 text-[86px] font-black leading-none text-[#d9d4c4]/40 transition-all duration-500 group-hover:text-[#c2ae55]/20">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="icon-frame relative flex h-[76px] w-[76px] items-center justify-center border border-[#ddc569]/40 bg-[#ddc569]/10 transition-all duration-500 group-hover:border-[#ddc569] group-hover:bg-[#ddc569]">
                        <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-[#ddc569]" />
                        <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-[#ddc569]" />
                        <Image
                          src={category.image}
                          width={40}
                          height={40}
                          alt=""
                          aria-hidden="true"
                          className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#9d8a35] shadow-[0_0_14px_rgba(157,138,53,0.45)]" />
                    </div>

                    <p className="mt-9 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#887629]">
                      {category.eyebrow}
                    </p>
                    <h3 className="mt-3 max-w-md text-2xl font-extrabold text-[#292820] md:text-[30px]">
                      {category.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#686459] transition-colors group-hover:text-[#3f3d35]">
                      {category.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-[#ded9ca] pt-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#292820]">
                        View category
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center border border-[#9d8a35]/50 text-xl text-[#887629] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#9d8a35] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efede5]">
          <div className="container py-20 md:py-24">
            <div className="mb-10 max-w-2xl" data-reveal>
              <p className="section-kicker">From specification to production</p>
              <h2 className="text-3xl font-extrabold text-[#292820] md:text-4xl">
                A material approach built around manufacturing confidence
              </h2>
            </div>
            <div className="grid border-y border-[#cbc5b2] md:grid-cols-3" data-reveal>
              {[
                ["01", "Define", "We identify the material type, form, mechanical requirement and intended aerospace application."],
                ["02", "Select", "The appropriate steel, fastener or adhesive is aligned with fabrication and performance needs."],
                ["03", "Build", "Consistent material selection supports controlled production, durable assemblies and reliable outcomes."],
              ].map(([number, title, description], index) => (
                <article
                  key={title}
                  className={`process-step relative px-6 py-9 md:px-8 ${
                    index !== 2 ? "md:border-r md:border-[#cbc5b2]" : ""
                  }`}
                >
                  <span className="text-xs font-black tracking-[0.2em] text-[#9d8a35]">
                    {number}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#292820]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#686459]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        [data-reveal] {
          animation: reveal-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 120ms;
        }
        @keyframes reveal-up {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-kicker {
          margin-bottom: 0.9rem;
          color: #887629;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .section-title {
          max-width: 48rem;
          color: #292820;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.08;
        }
        .equipment-section {
          background:
            radial-gradient(circle at 50% 0%, rgba(157, 138, 53, 0.09), transparent 34%),
            linear-gradient(145deg, #ffffff 0%, #f8f6ef 48%, #ffffff 100%);
        }
        .equipment-grid {
          background-image:
            linear-gradient(rgba(41, 40, 32, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(41, 40, 32, 0.045) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }
        .equipment-card {
          box-shadow: 0 18px 45px rgba(55, 50, 32, 0.08);
          transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 450ms ease, box-shadow 450ms ease;
        }
        .equipment-card::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 3px;
          background: #ddc569;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 450ms ease;
        }
        .equipment-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 45%, rgba(221, 197, 105, 0.07), transparent 62%);
          transform: translateX(-100%);
          transition: transform 700ms ease;
          pointer-events: none;
        }
        .equipment-card:hover {
          transform: translateY(-8px);
          border-color: rgba(157, 138, 53, 0.65);
          box-shadow: 0 25px 60px rgba(55, 50, 32, 0.15);
        }
        .equipment-card:hover::before {
          transform: scaleY(1);
        }
        .equipment-card:hover::after {
          transform: translateX(100%);
        }
        .process-step::after {
          content: "";
          position: absolute;
          left: 2rem;
          bottom: -1px;
          width: 44px;
          height: 3px;
          background: #9d8a35;
          transition: width 400ms ease;
        }
        .process-step:hover::after {
          width: calc(100% - 4rem);
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          [data-reveal] {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

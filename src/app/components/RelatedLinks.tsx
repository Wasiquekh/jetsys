import Link from "next/link";

type RelatedLink = { href: string; label: string };

type RelatedLinksProps = {
  heading?: string;
  intro: string;
  links: RelatedLink[];
};

// Closing block that ties a product page back to its hub and sibling pages.
export default function RelatedLinks({
  heading = "Related Equipment",
  intro,
  links,
}: RelatedLinksProps) {
  return (
    <section>
      <br />
      <br />
      <div>
        <h2 className="font-bold text-3xl text-[#5C5649] mb-5">{heading}</h2>
        <p className="text-black leading-relaxed mb-3">{intro}</p>
        <ul className="list-disc pl-5 text-black space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

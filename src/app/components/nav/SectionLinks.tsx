import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
];

export default function SectionLinks({
  className,
  onNavigate,
}: {
  className: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return sections.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className={className}
      onClick={onNavigate}
    >
      {label}
    </Link>
  ));
}

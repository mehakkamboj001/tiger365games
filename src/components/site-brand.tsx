import Image from "next/image";
import Link from "next/link";

type SiteBrandProps = {
  className?: string;
};

export function SiteBrand({ className }: SiteBrandProps) {
  return (
    <Link
      className={className ? `site-brand ${className}` : "site-brand"}
      href="/"
      aria-label="Tiger365Games home"
    >
      <Image
        src="/images/tiger365games-logo.png"
        alt="Tiger365Games"
        width={240}
        height={110}
        priority
      />
    </Link>
  );
}

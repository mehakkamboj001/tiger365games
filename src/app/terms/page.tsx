import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for using the Tiger365Games sports and game-concept preview.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="simple-page">
      <Link className="back-link" href="/">← Tiger365Games home</Link>
      <p className="eyebrow"><span>TERMS OF USE</span></p>
      <h1>A preview,<br /><em>not a game service.</em></h1>
      <p>
        Tiger365Games currently presents sports pages and illustrative game
        concepts for preview. Games, account access, third-party studios and
        payment processing are not connected or available on this demo.
      </p>
      <p>
        Fixture details are illustrative and may not reflect real schedules.
        Confirm event information with the official organiser.
      </p>
      <p>
        Any future account, game or payment service must be separately
        launched with appropriate terms, age checks and applicable regional
        compliance.
      </p>
      <Link className="text-link" href="/privacy">Privacy policy <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Tiger365Games",
  description:
    "Meet Tiger365Games: your home for sports, game updates and the moments fans enjoy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="simple-page">
      <Link className="back-link" href="/">← Tiger365Games home</Link>
      <p className="eyebrow"><span>OUR STORY</span></p>
      <h1>Made for the<br /><em>love of the game.</em></h1>
      <p>
        Tiger365Games is a sports discovery site created for
        people who love the anticipation, skill and shared joy of sport.
        Our goal is simple: make it easier to find a story, a fixture or a
        new reason to cheer.
      </p>
      <p>
        This demo uses illustrative fixture information. Always check with
        official teams and organisers for accurate event details.
      </p>
      <Link className="text-link" href="/#sports">Explore sports <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

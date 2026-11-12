import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible play",
  description:
    "A reminder to keep sports and entertainment enjoyable, balanced and on your own terms.",
  alternates: { canonical: "/responsible-play" },
};

export default function ResponsiblePlayPage() {
  return (
    <main className="simple-page">
      <Link className="back-link" href="/">← Tiger365Games home</Link>
      <p className="eyebrow"><span>PLAY WELL</span></p>
      <h1>Keep the fun<br /><em>in the game.</em></h1>
      <p>
        Sport and entertainment should be enjoyable. Take breaks, make time
        for life beyond the screen, and choose what feels right for you.
      </p>
      <ul className="play-well-list">
        <li>Set healthy limits on your screen time.</li>
        <li>Never let entertainment get in the way of essentials.</li>
        <li>If it stops feeling fun, step away and talk to someone you trust.</li>
      </ul>
      <p>Tiger365Games is a sports discovery site and does not offer betting or real-money games.</p>
      <Link className="text-link" href="/">Back to the games we love <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

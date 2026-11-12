import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy information for the Tiger365Games demo and sports discovery site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="simple-page">
      <Link className="back-link" href="/">← Tiger365Games home</Link>
      <p className="eyebrow"><span>YOUR PRIVACY</span></p>
      <h1>Privacy<br /><em>comes first.</em></h1>
      <p>
        This preview does not provide account registration, login, payments or
        playable games. The demo account panels do not collect or store the
        details you enter on this site.
      </p>
      <p>
        If you choose to open WhatsApp, your message is handled by WhatsApp
        under its own privacy terms. Do not send sensitive account or payment
        information in a chat.
      </p>
      <p>
        The production site owner should publish a complete privacy notice
        describing any analytics, cookies, support messages or account data
        collected before enabling those services.
      </p>
      <Link className="text-link" href="/responsible-play">Responsible play <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

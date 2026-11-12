import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sports } from "../../../lib/site";
import { SiteBrand } from "../../../components/site-brand";

type Props = {
  params: Promise<{ sport: string }>;
};

export function generateStaticParams() {
  return sports.map(({ slug }) => ({ sport: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sport: slug } = await params;
  const sport = sports.find(({ slug: sportSlug }) => sportSlug === slug);
  if (!sport) return {};

  return {
    title: `${sport.name} stories, guides & fixtures`,
    description: sport.description,
    alternates: { canonical: `/sports/${sport.slug}` },
    openGraph: {
      title: `${sport.name} | Tiger365Games`,
      description: sport.description,
      url: `/sports/${sport.slug}`,
    },
  };
}

export default async function SportPage({ params }: Props) {
  const { sport: slug } = await params;
  const sport = sports.find(({ slug: sportSlug }) => sportSlug === slug);
  if (!sport) notFound();

  return (
    <main className="detail-page">
      <header className="detail-header">
        <SiteBrand />
        <Link className="back-link" href="/">← Back to home</Link>
      </header>
      <section className={`detail-hero sport-card-${sport.accent}`}>
        <div>
          <p className="eyebrow"><span>PLAYARENA / SPORT</span></p>
          <h1>{sport.name}<br /><em>starts here.</em></h1>
          <p>{sport.description}</p>
          <Link className="button button-primary" href="/#fixtures">Browse featured fixtures <span aria-hidden="true">↗</span></Link>
        </div>
        <Image src={sport.image} alt="" width={300} height={260} />
      </section>
      <section className="detail-note">
        <span className="eyebrow">A FAN-FIRST SPACE</span>
        <h2>Every match is more than a score.</h2>
        <p>Find room for the build-up, the brilliant moments and the conversations that carry on after the final whistle.</p>
        <Link className="text-link" href="/responsible-play">Keep sport in good balance <span aria-hidden="true">↗</span></Link>
      </section>
      <footer className="detail-footer">
        <Link href="/about">About Tiger365Games</Link>
        <Link href="/responsible-play">Responsible play</Link>
        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}

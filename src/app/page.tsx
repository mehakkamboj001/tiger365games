import Image from "next/image";
import Link from "next/link";
import { sports } from "../lib/site";
import { SiteBrand } from "../components/site-brand";
import { GameCollections, HomeHeader } from "../components/home-interactions";

const fixtures = [
  {
    slug: "cricket",
    category: "CRICKET · INTERNATIONAL",
    home: "India",
    away: "Australia",
    date: "Saturday · 7:00 PM",
    initials: ["IN", "AU"],
  },
  {
    slug: "football",
    category: "FOOTBALL · LEAGUE",
    home: "North City",
    away: "Harbour FC",
    date: "Sunday · 8:30 PM",
    initials: ["NC", "HF"],
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHeader />

      <main>
        <div className="announcement">
          <span className="live-dot" aria-hidden="true" />
          <span>FOR THE LOVE OF THE GAME</span>
          <span className="announcement-divider" aria-hidden="true">/</span>
          <span>STORIES, FIXTURES &amp; FAN CULTURE</span>
        </div>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span>TIGER365GAMES</span> YOUR SPORTS HOME</p>
            <h1 id="hero-title">CRICKET</h1>
            <p className="hero-copy">
              From the roar before kick-off to the last ball of the day,
              find the stories and moments that bring us together.
            </p>
            <Link className="button button-primary" href="#sports">
              Explore sports <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            <span>GOOD GAMES.<br />GREAT COMPANY.</span>
          </div>
          <div className="hero-index" aria-hidden="true">PA — 001</div>
        </section>

        <section className="sports-section section-wrap" id="sports" aria-labelledby="sports-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>TIGER365GAMES</span> FIND YOUR GAME</p>
              <h2 id="sports-title">IN OUR SPORTS...</h2>
            </div>
            <p className="section-intro">
              Big rivalries, brilliant plays, and the details in between.
              Start with the sport you love.
            </p>
          </div>
          <div className="sport-grid">
            {sports.map((sport, index) => (
              <Link
                className={`sport-card sport-card-${sport.accent}`}
                href={`/sports/${sport.slug}`}
                key={sport.slug}
              >
                <div className="sport-card-top">
                  <span className="card-number">0{index + 1}</span>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>
                <Image
                  className="sport-illustration"
                  src={sport.image}
                  alt=""
                  width={172}
                  height={150}
                  aria-hidden="true"
                />
                <div className="sport-card-copy">
                  <span>{sport.label}</span>
                  <h3>{sport.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <GameCollections />

        <section className="fixtures-section" id="fixtures" aria-labelledby="fixtures-title">
          <div className="section-wrap">
            <div className="section-heading fixture-heading">
              <div>
                <p className="eyebrow"><span>THE WEEK AHEAD</span> SAVE THE MOMENT</p>
                <h2 id="fixtures-title">Coming <em>up.</em></h2>
              </div>
              <p className="section-intro">
                A little heads-up for the matches worth making time for.
                Times shown in IST.
              </p>
            </div>
            <div className="fixture-list">
              {fixtures.map((fixture) => (
                <article className="fixture-card" key={fixture.home}>
                  <div className="fixture-category">{fixture.category}</div>
                  <div className="fixture-teams">
                    <span className="team-badge">{fixture.initials[0]}</span>
                    <span className="team-name">{fixture.home}</span>
                    <span className="versus">VS</span>
                    <span className="team-badge team-badge-alt">{fixture.initials[1]}</span>
                    <span className="team-name">{fixture.away}</span>
                  </div>
                  <div className="fixture-date">{fixture.date}</div>
                  <Link className="fixture-link" href={`/sports/${fixture.slug}`} aria-label={`Read about ${fixture.home} versus ${fixture.away}`}>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="fixture-disclaimer">
              Illustrative listings for the demo. Check official organisers for confirmed fixtures and timings.
            </p>
          </div>
        </section>

        <section className="manifesto section-wrap" aria-labelledby="manifesto-title">
          <div className="manifesto-orbit" aria-hidden="true">
            <span>PLAY</span><span>SHARE</span><span>REPEAT</span>
          </div>
          <div className="manifesto-copy">
            <p className="eyebrow"><span>OUR POINT OF VIEW</span></p>
            <h2 id="manifesto-title">It’s better<br />when we <em>play together.</em></h2>
            <p>
              Tiger365Games is built around what makes sport special: shared
              anticipation, unforgettable skill and the people cheering
              beside you. No noise. Just a little more of what you love.
            </p>
            <Link className="text-link" href="/about">
              A little about us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <aside className="responsible-banner">
          <span className="responsible-icon" aria-hidden="true">✳</span>
          <p>Sport should always feel good. Keep it fun, balanced and on your terms.</p>
          <Link href="/responsible-play">Our play-well guide <span aria-hidden="true">↗</span></Link>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand-column">
            <SiteBrand className="footer-brand" />
            <p>Big moments, good company.<br />Find a little more room for play.</p>
            <a className="footer-contact" href="https://wa.me/917009784942?text=I%20WANT%20PLAY%20GAMES" rel="noopener noreferrer" target="_blank">
              <span aria-hidden="true">◉</span> Chat with us on WhatsApp
            </a>
          </div>
          <div className="footer-link-column">
            <h2>Explore</h2>
            <Link href="/#sports">Sports</Link>
            <Link href="/#games">Game concepts</Link>
            <Link href="/#providers">Game studios</Link>
            <Link href="/#fixtures">Featured fixtures</Link>
          </div>
          <div className="footer-link-column">
            <h2>Information</h2>
            <Link href="/about">About us</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
            <Link href="/responsible-play">Responsible play</Link>
            <Link href="/sitemap.xml">XML sitemap</Link>
          </div>
          <div className="footer-trust-column">
            <h2>Safety &amp; availability</h2>
            <span className="age-mark">18<span>+</span></span>
            <p>
              Keep play in balance. Accounts, third-party game providers and
              payments are not connected in this preview.
            </p>
            <div className="footer-payment-badges" aria-label="Payments are not enabled">
              <span>NO CHECKOUT</span>
              <span>DEMO ONLY</span>
            </div>
            <span className="footer-badge">DEMO SITE · NO REAL-MONEY PLAY</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tiger365Games. All rights reserved.</span>
          <span>Concept games are previews only · Adults 18+ only</span>
        </div>
      </footer>
    </>
  );
}

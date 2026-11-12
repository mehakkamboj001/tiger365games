"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteBrand } from "./site-brand";

type AccountView = "login" | "signup" | null;
type GameCategory = "All" | "Sports" | "Arcade" | "Cards" | "Table" | "Puzzle";

const categories: GameCategory[] = [
  "All",
  "Sports",
  "Arcade",
  "Cards",
  "Table",
  "Puzzle",
];

const games: Array<{
  title: string;
  category: Exclude<GameCategory, "All">;
  mark: string;
  theme: string;
  detail: string;
}> = [
  { title: "Boundary Club", category: "Sports", mark: "06", theme: "gold", detail: "Cricket · Quick play" },
  { title: "Goal Rush", category: "Sports", mark: "⚽", theme: "green", detail: "Football · Match day" },
  { title: "Baseline Rally", category: "Sports", mark: "↗", theme: "blue", detail: "Tennis · Court side" },
  { title: "Track Legends", category: "Sports", mark: "01", theme: "red", detail: "Racing · Time trial" },
  { title: "Neon Hoops", category: "Arcade", mark: "◎", theme: "purple", detail: "Arcade · Fast rounds" },
  { title: "Lucky Lanterns", category: "Arcade", mark: "✦", theme: "pink", detail: "Arcade · Bright lights" },
  { title: "Royal Draw", category: "Cards", mark: "♠", theme: "red", detail: "Cards · Classic table" },
  { title: "Crown & Clover", category: "Cards", mark: "♣", theme: "green", detail: "Cards · Friendly game" },
  { title: "Velvet Wheel", category: "Table", mark: "◉", theme: "gold", detail: "Table · Spin demo" },
  { title: "Midnight Tiles", category: "Table", mark: "▦", theme: "blue", detail: "Table · Tile game" },
  { title: "Orbit Puzzles", category: "Puzzle", mark: "✳", theme: "purple", detail: "Puzzle · Brain break" },
  { title: "Color Circuit", category: "Puzzle", mark: "◈", theme: "pink", detail: "Puzzle · Match & play" },
];

const studios = [
  { name: "Tiger Originals", initials: "TG", specialty: "Original quick-play ideas" },
  { name: "Northstar Studio", initials: "NS", specialty: "Sports & match-day games" },
  { name: "Golden Hour Games", initials: "GH", specialty: "Classic table concepts" },
  { name: "Redline Arcade", initials: "RA", specialty: "Arcade-style challenges" },
  { name: "Wildcard Workshop", initials: "WW", specialty: "Cards & friendly play" },
  { name: "Fieldhouse Interactive", initials: "FH", specialty: "Team sports concepts" },
];

const whatsappHref =
  "https://wa.me/917009784942?text=I%20WANT%20PLAY%20GAMES";

export function HomeHeader() {
  const [accountView, setAccountView] = useState<AccountView>(null);

  useEffect(() => {
    if (!accountView) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setAccountView(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [accountView]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <SiteBrand />
          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/#sports">Sports</Link>
            <Link href="/#games">Games</Link>
            <Link href="/#providers">Studios</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className="account-actions">
            <button
              className="account-button account-login"
              onClick={() => setAccountView("login")}
              type="button"
            >
              Log in
            </button>
            <button
              className="account-button account-signup"
              onClick={() => setAccountView("signup")}
              type="button"
            >
              Sign up
            </button>
          </div>
        </div>
      </header>

      {accountView && (
        <div
          className="account-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setAccountView(null);
          }}
        >
          <section
            aria-labelledby="account-dialog-title"
            aria-modal="true"
            className="account-dialog"
            role="dialog"
          >
            <button
              aria-label="Close dialog"
              autoFocus
              className="account-close"
              onClick={() => setAccountView(null)}
              type="button"
            >
              ×
            </button>
            <div className="account-dialog-mark" aria-hidden="true">T<span>365</span></div>
            <p className="eyebrow"><span>TIGER365GAMES</span> WELCOME</p>
            <h2 id="account-dialog-title">
              {accountView === "login" ? "Welcome back." : "Join the fun."}
            </h2>
            <p className="account-dialog-copy">
              {accountView === "login"
                ? "Account access is not connected on this demo site yet."
                : "Sign-up is not connected on this demo site yet. Message us for game information."}
            </p>
            <a className="button button-primary account-contact" href={whatsappHref} rel="noopener noreferrer" target="_blank">
              Continue on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <p className="account-safety">
              Demo only · no password, payment or account details are collected.
              Available to adults 18+ only.
            </p>
            <button
              className="account-switch"
              onClick={() => setAccountView(accountView === "login" ? "signup" : "login")}
              type="button"
            >
              {accountView === "login"
                ? "New here? Explore sign up"
                : "Already have an account? Log in"}
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export function GameCollections() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>("All");
  const visibleGames =
    selectedCategory === "All"
      ? games
      : games.filter((game) => game.category === selectedCategory);

  return (
    <>
      <section className="games-section section-wrap" id="games" aria-labelledby="games-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>THE ARCADE</span> FIND YOUR NEXT FAVOURITE</p>
            <h2 id="games-title">A little bit of <em>play.</em></h2>
          </div>
          <p className="section-intro">
            Browse original game concepts across sports, arcade, cards, table
            and puzzles.
          </p>
        </div>
        <div className="game-filters" aria-label="Filter game concepts">
          {categories.map((category) => (
            <button
              aria-pressed={selectedCategory === category}
              className={`game-filter${selectedCategory === category ? " is-active" : ""}`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div aria-live="polite" className="game-grid">
          {visibleGames.map((game, index) => (
            <article className={`game-card game-${game.theme}`} key={game.title}>
              <div aria-hidden="true" className="game-art">
                <span className="game-art-orbit" />
                <span className="game-art-mark">{game.mark}</span>
                <span className="game-art-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="game-card-copy">
                <span className="game-category">{game.category} · DEMO CONCEPT</span>
                <h3>{game.title}</h3>
                <p>{game.detail}</p>
              </div>
              <span className="game-soon">Coming soon</span>
            </article>
          ))}
        </div>
        <p className="catalog-note">
          These are original concept listings for preview only. Games are not
          connected or playable, and no real-money play is offered.
        </p>
      </section>

      <section className="providers-section" id="providers" aria-labelledby="providers-title">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span>MADE FOR THE ARCADE</span> MEET THE CREATIVE TEAMS</p>
              <h2 id="providers-title">Game <em>studios.</em></h2>
            </div>
            <p className="section-intro">
              A roster of original, illustrative studio concepts behind our
              planned game collection.
            </p>
          </div>
          <div className="studio-grid">
            {studios.map((studio, index) => (
              <article className="studio-card" key={studio.name}>
                <span className="studio-number">0{index + 1}</span>
                <span aria-hidden="true" className="studio-monogram">{studio.initials}</span>
                <div>
                  <h3>{studio.name}</h3>
                  <p>{studio.specialty}</p>
                </div>
                <span aria-hidden="true" className="studio-arrow">↗</span>
              </article>
            ))}
          </div>
          <p className="catalog-note">
            Studio names shown are original concepts, not third-party providers
            or active integrations.
          </p>
        </div>
      </section>
    </>
  );
}

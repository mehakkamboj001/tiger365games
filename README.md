# Tiger365Games

A sports discovery site built with Next.js App Router. The user-provided
Tiger365Games logo and original sports illustrations are served locally.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Next.js (usually
[http://localhost:3000](http://localhost:3000)).

## SEO and sitemap

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before deploying.
It is used for canonical metadata, `robots.txt` and the generated
`/sitemap.xml`. The sitemap includes the homepage, about and responsible-play
pages, and each sports page. Next.js serves both SEO routes automatically.

Run `npm run typecheck` and `npm run build` to validate the application.# tiger365games

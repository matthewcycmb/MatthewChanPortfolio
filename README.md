# Matthew Chan's portfolio

A compact personal portfolio: the homepage has an introduction and age overview, `/work` lists Konvo, Hall of Hacks and Instagram, and `/timeline` holds the complete timeline. All three pages share the top navigation. Konvo has a separate case study, and Hall of Hacks has a one-page journal with database screenshots and the launch Reel. Content is editable in plain files.

```sh
npm ci
npm run dev
```

Preview: http://127.0.0.1:3000

Start with [the update guide](docs/UPDATE-GUIDE.md). Matthew's answers are retained in [the interview record](docs/INTERVIEW.md), and publication boundaries in [the claims audit](docs/CLAIMS.md).

See the [monthly layout preview on Konvo](http://127.0.0.1:3000/work/konvo#monthly-updates). July and September have text and photo placeholders ready to fill in. Optional private writing files: [July 2026](private/journal/2026-07.md), [September 2026](private/journal/2026-09.md), and [the reusable template](docs/MONTHLY-TEMPLATE.md).

```sh
npm run check
npm run build
```

No CMS, database, tracking, or external font service. Raw evidence is never served. The local review panel is disabled in every production build. No deployment has been made.

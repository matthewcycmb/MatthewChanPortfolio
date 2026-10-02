# Updating Matthew’s portfolio

Run `npm ci`, then `npm run dev`. Open http://127.0.0.1:3000.

## Write a monthly update

See the monthly entries on [the Konvo page](http://127.0.0.1:3000/work/konvo#monthly-updates). Each month initially shows a short preview and one photo. “Read the full month” opens the complete account and remaining media. July covers starting, the API restriction and the website dependency. August includes Aden’s feedback and the acceptance memory. September explains the launch, paywall fix, customer follow-up, marketing, dated results and Starter Story publication. Keep the initial page around 350–500 visible words, including the opening, headings, captions and controls; complete accounts can be longer.

Matthew’s latest direction prioritizes a connected story in his own voice over the earlier two- or three-sentence target. Choose one thread for each preview, using his supplied wording to connect what he thought, what happened and what he did next. Use short sentences and paragraph breaks where they sound natural. Do not compress every milestone into a roundup or invent feelings, lessons or causal links. July currently follows hesitation through Alisa’s encouragement to a working version; August follows review waits through acceptance; September follows launch surprise through doubts to the Reel he posted on his parents’ advice. Other developments remain in the full month.

Edit for what he expected, what he observed, what he changed and what remains unresolved. This is an editing lens, not four repeated public headings. Describe only checks he actually performed: for build 82, he contacted the people who reported the issue and most confirmed it worked. A test existing in the source is not evidence he personally ran it. September now includes measured exact-day returns with separate cohort dates. Views, downloads, revenue and repeat opening still do not establish reduced scrolling.

Edit `content/stories/konvo-update-<month>-2026.md` for the full account and `content/stories/konvo-preview-<month>-2026.md` for its short preview. Keep dates, attribution and outcomes consistent between them. Set the title, `preview` slug, `story` slug and reviewed `photos` in `konvoUpdates` in `content/konvo.ts`. The first photo appears beside the preview; remaining photos, `appStore` media and `video` appear inside the full month. Captions come from the photo records. Set `template: false` when the text is ready; photos can be added later. To add a month, give it a unique ID, month/date and both story filenames. Template entries and empty photo spaces remain development-only, even with `PORTFOLIO_REVIEW=1` in production.

Open [July 2026](../private/journal/2026-07.md) or [September 2026](../private/journal/2026-09.md) and replace the brackets with four sentences. Add a couple of photo paths or links and short captions. For another month, copy [the template](MONTHLY-TEMPLATE.md) into `private/journal/` with a name like `2026-10.md`.

These drafts are ignored by Git and are not rendered by the website. When ready, turn a selected entry into a timeline story with reviewed photos. Keep Matthew’s words and the existing compact layout.

## Use the Starter Story interview

Matthew’s [September 30 interview](https://www.starterstory.com/stories/konvoinstall-com) is an additional first-person source and voice reference. Read [STARTER-STORY.md](STARTER-STORY.md) for the source comparison and unresolved details. September now includes the September 28 Reel, his parents’ advice, InstantDM and the article’s publication. Preserve the older snapshots as dated history. The 2 million views describe one Reel in less than 24 hours, not downloads or a new total across platforms. Keep the clean article link in `links.starterStory` and the dated story paragraph. Do not copy the $10K/month headline into results until currency, period and revenue definition are clarified. Do not silently replace August 21 approval / September 1 promotion with “three days before launch.” Article publication does not independently verify its numbers or authorize republishing its screenshots.

## Update the Hall of Hacks journal

`/work/hall-of-hacks` is one fully expanded journal page. Under the header, `content/stories/hall-of-hacks-intro.md` gives a short product-and-results paragraph, followed by the launch Reel. The complete story then follows in `hall-of-hacks-origin.md`, the database screenshots, `hall-of-hacks-launch.md` and `hall-of-hacks-reflection.md`. These narrative files all live under `content/stories/`; they allow reviewed media between paragraphs without splitting the story across pages. Preserve Matthew’s supplied voice, Julia’s Smii collaboration credit, the Fable-assisted building account and the unspecified personal reasons for pausing. Keep the opening’s approximate 3,000 first-month users and 197,000 launch-Reel views consistent with the full account. Do not invent technical architecture, exact launch/stop dates or later work.

Its header matches Konvo: the existing Hall of Hacks wordmark in the shared white cover frame above the title, then “Founder · June 2026” and the website/database/Reel links. `hallOfHacksJournal` in `content/portfolio.ts` supplies the title, role, period and reviewed cover. Reuse `.case-product-cover`, `.product-print`, `.case-header` and `.project-links` so both pages keep the same typography, spacing and mobile wrapping.

The work list links to this journal. Live website, database, launch Reel, embed and follow-up Reel URLs live in `content/portfolio.ts`. The Instagram iframe embeds the supplied launch permalink, has an accessible title and waits for the viewer to play. Keep the direct launch and follow-up links visible for readers whose browser cannot play the embed, including without JavaScript. Do not swap likes for views or silently replace a permalink with a profile feed.

The two database images in `content/photos.ts` are signed-out public-page captures, dated September 30, 2026. Preserve that date instead of presenting them as June screenshots. Keep original captures private, publish only inspected copies, and use the existing photo viewer for enlargement. The new page uses the existing cream/brown portfolio style, with styles scoped to `.journal-*`. Keep the latest 3,000-user / 197,000-launch-view prose consistent with the homepage while retaining unresolved definitions in `docs/CLAIMS.md`.

## Update the age overview

The overview uses inline HTTPS Markdown links for `hallofhackss.com`, `konvoinstall.com`, `@matthewasherelol`, `2M views` and `Starter Story`. The 2M-view link uses the existing September viral Reel destination, `https://www.instagram.com/p/Dd0TQrPo5mZ/`. LinkedIn launch impressions stay omitted from this summary. The existing Story renderer supplies underlined, keyboard-accessible links opening in a new tab. Links within the Home, Work and Timeline columns use bold (700) blue text and underlines (#356da8) against the cream background. The top navigation retains its existing dark text.

Use the footer’s top border as the single closing divider after the last age group, with no extra footer top margin or age-group bottom border. The age group supplies 32px of bottom padding. The footer follows the overview; Work and Timeline now have their own pages. The latest `@16` wording begins “15,000 downloads & 5 figures in revenue,” followed by “3,000,000+ organic views w/ $0 in ad spend” and “now building konvoinstall.com.” The next group reads “hit 10k followers on @matthewasherelol” and “hit 2M views on instagram in less than 24 hours.” A final group contains “published my story on Starter Story.” Separate groups with a 15px extra gap; preserve 27px line spacing within each group. The App Store ranking, first-28-days phrase and solo parenthetical stay omitted from this overview at Matthew’s request. The latest `@12` Robux bullet reads “made 500,000+ robux selling pumpkin hats on roblox,” followed by “built b'gc - 3,000 members on roblox,” with b'gc linked to the supplied Roblox community.

The latest overview uses only `@12`, `@15` and `@16`, with 2 bullets at 12, 3 bullets at 15 and 6 plain statements grouped into 3 paragraphs at 16. Age 16 ends with “i'm just getting started” after a 15px extra gap, giving a 42px step from the preceding line; its text is in `overview-age-16-closing.md`. Preserve Matthew’s exact wording, lowercase openings and compact numbers. The `@15` hackathon line is “won 1st and placed in 4 hackathons ‼️,” followed by “built hallofhackss.com” with its existing link and “3,000 users & 200,000+ organic views in 14 days.” The Hall of Hacks overview omits the earlier solo/bootstrapped shorthand. The named-app comparison stays removed. Keep unresolved ranking and measurement definitions in `CLAIMS.md`; do not rewrite the retained timeline or project journals to reconcile older scopes. Detailed contribution accounts remain in those stories. `overview-age-14.md` is retained as unused history. This supersedes earlier guidance to synchronize overview figures with the project pages.

The age overview remains on the homepage; Matthew’s latest direction moves the complete timeline to `/timeline`. `ageOverview` in `content/portfolio.ts` maps confirmed ages to `content/stories/overview-age-<age>.md`. The record’s `format` chooses list items through `<Story as="li" />` or plain paragraphs through `<Story />`. An optional `closingStory` supplies the separated closing paragraph for the plain-line format. Each blank-line-separated source paragraph becomes one item or paragraph; for age 16, use the existing backslash line-break syntax to keep related statements in one paragraph. Keep the overview brief and use the already supplied accounts, individual contributions and dated results. Do not infer ages from calendar years or backdate later results to when an activity began. The list keeps `role="list"` because its bullet glyphs are positioned with CSS to match the reference.

The homepage uses Geist, a 650px outer column, 32px desktop gutters, 20px page heading, 18px section headings, and 15px age labels/bullets. Bullet line height is 21px; age labels and the plain lines under age 16 use 27px. The overview heading reads “SO FAR:”. Dividers have 32px of space on either side. The October 1 top navigation precedes the column, whose top padding is now 32px at every width, with 24px mobile gutters. The locally hosted font is `app/fonts/geist-latin.woff2`, with `LICENSE-geist.txt`. See `docs/HOMEPAGE-TYPOGRAPHY.md` for original source measurements and the later navigation adjustment. Keep the timeline structure and existing project-page styles.

`components/portfolio-page.tsx` shares the locally loaded Geist font, `.home-header`, main column and footer across `/`, `/work` and `/timeline`. The header shares the column’s centered 650px width and gutters, with 8px vertical padding. Home, Work and Timeline link to real routes, with an underlined `aria-current="page"` state. The square also links home. LinkedIn uses `links.linkedin` and opens in a new tab. Keep the skip link first in keyboard order, the navigation non-sticky, and all four labels visible on mobile. Project journals keep their existing cream/brown styles and both back links return to `/work`.

## The structure

The homepage opens with “HEY, I'M MATTHEW,” followed by the linked “KONVOINSTALL.COM” heading and Matthew’s supplied introduction in `content/stories/home-intro.md`, then the age overview and profile links. `homeIntro` in `content/portfolio.ts` supplies the heading label, destination and story slug. The product heading uses 20px bold blue type with a 15px bottom gap; the introduction uses 15px type, 27px line spacing and a 15px extra gap before the product sentence. The earlier `profile.intro` text is retained as unused source history. `/work` contains the Konvo, Hall of Hacks and Instagram work list. Use the same 0.5px rule for the heading, work rows and shared-column footer. Work rows have 16px vertical padding and a 68px minimum height; remove the Work heading’s extra bottom margin so the first row has the same clearance from its rule. Omit the last row’s bottom rule and the footer’s top margin so one footer separator closes the list. `/timeline` contains all six original milestones with their full prose and photos. These are separate server-rendered pages, not hidden homepage sections.

Konvo’s page has one short product-and-dated-results paragraph followed directly by the visible YouTube player, a closed “Why I built Konvo” disclosure, and three monthly previews with “Read the full month” disclosures. The complete origin story, solo AI-assisted role paragraph and photos remain inside the origin disclosure. Hall of Hacks opens its one-page journal; Instagram links directly to the profile. The Timeline page has no More buttons; Konvo’s disclosures are a separate, explicitly requested project-page feature. Native `details`/`summary` keeps all reading available without JavaScript.

- `content/portfolio.ts`: identity, links, work entries, timeline, updated date.
- `content/stories/*.md`: paragraphs separated by blank lines, with optional `**bold emphasis**` and `[link text](https://example.com)` links. Links support HTTPS destinations only and open in a new tab. End a line with a backslash for an explicit line break within a paragraph. Ordinary source newlines remain spaces. React escapes all text; HTML and other Markdown features are not evaluated.
- `content/metrics.ts`: verified definitions, dates, reporting periods, currency, public-safe evidence and approval flags.
- `public/images/`: reviewed public-safe copies only. Originals and private analytics stay outside Git.
- `app/globals.css`: the shared narrow-column layout, typography and responsive styles.

Update `profile.updated` and `profile.updatedISO` when publishing new information. Age, school year, dates and status are manual. Never make an old result look current. Add actual dates only when known; live demos do not establish launch dates, customers or solo authorship.

## Add work or a timeline entry

Add a record to `work` or `timeline` in `content/portfolio.ts`. Internal project links need a matching `app/work/<name>/page.tsx`. Use actual screenshots or an explicitly typographic label when a screenshot is missing. Use the longer project description on the project’s page, not as extra homepage paragraphs.

Each timeline record has a friendly `title`, a `period` and a short `story` filename. Historical `more` filenames are retained as source references but are not rendered. Dates sit on the left of a continuous line with one dot per milestone; titles and stories sit on the right. Optional `media` records (`{ photo, label }`) add small clickable images beneath the description, using public-safe records from `content/photos.ts`. Keep images out of the date column and leave out horizontal dividers. Keep results within the short story, rather than separate large numbers. More buttons and their expandable sections have been removed at Matthew’s request. Keep longer explanations and evidence in the retained source files; do not restore them to the timeline.

Use restrained bold emphasis where established evidence or an explicitly qualified personal account supports it. Instagram and Konvo emphasize just individual numbers. Instagram’s results stay in the story paragraph. Konvo has a separate dated results paragraph for downloads and gross revenue. Its former combined organic-view figure and forced break are removed after Matthew clarified that the total mixed LinkedIn impressions and Instagram views. Titles remain larger than the emphasized body text. Dates describe when a chapter began, not necessarily the period of every later result.

Adjacent timeline paragraphs have an 8px gap. In the Instagram and Konvo result sentences, nonbreaking spaces keep each number and its short label together (for example, “$1,066 in revenue”). Preserve those spaces when editing numbers. Let whole phrases wrap naturally on mobile rather than forcing a fixed line count; paragraph wrapping also avoids isolated final words where supported.

Matthew explicitly approved the current first-person figures and asked to remove “reported” / “draft” labels. Those descriptions render identically in development and production. `docs/CLAIMS.md` retains the unresolved definitions, dates and evidence; do not restore visitor-facing editorial labels. This approval does not establish independent verification or authorize inventing new metrics. Preserve his latest supplied Roblox sentence, which uses “500,000 Robux” without “about.” The older timeline review data and components have been removed.

A project page should explain what Matthew did, a real decision and its outcome, with relevant evidence nearby. A short page is fine. Avoid empty sections added just to match a template.

## Add Konvo results

`content/stories/konvo-short-intro.md` is one plain paragraph combining what Konvo does with the dated 15,000+ downloads, 3 million organic views and five figures in revenue snapshot. Matthew requested Diwen’s short product-and-results style: no separate results heading, no bold metrics and the demo directly below. The original `konvo-results.md` is retained as source history but no longer rendered. His full personal background stays in `konvo-summary.md`; his exact role paragraph now lives in `konvo-short-role.md`, displayed inside “Why I built Konvo.” Keep the current snapshot consistent with `timeline-konvo.md` and `overview-age-16.md`. September 30, 2026 is inferred from his “right now” report; confirmation of the exact cutoff, view platforms and revenue definition remains pending in `docs/CLAIMS.md`. Preserve “five figures in revenue” without inventing a currency, monthly period, gross/net label or recurring-revenue claim.

The full September entry and its image retain the historical September 21 snapshot of 1,500 downloads and US$1,066 gross revenue. That older figure is not profit or MRR; the retained dashboard uses a Last 28 days filter. Do not overwrite historical numbers or extend the old 13-country count to the current results. The website edit date is separate from measurement dates. The demo player remains directly below the opening paragraph, with product mockups above the title and a Demo anchor link in the project navigation.

Retain dates, definitions and evidence in `docs/CLAIMS.md` and `content/metrics.ts`. To establish a verified metric record, confirm its definition, measurement date, reporting period, source, public approval and currency for money. Existing unresolved records remain unverified; Matthew’s permission to use his first-person numbers does not change those flags. Raw analytics and identifiers must never enter `public/`.

Pricing experiments need variants, prices, dates, sample sizes, funnel definitions, results, and whether variants ran simultaneously or in separate periods. Keep impressions, downloads, trials, subscriptions and paying customers distinct.

September's public reach figures are Matthew's approximate one-post LinkedIn account, around 200,000 impressions in the first three days, and around 80,000 views for his Instagram posts about Konvo as of September 27. Keep these measures separate from each other and from the September 21 download/revenue snapshot. Do not use the old aggregate slide as post-specific evidence. The gallery uses `photos.septemberResults`, the original RevenueCat/download chart crop. Keep the original source image intact.

Repeat-use analysis has a separate September 26 cutoff. Preserve the first-event definition, eligible cohort dates, denominators and exact-day return meaning whenever updating those figures. The first-open and first-chat cohorts cannot be substituted for all downloads or paying customers. Use native retention queries and exclude immature follow-up periods. Queries and private limitations are in `private/analytics/2026-09-27-konvo-repeat-use.md`; only reviewed aggregate prose renders publicly. Chat opening is not proof of a sent message or less scrolling. Matthew's marketing account now includes download spikes and comment-to-DM links as signals behind his preference for talking-head posts; these do not establish a per-post installation count or a controlled conversion comparison.

For editorial edits, retain the existing snapshots until Matthew requests an update; do not fetch fresh analytics. Describe Day 7 events as recorded app/chat opens and keep the brief note that tracking may miss some reopenings. Preserve the honest paywall account without adding lessons or process changes he has not described.

Unresolved material lives in `docs/CLAIMS.md`. Empty monthly photo spaces appear only in development and can be hidden with `PORTFOLIO_REVIEW=0`. Production always omits them, even if the flag is set to 1.

## Images and video

The Konvo timeline thumbnail uses `photos.konvoAppStoreTimeline`, Matthew’s supplied blue App Store listing image, with the preview label “App Store.” Preserve the complete image with `fit: 'contain'` and the existing click-to-enlarge behavior. The earlier redacted inbox remains a separate historical asset.

A transparent three-phone image sits below the complete origin description, followed by the working photo, inside “Why I built Konvo.” `photos.konvoCutout` points to `public/images/konvo-phone-cutout.webp`. Its original screen pixels are retained; only the background alpha is extracted. `.case-mockups` removes the paper frame and adds a soft CSS shadow. It remains clickable to enlarge, with a direct image link without JavaScript. Keep the framed cover above the title unchanged. The editing prompt and method are in `docs/KONVO-CUTOUT.md`.

Monthly galleries use straight 12px rounded frames, thin borders and no paper padding or shadows. Each visible preview photo keeps its original proportions at up to 340px wide. Extra photos inside the full month use the existing single/grid presentation; paired images fit inside a 4:3 area. The August gallery retains its listing-banner and screenshot-strip styles. This styling is scoped to the monthly entries; timeline thumbnails, the work list and project cover keep their established presentation. The larger photo viewer always shows the complete reviewed image.

August places the expandable acceptance image directly below its preview. Its white-framed listing, four App Store panels and self-hosted phone demo appear inside “Read the full month,” after the complete text. The optional `appStore` record in `content/konvo.ts` supplies a `listing` photo and `screenshots` array. Panels share a row on desktop and scroll horizontally on small screens; each opens the full image. The demo remains centred at up to 280px wide. Its `video` record supplies the MP4, poster, dimensions and description. Use native controls, `playsInline` and `preload="none"`. Matthew’s permission to leave real chats visible applies only to this supplied clip. Other private artifacts still require review/redaction. The acceptance image’s original-versus-recreated provenance remains unresolved in the audit.

Konvo opens with Matthew’s selected three-phone image (`public/images/konvo-product-cover.webp`) in a white photo frame above the title, without a visible caption. Keep its full frame and original proportions. The YouTube iframe loads immediately below the opening description, with a responsive 16:9 frame and rounded corners. It waits for the visitor to press play. Keep the actual YouTube player visible, rather than adding a custom click-to-load poster. The no-JavaScript YouTube link remains available.

Preserve original screenshots outside the public directory. Use cropped or redacted copies without altering evidence. The Konvo inbox copy masks the account and conversations; its caption identifies it as an earlier build. The full 2:18 video is an earlier build and mentions old pricing. The privacy-enhanced YouTube player loads eagerly; a fallback link appears without JavaScript.

Do not attribute marketing explorations or September 25 transitions to the RevisionDojo designer until the relationship and artifacts are confirmed. Do not generate childhood photos, product screenshots or evidence.

## Check changes

```sh
npm run check
npm run build
npm start
```

The routes are statically prerendered. The photo viewer uses a small client component; the video iframe is server-rendered; the timeline and evidence disclosure work without JavaScript. Fonts are served locally.

`node scripts/check-browser.mjs` uses local Chrome to check all pages at 1440, 768, 390 and 320 pixels, including accessibility, image loading, links, no-JavaScript reading, reduced motion and keyboard focus. Set `PORTFOLIO_TEST_URL` to test another local port. Reports and screenshots are saved in ignored `artifacts/`.

Vercel is connected to GitHub and deploys pushes to `main`. Use the repository root (`.`), the Next.js framework preset pinned in `vercel.json`, and the default framework output directory. Selecting “Other” serves `public/` and causes the homepage to return Vercel’s 404 even when `next build` succeeds. Add canonical metadata once Matthew chooses the final public domain.

## Add photos to the new layout

The photo layout is controlled in three small files:

- `content/photos.ts`: reusable photo records, dimensions, alt text and captions.
- `content/portfolio.ts`: each work row’s `photos` array and each timeline entry’s optional `media` array. Work images create small stacks. Timeline images appear below the short description, with a brief label and click-to-enlarge support. Add real photos as they become available; leave entries without suitable images as text.
- `content/konvo.ts`: monthly entries, preview/full story filenames and `photos` arrays. The first image is visible with the preview, at up to 340px wide; remaining media goes inside the full month. The separate full origin story is `content/stories/konvo-summary.md`; preserve Matthew’s supplied paragraph breaks. The former five standalone explanations are no longer rendered.

For example, after adding a reviewed, redacted image to public/images:

```ts
photos: [{
  src: '/images/konvo-early-version.webp',
  alt: 'Describe what the actual image shows.',
  width: 1200,
  height: 800,
  caption: 'Use a known date or clearly label an earlier build.',
}],
```

Do not add this example path until the image exists. You can also give Codex the real photo and the entry where it belongs. You do not need to retell the story.

Clicking a photo opens a larger view. Escape or the close button dismisses it and restores focus. Without JavaScript, the photo link opens the reviewed image directly. The native dialog contains only the same public-safe image, never the private original.

Empty monthly image slots appear only in development. Add a real photo record to replace them. Keep the Konvo overview brief; its longer source stories remain as editorial reference. Font files are now served locally, with their licenses alongside them.

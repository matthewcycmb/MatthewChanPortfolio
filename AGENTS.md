# Matthew's portfolio

Read docs/INTERVIEW.md, docs/CLAIMS.md, and docs/UPDATE-GUIDE.md before changing content.
Matthew's supplied language is the source. Light edits only. No em dashes, startup cliches, invented experiences, metrics, testimonials, or awards.
Keep individual contributions explicit. Konvo is solo, AI-assisted development; Smii was a collaboration with Julia Sung.
Never put private analytics, conversations, test-account details, or unredacted source screenshots in public/ or Git. private/ and artifacts/ are ignored.
Exception: Matthew explicitly authorized keeping the real chats visible in the supplied August product demo (`public/videos/konvo-product-demo.mp4`). Preserve that recording as supplied; this permission does not extend to other private material.
For new independently verified results, require dates, definitions and evidence. Matthew explicitly authorized the approximate first-person figures now in the timeline and Konvo results prose without editorial labels; preserve that wording and the unresolved audit in docs/CLAIMS.md. Do not mark those figures independently verified. Pending Robux balances cannot be summed into lifetime revenue. Downloads are not active users. Shipaton is a submission.
Editorial verification notes live in docs, not in the website. Local photo placeholders must never render in production, even if PORTFOLIO_REVIEW=1. Verify this in the production build.
Keep narrative in content/stories/*.md, public records in content/portfolio.ts, and evidence policy in lib/publication.ts. Do not put private editorial fields in Client Component props.
Use npm run check and npm run build. Inspect desktop/mobile, reduced motion, keyboard use, and no-JavaScript reading after layout changes.
Do not modify the separate Instamessages repository.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

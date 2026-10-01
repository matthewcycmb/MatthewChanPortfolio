import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { hallOfHacksJournal, links } from '@/content/portfolio';
import { photos } from '@/content/photos';
import { Story } from '@/components/story';
import { Photo } from '@/components/photo';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Hall of Hacks | Matthew Chan',
  description: 'How a walk home turned into my first launched software product: a database of winning hackathon projects.',
};

export default function HallOfHacks() {
  const { title, role, period, cover } = hallOfHacksJournal;
  return <div className="page case-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <Link className="back-link" href="/work" aria-label="Back to work"><span aria-hidden="true">‹</span></Link>
    <main id="main">
      <figure className="case-product-cover">
        <div className="product-print">
          <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} sizes="(max-width: 554px) calc(100vw - 64px), 482px" loading="eager" />
        </div>
      </figure>
      <header className="case-header">
        <h1>{title}</h1>
        <p className="case-meta">{role} · {period}</p>
        <nav className="project-links" aria-label="Hall of Hacks links">
          <a href={links.hallOfHacks} target="_blank" rel="noreferrer">hallofhackss.com</a>
          <a href={links.hallOfHacksFeed} target="_blank" rel="noreferrer">Database</a>
          <a href="#hall-of-hacks-reel">Launch Reel</a>
        </nav>
      </header>
      <div className="prose opening"><Story slug="hall-of-hacks-intro" /></div>
      <figure className="journal-reel" id="hall-of-hacks-reel">
        <iframe
          src={links.hallOfHacksReelEmbed}
          title="Matthew’s Hall of Hacks launch Reel on Instagram"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <figcaption>My launch video. <a href={links.hallOfHacksReel} target="_blank" rel="noreferrer">Watch on Instagram</a> · <a href={links.hallOfHacksFollowUpReel} target="_blank" rel="noreferrer">Follow-up video</a></figcaption>
      </figure>
      <div className="prose journal-copy"><Story slug="hall-of-hacks-origin" /></div>
      <div className="journal-gallery" aria-label="Hall of Hacks database screenshots">
        <Photo photo={photos.hallOfHacksDatabase} />
        <Photo photo={photos.hallOfHacksHealth} />
      </div>
      <div className="prose journal-copy"><Story slug="hall-of-hacks-launch" /></div>
      <div className="prose journal-copy"><Story slug="hall-of-hacks-reflection" /></div>
      <div className="case-end"><Link href="/work">← Back to work</Link></div>
    </main>
    <Footer />
  </div>;
}

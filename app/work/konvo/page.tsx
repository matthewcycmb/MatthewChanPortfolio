import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/content/portfolio';
import { photos } from '@/content/photos';
import { Story } from '@/components/story';
import { Footer } from '@/components/footer';
import { Video } from '@/components/video';
import { Photo } from '@/components/photo';
import { KonvoUpdates } from '@/components/konvo-updates';

export const metadata: Metadata = { title: 'Konvo | Matthew Chan', description: 'Instagram messages without the scrolling. Photos, decisions, and a few things I learned building Konvo.' };

export default function Konvo() {
  return <div className="page case-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <Link className="back-link" href="/work" aria-label="Back to work"><span aria-hidden="true">‹</span></Link>
    <main id="main">
      <figure className="case-product-cover">
        <div className="product-print">
          <Image src="/images/konvo-product-cover.webp" alt="Three Konvo screens showing the inbox, Instagram blocking, and a timed unlock prompt." width={900} height={600} sizes="(max-width: 554px) calc(100vw - 64px), 482px" loading="eager" />
        </div>
      </figure>
      <header className="case-header"><h1>Konvo</h1><p className="case-meta">Founder, CEO · 2026</p><nav className="project-links" aria-label="Konvo links"><a href={links.konvo} target="_blank" rel="noreferrer">konvoinstall.com</a><a href={links.appStore} target="_blank" rel="noreferrer">App Store</a><a href="#konvo-demo">Demo</a><a href={links.source} target="_blank" rel="noreferrer">Source</a><a href={links.starterStory} target="_blank" rel="noreferrer">Starter Story</a></nav></header>
      <div className="prose opening"><Story slug="konvo-short-intro" /></div>
      <figure className="case-cover" id="konvo-demo"><Video href={links.video} /></figure>
      <details className="case-summary reading-details">
        <summary>Why I built Konvo</summary>
        <div className="reading-content">
          <div className="prose"><Story slug="konvo-summary" /><Story slug="konvo-short-role" /></div>
          <div className="case-mockups"><Photo photo={photos.konvoCutout} /></div>
          <Photo photo={photos.working} />
        </div>
      </details>
      <KonvoUpdates />
      <div className="case-end"><Link href="/work">← Back to work</Link></div>
    </main>
    <Footer />
  </div>;
}

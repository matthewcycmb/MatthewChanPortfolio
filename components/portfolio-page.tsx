import type { ReactNode } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { links } from '@/content/portfolio';
import { Footer } from '@/components/footer';

const geist = localFont({ src: '../app/fonts/geist-latin.woff2', variable: '--font-home', display: 'swap', weight: '100 900' });

export function PortfolioPage({ children, currentPage }: { children: ReactNode; currentPage: 'home' | 'work' | 'timeline' }) {
  return <div className={`home-shell ${geist.variable}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="home-header">
      <Link className="home-mark" href="/" aria-label="Matthew Chan, home"><span aria-hidden="true" /></Link>
      <nav aria-label="Main navigation">
        <Link href="/" aria-current={currentPage === 'home' ? 'page' : undefined}>Home</Link>
        <Link href="/work" aria-current={currentPage === 'work' ? 'page' : undefined}>Work</Link>
        <Link href="/timeline" aria-current={currentPage === 'timeline' ? 'page' : undefined}>Timeline</Link>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </header>
    <div className="page home-page">
      <main id="main">{children}</main>
      <Footer />
    </div>
  </div>;
}

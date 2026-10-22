import type { Metadata } from 'next';
import Link from 'next/link';
import { onboardingGallery } from '@/content/portfolio';
import { Photo } from '@/components/photo';
import { Story } from '@/components/story';
import styles from './gallery.module.css';

export const metadata: Metadata = {
  title: 'Konvo onboarding | Matthew Chan',
  description: 'All screens and design variations from my Konvo onboarding redesign.',
};

export default function OnboardingGallery() {
  return <div className={styles.gallery}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={styles.header}>
      <Link className={styles.brand} href="/work/konvo" aria-label="Konvo story">konvo</Link>
      <Link href={onboardingGallery.backHref}>← Back to the update</Link>
    </header>
    <main id="main" className={styles.main}>
      <div className={styles.intro}>
        <p className={styles.date}>{onboardingGallery.period}</p>
        <h1>{onboardingGallery.title}</h1>
        <Story slug={onboardingGallery.story} />
      </div>
      <ol className={styles.screens} aria-label="Onboarding screens and variations" role="list">
        {onboardingGallery.screens.map((photo) => <li key={photo.src}><Photo photo={photo} /></li>)}
      </ol>
      <footer className={styles.footer}>
        <span>{onboardingGallery.screens.length} screens and variations</span>
        <Link href={onboardingGallery.backHref}>← Back to the update</Link>
      </footer>
    </main>
  </div>;
}

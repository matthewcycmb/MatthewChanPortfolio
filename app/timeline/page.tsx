import type { Metadata } from 'next';
import { timeline } from '@/content/portfolio';
import { PortfolioPage } from '@/components/portfolio-page';
import { Story } from '@/components/story';
import { Photo } from '@/components/photo';

export const metadata: Metadata = { title: 'Timeline | Matthew Chan' };

export default function Timeline() {
  return <PortfolioPage currentPage="timeline">
    <header className="intro"><h1>timeline</h1></header>
    <ol className="timeline">{timeline.map((entry) => <li key={entry.id} id={`chapter-${entry.id}`}>
      <header className="timeline-heading">
        <span className="timeline-date">{entry.period}</span>
        <h3>{entry.title}</h3>
      </header>
      <div className="timeline-content">
        <Story slug={entry.story} />
        {entry.media && <div className="timeline-media">{entry.media.map(({ photo, label }) => <Photo key={photo.src} photo={photo} variant="thumbnail" previewCaption={label} />)}</div>}
      </div>
    </li>)}</ol>
  </PortfolioPage>;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { work } from '@/content/portfolio';
import { PortfolioPage } from '@/components/portfolio-page';
import { PhotoStack } from '@/components/photo-stack';

export const metadata: Metadata = { title: 'Work | Matthew Chan' };

export default function Work() {
  return <PortfolioPage currentPage="work">
    <header className="intro"><h1>work</h1></header>
    <ul className="work-list">{work.map((project) => {
      const external = project.href.startsWith('https:');
      return <li key={project.name}>
        <Link className="work-link" href={project.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          <PhotoStack photos={project.photos} label={project.name.toLowerCase()} />
          <span className="work-copy"><span className="work-title">{project.name}<span className="link-arrow" aria-hidden="true">↗</span></span></span>
          <span className="work-date">{project.period || project.status}</span>
        </Link>
      </li>;
    })}</ul>
  </PortfolioPage>;
}

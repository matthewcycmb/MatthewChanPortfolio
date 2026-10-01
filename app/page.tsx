import { homeIntro, ageOverview } from '@/content/portfolio';
import { Story } from '@/components/story';
import { PortfolioPage } from '@/components/portfolio-page';

export default function Home() {
  return <PortfolioPage currentPage="home">
    <header className="intro">
      <h1>HEY, I&apos;M MATTHEW</h1>
      <section className="intro-project" aria-labelledby="intro-project-heading">
        <h2 id="intro-project-heading"><a href={homeIntro.href} target="_blank" rel="noreferrer">{homeIntro.label}</a></h2>
        <div className="intro-copy"><Story slug={homeIntro.story} /></div>
      </section>
    </header>
    <section className="home-section age-overview" aria-labelledby="age-overview-heading">
      <h2 id="age-overview-heading">so far:</h2>
      {ageOverview.map(({ age, story, format, closingStory }) => <section className="age-chapter" key={age} aria-labelledby={`age-${age}`}>
        <h3 id={`age-${age}`}>@{age}</h3>
        {format === 'lines' ? <div className="age-lines">
          <Story slug={story} />
          {closingStory && <div className="age-closing"><Story slug={closingStory} /></div>}
        </div> : <ul role="list"><Story slug={story} as="li" /></ul>}
      </section>)}
    </section>
  </PortfolioPage>;
}

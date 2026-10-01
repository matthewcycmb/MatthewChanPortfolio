import 'server-only';
import { konvoUpdates } from '@/content/konvo';
import { isLocalReview } from '@/lib/publication';
import { Story } from './story';
import { Photo } from './photo';

export function KonvoUpdates() {
  const review = isLocalReview(process.env.NODE_ENV, process.env.PORTFOLIO_REVIEW);
  const updates = konvoUpdates.filter((update) => !update.template || review);
  if (!updates.length) return null;

  return <section className="monthly-updates" id="monthly-updates" aria-labelledby="monthly-updates-heading">
    <header className="monthly-updates-heading">
      <h2 id="monthly-updates-heading">monthly notes</h2>
      {updates.some((update) => update.template) && <p>Layout preview · Replace the brackets with your words and photos.</p>}
    </header>
    {updates.map((update) => <article className="monthly-entry" id={`update-${update.id}`} key={update.id} aria-labelledby={`update-${update.id}-title`}>
      <header>
        <time dateTime={update.date}>{update.month}</time>
        <h3 id={`update-${update.id}-title`}>{update.title}</h3>
      </header>
      <div className="prose monthly-preview"><Story slug={update.preview} /></div>
      {update.photos[0] && <div className="photo-single monthly-preview-photo">
        <Photo photo={update.photos[0]} />
      </div>}
      <details className="reading-details monthly-details">
        <summary aria-label={`Read the full month: ${update.month}`}>Read the full month</summary>
        <div className="reading-content monthly-full">
          <div className="prose"><Story slug={update.story} /></div>
          {update.photos.length > 1 && <div className={update.photos.length === 2 ? 'photo-single' : 'photo-grid'}>
            {update.photos.slice(1).map((photo) => <Photo key={photo.src} photo={photo} />)}
          </div>}
          {update.appStore && <div className="app-store-gallery">
            <div className="app-store-banner"><Photo photo={update.appStore.listing} /></div>
            <div className="app-store-panels" role="group" aria-label="Konvo App Store screenshots">
              {update.appStore.screenshots.map((photo) => <Photo key={photo.src} photo={photo} />)}
            </div>
          </div>}
          {update.video && <figure className="monthly-video">
            <video controls playsInline preload="none" poster={update.video.poster} width={update.video.width} height={update.video.height} aria-label={update.video.title} aria-describedby={`update-${update.id}-video-caption`}>
              <source src={update.video.src} type="video/mp4" />
              <a href={update.video.src}>Watch the Konvo demo</a>
            </video>
            <figcaption id={`update-${update.id}-video-caption`}>{update.video.description}</figcaption>
          </figure>}
        </div>
      </details>
      {!update.photos.length && !update.video && !update.appStore && review && <div className="photo-grid monthly-placeholders">
        {[1, 2].map((number) => <figure className="monthly-placeholder" key={number}>
          <div className="monthly-photo-space"><span>Photo or screenshot {number}</span></div>
          <figcaption>[A short caption for this photo.]</figcaption>
        </figure>)}
      </div>}
    </article>)}
  </section>;
}

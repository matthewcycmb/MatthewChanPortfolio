import 'server-only';
import Image from 'next/image';
import Link from 'next/link';
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
      <h2 id="monthly-updates-heading">notes &amp; updates</h2>
      {updates.some((update) => update.template) && <p>Layout preview · Replace the brackets with your words and photos.</p>}
    </header>
    {updates.map((update) => <article className="monthly-entry" id={`update-${update.id}`} key={update.id} aria-labelledby={`update-${update.id}-title`}>
      <header>
        <time dateTime={update.date}>{update.month}</time>
        <h3 id={`update-${update.id}-title`}>{update.title}</h3>
      </header>
      <div className="prose monthly-preview"><Story slug={update.preview} /></div>
      {update.photo && <div className="photo-single monthly-preview-photo">
        <Photo photo={update.photo} />
      </div>}
      {update.gallery && <Link className="update-gallery" href={update.gallery.href}>
        <div className="update-gallery-screens">
          {update.gallery.previewPhotos.map((photo) => <Image key={photo.src} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 554px) 28vw, 158px" />)}
        </div>
        <span>{update.gallery.label} <span aria-hidden="true">↗</span></span>
      </Link>}
      {update.sections.length > 0 && <div className="monthly-sections">
        {update.sections.map((section) => <details className="reading-details monthly-details" id={`update-${update.id}-${section.id}`} key={section.id}>
          <summary aria-label={`${section.title}, ${update.month}`}><span>{section.title}</span></summary>
          <div className="reading-content monthly-full">
            <div className="prose">{section.stories.map((story) => <Story key={story} slug={story} />)}</div>
            {Boolean(section.photos?.length) && <div className={section.photos?.length === 1 ? 'photo-single' : 'photo-grid'}>
              {section.photos?.map((photo) => <Photo key={photo.src} photo={photo} />)}
            </div>}
            {section.appStore && <div className="app-store-gallery">
              <div className="app-store-banner"><Photo photo={section.appStore.listing} /></div>
              <div className="app-store-panels" role="group" aria-label="Konvo App Store screenshots">
                {section.appStore.screenshots.map((photo) => <Photo key={photo.src} photo={photo} />)}
              </div>
            </div>}
            {section.video && <figure className="monthly-video">
              <video controls playsInline preload="none" poster={section.video.poster} width={section.video.width} height={section.video.height} aria-label={section.video.title} aria-describedby={`update-${update.id}-${section.id}-video-caption`}>
                <source src={section.video.src} type="video/mp4" />
                <a href={section.video.src}>Watch the Konvo demo</a>
              </video>
              <figcaption id={`update-${update.id}-${section.id}-video-caption`}>{section.video.description}</figcaption>
            </figure>}
          </div>
        </details>)}
      </div>}
      {update.template && !update.photo && !update.gallery && !update.sections.some((section) => section.photos?.length || section.video || section.appStore) && review && <div className="photo-grid monthly-placeholders">
        {[1, 2].map((number) => <figure className="monthly-placeholder" key={number}>
          <div className="monthly-photo-space"><span>Photo or screenshot {number}</span></div>
          <figcaption>[A short caption for this photo.]</figcaption>
        </figure>)}
      </div>}
    </article>)}
  </section>;
}

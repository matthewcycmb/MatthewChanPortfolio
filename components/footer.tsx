import { links, profile } from '@/content/portfolio';
export function Footer() {
  return <footer className="footer" id="contact"><nav aria-label="Contact and profiles"><a href={links.github} target="_blank" rel="noreferrer">github</a><a href={links.linkedin} target="_blank" rel="noreferrer">linkedin</a><a href={links.instagram} target="_blank" rel="noreferrer">instagram</a></nav><span className="updated">Updated <time dateTime={profile.updatedISO}>Sep 2026</time></span></footer>;
}

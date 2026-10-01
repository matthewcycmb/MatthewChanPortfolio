import { photos, type PortfolioPhoto } from './photos';

export const profile = {
  name: 'Matthew Chan', age: 16, schoolYear: 'Grade 11', location: 'Vancouver, Canada',
  graduation: '2028', updated: 'September 30, 2026', updatedISO: '2026-09-30',
  intro: 'Hello, I’m Matthew, a junior at Port Moody Secondary. Outside of building things, I enjoy playing tennis, pickleball, watching Korean dramas with my mom and watching YouTube.',
};

export const links = {
  appStore: 'https://apps.apple.com/us/app/konvo-dms-only/id6794756261',
  konvo: 'https://konvoinstall.com',
  starterStory: 'https://www.starterstory.com/stories/konvoinstall-com',
  video: 'https://www.youtube.com/watch?v=aq84DJg2bcY',
  github: 'https://github.com/matthewcycmb',
  source: 'https://github.com/matthewcycmb/konvo/tree/shipaton-2026-v1.9.0',
  sourceReadme: 'https://github.com/matthewcycmb/konvo/tree/shipaton-2026-v1.9.0#how-it-works',
  paywallSource: 'https://github.com/matthewcycmb/konvo/tree/shipaton-2026-v1.9.0#what-broke-and-what-changed',
  paywallTest: 'https://github.com/matthewcycmb/konvo/blob/shipaton-2026-v1.9.0/wrapper/test/test_cage.js',
  linkedin: 'https://www.linkedin.com/in/matthew-chan-12546339b/',
  instagram: 'https://www.instagram.com/matthewasherelol/',
  hallOfHacks: 'https://hallofhackss.com/',
  hallOfHacksFeed: 'https://hallofhackss.com/feed',
  hallOfHacksReel: 'https://www.instagram.com/reel/DZi9egTviPh/',
  hallOfHacksReelEmbed: 'https://www.instagram.com/p/DZi9egTviPh/embed/',
  hallOfHacksFollowUpReel: 'https://www.instagram.com/reel/DZoXfgOOJrI/',
  roblox: 'https://www.roblox.com/communities/32929438/bgc#!/about',
  devpost: 'https://devpost.com/software/konvo-dm-s-only',
  hackathonResult: 'https://blog.techto.org/p/500k-users-7m-raised-both-were-in-the-room',
  hackathonEvent: 'https://luma.com/techto-hackaton-web-summit-may-10-2026',
};

export const homeIntro = {
  label: 'KONVOINSTALL.COM', href: links.konvo, story: 'home-intro',
};

export const ageOverview = [
  { age: 12, story: 'overview-age-12', format: 'list' },
  { age: 15, story: 'overview-age-15', format: 'list' },
  { age: 16, story: 'overview-age-16', format: 'lines', closingStory: 'overview-age-16-closing' },
];

export const work = [
  { name: 'Konvo', period: 'Jul 2026 → now', status: 'On the App Store', href: '/work/konvo', photos: [photos.konvoCover] },
  { name: 'Hall of Hacks', period: 'Jun 2026', status: 'Hackathon projects', href: '/work/hall-of-hacks', photos: [photos.hallOfHacksLogo] },
  { name: 'Instagram', period: 'Jul 2025 → now', status: 'Videos about tech, building, and Konvo', href: links.instagram, photos: [photos.instagramSelfie] },
];

export const hallOfHacksJournal = {
  title: 'Hall of Hacks',
  role: 'Founder',
  period: 'June 2026',
  cover: photos.hallOfHacksLogo,
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  story: string;
  more: string;
  media?: { photo: PortfolioPhoto; label: string }[];
  href?: string;
  label?: string;
};

export const timeline: TimelineEntry[] = [
  { id: 'roblox', period: 'Sep 2023', title: 'Made and sold my first Roblox items', story: 'timeline-roblox', more: 'roblox-more', media: [{ photo: photos.redPumpkin, label: 'Azazel' }, { photo: photos.bluePumpkin, label: 'Leviathan' }], href: links.roblox, label: 'My Roblox group' },
  { id: 'content', period: 'Jul 2025', title: 'Discovered content creation', story: 'timeline-content', more: 'timeline-more-content', media: [{ photo: photos.earlyInstagram, label: 'My early Instagram account' }], href: links.instagram, label: 'My Instagram' },
  { id: 'coding', period: 'Jan 2026', title: 'Discovered AI coding', story: 'timeline-coding', more: 'timeline-more-coding' },
  { id: 'hackathon', period: 'May 2026', title: 'Won my first hackathon', story: 'timeline-hackathon', more: 'timeline-more-hackathon', media: [{ photo: photos.techtoHackathon, label: 'TechTO × Althra hackathon' }], href: links.hackathonResult, label: 'The organizer’s recap' },
  { id: 'hall-of-hacks', period: 'Jun 2026', title: 'Launched my first software product', story: 'timeline-hall-of-hacks', more: 'timeline-more-hall-of-hacks', media: [{ photo: photos.hallOfHacksLogo, label: 'Hall of Hacks' }], href: '/work/hall-of-hacks', label: 'The full Hall of Hacks story' },
  { id: 'konvo', period: 'Sep 2026', title: 'Launched my first mobile app', story: 'timeline-konvo', more: 'timeline-more-konvo', media: [{ photo: photos.konvo, label: 'Earlier build' }], href: '/work/konvo', label: 'The full Konvo story' },
];

// Public, reviewed copies only. Never point these at private originals.
export type PortfolioPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

export const photos = {
  konvoCover: { src: '/images/konvo-product-cover.webp', alt: 'Three Konvo screens showing messages, Instagram blocking and a timed unlock.', width: 900, height: 600, fit: 'contain' },
  konvoCutout: { src: '/images/konvo-phone-cutout.webp', alt: 'Three Konvo iPhone screens: the message inbox, Instagram blocking and a timed unlock prompt.', width: 900, height: 600, fit: 'contain' },
  instagramSelfie: { src: '/images/matthew-instagram-selfie.webp', alt: 'Matthew taking a close-up selfie, wearing round glasses and a white shirt.', width: 900, height: 1200, position: '50% 72%' },
  konvo: { src: '/images/konvo-inbox-redacted.webp', alt: 'Konvo’s earlier inbox with account and conversation details redacted.', width: 600, height: 1301, caption: 'Earlier build from my submission. Account and conversation details redacted.', fit: 'contain' },
  konvoAppStoreTimeline: { src: '/images/konvo-app-store-timeline.webp', alt: 'Konvo: DMs Only App Store listing with its blue icon and Reduce Screen Time subtitle.', width: 1092, height: 534, caption: 'Konvo on the App Store.', fit: 'contain' },
  matthew: { src: '/images/matthew-wide.webp', alt: 'Matthew Chan wearing glasses and a black shirt.', width: 430, height: 485, caption: 'A photo from my Konvo submission.' },
  julyHongKong: { src: '/images/konvo-july-hong-kong.webp', alt: 'Two friends sitting together on a bus in Hong Kong.', width: 1170, height: 851, caption: 'Hanging out in Hong Kong.' },
  working: { src: '/images/konvo-working.webp', alt: 'Matthew working on his laptop while sitting on a bed.', width: 756, height: 972, caption: 'Working on my laptop.', fit: 'contain' },
  acceptance: { src: '/images/konvo-acceptance.webp', alt: 'An acceptance message reading that Konvo: DMs Only has been approved for distribution.', width: 1665, height: 944, caption: 'Accepted to the App Store.', fit: 'contain' },
  appStoreScreenshots: { src: '/images/konvo-app-store-screenshots.webp', alt: 'Four Konvo App Store preview images showing messages, hidden Feed, Explore and Reels, and a timed Instagram unlock.', width: 2280, height: 1170, caption: 'My App Store screenshots.', fit: 'contain' },
  appStoreListing: { src: '/images/konvo-app-store-listing.webp', alt: 'Konvo: DMs Only on the App Store, showing the app icon, version 1.9.0 and preview screenshots.', width: 1170, height: 2532, caption: 'Konvo on the App Store, version 1.9.0.', fit: 'contain' },
  appStoreBanner: { src: '/images/konvo-app-store-banner.webp', alt: 'Konvo: DMs Only on the App Store, with its blue app icon, Reduce Screen Time subtitle and listing details.', width: 1800, height: 608 },
  appStorePanel1: { src: '/images/konvo-app-store-panel-1.webp', alt: 'Konvo App Store artwork: Instagram. Just the DMs.', width: 720, height: 1564 },
  appStorePanel2: { src: '/images/konvo-app-store-panel-2.webp', alt: 'Konvo App Store artwork: Your messages work like normal.', width: 720, height: 1564 },
  appStorePanel3: { src: '/images/konvo-app-store-panel-3.webp', alt: 'Konvo App Store artwork: No feed. No Explore. No Reels.', width: 720, height: 1564 },
  appStorePanel4: { src: '/images/konvo-app-store-panel-4.webp', alt: 'Konvo App Store artwork: Post when you need to.', width: 720, height: 1564 },
  apiPrototype: { src: '/images/konvo-api-prototype.webp', alt: 'The early Instamessages prototype, with reply windows and waiting-for-message notices. Usernames are hidden.', width: 430, height: 416, caption: 'My first version using Instagram’s API. Usernames hidden.' },
  linkedinLaunch: { src: '/images/konvo-linkedin-launch.webp', alt: 'Matthew’s LinkedIn launch post showing Konvo and the App Store listing. Test-account details are hidden.', width: 1112, height: 876, caption: 'My LinkedIn launch post.' },
  launchPhoto: { src: '/images/konvo-launch-photo.webp', alt: 'Matthew wearing a mask on a plane, with Konvo and its App Store listing above him. Test-account details are hidden.', width: 1536, height: 2048, caption: 'The photo I used for the launch.' },
  septemberResults: { src: '/images/konvo-september-results.webp', alt: 'RevenueCat shows $1,066 with Last 28 days selected; App Store Connect shows 1.5K first-time downloads.', width: 614, height: 167, caption: 'September 21, 2026. RevenueCat’s 28-day view in USD and App Store downloads.' },
  redPumpkin: { src: '/images/pumpkin-red.webp', alt: 'Azazel, a red pumpkin accessory from my Roblox group.', width: 420, height: 420, caption: 'Azazel', fit: 'contain' },
  bluePumpkin: { src: '/images/pumpkin-blue.webp', alt: 'Leviathan, a blue pumpkin accessory from my Roblox group.', width: 420, height: 420, caption: 'Leviathan', fit: 'contain' },
  hallOfHacks: { src: '/images/hall-of-hacks.webp', alt: 'Hall of Hacks’ browsing feed of hackathon projects.', width: 1200, height: 750, caption: 'The browsing preview from the Hall of Hacks website.' },
  hallOfHacksDatabase: { src: '/images/hall-of-hacks-database.webp', alt: 'Hall of Hacks database with winning project cards, a search field, categories and hackathon filters.', width: 1440, height: 1000, caption: 'Browsing the database. September 30, 2026.' },
  hallOfHacksHealth: { src: '/images/hall-of-hacks-health.webp', alt: 'Hall of Hacks with the Health category selected, showing projects including The Unspillable, Plant Hopper and ARchemy.', width: 1440, height: 1000, caption: 'Filtering projects by category. September 30, 2026.' },
  hallOfHacksLogo: { src: '/images/hall-of-hacks-logo.webp', alt: 'Hall of Hacks name beside a yellow pixel crocodile logo on black.', width: 900, height: 600, caption: 'Hall of Hacks', fit: 'contain' },
  techtoHackathon: { src: '/images/techto-althra-hackathon.webp', alt: 'Group photo at the TechTO × Althra hackathon, in front of a yellow TechTO banner.', width: 1170, height: 844, caption: 'TechTO × Althra hackathon', fit: 'contain' },
  earlyInstagram: { src: '/images/instagram-early-account.webp', alt: 'Matthew’s early Instagram profile, showing 8 posts and 26 followers.', width: 622, height: 432, caption: 'My early Instagram account', fit: 'contain' },
} satisfies Record<string, PortfolioPhoto>;

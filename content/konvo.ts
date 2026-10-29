import { photos, type PortfolioPhoto } from './photos';
import { onboardingGallery } from './portfolio';

export type KonvoSection = {
  id: string;
  title: string;
  stories: string[];
  photos?: PortfolioPhoto[];
  appStore?: { listing: PortfolioPhoto; screenshots: PortfolioPhoto[] };
  video?: { src: string; poster: string; width: number; height: number; title: string; description: string };
};

export type KonvoUpdate = {
  id: string;
  month: string;
  date: string;
  title: string;
  preview: string;
  photo?: PortfolioPhoto;
  gallery?: { href: string; label: string; previewPhotos: PortfolioPhoto[] };
  sections: KonvoSection[];
  template: boolean;
};

// Updates can be a short anecdote, with optional longer stories beneath it.
// Filled entries can appear without photos. Photo placeholders are local-only.
export const konvoUpdates: KonvoUpdate[] = [
  {
    id: 'july-2026', month: 'July 2026', date: '2026-07', title: 'How Konvo came to life',
    preview: 'konvo-preview-july-2026', photo: photos.julyHongKong, template: false,
    sections: [
      { id: 'first-version', title: 'Starting with Claude Code', stories: ['konvo-july-first-version'] },
      { id: 'api', title: 'API to website', stories: ['konvo-july-api'], photos: [photos.apiPrototype] },
    ],
  },
  {
    id: 'august-2026', month: 'August 2026', date: '2026-08', title: 'Konvo got accepted to the App Store!!!',
    preview: 'konvo-preview-august-2026', photo: photos.acceptance, template: false,
    sections: [
      {
        id: 'feedback', title: 'Swipe feedback', stories: ['konvo-august-feedback'],
        video: { src: '/videos/konvo-product-demo.mp4', poster: '/images/konvo-product-demo-poster.webp', width: 720, height: 1280, title: 'Trying Konvo on my phone', description: 'Opening Konvo, checking messages, and swiping in and out of a chat.' },
      },
      {
        id: 'review', title: 'App Store review', stories: ['konvo-august-review'],
        appStore: { listing: photos.appStoreBanner, screenshots: [photos.appStorePanel1, photos.appStorePanel2, photos.appStorePanel3, photos.appStorePanel4] },
      },
    ],
  },
  {
    id: 'september-1-2026', month: 'September 1, 2026', date: '2026-09-01', title: 'Launching Konvo',
    preview: 'konvo-update-september-1-2026', photo: photos.linkedinLaunch, sections: [], template: false,
  },
  {
    id: 'september-2026', month: 'September 28, 2026', date: '2026-09-28', title: 'Hitting 2.1M views on 1 reel',
    preview: 'konvo-preview-september-2026', photo: photos.konvoMarketingReel, template: false,
    sections: [],
  },
  {
    id: 'october-16-18-2026', month: 'October 16–18, 2026', date: '2026-10-16', title: '72 hours redesigning onboarding',
    preview: 'konvo-update-october-16-18-2026', gallery: onboardingGallery, sections: [], template: false,
  },
  {
    id: 'october-28-2026', month: 'October 28, 2026', date: '2026-10-28', title: 'Building from customer requests',
    preview: 'konvo-update-october-28-2026', sections: [], template: false,
  },
];

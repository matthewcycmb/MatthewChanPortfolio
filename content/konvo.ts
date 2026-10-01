import { photos, type PortfolioPhoto } from './photos';

export type KonvoUpdate = {
  id: string;
  month: string;
  date: string;
  title: string;
  preview: string;
  story: string;
  photos: PortfolioPhoto[];
  appStore?: { listing: PortfolioPhoto; screenshots: PortfolioPhoto[] };
  video?: { src: string; poster: string; width: number; height: number; title: string; description: string };
  template: boolean;
};

// The first photo accompanies the preview; the rest live inside the full month.
// Filled stories can appear without photos. Photo placeholders are local-only.
export const konvoUpdates: KonvoUpdate[] = [
  { id: 'july-2026', month: 'July 2026', date: '2026-07', title: 'How Konvo came to life', preview: 'konvo-preview-july-2026', story: 'konvo-update-july-2026', photos: [photos.julyHongKong, photos.apiPrototype], template: false },
  { id: 'august-2026', month: 'August 2026', date: '2026-08', title: 'Konvo got accepted to the App Store!!!', preview: 'konvo-preview-august-2026', story: 'konvo-update-august-2026', photos: [photos.acceptance], appStore: { listing: photos.appStoreBanner, screenshots: [photos.appStorePanel1, photos.appStorePanel2, photos.appStorePanel3, photos.appStorePanel4] }, video: { src: '/videos/konvo-product-demo.mp4', poster: '/images/konvo-product-demo-poster.webp', width: 720, height: 1280, title: 'Trying Konvo on my phone', description: 'Opening Konvo, checking messages, and swiping in and out of a chat.' }, template: false },
  { id: 'september-2026', month: 'September 2026', date: '2026-09', title: 'Launched Konvo', preview: 'konvo-preview-september-2026', story: 'konvo-update-september-2026', photos: [photos.linkedinLaunch, photos.launchPhoto, photos.septemberResults], template: false },
];

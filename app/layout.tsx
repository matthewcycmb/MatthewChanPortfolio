import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: './fonts/inter-latin.woff2', variable: '--font-body', display: 'swap', weight: '100 900' });
const fraunces = localFont({ src: './fonts/fraunces-latin-italic.woff2', variable: '--font-heading', display: 'swap', weight: '100 900', style: 'italic' });
const handwriting = localFont({ src: './fonts/dancing-script-latin.woff2', variable: '--font-hand', display: 'swap', weight: '400' });

export const metadata: Metadata = {
  title: 'Matthew Chan',
  description: 'I’m Matthew, a student in Vancouver building Konvo: DMs Only. My projects, the decisions behind them, and what I’m learning along the way.',
  openGraph: { title: 'Matthew Chan', description: 'A few things I’ve built. A few things I’ve learned.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${fraunces.variable} ${handwriting.variable}`}><body>{children}</body></html>;
}

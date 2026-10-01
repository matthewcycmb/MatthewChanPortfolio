import { chromium } from 'playwright';
import sharp from 'sharp';

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 1 });
  for (const [slug, url] of [['reef', 'https://reefdefenders.vercel.app/'], ['kairo', 'https://kairokairo.com/']]) {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.locator('h1').first().waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    const capture = await page.screenshot({ type: 'png' });
    await sharp(capture).webp({ quality: 90 }).toFile(`public/images/${slug}.webp`);
    console.log(`${slug}: captured actual public homepage (${await page.title()})`);
  }
} finally { await browser.close(); }

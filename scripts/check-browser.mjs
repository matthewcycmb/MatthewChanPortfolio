import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('artifacts', { recursive: true });
const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:3000';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const report = { layouts: [], reading: [], errors: [], checks: [], thirdPartyAccessibility: [] };
const routes = ['/', '/work', '/timeline', '/work/konvo', '/work/hall-of-hacks'];
try {
  for (const width of [1440, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    page.on('pageerror', (error) => report.errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      assert.equal(overflow, false, `${route} overflows at ${width}px`);
      const anchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')).filter((href) => !document.getElementById(href.slice(1))));
      assert.deepEqual(anchors, []);
      assert.equal(await page.locator('h1').count(), 1);
      if (['/', '/work', '/timeline'].includes(route)) {
        const nav = page.getByRole('navigation', { name: 'Main navigation' });
        assert.deepEqual(await nav.locator('a').evaluateAll((anchors) => anchors.map((a) => a.getAttribute('href'))), ['/', '/work', '/timeline', 'https://www.linkedin.com/in/matthew-chan-12546339b/']);
        assert.equal(await page.locator('.home-mark').getAttribute('href'), '/');
        assert.equal(await nav.locator('[aria-current="page"]').count(), 1);
        assert.equal(await nav.locator('[aria-current="page"]').getAttribute('href'), route);
        assert.equal(await page.locator('.work-list > li').count(), route === '/work' ? 3 : 0);
        assert.equal(await page.locator('.timeline > li').count(), route === '/timeline' ? 6 : 0);
        assert.equal(await page.locator('.age-chapter').count(), route === '/' ? 3 : 0);
      }
      const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      // Keep external players' internal findings visible, separate from markup we control.
      const findings = audit.violations.map(({ id, impact, nodes }) => ({ id, impact, elements: nodes.map((n) => n.target) }));
      const isExternalPlayer = (target) => ['/work/konvo', '/work/hall-of-hacks'].includes(route) && target.length > 1 && target[0] === 'iframe';
      const accessibility = findings.map((finding) => ({ ...finding, elements: finding.elements.filter((target) => !isExternalPlayer(target)) })).filter((finding) => finding.elements.length);
      const thirdParty = findings.map((finding) => ({ ...finding, elements: finding.elements.filter(isExternalPlayer) })).filter((finding) => finding.elements.length);
      if (thirdParty.length) report.thirdPartyAccessibility.push({ route, width, findings: thirdParty });
      report.layouts.push({ route, width, overflow, accessibility });
      await writeFile('artifacts/browser-report.json', JSON.stringify(report, null, 2));
      await page.locator('img').evaluateAll((images) => images.forEach((img) => { img.loading = 'eager'; }));
      await page.waitForFunction(() => [...document.images].every((img) => img.complete && img.naturalWidth > 0));
      if (route === '/work/hall-of-hacks' && (width === 1440 || width === 390)) {
        await page.locator('.journal-reel iframe').scrollIntoViewIfNeeded();
        await page.frameLocator('.journal-reel iframe').getByRole('button', { name: 'Control', exact: true }).waitFor({ state: 'visible', timeout: 20000 });
        await page.evaluate(() => window.scrollTo(0, 0));
      }
      if (width === 1440 || width === 390) {
        await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.split('/').pop()}-${width}.png`, fullPage: true });
        if (route === '/work/konvo') await page.screenshot({ path: `artifacts/konvo-opening-${width}.png` });
      }
      if (route === '/work/konvo') {
        const visibleWords = (await page.locator('main').innerText()).trim().split(/\s+/).length;
        assert.ok(visibleWords >= 350 && visibleWords <= 500, `Konvo initially shows ${visibleWords} words`);
        assert.equal(await page.locator('.reading-details[open]').count(), 0);
        assert.equal(await page.locator('.monthly-preview-photo .photo-print:visible').count(), 3);
        for (const month of ['july', 'august', 'september']) {
          const entry = page.locator(`#update-${month}-2026`);
          const summary = entry.locator('summary');
          const full = entry.locator('.monthly-full');
          assert.equal(await full.isVisible(), false);
          await summary.focus();
          await page.keyboard.press('Enter');
          assert.equal(await full.isVisible(), true);
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${month} expanded at ${width}px`);
          if (month === 'september') {
            assert.match(await full.innerText(), /local StoreKit test file/);
            assert.match(await full.innerText(), /Tracking may miss some reopenings/);
            assert.equal(await full.getByRole('link', { name: 'Starter Story' }).isVisible(), true);
          }
          await page.keyboard.press('Space');
          assert.equal(await full.isVisible(), false);
          assert.equal(await summary.evaluate((element) => element === document.activeElement), true);
        }
        report.reading.push({ width, visibleWords, monthlyDisclosures: 'Keyboard opens and closes each full month; expanded content fits.' });
      }
      if (route === '/work/hall-of-hacks') {
        assert.equal(await page.locator('details').count(), 0);
        assert.equal(await page.locator('.journal-gallery .photo-print').count(), 2);
        assert.match(await page.locator('main').innerText(), /Lougheed Mall/);
        assert.match(await page.locator('main').innerText(), /Julia handled most of the pitch/);
        assert.match(await page.locator('main').innerText(), /two weeks later for personal reasons/);
        assert.equal(await page.locator('.journal-reel iframe').getAttribute('src'), 'https://www.instagram.com/p/DZi9egTviPh/embed/');
        assert.equal(await page.getByRole('link', { name: 'Watch on Instagram', exact: true }).getAttribute('href'), 'https://www.instagram.com/reel/DZi9egTviPh/');
        assert.equal(await page.getByRole('link', { name: 'Follow-up video', exact: true }).getAttribute('href'), 'https://www.instagram.com/reel/DZoXfgOOJrI/');
        if (width === 390) {
          for (const photo of await page.locator('.journal-gallery .photo-print').all()) {
            await photo.focus();
            await page.keyboard.press('Enter');
            assert.equal(await page.locator('dialog[open]').count(), 1);
            await page.keyboard.press('Escape');
            assert.equal(await photo.evaluate(element => element === document.activeElement), true);
          }
          report.checks.push('Hall of Hacks is fully expanded; both database images enlarge by keyboard and restore focus. Launch and follow-up Reel links are distinct.');
        }
      }
    }
    if (width === 390) {
      await page.goto(base + '/timeline', { waitUntil: 'networkidle' });
      assert.equal(await page.locator('.timeline summary').count(), 0);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      const photo = page.getByRole('link', { name: 'Enlarge photo: Azazel, a red pumpkin accessory from my Roblox group.' });
      await photo.click();
      assert.equal(await page.locator('dialog[open]').count(), 1);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('dialog[open]').count(), 0);
      assert.equal(await photo.evaluate((element) => element === document.activeElement), true);
      await photo.click();
      await page.getByRole('button', { name: 'Close photo' }).click();
      assert.equal(await page.locator('dialog[open]').count(), 0);
      await page.locator('.home-header a[href="/work"]').click();
      await page.waitForURL(base + '/work');
      await page.locator('.work-link[href="/work/konvo"]').click();
      await page.waitForURL('**/work/konvo');
      const video = page.locator('.demo iframe');
      assert.equal(await video.count(), 1);
      assert.equal(await video.isVisible(), true);
      assert.equal(await video.getAttribute('loading'), 'eager');
      assert.equal(await video.getAttribute('title'), 'Matthew demonstrates Konvo: DMs Only, 2 minutes 18 seconds');
      assert.equal(await video.getAttribute('src'), 'https://www.youtube-nocookie.com/embed/aq84DJg2bcY?rel=0');
      const layout = await page.evaluate(() => {
        const cover = document.querySelector('.case-product-cover').getBoundingClientRect();
        const title = document.querySelector('.case-header').getBoundingClientRect();
        const intro = document.querySelector('.opening').getBoundingClientRect();
        const video = document.querySelector('.demo');
        const frame = video.getBoundingClientRect();
        return { ordered: cover.bottom <= title.top && title.bottom < intro.top && intro.bottom < frame.top, ratio: frame.width / frame.height, radius: parseFloat(getComputedStyle(video).borderRadius) };
      });
      assert.equal(layout.ordered, true);
      assert.ok(Math.abs(layout.ratio - 16 / 9) < .01);
      assert.ok(layout.radius > 0);
      await page.getByRole('link', { name: '← Back to work' }).click();
      await page.waitForURL(base + '/work');
      report.checks.push('The timeline has no More disclosures; photo enlargement, focus restoration and case navigation work. Product cover precedes the title; the eager rounded YouTube player follows the description.');
    }
    await context.close();
  }
  const reduced = await browser.newPage({ reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  await reduced.goto(base, { waitUntil: 'networkidle' });
  assert.equal(await reduced.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  await reduced.keyboard.press('Tab');
  assert.equal(await reduced.evaluate(() => document.activeElement?.textContent), 'Skip to content');
  report.checks.push('Reduced motion and keyboard skip link work.');
  await reduced.goto(base + '/work/konvo', { waitUntil: 'networkidle' });
  const reducedSummary = reduced.locator('#update-september-2026 summary');
  await reducedSummary.focus();
  await reduced.keyboard.press('Enter');
  assert.equal(await reduced.locator('#update-september-2026 .monthly-full').isVisible(), true);
  assert.equal(await reducedSummary.evaluate((element) => getComputedStyle(element).transitionDuration), '0s');
  report.checks.push('The full September entry opens with the keyboard with reduced motion enabled.');
  await reduced.goto(base + '/work/hall-of-hacks', { waitUntil: 'networkidle' });
  assert.equal(await reduced.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  await reduced.locator('a[href="#hall-of-hacks-reel"]').focus();
  await reduced.keyboard.press('Enter');
  assert.equal(await reduced.locator('.journal-reel iframe').isVisible(), true);
  report.checks.push('Hall of Hacks Reel navigation works by keyboard with reduced motion.');
  await reduced.close();
  const nojs = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  await nojs.goto(base, { waitUntil: 'networkidle' });
  assert.equal(await nojs.locator('.timeline').count(), 0);
  assert.equal(await nojs.locator('.work-list').count(), 0);
  await nojs.locator('.home-header a[href="/timeline"]').click();
  await nojs.waitForURL(base + '/timeline');
  assert.equal(await nojs.locator('.timeline>li').count(), 6);
  assert.equal(await nojs.locator('.timeline details').count(), 0);
  await nojs.locator('.home-header a[href="/work"]').click();
  await nojs.waitForURL(base + '/work');
  await nojs.locator('.work-link[href="/work/konvo"]').click();
  await nojs.waitForURL('**/work/konvo');
  assert.equal(await nojs.locator('.demo iframe').count(), 1);
  assert.equal(await nojs.getByRole('link', { name: 'Watch the Konvo demo on YouTube' }).getAttribute('href'), 'https://www.youtube.com/watch?v=aq84DJg2bcY');
  assert.equal(await nojs.locator('.reading-details[open]').count(), 0);
  for (const summary of await nojs.locator('.reading-details > summary').all()) {
    await summary.click();
  }
  assert.equal(await nojs.locator('.reading-details[open]').count(), 4);
  assert.equal(await nojs.locator('.case-summary .prose').isVisible(), true);
  assert.match(await nojs.locator('#update-july-2026 .monthly-full').innerText(), /24-hour window/);
  assert.equal(await nojs.locator('.monthly-video video').isVisible(), true);
  assert.match(await nojs.locator('#update-september-2026 .monthly-full').innerText(), /Of 871 people/);
  assert.equal(await nojs.locator('.monthly-placeholders').count(), 0);
  report.checks.push('Without JavaScript all three full months and the complete origin story expand; detailed usage figures, extra photos and the August video remain available.');
  report.checks.push('Without JavaScript the timeline, page navigation and YouTube fallback remain usable.');
  await nojs.goto(base + '/work', { waitUntil: 'networkidle' });
  await nojs.locator('.work-link[href="/work/hall-of-hacks"]').click();
  await nojs.waitForURL('**/work/hall-of-hacks');
  assert.match(await nojs.locator('main').innerText(), /Claude Fable/);
  assert.match(await nojs.locator('main').innerText(), /197,000 views/);
  assert.equal(await nojs.getByRole('link', { name: 'Watch on Instagram', exact: true }).isVisible(), true);
  assert.equal(await nojs.locator('.journal-gallery .photo-print').count(), 2);
  const databasePhoto = nojs.locator('.journal-gallery a[href="/images/hall-of-hacks-database.webp"]');
  await databasePhoto.click();
  await nojs.waitForURL('**/images/hall-of-hacks-database.webp');
  report.checks.push('Without JavaScript the separate Work page opens the Hall of Hacks journal, all prose and direct video links are available, and a screenshot opens directly.');
  await nojs.close();
  assert.deepEqual(report.errors, []);
  await writeFile('artifacts/browser-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  assert.equal(report.layouts.flatMap((layout) => layout.accessibility).length, 0, 'Accessibility issues need fixing');
} finally { await browser.close(); }

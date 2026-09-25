import { chromium } from '@playwright/test';
import fs from 'fs';

const commSvg = fs.readFileSync('/tmp/icon-communications.svg', 'utf8');
const commBase64 = 'data:image/svg+xml;base64,' + Buffer.from(commSvg).toString('base64');

const chevronSvg = fs.readFileSync('/tmp/header-chevron.svg', 'utf8');
const chevronBase64 = 'data:image/svg+xml;base64,' + Buffer.from(chevronSvg).toString('base64');

async function main() {
  const browser = await chromium.launch({ headless: true });

  async function capture(url, outPath, isAfter = false) {
    console.log(`Navigating to ${url}...`);
    const page = await browser.newPage({ viewport: { width: 1600, height: 1200 } });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(e => {
      console.log('Timeout/warning during navigation:', e.message);
    });

    await page.evaluate(({ commBase64, chevronBase64, isAfter }) => {
      // Remove Wayback toolbar, overlays, tracking banners
      const selectors = [
        '#wm-ipp-base',
        '#wm-ipp',
        '#wm-ipp-inside',
        '#donato',
        '#onetrust-consent-sdk',
        '.onetrust-pc-dark-filter',
        '#CybotCookiebotDialog',
        '[id*="cookie"]',
        '[class*="cookie-banner"]',
        '[id*="consent"]',
        '#drift-widget',
        '#intercom-container',
        '[id*="hubspot-messages"]',
        'iframe[id*="hubspot"]',
      ];
      for (const sel of selectors) {
        document.querySelectorAll(sel).forEach(el => el.remove());
      }

      document.body.style.marginTop = '0px';
      document.body.style.setProperty('margin-top', '0px', 'important');
      document.documentElement.style.marginTop = '0px';
      document.documentElement.style.setProperty('margin-top', '0px', 'important');

      // Guarantee 100% intact iconography by inlining missing/Wayback SVGs
      document.querySelectorAll('img').forEach(img => {
        if (img.src.includes('icon_kiddom_standards_communications') || (img.alt && img.alt.includes('Manage Curriculum Pillar Hero Logo') && !img.src.startsWith('data:'))) {
          img.src = commBase64;
        }
        if (img.src.includes('header-chevron.svg')) {
          img.src = chevronBase64;
        }
      });
    }, { commBase64, chevronBase64, isAfter });

    // Wait for fonts
    await page.evaluate(() => document.fonts?.ready).catch(() => {});
    await page.waitForTimeout(500);

    // Hover Solutions dropdown to reveal menu architecture
    const sol = page.locator('header').getByText('Solutions', { exact: false }).first();
    await sol.hover();
    await page.waitForTimeout(600);

    // Verify all header and dropdown images are loaded
    const report = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('header img, .floating-menu img'));
      return imgs.map(i => ({
        src: i.src.slice(0, 40),
        w: i.naturalWidth,
        h: i.naturalHeight,
        complete: i.complete
      }));
    });
    console.log(`Images in ${outPath}:`, report.length, 'all loaded:', report.every(r => r.complete && r.w > 0));

    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1600, height: 580 } });
    await page.close();
    console.log(`Saved ${outPath}`);
  }

  await capture('https://web.archive.org/web/20210330191511/https://www.kiddom.co/', '/tmp/panel_before.png', false);
  await capture('https://web.archive.org/web/20210927010005/https://www.kiddom.co/', '/tmp/panel_after.png', true);

  await browser.close();
  console.log('Panels captured successfully.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

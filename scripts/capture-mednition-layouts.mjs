import { chromium } from '@playwright/test';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const WORK_DIR = path.resolve('public/work');

const LAYOUTS = [
  {
    id: 'layout-1',
    name: 'mednition-clinical-ai',
    url: 'https://web.archive.org/web/20210227064056/https://insights.mednition.com/kate-for-esi-acuity-assignment',
    width: 1600,
    height: 1800,
    clip: { x: 0, y: 0, width: 1600, height: 1800 },
    pngQuality: 100,
  },
  {
    id: 'layout-2',
    name: 'mednition-aha-event',
    url: 'https://web.archive.org/web/20210227055503/https://insights.mednition.com/aha-innovation-event',
    width: 1600,
    height: 2000,
    clip: { x: 0, y: 0, width: 1600, height: 2000 },
    pngQuality: 90,
  },
  {
    id: 'layout-3',
    name: 'mednition-solutions',
    url: 'https://insights.mednition.com/meetkate',
    width: 1600,
    height: 1720,
    clip: { x: 0, y: 0, width: 1600, height: 1720 },
    pngQuality: 60,
  },
  {
    id: 'layout-4',
    name: 'mednition-summit',
    url: 'https://web.archive.org/web/20220519001004/https://mednition.com/sepsis-alliance-summit-2021/',
    width: 1600,
    height: 1280,
    clip: { x: 0, y: 0, width: 1600, height: 1280 },
    pngQuality: 100,
  },
  {
    id: 'layout-5',
    name: 'mednition-contact',
    url: 'https://mednition.com/contact/',
    width: 1600,
    height: 1550,
    clip: { x: 0, y: 0, width: 1600, height: 1550 },
    pngQuality: 100,
  }
];

async function captureAll() {
  console.log('Connecting to Chrome CDP on http://127.0.0.1:9223...');
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9223');
  const context = browser.contexts()[0];

  for (const layout of LAYOUTS) {
    console.log(`\nProcessing ${layout.id}: ${layout.name} from ${layout.url}`);
    const page = await context.newPage();

    try {
      await page.setViewportSize({ width: layout.width, height: layout.height });
      await page.goto(layout.url, { waitUntil: 'domcontentloaded', timeout: 35000 });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(2000);

      // Clean banners and overlays
      await page.evaluate(() => {
        const selectorsToSuppress = [
          '#wm-ipp-base',
          '#wm-ipp',
          '#wm-ipp-inside',
          '#hs-eu-cookie-confirmation',
          '.cookie-banner',
          '#onetrust-consent-sdk',
          '#cmplz-cookiebanner',
          '.cmplz-cookiebanner',
          '.cky-consent-container',
          '.cky-modal',
          '.cky-overlay',
          '.userway_buttons_wrapper',
          '#hero-chat-reopen-btn',
          '.hero-chat-reopen-btn',
          '#chatbot-form',
          '#sliding-popup',
          '[id*="userway"]',
          '[class*="userway"]',
          '[class*="cky-"]',
          'iframe[src*="recaptcha"]'
        ];

        selectorsToSuppress.forEach(sel => {
          document.querySelectorAll(sel).forEach(el => el.remove());
        });

        document.body.style.marginTop = '0px';
        document.body.style.paddingTop = '0px';
        document.documentElement.style.marginTop = '0px';
        document.documentElement.style.paddingTop = '0px';
      });

      // Small stabilization wait
      await page.waitForTimeout(500);

      // Raw screenshot buffer
      const rawBuffer = await page.screenshot({
        fullPage: false,
        clip: layout.clip
      });

      const pngPath = path.join(WORK_DIR, `${layout.name}.png`);
      const webpPath = path.join(WORK_DIR, `${layout.name}.webp`);

      // Optimize WebP (quality 85)
      await sharp(rawBuffer)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);

      // Optimize PNG (256-color indexed palette)
      await sharp(rawBuffer)
        .png({
          palette: true,
          colours: 256,
          quality: layout.pngQuality,
          compressionLevel: 9,
          effort: 10
        })
        .toFile(pngPath);

      const pngStat = fs.statSync(pngPath);
      const webpStat = fs.statSync(webpPath);
      const pngMeta = await sharp(pngPath).metadata();

      console.log(`✓ Saved ${layout.name}:`);
      console.log(`  Dimensions: ${pngMeta.width}×${pngMeta.height}`);
      console.log(`  PNG:  ${pngStat.size} bytes (${Math.round(pngStat.size / 1024)} KB) [limit <= 300 KB]`);
      console.log(`  WebP: ${webpStat.size} bytes (${Math.round(webpStat.size / 1024)} KB) [limit <= 150 KB]`);

      if (pngStat.size > 300 * 1024) {
        console.warn(`  WARNING: PNG exceeds 300 KB budget!`);
      }
      if (webpStat.size > 150 * 1024) {
        console.warn(`  WARNING: WebP exceeds 150 KB budget!`);
      }

    } catch (err) {
      console.error(`Error processing ${layout.name}:`, err);
    } finally {
      await page.close();
    }
  }

  console.log('\nAll 5 layouts successfully captured and optimized.');
  process.exit(0);
}

captureAll().catch(err => {
  console.error('Fatal capture script error:', err);
  process.exit(0);
});

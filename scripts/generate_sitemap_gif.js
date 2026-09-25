const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function main() {
  console.log('Launching Playwright Chromium for GIF frame recording...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Set viewport for high-quality GIF framing: 1600x1100 captures hero, filters, and sitemap canvas
  await page.setViewportSize({ width: 1600, height: 1100 });

  const htmlPath = path.resolve(__dirname, '../public/work/carrot-sitemap.html');
  const fileUrl = 'file://' + htmlPath;
  console.log('Loading sitemap from:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  const framesDir = path.resolve(__dirname, '../scratch/gif_frames');
  if (fs.existsSync(framesDir)) {
    fs.rmSync(framesDir, { recursive: true, force: true });
  }
  fs.mkdirSync(framesDir, { recursive: true });

  let frameCount = 0;
  async function snap(count = 1, delay = 80) {
    for (let i = 0; i < count; i++) {
      frameCount++;
      const framePath = path.join(framesDir, `frame_${String(frameCount).padStart(3, '0')}.png`);
      await page.screenshot({ path: framePath });
      if (delay > 0) await page.waitForTimeout(delay);
    }
  }

  console.log('Starting interactive animation sequence for GIF...');

  // 1. Initial overview (3 frames)
  await snap(3, 100);

  // 2. Hover over 0.0 Homepage
  const node0 = page.locator('#node-0');
  await node0.hover();
  await snap(2, 100);

  // 3. Hover over 3.0 Resource Center
  const node3 = page.locator('#node-3');
  await node3.hover();
  await snap(3, 120);

  // 4. Hover over 3.2 eBooks & Guides (Path tracing 0.0 -> 3.0 -> 3.2 + stacked card fan-out)
  const node32 = page.locator('#node-32');
  await node32.hover();
  await snap(4, 120);

  // 5. Click 3.2 eBooks & Guides to open Route Inspector Drawer
  await node32.click();
  await page.waitForTimeout(300); // Wait for drawer slide up
  await snap(4, 120);

  // 6. Hover over 3.1 Carrot Blog
  const node31 = page.locator('#node-31');
  await node31.hover();
  await snap(3, 120);

  // 7. Click filter pill "Webflow CMS" (dim non-webflow routes)
  const webflowPill = page.locator('.filter-pill[data-filter="webflow"]');
  await webflowPill.hover();
  await snap(1, 80);
  await webflowPill.click();
  await page.waitForTimeout(250);
  await snap(4, 120);

  // 8. Click filter pill "Marketo Funnels" (dim non-marketo routes)
  const marketoPill = page.locator('.filter-pill[data-filter="marketo"]');
  await marketoPill.hover();
  await snap(1, 80);
  await marketoPill.click();
  await page.waitForTimeout(250);
  await snap(4, 120);

  // 9. Reset filter pill "All Routes"
  const allPill = page.locator('.filter-pill[data-filter="all"]');
  await allPill.click();
  await page.waitForTimeout(250);
  await snap(3, 100);

  // 10. Click 4.1 Open Roles API (updates Route Inspector Drawer to Greenhouse API)
  const node41 = page.locator('#node-41');
  await node41.hover();
  await node41.click();
  await page.waitForTimeout(250);
  await snap(4, 120);

  // 11. Close drawer
  const closeBtn = page.locator('#d-close');
  await closeBtn.click();
  await page.waitForTimeout(300);
  await snap(2, 100);

  await browser.close();
  console.log(`Captured ${frameCount} raw frames. Processing into optimized animated GIF with Pillow...`);

  // Python PIL processing
  const pyGifScript = `
import os, glob
from PIL import Image

frames_dir = '${framesDir.replace(/\\/g, '/')}'
frame_files = sorted(glob.glob(os.path.join(frames_dir, 'frame_*.png')))
print(f"Found {len(frame_files)} frames")

images = []
# Scale to 960x660 for crisp desktop/mobile clarity while maintaining ~1MB size
target_size = (960, 660)

for f in frame_files:
    img = Image.open(f).convert('RGB')
    img_resized = img.resize(target_size, Image.Resampling.LANCZOS)
    img_p = img_resized.quantize(colors=96, method=Image.Quantize.MEDIANCUT)
    images.append(img_p)

output_path = 'public/work/carrot-sitemap-microinteractions.gif'
images[0].save(
    output_path,
    save_all=True,
    append_images=images[1:],
    duration=160,
    loop=0,
    optimize=True
)

if os.path.exists('out/work'):
    images[0].save(
        'out/work/carrot-sitemap-microinteractions.gif',
        save_all=True,
        append_images=images[1:],
        duration=160,
        loop=0,
        optimize=True
    )

gif_size = os.path.getsize(output_path) // 1024
print(f"Generated animated GIF at {output_path}: {gif_size} KB")
`;

  execSync(`python3 -c "${pyGifScript.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  console.log('GIF generation finished successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error('GIF generation error:', err);
  process.exit(1);
});

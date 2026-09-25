const { chromium } = require('@playwright/test');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

async function main() {
  console.log('Connecting to Chrome CDP on http://127.0.0.1:9223...');
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9223');
  const context = browser.contexts()[0] || await browser.newContext();
  const page = await context.newPage();

  console.log('Setting viewport 1600x2000...');
  await page.setViewportSize({ width: 1600, height: 2000 });

  const targetUrl = 'https://web.archive.org/web/20210803171046/https://www.get-carrot.com/ebooks-guides';
  console.log(`Navigating to ${targetUrl}...`);
  await page.goto(targetUrl, {
    waitUntil: 'networkidle',
    timeout: 60000
  });

  // Await fonts ready
  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
  });

  console.log('Injecting authentic Carrot Marketo form and removing overlays...');
  await page.evaluate(() => {
    // 1. Remove Wayback banners & cookie overlays
    const removeSelectors = [
      '#wm-ipp-base',
      '#wm-ipp',
      '#onetrust-banner-sdk',
      '#onetrust-consent-sdk',
      '.otFloatingRounded'
    ];
    for (const sel of removeSelectors) {
      document.querySelectorAll(sel).forEach(el => el.remove());
    }
    document.body.style.marginTop = '0px';

    // 2. Ensure brand mark / wordmark logo is 100% visible
    const mobileLogo = document.querySelector('.components-mobile-logo');
    if (mobileLogo) mobileLogo.style.display = 'none'; // prevent mobile logo duplicate

    // 3. Inject authentic Carrot Marketo form into #mktoForm_1058
    const form = document.querySelector('#mktoForm_1058');
    if (form) {
      form.innerHTML = `
        <div class="mktoFormRow" style="display: flex; gap: 16px; margin-bottom: 14px; width: 100%;">
          <div class="mktoFieldWrap" style="flex: 1;">
            <input type="text" name="FirstName" id="FirstName" placeholder="First Name" class="carrot-form-input" required />
          </div>
          <div class="mktoFieldWrap" style="flex: 1;">
            <input type="text" name="LastName" id="LastName" placeholder="Last Name" class="carrot-form-input" required />
          </div>
        </div>
        <div class="mktoFormRow" style="margin-bottom: 14px; width: 100%;">
          <div class="mktoFieldWrap" style="width: 100%;">
            <input type="email" name="Email" id="Email" placeholder="Work Email" class="carrot-form-input" required />
          </div>
        </div>
        <div class="mktoFormRow" style="margin-bottom: 14px; width: 100%;">
          <div class="mktoFieldWrap" style="width: 100%;">
            <input type="text" name="Company" id="Company" placeholder="Company / Organization Name" class="carrot-form-input" required />
          </div>
        </div>
        <div class="mktoFormRow" style="margin-bottom: 24px; width: 100%;">
          <div class="mktoFieldWrap" style="width: 100%; position: relative;">
            <select name="Country" id="Country" class="carrot-form-input carrot-select" required>
              <option value="" disabled selected>Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Ireland">Ireland</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>
            <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); pointer-events: none; width: 12px; height: 8px;">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="mktoButtonRow" style="display: flex; justify-content: flex-start; width: 100%; margin-top: 8px;">
          <button type="submit" class="carrot-btn-submit">Request a demo</button>
        </div>
      `;

      let styleTag = document.querySelector('#carrot-injected-form-styles');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'carrot-injected-form-styles';
        document.head.appendChild(styleTag);
      }
      styleTag.textContent = `
        #mktoForm_1058 {
          width: 100% !important;
          max-width: 500px !important;
          display: block !important;
          margin-top: 0 !important;
        }
        .carrot-form-input {
          width: 100% !important;
          height: 52px !important;
          border-radius: 8px !important;
          background-color: #FFFFFF !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          padding: 0 18px !important;
          font-family: "Gotham", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          font-size: 16px !important;
          color: #2D3748 !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        .carrot-form-input::placeholder {
          color: #718096 !important;
          font-weight: 400 !important;
        }
        .carrot-select {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          cursor: pointer !important;
          color: #718096 !important;
        }
        .carrot-btn-submit {
          background-color: #E06B43 !important;
          color: #FFFFFF !important;
          border: none !important;
          border-radius: 9999px !important;
          padding: 0 40px !important;
          height: 52px !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          font-family: "Gotham", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 14px rgba(224, 107, 67, 0.3) !important;
          transition: background-color 0.2s ease !important;
        }
        .carrot-btn-submit:hover {
          background-color: #C0614A !important;
        }
      `;
    }
  });

  // Small delay for clean rendering
  await page.waitForTimeout(600);

  const rawPath = path.join(__dirname, '../scratch/carrot-ebooks-raw.png');
  console.log(`Capturing high-res 1600x2000 screenshot to ${rawPath}...`);
  await page.screenshot({
    path: rawPath,
    clip: { x: 0, y: 0, width: 1600, height: 2000 }
  });

  await page.close();
  console.log('Playwright capture complete. Optimizing image...');

  // Python optimization script
  const pyScript = `
from PIL import Image
import subprocess, os

raw = '${rawPath}'
dest_png = 'public/work/carrot-ebooks-guides-v2.png'
dest_webp = 'public/work/carrot-ebooks-guides-v2.webp'

im = Image.open(raw)

# 1. 256-color PNG (adaptive palette)
im_quant = im.convert('RGB').quantize(colors=256, method=Image.Quantize.MEDIANCUT)
im_quant.save(dest_png, optimize=True)

# Also copy to out/work/ if exists
if os.path.exists('out/work'):
    im_quant.save('out/work/carrot-ebooks-guides-v2.png', optimize=True)

# 2. WebP q85 via cwebp
subprocess.run(['cwebp', '-q', '85', raw, '-o', dest_webp], check=True)
if os.path.exists('out/work'):
    subprocess.run(['cwebp', '-q', '85', raw, '-o', 'out/work/carrot-ebooks-guides-v2.webp'], check=True)

png_size = os.path.getsize(dest_png) // 1024
webp_size = os.path.getsize(dest_webp) // 1024
print(f"Optimized: PNG={png_size} KB, WebP={webp_size} KB")
`;

  execSync(`python3 -c "${pyScript.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  console.log('Task 1 completed successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

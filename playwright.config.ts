import { defineConfig, devices } from '@playwright/test';

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL || undefined;
const defaultBaseURL = 'http://127.0.0.1:3100';
const baseURL = externalBaseURL ?? defaultBaseURL;

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}',
  fullyParallel: true,
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  ...(externalBaseURL
    ? {}
    : {
        webServer: {
          command: 'npm run dev -- --port 3100',
          url: defaultBaseURL,
          reuseExistingServer: false,
        },
      }),
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'], browserName: 'chromium' },
    },
  ],
});

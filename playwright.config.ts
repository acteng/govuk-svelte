import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  webServer: {
    command: "npx vite --port 8080",
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  reporter: [["list"], ["playwright-ctrf-json-reporter", {}]],
});

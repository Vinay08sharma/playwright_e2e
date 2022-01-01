// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'chromium',
            use: {
                headless: false,
                browserName: "chromium",
                channel: "chrome",
            },
        },
        {
            name: 'Safari',
            use: {
                headless: false,
                browserName: "webkit",
                viewport: { width: 1200, height: 750 },
            },
        },

        // "iPhone 11 Test
        {
            name: 'iPhone 11',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 11'],
            },
        },
    ],
};
export default config;

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    name: "web",
    displayName: "WEB AUTOMATION",
    verbose: true,
    preset: "jest-playwright-preset",
    testTimeout: 420000,
    globals: {
        "ts-jest": {
            tsconfig:"./tsconfig.json",
            diagnostics: {
                warnOnly: true,
            },
        },
    },
    testMatch: [
        "<rootDir>/src/test/**/*.{js,jsx,ts}",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testRunner: 'jasmine2',
    setupFilesAfterEnv: ["jest-allure/dist/setup"]
};

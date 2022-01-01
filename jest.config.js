/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    name: "web",
    displayName: "WEB AUTOMATION",
    verbose: true,
    preset: "ts-jest",
    testTimeout: 420000,
    globals: {
        "ts-jest": {
            tsconfig: {
                compilerOptions: {
                    lib: ["dom", "ES2020"],
                    target: "ES2020",
                    module: "commonjs",
                    noImplicitAny: false,
                    noImplicitReturns: true,
                    resolveJsonModule: true,
                    esModuleInterop: true,
                    declaration: true,
                    allowJs: false,
                    baseUrl: "./test",
                    outDir: "./dist",
                    types: ["node", "jest", "chai"],
                },
                "moduleFileExtensions": [
                    "ts",
                    "tsx",
                    "js",
                    "jsx",
                    "json",
                    "node"
                ]
            },
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
};

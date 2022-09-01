// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/theme/**",
    "!**/utils/test-utils.tsx",
    "!**/pages/_app.tsx",
    "!**/utils/_document.tsx",
    "!**/index.ts",
  ],
  moduleNameMapper: {
    "^@ui/(.*)$": "<rootDir>/components/ui/$1",
    "^@features/(.*)$": "<rootDir>/components/features/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@theme(.*)$": "<rootDir>/theme$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@context/(.*)$": "<rootDir>/context/$1",
  },
  errorOnDeprecated: true,
  snapshotSerializers: ["@emotion/jest/serializer"],
  testEnvironment: "jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);


/** @type {import('jest').Config} */

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/reports/API/v8',
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "html"
  ],
  setupFiles: ['<rootDir>/tests/API/jest.setup.js'],
  resetMocks: true,
  roots: [
    "<rootDir>/tests"
  ],
  testMatch: [
    "**/*.test.js"
  ],
  moduleFileExtensions: [
    "js",
    "json"
  ],
  testEnvironment: "node",
  notify: false,
  notifyMode: "failure-change"
};

module.exports = config;

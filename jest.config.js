
/** @type {import('jest').Config} */

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "html"
  ],

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

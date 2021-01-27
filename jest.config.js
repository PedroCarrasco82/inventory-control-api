/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  bail: true,
  testTimeout: 10000,
  testMatch: [
    '**/__tests__/**/**.test.js?(x)'
  ]

};

module.exports = {
  testResultsProcessor: 'jest-teamcity-reporter',
  testPathIgnorePatterns: [
    '/packages/create-yoshi-app/templates/',
    '/node_modules/',
    '/test/',
  ],
  preset: 'ts-jest',
};

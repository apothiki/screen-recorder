// eslint-disable-next-line jest/no-jest-import
import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  passWithNoTests: true,
    testEnvironment: 'node',
    moduleNameMapper: {
        "^@main(.*)$": "<rootDir>/src/main$1",
        "^@lib(.*)$": "<rootDir>/src/lib$1",
      } ,
      preset: 'ts-jest',
    transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  // clear mocks after each test
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
  ],
};

export default config;
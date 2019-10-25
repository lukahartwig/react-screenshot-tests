module.exports = {
  setupFilesAfterEnv: ['<rootDir>/scripts/jest/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

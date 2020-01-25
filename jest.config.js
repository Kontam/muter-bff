
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    "^.+\\.(tsx|ts|js)?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  // StoryBook snapshotsテスト用
  setupFiles: ['<rootDir>/.jest/register-context.js']
};

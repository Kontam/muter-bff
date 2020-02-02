
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    "^.+\\.(jsx|tsx|ts|js)?$": '<rootDir>/.jest/transform.ts',
    // "^.+\\.(tsx|ts|js)?$": "ts-jest",
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
      // storyshots用にbabelrcを読ませたかったが有効化するとimportが読めずにエラーになる
      babelConfig: '.storybook/.babelrc',
      tsConfig: 'tsconfig.test.json',
      diagnostics: false,
    }
  },
  // StoryBook snapshotsテスト用
  setupFiles: ['<rootDir>/.jest/register-context.ts']
};

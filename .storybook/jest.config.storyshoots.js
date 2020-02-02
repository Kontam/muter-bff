
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../',
  transform: {
    "^.+\\.svg$": "<rootDir>/.jest/svgTransform.js",
    "^.+\\.(jsx|tsx|ts|js)?$": '<rootDir>/.jest/transform.ts',
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.storyshots\\.ts$",
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
      // babelにrequire.contextを読ませるためのpollyfillを含んでいる
      babelConfig: '.storybook/.babelrc',
      tsConfig: '<rootDir>/.jest/tsconfig.test.json',
      diagnostics: false,
    }
  },
  // StoryBook snapshotsテスト用
  setupFiles: ['<rootDir>/.jest/register-context.ts']
};

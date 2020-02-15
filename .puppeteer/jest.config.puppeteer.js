
module.exports = {
    preset: 'jest-puppeteer',
    transform: {
      '^.+\\.svg$': '<rootDir>/../.jest/svgTransform.js',
      '^.+\\.(tsx|ts|js)?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js|jsx)$',
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node',
    ],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/../.jest/tsconfig.test.json',
      },
    },
  };
  
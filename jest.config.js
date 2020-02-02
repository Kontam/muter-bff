
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.svg$': '<rootDir>/.jest/svgTransform.js',
    '^.+\\.(tsx|ts|js)?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
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
      tsConfig: '.jest/tsconfig.test.json',
    },
  },
};

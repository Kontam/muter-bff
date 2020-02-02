const babelOptions = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: ['require-context-hook', 'react-hot-loader/babel', '@babel/plugin-proposal-class-properties']
  };
  console.log("transform.ts")
  module.exports = require('ts-jest').createTransformer(babelOptions);
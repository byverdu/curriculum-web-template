// Check if we are using a valid prism theme
require('./src/config').isValidPrismTheme();

const path = require('path');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const dev = require('./webpack/dev');
const prod = require('./webpack/prod');
const env = process.env.NODE_ENV === 'development' ? dev : prod;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  ...env,
  plugins: [
    ...plugins
  ],
  module: {
    rules: [
      ...rules
    ]
  }
};
const destFolder = './docs';
const srcFolder = './src';

module.exports = {
  srcFolder,
  destFolder,
  filesToWatch: [`${srcFolder}/**/**.*`],
  srcJs: `${srcFolder}/main.js`,
  staticAssets: [`${srcFolder}/index.html`],
  srcSass: `${srcFolder}/sass/main.scss`,
  srcSassCompiled: `${destFolder}/main.css`,
  sourcemaps: './',
  bundleFile: 'bundle.js',
  optionsBase64: {
    extensions: ['svg'],
    deleteAfterEncoding: false,
    baseDir: `${srcFolder}/images/`,
    debug: true
  }
};

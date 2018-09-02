/*
Data entry point for all the content that will be used
*/
const utils = require('../utils');

// ./webpack/DownloadPrismThemePlugin.js configuration
const prismThemeConfig = {
  theme: 'dracula',
  urlsConfig: (theme) => {
    const themeSanitised = utils.trimAndLowercaseString(theme);
    const themeType = themeSanitised === 'prism' ? themeSanitised : `prism-${themeSanitised}`;
    return [`https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/${themeType}.css`]
  },
  directory: './src/sass',
  defaultFilename: 'prism-theme.scss',
  subdirectories: null,
}

// Content for <meta> tags in <head>
const headContentConfig = {
  description: 'John Doe Resume',
  keywords: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp',
  author: '@DoeJohn'
};

// Content for <footer> tag
const footerContentConfig = {
  author: '@DoeJohn'
}

module.exports = {
  prismThemeConfig,
  headContentConfig,
  footerContentConfig
}
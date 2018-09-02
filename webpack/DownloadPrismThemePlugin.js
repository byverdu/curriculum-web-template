const scrape = require('website-scraper');
const fs = require('fs');
const prismThemeConfig = require('../src/config').prismThemeConfig;
const consColors = require( 'consColors' );
const { promisify } = require( 'util' );
const writeFile = promisify( fs.writeFile );
const readFile = promisify( fs.readFile );
const fileExists = promisify( fs.exists );
const pluginLogger = consColors({type: 'download-prism-theme-plugin'});

const scrapeOptions = {
  ...prismThemeConfig,
  resourceSaver: class MyResourceSaver {
    constructor(options) {
      this.options = options;
    }

    createFolder (path) {
      return new Promise((resolve, reject) => {
        fs.exists(path, exists => {
          if (!exists) {
            fs.mkdir(path, (err) => pluginLogger.err(err));
            pluginLogger.log(`New folder created at "${this.options.directory}"`);
            return;
          }
  
          pluginLogger.warn(`"${this.options.directory}" already exists, is that right?`);

          resolve(true);
        });
      });
    }

  	saveResource (resource) {
      const {
        directory, defaultFilename, theme
      } = this.options;

      if (!resource.text.includes('404')) {
        this.createFolder(directory)
          .then(() => {
            writeFile(`${directory}/${defaultFilename}`, resource.text)
              .then(pluginLogger.log(`"${directory}/${defaultFilename}" has been saved successfully`))
              .catch(err => pluginLogger.error(`Something went wrong saving "${directory}/${defaultFilename}", ${err}`));
          })
          .catch(err => pluginLogger.error(`Something went wrong creating "${directory}" directory, ${err}`));
      } else {
        pluginLogger.error(`"${theme}" is not a prism theme. check your configuration object`);
      }

    }
  	errorCleanup (err) {
      pluginLogger.error(`Something went wrong with errorCleanup method, ${err}`);
    }
  }
};
 
function DownloadPrismThemePlugin(options) {
  this.options = options;
  pluginLogger.error(`Something went wrong saving ${this.options.theme}`)
}

DownloadPrismThemePlugin.prototype.apply = function(compiler) {
  const {theme, directory, defaultFilename} = this.options;

  compiler.hooks.entryOption.tap('DownloadPrismThemePlugin', (compilation) => {
    if (theme === 'dracula') {
      readFile(`${directory}/prism-dracula.scss`, {encoding: 'utf-8'})
        .then(content => {
          writeFile(`${directory}/${defaultFilename}`, content)
            .then(resp => console.log(resp))
            .catch(error => console.log('write dracula file error', error));
        })
        .catch(error => console.log('read dracula file error', error));
    } else {
      options.urls = options.urlsConfig(theme);
      options.theme = theme;

      scrape(scrapeOptions).then((result) => {
        /* some code here */
        // console.log(result[0].text, 'success')
      }).catch((err) => {
        /* some code here */
        console.print('error', err)
      });
    }
  });
};

module.exports = DownloadPrismThemePlugin;

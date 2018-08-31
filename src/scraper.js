
var scrape = require('website-scraper');
var fs = require('fs');

function print(type, text) {
  const outPut = {
    error: `\x1b[31m ${text} \x1b[0m`,
    success: `\x1b[32m ${text} \x1b[0m`
  }

  console.log(outPut[type]);
}

var options = {
  urls: ['https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-coy.css'],
  directory: './src/prismStyle',
  defaultFilename: 'style.css',
  subdirectories: null,
  resourceSaver: class MyResourceSaver {
    constructor(options) {
      this.options = options;
    }
    createFolder (path) {
      fs.exists(path, exists => {
        if (!exists) {
          fs.mkdir(path, (err) => console.log(err));
          print('success', `New folder created at "${this.options.directory}"`);
          return;
        }

        print('error', `"${this.options.directory}" already exists`);
      });
    }
  	saveResource (resource) {
      this.createFolder(this.options.directory);
      // console.log(this.options)
    }
  	errorCleanup (err) {/* code to remove all previously saved files in case of error */}
  }
};
 
// with promise
scrape(options).then((result) => {
    /* some code here */
    // console.log(result[0].text, 'success')
}).catch((err) => {
    /* some code here */
    console.log(err, 'error')
});
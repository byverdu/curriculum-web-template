var scrape = require('website-scraper');
var fs = require('fs');
const { promisify } = require( 'util' );
const writeFile = promisify( fs.writeFile );
const readFile = promisify( fs.readFile );
const fileExists = promisify( fs.exists );

let draculaContentFile;

function print(type, text) {
  const outPut = {
    error: `\x1b[31m ${text} \x1b[0m`,
    success: `\x1b[32m ${text} \x1b[0m`
  }

  console.log(outPut[type]);
}

var options = {
  urls: ['https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.css'],
  directory: './src/sass',
  defaultFilename: 'prism-theme.scss',
  subdirectories: null,
  resourceSaver: class MyResourceSaver {
    constructor(options) {
      this.options = options;
    }
    createFolder (path) {
      return new Promise((resolve, reject) => {
        fs.exists(path, exists => {
          if (!exists) {
            fs.mkdir(path, (err) => console.log(err));
            print('success', `New folder created at "${this.options.directory}"`);
            return;
          }
  
          print('error', `"${this.options.directory}" already exists`);

          resolve(true);
        });
      });
    }
  	saveResource (resource) {
      const {
        directory, defaultFilename
      } = this.options;

      this.createFolder(directory)
        .then(() => {
          writeFile(`${directory}/${defaultFilename}`, resource.text)
            .then(console.log('ok'))
            .catch(err => console.log(err, 'writefile err'));
        })
        .catch(err => console.log(err, 'createFolder err'));
    }
  	errorCleanup (err) {/* code to remove all previously saved files in case of error */}
  }
};
 
// // with promise
// scrape(options).then((result) => {
//     /* some code here */
//     // console.log(result[0].text, 'success')
// }).catch((err) => {
//     /* some code here */
//     console.log(err, 'error')
// });

function FileListPlugin(options) {
  console.log(options, 'contruiuiuiuii')
  this.options = options;
}

FileListPlugin.prototype.apply = function(compiler) {
  console.log(this.options, 'inside');
  const {theme} = this.options;

  compiler.hooks.entryOption.tap('FileListPlugin', (compilation) => {
    if (theme === 'dracula') {
      readFile('./src/sass/prism-dracula.scss', {encoding: 'utf-8'})
        .then(content => {
          writeFile('./src/sass/prism-theme.scss', content)
            .then(resp => console.log(resp))
            .catch(error => console.log('write dracula file error', error));
        })
        .catch(error => console.log('read dracula file error', error));
    } else {
      scrape(options).then((result) => {
        /* some code here */
        // console.log(result[0].text, 'success')
      }).catch((err) => {
        /* some code here */
        console.log(err, 'error')
      });
    }
  });
};


// FileListPlugin.prototype.apply = function(compiler) {
//   console.log(this.options, 'inside')

//   compiler.hooks.beforeRun.tapAsync('FileListPlugin', (compilation, callback) => {
//     // Create a header string for the generated file:
//     var filelist = 'In this build:\n\n';

//     // Loop through all compiled assets,
//     // adding a new line item for each filename.
//     for (var filename in compilation.assets) {
//       filelist += ('- '+ filename +'\n');
//     }
    
//     // Insert this list into the Webpack build as a new file asset:
//     compilation.assets['filelist.md'] = {
//       source: function() {
//         return filelist;
//       },
//       size: function() {
//         return filelist.length;
//       }
//     };

//     callback();
//   });
// };

module.exports = FileListPlugin;

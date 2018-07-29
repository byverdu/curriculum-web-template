const gulp = require( 'gulp' );
const browserify = require( 'browserify' );
const uglify = require( 'gulp-uglify-es' ).default;
const source = require( 'vinyl-source-stream' );
const gutil = require( 'gulp-util' );
const buffer = require( 'vinyl-buffer' );
const sourcemaps = require( 'gulp-sourcemaps' );
const babelify = require( 'babelify' );
const notify = require( 'gulp-notify' );
const paths = require( '../paths' );

gulp.task( 'browserify', ['static-assets'], () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: paths.srcJs,
    debug: true,
    transform: [babelify]
  });

  return b.bundle()
    .pipe( source( paths.bundleFile ))
    .pipe( buffer())
    .pipe( sourcemaps.init({ loadMaps: true }))
  // Add transformation tasks to the pipeline here.
    .pipe( uglify({ mangle: true }))
    .on( 'error', gutil.log )
    .pipe( sourcemaps.write( paths.sourcemaps ))
    .pipe( gulp.dest( paths.destFolder ))
    .pipe( notify({ message: 'Browserify completed' }));
});

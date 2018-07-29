const gulp = require( 'gulp' );
const cssnano = require( 'gulp-cssnano' );
const rename = require( 'gulp-rename' );
const sass = require( 'gulp-sass' );
const sourcemaps = require( 'gulp-sourcemaps' );
const notify = require( 'gulp-notify' );
const paths = require( '../paths' );

gulp.task( 'sass', ['browserify'], () => {
  return gulp.src( paths.srcSass )
    .pipe( sass().on( 'error', sass.logError ))
    .pipe( gulp.dest( paths.destFolder ))
    .pipe( notify({ message: 'Sass compilation completed' }));
});

gulp.task( 'css-minify', ['clean', 'cssBase64'], () => {
  return gulp.src( `${paths.srcSassCompiled}` )
    .pipe( sourcemaps.init())
    .pipe( cssnano())
    .pipe( rename({ suffix: '.min' }))
    .pipe( sourcemaps.write( '.' ))
    .pipe( gulp.dest( paths.destFolder ))
    .pipe( notify({ message: 'CSS minification completed' }));
});

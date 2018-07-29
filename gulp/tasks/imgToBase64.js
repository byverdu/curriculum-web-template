const gulp = require( 'gulp' );
const base64 = require( 'gulp-base64' );
const paths = require( '../paths' );

gulp.task( 'cssBase64', ['sass'], () => {
  return gulp.src( paths.srcSassCompiled )
    .pipe( base64( paths.optionsBase64 ))
    .pipe( gulp.dest( paths.destFolder ));
});

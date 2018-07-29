const gulp = require( 'gulp' );
const paths = require( '../paths' );

function reportChange( event ) {
  console.log( `File ${event.path} was ${event.type} \nrunning tasks...` );
}

gulp.task( 'watch', () => {
  gulp.watch( paths.filesToWatch, ['build'])
    .on( 'change', reportChange );
});

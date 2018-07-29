const gulp = require( 'gulp' );
const gls = require( 'gulp-live-server' );
const paths = require( '../paths' );

gulp.task( 'serve', ['sass'], () => {
  const server = gls.static( paths.destFolder, 8080 );
  server.start();

  gulp.watch( paths.filesToWatch, ( file ) => {
    // TODO, browser reloads before browserify ends
    setTimeout(() => {
      console.log( 'reloading the server' );
      server.notify.apply( server, [file]);
    }, 1000 );
  });
});

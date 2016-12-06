var gulp        = require( 'gulp' );
var runSequence = require( 'run-sequence' );
var requireDir  = require( 'require-dir' );
// Require all tasks.
requireDir( './gulp-tasks', { recurse: true } );
// Commonly used tasks defined here.
gulp.task( 'default', function(  )
{
    runSequence(
        'jade',
        'sass',
        'scripts',
        'images',
        'favicon'
    );
} );


gulp.task('default', ['jade', 'sass', 'scripts', 'appscripts'], function() {
    gulp.watch('./app/**/*.jade', ['jade']);
    gulp.watch(['./app/includes/*.jade', './app/**/*.js'], ['scripts']);
    gulp.watch(['./app/includes/*.jade', './app/**/*.js'], ['appscripts']);
    gulp.watch('./app/assets/scss/**/*.scss', ['sass']);

});

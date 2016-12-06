var gulp = require( 'gulp' );
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('appscripts', function() {

    var sources = [
        './app/**/*.js',
        './app/MainController.js'
        
    ];

    var stream = gulp.src(sources)
        //.pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/app'));
    return stream;
});
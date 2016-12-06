var gulp = require( 'gulp' );
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {

    var sources = [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.js',
        './bower_components/angular-touch/angular-touch.js'

    ];

    var stream = gulp.src(sources)
        //.pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('lib.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/app'));
    return stream;


});
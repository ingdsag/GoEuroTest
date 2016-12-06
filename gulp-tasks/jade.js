var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');

gulp.task('jade', function() {
    gulp.src(['./app/*.jade', './app/directives/**/*.jade'])
        .pipe(plumber())
        .pipe(jade({}))
        .pipe(gulp.dest('./dist/'));

    gulp.src([
        './app/modules/index/views/*.jade',
        './app/modules/githubapp/views/*.jade'
    ])
        .pipe(plumber())
        .pipe(jade({}))
        .pipe(gulp.dest('./dist/pages/'));
});
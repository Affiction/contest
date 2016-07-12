// -----------------------------------------------------------
// GULP : JavaScript Task
// -----------------------------------------------------------

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');


gulp.task('js', function() {
  gulp.src('./app/js/*.js')
    .pipe(uglify())
    .pipe(rename('common.min.js'))
    //.pipe(gulp.dest('./app/js/'))
    .pipe(gulp.dest('./build/js/'));
});

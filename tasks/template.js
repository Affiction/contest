// -----------------------------------------------------------
// GULP : Jade Task
// -----------------------------------------------------------

var gulp = require('gulp'),
  jade = require('jade'),
  gulpJade = require('gulp-jade'),
  debug = require('gulp-debug');
  plumber = require("gulp-plumber"),

gulp.task('jade', function () {
  var YOUR_LOCALS = {};

  gulp.src('./app/jade/pages/*.jade')
    .pipe(debug({title: 'jade:'}))
    .pipe(plumber())
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./app/'))
    .pipe(gulp.dest('./build/'));
});

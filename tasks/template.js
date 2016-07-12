// -----------------------------------------------------------
// GULP : Jade Task
// -----------------------------------------------------------

var gulp = require('gulp'),
  jade = require('jade'),
  gulpJade = require('gulp-jade'),
  debug = require('gulp-debug');

gulp.task('template', function () {
  var YOUR_LOCALS = {};

  gulp.src('./app/jade/pages/*.jade')
    .pipe(debug({title: 'jade:'}))
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./app/'))
    .pipe(gulp.dest('./build/'));
});

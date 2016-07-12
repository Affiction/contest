// -----------------------------------------------------------
// GULP : Image Task
// -----------------------------------------------------------

var gulp = require('gulp'),
  imagemin = require('gulp-imagemin');

gulp.task('image', function () {
    gulp.src('./app/img/for-optimization/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./app/img/'))
  }
);

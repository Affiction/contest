// -----------------------------------------------------------
// GULP : Watch
// -----------------------------------------------------------

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch("app/css/*/*", ['sass']);
  gulp.watch("app/jade/**/*.jade", ['jade']);
  gulp.watch("app/js/common.js", ['js']);
  gulp.watch("app/img/for-sprite/*", ['sprite']);
});

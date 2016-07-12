// -----------------------------------------------------------
// GULP : Copy
// -----------------------------------------------------------

var gulp = require('gulp');

var filesToMove = [
  './app/*.html',
  './app/img/**/*',
  './app/fonts/**/*',
  './app/libs/**/*',
  './app/.htaccess'
];

gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './app/' })
    .pipe(gulp.dest('build'));
});

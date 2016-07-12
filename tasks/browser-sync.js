// -----------------------------------------------------------
// GULP : Browser Sync Task
// -----------------------------------------------------------

var gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init(["./app/*.html", "./app/**/*.js", "./app/**/*.css",
    "./app/libs/*"
  ], {
    server: {
      baseDir: "app",
      routes: {
        "/bower_components": "bower_components",
        "/build": "build"
      }
    }
  });
});

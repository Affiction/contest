'use strict';
/*-----------------------------------------------------------
 GULP: DEPENDENCIES
 Define the variables of your dependencies in this section
-----------------------------------------------------------*/
var gulp = require('gulp'),
    requireDir = require('require-dir');

/*---------------------------------------------------------
 GULP: TASKS
 Necessary gulp tasks required to run your application like
 magic. Feel free to add more tasks inside tasks folder
-----------------------------------------------------------*/
var tasks = requireDir('./tasks');

/*-----------------------------------------------------------
 GULP : WATCH TASKS
-----------------------------------------------------------*/
gulp.task('default', ['watch', 'browser-sync', 'sass', 'jade', 'js', 'sprite']);
gulp.task('lint:scss', ['scss-lint']);
gulp.task('build', ['image', 'sass', 'move', 'js']);

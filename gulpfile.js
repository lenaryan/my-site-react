'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//// SASS/CSS

var SASS_SRC = './src/Styles/sass/**/*.sass';
var SASS_DEST = './src/Styles/css';


// Compile SASS
gulp.task('compile_sass', function() {
    gulp.src(SASS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SASS_DEST))
    .pipe(gulp.dest(SASS_DEST));
});

//detect changes in SCSS

gulp.task('watch_sass', function() {
    gulp.watch(SASS_SRC, ['compile_sass']);
});

// run tasks
gulp.task('default', ['watch_sass']);
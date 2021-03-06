'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/sass/style.scss')
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
	return gulp.src('./src/index.html')
	.pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
	.pipe(gulp.dest('./'));
});

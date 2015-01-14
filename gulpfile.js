'use strict';
var gulp       = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	connect    = require('gulp-connect'),
	rename     = require('gulp-rename'),
	minifyHTML = require('gulp-minify-html'),
	pkg        = require('./package.json');

gulp.task('handlebars', function () {
	return gulp.src('./source/template/index.hbs')
		.pipe(handlebars(pkg))
		.pipe(minifyHTML({comments:true,spare:true}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('connect', function() {
	return connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('watch', function () {
	gulp.watch(['./source/index.handlebars'], ['handlebars']);
});

gulp.task('default', ['handlebars', 'connect', 'watch']);
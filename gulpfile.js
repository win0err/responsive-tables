'use strict';

const 	gulp = require('gulp'),
		pump = require('pump'),
		rename = require('gulp-rename'),
		postcss = require('gulp-postcss'),
		csso = require('gulp-csso'),
		uglify = require('gulp-uglifyes');

const paths = {
	rawCSS: 'src/ssk-tables.css',
	rawJS: 'src/ssk-tables.js',
	output: 'dist',
	watch: 'src/ssk-tables.{css,js}'
};

const postcssPlugins = [
	require('postcss-cssnext'),
];

gulp.task('css', function(c) {
  
  	pump([ 
  		gulp.src(paths.rawCSS),

	    postcss( postcssPlugins ),
	    gulp.dest(paths.output),

		csso(),
	    rename({
	            suffix: '.min'
	        }),
	    gulp.dest(paths.output)
	], c);
});

gulp.task('js', function(c) {

	pump([ 
  		gulp.src(paths.rawJS),

	    gulp.dest(paths.output),

		uglify(),
	    rename({
	            suffix: '.min'
	        }),
	    gulp.dest(paths.output)
	], c);
});

gulp.task('default', function() {
	gulp.start(['js', 'css']);
});

gulp.task('watch', function() {

	gulp.watch(paths.watch, ['js', 'css']);
});

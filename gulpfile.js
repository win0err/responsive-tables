'use strict'

const gulp       = require('gulp'),
      rename     = require('gulp-rename'),
      postcss    = require('gulp-postcss'),
      terser     = require('gulp-terser'),
      babel      = require('gulp-babel'),
      sourcemaps = require('gulp-sourcemaps'),
      plumber    = require('gulp-plumber')

const paths = {
	css: 'src/*.css',
	js: 'src/*.js',
	output: 'dist',
	watch: 'src/responsive-tables.{css,js}'
}

const postcssPlugins = [
	require('postcss-preset-env')({stage: 0}),
	require('cssnano')
]

gulp.task('css', () => {
	return gulp.src(paths.css)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(postcss(postcssPlugins))
		.pipe(
			rename({
				suffix: '.min'
			}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.output))
})

gulp.task('js', () => {
	return gulp.src(paths.js)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(terser())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.output))
})

gulp.task('default', gulp.parallel([ 'js', 'css' ]))

gulp.task('watch', function () {
	gulp.watch(paths.watch, gulp.parallel([ 'js', 'css' ]))
})

'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import sass from 'gulp-sass';
import cssimport from 'gulp-cssimport';
import concat from 'gulp-concat';
import csso from 'gulp-csso';
import minifyCss from 'gulp-minify-css';
import size from 'gulp-size';
import debug from 'gulp-debug';

import config from '../config';
import utils from '../utils';

gulp.task('styles-vendor-dist', 'Optimize and minimize vendor stylesheets for production', () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)([
			config.styles.srcVendorOnly
	)

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// Process Sass files
	.pipe(sass({
		style: "compressed"
		//errLogToConsole: true
	}))

	// Replace CSS imports by actual contents
	.pipe(cssimport())

	// Remove any unused CSS
	// Note that it breaks the sourcemaps (but we shouldn't care for dist since we don't need sourcemaps there)
	// Note that it also causes weird output during build in combination w/ Angular
	//.pipe($.uncss({
	//  html: [
	//    config.html.src
	//  ],
	//  // CSS Selectors for UnCSS to ignore
	//  ignore: [
	//  ]
	//}))

	// Regroup all files together
	.pipe(concat(config.styles.finalVendorCssBundleFilename))

	// Optimize and minimize
	.pipe(csso()) // https://www.npmjs.com/package/gulp-csso
	.pipe(minifyCss(
			config.minifyCss
	))

	// Output file
	.pipe(gulp.dest(config.styles.destDist))

	// Task result
	.pipe(size({
		title: 'styles-vendor-dist'
	}));
});

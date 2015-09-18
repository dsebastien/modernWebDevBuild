'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import jshint from 'gulp-jshint';
import browserSync from 'browser-sync';
import debug from 'gulp-debug';

import config from '../config';
import utils from '../utils';

gulp.task('check-js-quality', 'Check JavaScript code quality using JSHint', () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
			config.javascript.src
	)

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// Force BrowserSync reload
	.pipe(browserSync.reload({
		stream: true,
		once: true
	}))

	// Run JSHint
	.pipe(jshint())

	// Generate a stylish report
	.pipe(jshint.reporter('jshint-stylish'));

	// Fail the build only if BrowserSync is not active
	// Actually, failing the build is counter-productive thus evil
	//.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

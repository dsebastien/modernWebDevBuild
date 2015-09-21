'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import tslint from 'gulp-tslint';
import iff from 'gulp-if';
import browserSync from 'browser-sync';
import size from 'gulp-size';
import debug from 'gulp-debug';

import config from '../config';
import utils from '../utils';

gulp.task('ts-lint', 'Lint TypeScript code', () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
			config.typescript.srcAppOnly // only the application's code needs to be checked
	)

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// Check the code quality
	.pipe(tslint())

	// Fail the build only if BrowserSync is not active
	.pipe(iff(!browserSync.active, tslint.report('prose')))
	.pipe(iff(browserSync.active, tslint.report('prose', {
		emitError: false
	})))

	// Task result
	.pipe(size({
		title: 'ts-lint'
	}));
});

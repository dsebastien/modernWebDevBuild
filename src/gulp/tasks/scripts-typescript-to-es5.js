'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

import runSequence from 'run-sequence'; // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
import browserSync from 'browser-sync';

import config from '../config';
import utils from '../utils';

browserSync.reload

gulp.task('scripts-typescript-to-es5', 'Transpile TypeScript to ES5 and reload the browser (this task should only be called during serve)', () =>{
	runSequence('prepare-scripts-typescript-to-es5', browserSync.reload); // here we need to ensure that all the other tasks are done before we ask BrowserSync to reload
});

gulp.task('prepare-scripts-typescript-to-es5', 'Transpile TypeScript to ES6 and use Babel to transpile to ES5 and generate sourcemaps', [
		'ts-lint',
		'gen-ts-refs',
		//'check-js-style',
		//'check-js-quality'
	], (callback) =>{
		return runSequence('scripts-typescript',[
			'scripts-javascript'
		], callback);
});


'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import browserSync from'browser-sync';
import iff from 'gulp-if';
import size from 'gulp-size';
import debug from 'gulp-debug';

import config from '../config';
import utils from '../utils';

gulp.task('scripts-javascript', 'Transpile JavaScript (ES6 to ES5 using Babel) and generate sourcemaps', () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
			config.javascript.src
	)

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// speed things up by ignoring unchanged resources
	.pipe(changed(config.javascript.dest))

	// Initialize sourcemap generation
	.pipe(sourcemaps.init({
		loadMaps: true
		//debug: true
	}))

	// Transpile ES6 to ES5
	// options: https://babeljs.io/docs/usage/options/
	.pipe(babel({
		modules: "system", // use the system module format. Useful since load these with SystemJS
		stage: 1, // enable experimental features (e.g., decorators, etc): http://babeljs.io/docs/usage/experimental/
		comments: false, // remove comments
		optional: [
				"runtime" // necessary to load regenerator (generators/async) & core-js (ES6 static methods) automatically: https://babeljs.io/docs/usage/runtime/
		]
	}))

	// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
	//.pipe($.sourcemaps.write()) // use '.' to write the sourcemap to a separate file in the same dir
	.pipe(sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
		includeContent: false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
		sourceRoot: '/' // use an absolute path because we have scripts in different subpaths
	}))

	// Copy files
	.pipe(gulp.dest(config.javascript.dest))

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// Task result
	.pipe(size({
		title: 'scripts-javascript'
	}))

	// Reload Browser if needed
	.pipe(iff(browserSync.active, browserSync.reload({
		stream: true, once: true
	})));
});

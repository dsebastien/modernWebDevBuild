/* Rather than manage one giant configuration file responsible for creating multiple gulp tasks, each task has been broken out into
 its own file. Any files in that directory get automatically required below.

 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.

 Principle taken from gulp-starter: https://github.com/greypants/gulp-starter
 */

'use strict';

let help = require('gulp-help');

import requireDir from 'require-dir';
import runSequence from 'run-sequence';

module.exports = {
	registerTasks: function(gulp){
		gulp = gulp || require('gulp'); // this module should can be imported without a defined gulp instance
		help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

		// Load all tasks in gulp/tasks, including subfolders
		let	loadedModules = requireDir('./gulp/tasks', {
			recurse: true
		});
		
		for(let loadedModule of loadedModules){
			if(loadedModule.registerTask){
				console.log('yeah');
				loadedModule.clean.registerTask(gulp);
			}
		}

		// Default task
		gulp.task('default', 'Build production files', [ 'prepare-default' ], (callback) =>{
			return runSequence('validate-package-json', [
				'copy',
				'styles-vendor-dist',
				'styles-dist',
				'scripts-javascript-dist',
				'html',
				'images'
			], callback);
		});

		gulp.task('prepare-default', 'Do all the necessary preparatory work for the default task', [
				'clean',
				'ts-lint',
				'gen-ts-refs'

				//'check-js-style',
				//'check-js-quality'
			], (callback) =>{
				return runSequence('scripts-typescript',
					[ 'scripts-javascript', 'validate-package-json' ],
					callback);
			}
		);
	}
};

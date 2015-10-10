"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
//import config from "../config";
//import utils from "../utils";

import browserSync from "browser-sync";

class ScriptsTypeScriptToES5TaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		let runSequence = require("run-sequence");
		
		runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

		gulp.task("scripts-typescript-to-es5", "Transpile TypeScript to ES5 and reload the browser (this task should only be called during serve)", () =>{
			runSequence("prepare-scripts-typescript-to-es5", browserSync.reload); // here we need to ensure that all the other tasks are done before we ask BrowserSync to reload
		});

		gulp.task("prepare-scripts-typescript-to-es5", "Transpile TypeScript to ES2015 and use Babel to transpile to ES5 and generate sourcemaps", [
			"ts-lint",
			"gen-ts-refs"
			//"check-js-style",
			//"check-js-quality"
		], (callback) =>{
			return runSequence("scripts-typescript", [
				"scripts-javascript"
			], callback);
		});
	}
}

module.exports = new ScriptsTypeScriptToES5TaskLoader();

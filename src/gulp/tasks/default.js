"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
//import config from "../config";
//import utils from "../utils";

class DefaultTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		let runSequence = require("run-sequence");

		runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

		gulp.task("default", "Build production files", [ "prepare-default" ], (callback) =>{
			return runSequence("validate-package-json", [
				"copy",
				"styles-vendor-dist",
				"styles-dist",
				"scripts-javascript-dist",
				"html",
				"images"
			], callback);
		});

		gulp.task("prepare-default", "Do all the necessary preparatory work for the default task", [
				"clean",
				"ts-lint",
				"gen-ts-refs"

				//"check-js-style",
				//"check-js-quality"
			], (callback) =>{
				return runSequence("scripts-typescript",
					[ "scripts-javascript" ],
					callback);
			}
		);
	}
}

module.exports = new DefaultTaskLoader();

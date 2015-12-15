"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
//import config from "../config";
//import utils from "../utils";

//import debug from "gulp-debug";
let KarmaServer = require("karma").Server; // TODO replace by import {Server as KarmaServer} from "karma";
let path = require("path");

class TestUnitTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		let runSequence = require("run-sequence");

		runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

		gulp.task("test-unit", "Execute all unit tests", [ "prepare-test-unit" ], (callback) =>{
			return new KarmaServer({
				configFile: path.resolve("karma.conf.js"), // necessary otherwise the file is not resolved correctly by the karma runtime
				singleRun: true
			}, callback).start();
		});

		gulp.task("prepare-test-unit", "Do all the necessary preparatory work for the test-unit task", [
			"clean",
			"ts-lint",
			"check-js-style",
			"check-js-quality"
		], (callback) =>{
			return runSequence([
				"scripts-typescript",
				"scripts-javascript"
			], callback);
		});
	}
}

module.exports = new TestUnitTaskLoader();

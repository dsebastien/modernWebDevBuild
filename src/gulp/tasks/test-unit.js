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

		let karmaConfigFilePath = path.resolve("karma.conf.js");
		
		gulp.task("test-unit", "Execute all unit tests", (callback) =>{
			return new KarmaServer({
				configFile: karmaConfigFilePath, // necessary otherwise the file is not resolved correctly by the karma runtime
				singleRun: true
			}, callback).start();
		});

		gulp.task("test-unit-dev", "Execute all unit tests continuously (watches files)", (callback) =>{
			return new KarmaServer({
				configFile: karmaConfigFilePath, // necessary otherwise the file is not resolved correctly by the karma runtime
				singleRun: false
			}, callback).start();
		});

		gulp.task("prepare-test-unit", "Do all the necessary preparatory work for the test-unit task", () =>{
			return runSequence([
					"clean",
					"ts-lint",
					"check-js-style",
					"check-js-quality"
				], [
					"scripts-typescript",
					"scripts-javascript"
			]);
		});
	}
}

module.exports = new TestUnitTaskLoader();

"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
//import debug from "gulp-debug";
let KarmaServer = require("karma").Server; // TODO replace by import {Server as KarmaServer} from "karma";
let path = require("path");
let runSequence = require("run-sequence");

//import config from "../config";
//import utils from "../utils";

gulp.task("test-unit", "Execute all unit tests", [ "prepare-test-unit" ], (callback) =>{
	return new KarmaServer({
		configFile: path.resolve("karma.conf.js"), // necessary otherwise the file is not resolved correctly
		singleRun: true
	}, callback).start();
});

gulp.task("prepare-test-unit", "Do all the necessary preparatory work for the test-unit task", [
	"clean",
	"check-js-style",
	"check-js-quality"
], (callback) =>{
	return runSequence([
		"scripts-javascript-dist"
	], callback);
});

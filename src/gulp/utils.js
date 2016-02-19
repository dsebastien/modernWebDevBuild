"use strict";

import notify from "gulp-notify";
import gutil from "gulp-util";
import plumber from "gulp-plumber";

/**
 * Whether we should make the house explode whenever errors occur (e.g., stop gulp serve)
 * @type {boolean}
 */
let exitOnError = false;

/**
 * Display errors nicely and avoid having errors breaking tasks/watch
 * Reference: https://github.com/mikaelbr/gulp-notify/issues/81
 * @param error the error to report
 */
let reportError = function(error){
	let lineNumber = error.lineNumber ? `LINE ${error.lineNumber} -- ` : "";
	let report = "";
	let chalk = gutil.colors.white.bgRed;

	notify({
		title: `Task Failed [${error.plugin}]`,
		message: `${lineNumber} See console.`,
		sound: true

		// the version below probably works on OSX
		//sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	}).write(error);

	// Inspect the error object
	//gutil.log(error);

	// Easy error reporting
	//console.log(error.toString());

	// Pretty error reporting
	report += chalk("TASK:") + " [" + error.plugin + "]\n";
	report += chalk("ISSUE:") + " " + error.message + "\n";

	if(error.lineNumber){
		report += chalk("LINE:") + " " + error.lineNumber + "\n";
	}

	if(error.fileName){
		report += chalk("FILE:") + " " + error.fileName + "\n";
	}

	console.error(report);

	if(exitOnError){
		process.exit(1);
	} else{
		// Prevent the 'watch' task from stopping
		this.emit("end");
	}
};

/**
 * Exclude files from globs
 * @param providedPath the path that should be excluded
 * @returns {string} the exclusion string
 */
let exclude = providedPath => "!" + providedPath;

/**
 * Filter out empty directories
 * reference: http://stackoverflow.com/questions/23719731/gulp-copying-empty-directories
 * @param es the list to filter
 * @returns {*} the filtered list
 */
let filterEmptyDirectories = es =>{
	return es.map((file, cb) =>{
		if(file.stat.isFile()){
			return cb(null, file);
		} else{
			return cb();
		}
	});
};

/**
 * Validate that the passed argument is not null or undefined.
 * If validation fails, an error is thrown.
 * @param arg the argument to check
 * @param errorMessage the error message to use if validation fails
 * @throws Error if validation fails
 */
let validateArgument = (arg, errorMessage) =>{
	errorMessage = errorMessage || "the provided argument cannot be null or undefined!";

	if(arg === null || arg === undefined){
		throw new TypeError(errorMessage);
	}
};

/**
 * Validate that the passed argument is a valid gulp object
 * @param obj the object to validate
 * @throws Error if validation fails
 */
let validateGulpObject = obj =>{
	validateArgument(obj);
	validateArgument(obj.tasks, "the provided argument must be a gulp instance!");
};

/**
 * Validate that the passed argument is a valid gulp object and is configured as expected.
 * It should have the help task defined
 * @param obj the object to validate
 * @throws Error if validation fails
 */
let validateGulpObjectIsConfigured = obj =>{
	const notCorrectlyConfiguredErrorMessage = "the provided argument is a valid gulp object but it isn't configured properly. You need to invoke the configureGulpObject utility function before passing it to the tasks!";

	validateGulpObject(obj);
	validateArgument(obj.tasks.help, notCorrectlyConfiguredErrorMessage);
	validateArgument(obj.plumbedSrc, notCorrectlyConfiguredErrorMessage);
};

/**
 * Configure the passed in gulp object so that it is customized as we need:
 * - gulp help loaded and enabled
 * - gulp plumbedSrc function added (integrates plumber)
 * @param obj the object to validate
 * @param options the build options
 * @throws Error if validation fails
 */
let configureGulpObject = (obj, options) =>{
	validateGulpObject(obj);
	const help = require("gulp-help");

	let configuredGulpObject = help(obj); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

	configuredGulpObject.options = options; // keep the options on the gulp object (useful as it'll be passed around and can be manipulated)
	
	// Easily integrate plumber invocation
	// Reference: https://gist.github.com/floatdrop/8269868
	configuredGulpObject.plumbedSrc = function(){
		return configuredGulpObject.src.apply(configuredGulpObject, arguments)
			.pipe(plumber({
				errorHandler: reportError
			}));
	};

	return configuredGulpObject;
};

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
let mergeOptions = (obj1 = {}, obj2 = {}) =>{
	let obj3 = {};
	
	for(let attrname in obj1){
		if(obj1.hasOwnProperty(attrname)){
			obj3[attrname] = obj1[attrname];
		}
	}
	
	for(let attrname in obj2){
		if(obj2.hasOwnProperty(attrname)){
			obj3[attrname] = obj2[attrname];
		}
	}
	
	return obj3;
};

export default {
	exclude,
	reportError,
	filterEmptyDirectories,
	validateArgument,
	validateGulpObjectIsConfigured,
	configureGulpObject,
	mergeOptions
};

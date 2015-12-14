// Karma configuration
// reference: http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		//basePath: ".tmp/",

		plugins: [
			"karma-jasmine",
			"karma-phantomjs-launcher",
			"karma-chrome-launcher",
			"karma-firefox-launcher",
			"karma-ie-launcher",
			"karma-junit-reporter",
			"karma-spec-reporter"
		],

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			"jasmine"
		],

		// list of files / patterns to load in the browser (loaded before SystemJS)
		files: [
			"dist/**/*.spec.js"
		],

		// list of files to exclude
		exclude: [],

		// list of paths mappings
		// can be used to map paths served by the Karma web server to /base/ content
		// knowing that /base corresponds to the project root folder (i.e., where this config file is located)
		proxies: {
			
		},

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress', 'spec', 'junit'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		// https://www.npmjs.com/package/karma-junit-reporter
		// https://www.npmjs.com/package/karma-spec-reporter
		reporters: ["spec"],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			"PhantomJS"
			//"Chrome",
			//"Firefox",
			//"PhantomJS",
			//"IE"
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,
	});
};

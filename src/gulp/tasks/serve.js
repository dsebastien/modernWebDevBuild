"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

let browserSync = require("browser-sync").create(config.webServerNames.dev);

import historyApiFallback from "connect-history-api-fallback"; // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204
//import debug from "gulp-debug";

class ServeTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		let runSequence = require("run-sequence");

		runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

		// TypeScript
		gulp.task("serve-scripts-typescript", "Transpile TypeScript to ES5 and reload the browser (this task should only be called during serve)", [ "prepare-serve-scripts-typescript" ], () =>{
			return browserSync.reload();
		});  // reload BrowserSync once everything is ready
		gulp.task("prepare-serve-scripts-typescript", "Transpile TypeScript to ES5 and generate sourcemaps", [
			"ts-lint"
		], (callback) =>{
			return runSequence(
				"scripts-typescript",
				callback);
		});

		// JavaScript
		gulp.task("serve-scripts-javascript", "Transpile JavaScript to ES5 and reload the browser (this task should only be called during serve)", [ "prepare-serve-scripts-javascript" ], () =>{
			return browserSync.reload();
		}); // reload BrowserSync once everything is ready
		gulp.task("prepare-serve-scripts-javascript", "Transpile JavaScript to ES5 and generate sourcemaps", [
			"check-js-style",
			"check-js-quality"
		], (callback) =>{
			return runSequence(
				"scripts-javascript",
				callback);
		});
		
		let startBrowserSync = () =>{
			browserSync.init({ // http://www.browsersync.io/docs/options/
				notify: false,
				//port: 8000,

				// Customize the BrowserSync console logging prefix
				logPrefix: "MWD", // Modern Web Dev

				// Run w/ https by uncommenting "https: true"
				// Note: this uses an unsigned certificate which on first access
				//       will present a certificate warning in the browser.
				// https: true,
				ghostMode: { // replicate actions in all clients
					clicks: false,
					forms: false,
					scroll: false
				},
				server: {
					baseDir: config.webServerFolders.dev,

					// fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204
					// reference: https://github.com/BrowserSync/browser-sync/issues/204
					middleware: [
						historyApiFallback(), // not necessary if the app uses hash based routing
						function(req, res, next){
							res.setHeader("Access-Control-Allow-Origin", "*"); // add CORS to the response headers (for resources served by BrowserSync)
							next();
						}
					]
				}//,
				//reloadDebounce: 500 // restrict the frequency in which browser reload events can be emitted to connected clients
			});

			gulp.watch(config.html.src).on("change", browserSync.reload); // force a reload when html changes
			gulp.watch(config.styles.src, [ "styles" ]); // stylesheet changes will be streamed if possible or will force a reload
			gulp.watch(config.typescript.srcAppOnly, [
				"serve-scripts-typescript"
			]); // TypeScript changes will force a reload
			gulp.watch(config.javascript.src, [
				"serve-scripts-javascript"
			]); // JavaScript changes will force a reload
			gulp.watch(config.images.src).on("change", browserSync.reload); // force a reload when images change
		};

		gulp.task("serve", "Watch files for changes and rebuild/reload automagically", () =>{
			runSequence("prepare-serve", startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
		});

		gulp.task("prepare-serve", "Do all the necessary preparatory work for the serve task", [
			"clean",
			"ts-lint",
			"check-js-style",
			"check-js-quality"
		], (callback) =>{
			return runSequence([
				"scripts-typescript",
				"scripts-javascript",
				"styles",
				"validate-package-json"
			], callback);
		});
	}
}

export default new ServeTaskLoader();

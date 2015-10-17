"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback"; // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204

class ServeTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		let runSequence = require("run-sequence");

		runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

		let startBrowserSync = () =>{
			browserSync({ // http://www.browsersync.io/docs/options/
				notify: false,
				//port: 8000,

				// Customize the BrowserSync console logging prefix
				logPrefix: "MWD", // Modern Web Dev

				// Run w/ https by uncommenting "https: true"
				// Note: this uses an unsigned certificate which on first access
				//       will present a certificate warning in the browser.
				// https: true,
				// ghostMode: { // replicate actions in all clients
				//  clicks: false,
				//  forms: false,
				//  scroll: false
				// },
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
				}
			});

			gulp.watch(config.html.src, browserSync.reload); // html changes will force a reload
			gulp.watch(config.styles.src, [ "styles" ]); // stylesheet changes will force a reload
			gulp.watch(config.typescript.srcAppOnly, [
				"scripts-typescript-to-es5"
			]); // TypeScript changes will force a reload
			gulp.watch(config.javascript.src, [
				"scripts-javascript-to-es5"
			]); // JavaScript changes will force a reload
			gulp.watch(config.images.src, browserSync.reload); // image changes will force a reload
		};

		gulp.task("serve", "Watch files for changes and rebuild/reload automagically", () =>{
			runSequence("prepare-serve", startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
		});

		gulp.task("prepare-serve", "Do all the necessary preparatory work for the serve task", [
			"clean",
			"ts-lint",
			"gen-ts-refs",
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

module.exports = new ServeTaskLoader();

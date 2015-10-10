"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

//import size from "gulp-size";

class ScriptsJavaScriptDistTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("scripts-javascript-dist", "Package all JavaScript code for production", () =>{
			// Assuming that all TS and ES2015 code has already been converted to ES5 using the System module type
			// Assuming that there is a single entrypoint for the application
			// We only need to create the final bundle

			// Create the bundle
			// Reference: https://github.com/systemjs/builder/issues/203
			let jspm = require("jspm");

			jspm.setPackagePath(".");

			return jspm.bundleSFX(
				config.javascript.srcDist,
				config.javascript.destDist, {
					sourceMaps: false, // no need for sourcemaps in prod
					lowResSourceMaps: false, // can speed up generation
					minify: false,
					mangle: false,
					//sfxFormat: "amd", // to output the SFX bundle in the AMD module format
					// runtime: false, // to exclude the Traceur or Babel runtime
					globalDefs: {
						DEBUG: false
					}//,
					//config: {sourceRoot: "."}
				}
			);

			// Alternative
			// Reference: https://www.npmjs.com/package/systemjs-builder
			//let Builder = require("systemjs-builder");
			//let builder = new Builder();
			//
			//return builder.loadConfig(config.files.jspmConfigFile)
			//	.then(function() {
			//		builder.buildSFX(
			//			config.javascript.srcDist,
			//			config.javascript.destDist,{
			//				sourceMaps: false,
			//				lowResSourceMaps: false, // can speed up generation
			//				minify: false,
			//				mangle: false,
			//				//sfxFormat: "amd", // to output the SFX bundle in the AMD module format
			//				// runtime: false, // to exclude the Traceur or Babel runtime
			//				globalDefs: {
			//					DEBUG: true
			//				},
			//				//config: {sourceRoot: "./tmp"}
			//			}
			//		)
			//		.then(function() {
			//			return cb();
			//		})
			//		.catch(function(ex) {
			//			cb(new Error(ex));
			//		});
			//	}
			//);
		});
	}
}

module.exports = new ScriptsJavaScriptDistTaskLoader();

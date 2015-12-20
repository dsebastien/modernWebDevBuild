"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

//import size from "gulp-size";

import path from "path";
import gutil from "gulp-util";

class ScriptsJavaScriptDistTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);
		
		gulp.task("scripts-javascript-dist", "Package all JavaScript code for production", () =>{
			// Assuming that all TS and ES2015 code has already been converted to ES5 using the System module type
			// Assuming that there is a single entrypoint for the application
			// We only need to create the final bundle

			// Determine if the bundle should be minified or not
			let minifyProductionJSBundle = true;
			
			if(typeof gulp.options.minifyProductionJSBundle !== "undefined"){
				minifyProductionJSBundle = gulp.options.minifyProductionJSBundle;
				
				if(minifyProductionJSBundle === false){
					gutil.log("The production JS bundle will NOT be minified!");
				}
			}

			// Determine if the bundle should be mangled or not
			let mangleProductionJSBundle = true;

			if(typeof gulp.options.mangleProductionJSBundle !== "undefined"){
				mangleProductionJSBundle = gulp.options.mangleProductionJSBundle;

				if(mangleProductionJSBundle === false){
					gutil.log("The production JS bundle will NOT be mangled!");
				}
			}

			// Determine the entry point for the bundle creation (i.e., where to start from)
			let distEntryPoint = config.javascript.srcDist;

			if(typeof gulp.options.distEntryPoint !== "undefined"){
				distEntryPoint = path.join(config.folders.temp, gulp.options.distEntryPoint);
				gutil.log("The production JS bundle entry point has been customized: ", distEntryPoint);
			}

			// Create the bundle
			// Reference: https://github.com/systemjs/builder/issues/203
			let jspm = require("jspm");

			jspm.setPackagePath(".");

			return jspm.bundleSFX(
				distEntryPoint, // where to start creating the bundle from
				config.javascript.destDist, {
					sourceMaps: false, // no need for sourcemaps in prod
					lowResSourceMaps: false, // can speed up generation
					minify: minifyProductionJSBundle,
					mangle: mangleProductionJSBundle,
					//sfxFormat: "amd", // to output the SFX bundle in the AMD module format
					// runtime: false, // to exclude the Traceur or Babel runtime
					globalDefs: {
						DEBUG: false
					}//,
					//config: {sourceRoot: "."}
				}
			);
		});
	}
}

module.exports = new ScriptsJavaScriptDistTaskLoader();

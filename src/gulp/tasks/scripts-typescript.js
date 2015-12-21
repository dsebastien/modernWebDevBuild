"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import sourcemaps from "gulp-sourcemaps";
import ts from "gulp-typescript";
import size from "gulp-size";
//import debug from "gulp-debug";

class ScriptsTypeScriptTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("scripts-typescript", "Transpile TypeScript to ES5, include references to library and app .d.ts files and generate sourcemaps", () =>{
			// references:
			// https://www.npmjs.com/package/gulp-typescript
			let tsProject = ts.createProject("tsconfig.json", {
				typescript: require("typescript") // override the typescript version by that defined in package.json

				// configuration defined in tsconfig.json
				// other overrides here if needed
				// http://json.schemastore.org/tsconfig
				// https://github.com/Microsoft/TypeScript/wiki/Compiler%20Options
			});

			let tsResult = gulp.plumbedSrc(config.typescript.src) // handle errors nicely (i.e., without breaking watch)
				// Display the files in the stream
				//.pipe(debug({title: "Stream contents:", minimal: true}))
				.pipe(sourcemaps.init())
				.pipe(ts(
					tsProject
				));

			// Output files
			tsResult.dts.pipe(gulp.dest(config.typescript.dest));

			return tsResult.js

				// Display the files in the stream
				//.pipe(debug({title: "Stream contents:", minimal: true}))

				.pipe(sourcemaps.write(".", { // use "." to write the sourcemap to a separate file in the same dir
					includeContent: false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
					sourceRoot: "/" // use an absolute path because we have scripts in different subpaths
				}))

				// Output files
				.pipe(gulp.dest(config.typescript.dest))

				// Task result
				.pipe(size({
					title: "scripts-typescript"
				}));
		});
	}
}

module.exports = new ScriptsTypeScriptTaskLoader();


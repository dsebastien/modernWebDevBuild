"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import sourcemaps from "gulp-sourcemaps";
import ts from "gulp-typescript";
import size from "gulp-size";

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
				.pipe(sourcemaps.init())
				.pipe(ts(
					tsProject
				));

			// Output files
			tsResult.dts.pipe(gulp.dest(config.typescript.dest));

			return tsResult.js

				.pipe(sourcemaps.write({ // use "." to write the sourcemap to a separate file in the same dir
					// sourcemaps need to be written to separate files otherwise Babel freaks out (!)
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

export default new ScriptsTypeScriptTaskLoader();


"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import iff from "gulp-if";
import size from "gulp-size";
//import debug from "gulp-debug";

let browserSync = require("browser-sync").get(config.webServerNames.dev);

class StylesTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("styles", "Compile, add vendor prefixes and generate sourcemaps", () =>{
			return gulp.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
				config.styles.src
				)

				// Display the files in the stream
				//.pipe(debug({title: "Stream contents:", minimal: true}))

				// Initialize sourcemap generation
				.pipe(sourcemaps.init({
					//debug: true
				}))

				// Process the sass files
				.pipe(sass({
					style: "compressed"
					//errLogToConsole: true
				}))

				// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
				.pipe(sourcemaps.write({ // use "." to write the sourcemap to a separate file in the same dir
					includeContent: false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
					sourceRoot: "./" // use the file's folder as source root
				}))

				// Include vendor prefixes
				// The if clause prevents autoprefixer from messing up the sourcemaps (necessary if the maps are put in separate files)
				// reference: https://github.com/sindresorhus/gulp-autoprefixer/issues/8#issuecomment-93817177
				.pipe(iff([ config.extensions.css, "!*.map" ], autoprefixer({
					browsers: config.autoprefixerBrowsers // alternative: $.autoprefixer("last 2 version")
				})))

				// Output files
				.pipe(gulp.dest(config.styles.dest))

				// Reload Browser if needed
				// Stream if possible
				.pipe(iff(browserSync.active, browserSync.stream({
					once: true,
					stream: true
				})))

				// Task result
				.pipe(size({
					title: "styles"
				}));
		});
	}
}

module.exports = new StylesTaskLoader();


"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import * as path from "path";
import htmlReplace from "gulp-html-replace";
import inlineSource from "gulp-inline-source";
import iff from "gulp-if";
import minifyHtml from "gulp-minify-html";
import size from "gulp-size";
//import debug from "gulp-debug";

class HtmlTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("html", "Optimize HTML", () =>{
			return gulp.plumbedSrc(
				config.html.src
			)

				// Display the files in the stream
				//.pipe(debug({title: "Stream contents:", minimal: true}))

				// Inject production assets path: https://www.npmjs.com/package/gulp-html-replace
				.pipe(htmlReplace({
					"css-vendor": config.styles.finalVendorCssBundlePath,
					"css-bundle": config.styles.finalCssBundlePath,
					"js-app": config.javascript.finalJsBundlePath
				}))

				.pipe(inlineSource({
					// options reference: https://github.com/popeindustries/inline-source#usage
					compress: true,
					rootpath: path.resolve(".") // project root --> directory path used for resolving inlineable paths
				}))

				// Minify HTML
				.pipe(iff(config.files.any + config.extensions.html, minifyHtml()))

				// Output files
				.pipe(gulp.dest(config.html.dest))

				// Task result
				.pipe(size({
					title: "html"
				}));
		});
	}
}

module.exports = new HtmlTaskLoader();

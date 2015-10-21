"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
import utils from "../utils";

import eventStream from "event-stream";
import cache from "gulp-cache";
import imageMin from "gulp-imagemin";
import size from "gulp-size";
//import debug from "gulp-debug";

class ImagesTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("images", "Optimize images", () =>{
			return gulp.plumbedSrc(
				config.images.src
				)
				// Filter out the empty directories
				.pipe(utils.filterEmptyDirectories(eventStream))

				// Display the files in the stream
				//.pipe(debug({title: "Stream contents:", minimal: true}))

				// Minify and cache
				.pipe(cache(imageMin({
					progressive: true,
					interlaced: true
				})))

				// Output files
				.pipe(gulp.dest(config.images.dest))

				// Task result
				.pipe(size({
					title: "images"
				}));
		});
	}
}

export default new ImagesTaskLoader();

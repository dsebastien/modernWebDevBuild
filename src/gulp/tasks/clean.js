"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import del from "del";

class CleanTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("clean", "Clean output directories",
			del.bind(null, [
					config.folders.app + config.globs.scripts.javascript, // TS emits ES2015 code under app but that output is transient
					config.folders.app + config.globs.sourcemaps,
					config.folders.temp,
					config.folders.dist + config.globs.any
				], {
					dot: true
				}
			)
		);
	}
}

module.exports = new CleanTaskLoader();

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
					config.folders.temp,
					config.folders.dist + config.globs.any
				], {
					dot: true
				}
			)
		);
	}
}

export default new CleanTaskLoader();

"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import packageJsonValidator from "gulp-nice-package";

class PackageJSONTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("validate-package-json", "Validate the package.json file", () =>{
			return gulp.plumbedSrc(config.files.packageJSON)
				.pipe(packageJsonValidator());
		});
	}
}

export default new PackageJSONTaskLoader();

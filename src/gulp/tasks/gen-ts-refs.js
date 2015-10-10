"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import inject from "gulp-inject";
//import debug from "gulp-debug";

class GenTsRefsTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("gen-ts-refs", "Generate the app.d.ts references file dynamically from all application *.ts files", () =>{
			let sources = gulp.plumbedSrc(
				config.typescript.srcAppOnly,
				{
					read: false
				}
			);

			// Display the files in the stream
			//.pipe(debug({title: "Stream contents:", minimal: true}));

			return gulp.plumbedSrc(config.files.appTypeScriptReferences)
				.pipe(inject(sources, {
					starttag: "//{",
					endtag: "//}",
					transform: function(filepath){
						return '/// <reference path="..' + filepath + '" />';
					}
				}))

				// Display the files in the stream
				//.pipe(debug({title: 'Stream contents:', minimal: true}))

				.pipe(gulp.dest(config.folders.typings));
		});
	}
}

module.exports = new GenTsRefsTaskLoader();

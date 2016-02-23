"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import typedoc from "gulp-typedoc";
//import debug from "gulp-debug";

class TypescriptDocsGenerator extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);

		gulp.task("docs-typescript", "Generator TypeScript Docs use typedoc && gulp-typedoc !", () =>{
			// references:
			// https://www.npmjs.com/package/gulp-typedoc
			return gulp.src(config.files.tsByModules.skdCore)
				.pipe(typedoc({
					//TypeScript options (see typescript docs)
					module: "commonjs",
					target: "es5",
					includeDeclarations: true,
					
					//OutPut options (see typedoc docs)
					out: config.folders.docsSkdApi,
					json: config.files.docsTypescriptJson,
					
					//TypeDoc Options (see typedoc docs)
					Name: config.webServerNames.docs,
					ignoreCompilerErrors: false,
					theme: config.folders.docsSkdApiTheme,
					version: true
				}));
		});
	}
}

module.exports = new TypescriptDocsGenerator();


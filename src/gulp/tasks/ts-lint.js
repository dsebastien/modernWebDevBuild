"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";

import tslint from "gulp-tslint";
import iff from "gulp-if";
import size from "gulp-size";
//import debug from "gulp-debug";

let browserSync = require("browser-sync").get(config.webServerNames.dev);

class TsLintTaskLoader extends AbstractTaskLoader {
    registerTask(gulp){
        super.registerTask(gulp);

        gulp.task("ts-lint", "Lint TypeScript code", () =>{
            return gulp.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
                config.typescript.srcAppOnly // only the application's code needs to be checked
                )

                // Display the files in the stream
                //.pipe(debug({title: "Stream contents:", minimal: true}))

                // Check the code quality
                .pipe(tslint())

                // Fail the build only if BrowserSync is not active
                .pipe(iff(!browserSync.active, tslint.report("prose")))
                .pipe(iff(browserSync.active, tslint.report("prose", {
                    emitError: false
                })))

                // Task result
                .pipe(size({
                    title: "ts-lint"
                }));
        });
    }
}

module.exports = new TsLintTaskLoader();

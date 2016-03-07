"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
//import config from "../config";
//import utils from "../utils";

class DefaultTaskLoader extends AbstractTaskLoader {
    registerTask(gulp){
        super.registerTask(gulp);

        let runSequence = require("run-sequence");

        runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

        gulp.task("default", "Build production files", () =>{
            return runSequence("validate-package-json", [
                    "clean",
                    "ts-lint",
                    "check-js-style",
                    "check-js-quality"
                ], [
                    "scripts-typescript",
                    "scripts-javascript"
                ],
                "copy", [
                    "styles-vendor-dist",
                    "styles-dist",
                    "scripts-javascript-dist",
                    "html",
                    "images"
                ]);
        });
    }
}

module.exports = new DefaultTaskLoader();

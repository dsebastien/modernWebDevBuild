"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
import utils from "../utils";

import eventStream from "event-stream";
import size from "gulp-size";
//import debug from "gulp-debug";

class CopyTaskLoader extends AbstractTaskLoader {
    registerTask(gulp){
        super.registerTask(gulp);

        gulp.task("copy", "Copy all files except HTML/CSS/JS which are processed separately", () =>{
            return gulp.plumbedSrc(
                config.copy.src, {
                    dot: true
                })

                // Display the files in the stream
                //.pipe(debug({title: "Stream contents:", minimal: true}))

                // Filter out the empty directories
                .pipe(utils.filterEmptyDirectories(eventStream))

                // Display the files in the stream
                //.pipe(debug({title: "Stream contents:", minimal: true}))

                // Copy
                .pipe(gulp.dest(config.copy.dest))

                // Task result
                .pipe(size({
                    title: "copy"
                }));
        });
    }
}

module.exports = new CopyTaskLoader();


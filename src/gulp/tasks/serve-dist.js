"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
import config from "../config";
//import utils from "../utils";
import wait from "gulp-wait";

const browserSync = require("browser-sync").create(config.webServerNames.dist);

import historyApiFallback from "connect-history-api-fallback"; // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204

class ServeDistTaskLoader extends AbstractTaskLoader {
    registerTask(gulp){
        super.registerTask(gulp);

        let runSequence = require("run-sequence");

        runSequence = runSequence.use(gulp); // needed to bind to the correct gulp object (alternative is to pass gulp to runSequence as first argument)

        const startBrowserSync = () =>{
            browserSync.init({
                notify: false,
                //port: 8000,

                // Customize the BrowserSync console logging prefix
                logPrefix: "MWD", // Modern Web Dev

                // Run w/ https by uncommenting "https: true"
                // Note: this uses an unsigned certificate which on first access
                // will present a certificate warning in the browser.
                // https: true,
                server: {
                    baseDir: config.webServerFolders.dist,

                    // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204
                    // reference: https://github.com/BrowserSync/browser-sync/issues/204
                    // todo extract common middleware config
                    middleware: [
                        historyApiFallback(), // not necessary if the app uses hash based routing
                        function(req, res, next){
                            res.setHeader("Access-Control-Allow-Origin", "*"); // add CORS to the response headers (for resources served by BrowserSync)
                            next();
                        }
                    ]
                },
                reloadDelay: 1000,
                reloadDebounce: 1000
            });
        };
        
        gulp.task("wait-a-bit", "Wait a second...", () => {
            return gulp.src('./package.json').
                pipe(wait(1500))
        });

        gulp.task("serve-dist", "Build and serve the production version (i.e., 'dist' folder contents", () =>{
            return runSequence([ "default" ], ["wait-a-bit"], startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
        });
    }
}

module.exports = new ServeDistTaskLoader();

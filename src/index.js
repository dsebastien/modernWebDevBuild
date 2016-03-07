/* Rather than manage one giant configuration file responsible for creating multiple gulp tasks, each task has been broken out into
 its own file. Any files in that directory get automatically required below.

 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.

 Principle taken from gulp-starter: https://github.com/greypants/gulp-starter
 */

"use strict";

import requireDir from "require-dir";
import utils from "./gulp/utils";
import config from "./gulp/config";

/**
 * This class takes care of loading gulp tasks.
 */
class TasksLoader {
    constructor(){
    }

    /**
     * Looks for and registers all available tasks.
     * @param inputGulp the gulp object to use. If not provided, it'll be loaded
     * @param inputOptions the build options to use. If not provided, an empty object is used
     */
    registerTasks(inputGulp, inputOptions){
        let gulp = inputGulp || require("gulp"); // this module can be imported without a defined gulp instance
        let options = inputOptions || {};

        gulp = utils.configureGulpObject(gulp, options); // we need to customize the gulp object a bit

        // Load all tasks in gulp/tasks
        const loadedModules = requireDir("./gulp/tasks", {
            recurse: false
        });

        // request each module to register its tasks
        for(let key in loadedModules){
            if(loadedModules.hasOwnProperty(key)){
                let loadedModule = loadedModules[ key ];

                if(loadedModule.registerTask){
                    //console.log(`Registering module: ${key}`);
                    loadedModule.registerTask(gulp);
                } else{
                    throw new TypeError(`The following module does not expose the expected interface: ${key}`);
                }
            }
        }
    }
}

export default new TasksLoader();

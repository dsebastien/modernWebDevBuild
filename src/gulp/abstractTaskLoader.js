import utils from "./utils";

/**
 * Base abstract class for task loaders.
 * Reference: http://stackoverflow.com/questions/29480569/does-ecmascript-6-have-a-convention-for-abstract-classes
 */
export default class AbstractTaskLoader {
    constructor(){
        "use strict";

        // dangerous because of formatting issue in WebStorm (can break this code by splitting new.target in new .target)
        // issue to follow: https://youtrack.jetbrains.com/issue/WEB-18497
        //if(new.target === AbstractTaskLoader) {
        //	throw new TypeError("Cannot construct instances directly");
        //}
    }

    /**
     * Register a task in the provided gulp object.
     * @param gulp the gulp object where the task should be registered
     */
    registerTask(gulp){
        "use strict";

        utils.validateGulpObjectIsConfigured(gulp);
    }
}

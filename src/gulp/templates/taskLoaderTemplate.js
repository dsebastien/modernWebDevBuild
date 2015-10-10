"use strict";

import AbstractTaskLoader from "../abstractTaskLoader";
//import config from "../config";
//import utils from "../utils";

class TemplateTaskLoader extends AbstractTaskLoader {
	registerTask(gulp){
		super.registerTask(gulp);
		
		console.log("Hello world!");
	}
}

module.exports = new TemplateTaskLoader();

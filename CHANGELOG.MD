* 0.1.1
  * added unit testing support with karma & jasmine
  * removed gulp-tsd dependency
  * removed tsd dependency
  * fix for #33 avoid the need for installing global dependencies
  * added support for passing options to the build (for now only used internally)
  * tagged dependencies that should be in client projects as peerDependencies
  * removed babel 6 plugins/presets from the peerDependencies
    * client projects are free to choose what they want to use
* 0.1.0
  * Upgraded to Babel 6
	* now requires a .babelrc configuration file to be present in the project's main folder
	* now requires additional Babel 6 dependencies:
	  * "babel-core": "6.1.x",
	  * "babel-plugin-transform-es2015-modules-commonjs": "6.1.x",
	  * "babel-preset-es2015": "6.1.x",
	  * "babel-runtime": "6.1.x",
  * Updated dependencies
* 0.0.9
  * Fixed watch/reload issues with BrowserSync
  * Removed the 'gen-ts-refs' task. No longer needed now that TS can get typings from node modules
  * Updated docs
* 0.0.8
  * Added support for both TypeScript and ES2015
	* Changed back the way the build is organized
	  * TS > ES5
	  * ES2015 > ES5
  * Removed unnecessary package.json validation
* 0.0.7
  * Fixed an npm publish issue (configured files and folders to include and exclude from the page)
* 0.0.6
  * Updated dependencies
  * Fixed an npm publish issue
* 0.0.5
  * First functional version ;-)
* 0.0.4
  * Fixed an issue with Gulp and Babel
* 0.0.3
  * Fixed an issue with Gulp and Babel
* 0.0.2
  * Fixed an issue with node-sass
* 0.0.1
  * Initial version

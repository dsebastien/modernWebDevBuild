* 0.4.0
  * fixed an issue with production styles bundle (fixes #96)
  * upgraded babel dependencies
  * check the [upgrade](UPGRADE.MD) notes to know what you need to change
* 0.3.2
  * Fixed production bundles paths (css, js) (fixes #91)
* 0.3.1
  * made JSPM optional (closes #77)
	* JSPM remains used by default but you can now customize the behavior by setting the useJSPM option to false
	* if you disable JSPM then you can provide a custom name for the configuration file (the build defaults to jspm.conf.js)
  * fixed an issue with the tasks chaining (callbacks were used needlessly) (closes #89)
  * upgraded the version of SystemJS-builder (closes #87)
* 0.3.0
  * Breaking change: improved integration with tsconfig.json (see #72)
	* this might impact existing projects
	* before, the list of folders to include in TS compilation were hardcoded. Now, the tsconfig.json file is used, thus you have more control (but also more responsibility)
  * removed mentions of tsd. My current recommendation is to use `typings`, although there's nothing forcing you to with the build
	  * https://github.com/typings/typings
	  * https://angularclass.com/the-state-of-typescript-packages/
  * upgraded dependencies
	* Babel dependencies 6.3.x to 6.4.x
	* autoprefixer 6.1.x to 6.2.x
  * Known issues
	* #76: there is an issue with the way that gulp-typescript (the plugin used within the scripts-typescript gulp task) handles the 'rootDir' property, which is inconsistent with tsc.
	  * to solve this, for now you need to add a reference to the main typings file of your project; Example:
		```
		   /// <reference path="../../typings/main.d.ts" />
		```
	  * the final solution might come via the following issues and might require a new release of this project
		* https://github.com/ivogabe/gulp-typescript/issues/190
		* https://github.com/typings/typings/issues/69
* 0.2.3
  * fixed sourcemap generation issues (see #69)
	* sourcemaps sometime require a browser refresh before actually working: this might be due to a related issue (timing issue?)
  * removed legacy leftovers
* 0.2.2
  * added an option to define whether the production HTML should be minified or not: minifyProductionHTML (true by default)
	* Angular 2 does not support HTML minification anymore: https://github.com/dsebastien/modernWebDevBuild/issues/67
* 0.2.1
  * minify the production bundle by default
  * added the gulp-inline-source plugin (https://www.npmjs.com/package/gulp-inline-source)
	* allows to inline resources (scripts, stylesheets, images) within HTML files
	* for example very useful for cases where some script can't/musn't be loaded through SystemJS (e.g., zone.js, reflect-metadata, Angular 2 polyfills, ...)
  * added an option to define whether the production JS bundle must be minified or not: minifyProductionJSBundle (true by default)
  * added an option to define whether the production JS bundle must be mangled or not: mangleProductionJSBundle (true by default)
* 0.2.0
  * BREAKING CHANGE: scripts-javascript-dist now uses core/boot.js as entry point (vs core/core.bootstrap.js in earlier versions) (fixes #
	* this new default behavior can be customized by specifying the `distEntryPoint` option (see README or UPGRADE guide)
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

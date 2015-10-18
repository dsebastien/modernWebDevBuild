* remove the gen-ts-refs task once everything needed is available in TS
* remove the BrowserSync reload in scripts-javascript and scripts-typescript if it does it twice
* fix reloading
* review the README after a44 upgrade
  * update tsconfig
  * update jspm config
  * update tsd (remove?)
  * update typings (remove?)
* fill-in File organization section
  * how to organize app code and components
  * distinction between components and pages
  * how to distributes styles around (component-based approach)
  * sass partials & import
* review: https://github.com/areusjs/load-common-gulp-tasks
  * eval possibility to reuse
* provide a way for client projects to override some parts of the configuration
  * e.g., should hot reloading be enabled for images, ...
  * e.g., enable/disable TS support
* reusable build scripts
  * implement a solution to make useful scripts reusable
  * examples: npm run scripts in midnightLightV2
  * look at the 'bin' property in package.json: https://docs.npmjs.com/files/package.json
  * these could be added as 'facade' tasks to the gulp tasks
* add tests
* refactor build to concat paths using  path.join()
* add Docker support
* add Makefile
* add support for passing options
  * override default values
  * customize behavior (e.g., logging)
* refactor own build to mimic the task loading mechanism & reuse code
* add npm shrinkwrap
* update jscs: https://www.npmjs.com/package/jscs
  * reqVarDeclFirst
* make TypeScript optional
* make JSPM optional (quid bundling)
* add shields: http://shields.io/
* make sure that minification is enabled for prod
* ensure that no errors are raised if there are no TS files in the project and no tsconfig.json

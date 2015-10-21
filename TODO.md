* move BrowserSync server creation in utils
  * reuse the same BrowserSync option around (.get)
* fill-in File organization section
  * how to organize app code and components
  * distinction between components and pages
  * how to distributes styles around (component-based approach)
  * sass partials & import
* review: https://github.com/areusjs/load-common-gulp-tasks
  * eval possibility to reuse
* reusable build scripts
  * implement a solution to make useful scripts reusable
  * examples: npm run scripts in midnightLightV2
  * look at the 'bin' property in package.json: https://docs.npmjs.com/files/package.json
  * these could be added as 'facade' tasks to the gulp tasks
  * these could provide useful scaffolding possibilities (e.g., create component, create page, ...)
* add tests
* refactor build to concat paths using  path.join()
* add Docker support
* add Makefile
* provide a way for client projects to override some parts of the configuration
  * e.g., should hot reloading be enabled for images, ...
  * e.g., enable/disable TS support
* add npm shrinkwrap
* update jscs: https://www.npmjs.com/package/jscs
  * reqVarDeclFirst
* make TypeScript optional
  * * ensure that no errors are raised if there are no TS files in the project and no tsconfig.json
* make JSPM optional (currently depended upon for the bundle creation)
* add proper support for staging (i.e., local, dev, pro, ...)
  * make sure that minification is enabled for prod
* add shields: http://shields.io/
* refactor own build to mimic the task loading mechanism & reuse code

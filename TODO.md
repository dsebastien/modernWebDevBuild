* add support for ES2015 as alternative to TS
* fill-in File organization section
  * how to organize app code and components
  * distinction between components and pages
  * how to distributes styles around (component-based approach)
  * sass partials & import
* review: https://github.com/areusjs/load-common-gulp-tasks
  * eval possibility to reuse
* remove as much as possible from package.json
* ensure correct split between devDependencies and dependencies
* remove devDependencies if not necessary (duplication with dependencies)
* provide a way for client projects to override some parts of the configuration
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
* make TypeScript optional
* make SystemJS/JSPM optional (quid bundling)
* add shields: http://shields.io/

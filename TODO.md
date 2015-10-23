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
* TypeScript: check the status of files, filesGlob (currently only supported by the Atom typescript editor.. and exclude
  * https://github.com/Microsoft/TypeScript/issues/1927
  * https://github.com/Microsoft/TypeScript/pull/3188
  * exclude list does not support wilcards. It must simply be a list of files and/or directories
* use cache busting: gulp-cachebust
* add scss-lint
  * https://www.npmjs.com/package/gulp-scss-lint
  * https://github.com/brigade/scss-lint#configuration
  * https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint
  * q: plugin for webstorm?
  * add to npm run serve
* add css-lint
  * https://www.npmjs.com/package/gulp-csslint
  * rules: https://github.com/CSSLint/csslint/wiki/Rules-by-ID
  * example: https://github.com/twbs/bootstrap/blob/master/less/.csslintrc
  * https://github.com/SublimeLinter/SublimeLinter-csslint
  * q: plugin for webstorm?
  * add to npm run serve
* add htmlhint
* prepare build for testing
  * karma, mocha, jasmine, testacular for unit testing
    * https://www.npmjs.com/package/gulp-karma
    * https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md
    * http://jasmine.github.io/2.3/introduction.html
    * https://github.com/jasmine/jasmine
    * https://www.npmjs.com/package/gulp-jasmine
  * protractor for functional tests
    * E2E test framework for angular apps
  * check https://coveralls.io/
  * https://www.npmjs.com/package/gulp-istanbul
	* https://www.npmjs.com/package/chai
	* check and add support for: https://gist.github.com/sscovil/e0029dc1ef75bfc65439
* optimize/cache: changed(...)
* improve JS code style config (not great with object literals)
* add gulp size report: https://www.npmjs.com/package/gulp-sizereport/
* add gulp-inject to build: https://www.npmjs.com/package/gulp-inject
  * dynamically add scripts/stylesheets in the HTML without having to add script tags manually
* generate release notes on GitHub like https://github.com/mgonto/restangular/releases (through GitHub's api)
* check out plato for code complexity checks
* add hthint: https://www.npmjs.com/package/gulp-htmlhint
* add gulp-bump
  * goal: easily bump the project version
    * bump.major, bump.minor, bump.patch
  * var bump = require('gulp-bump');
* check gulp-watch for incremental builds
  * https://www.npmjs.com/package/gulp-watch
  * https://github.com/floatdrop/gulp-watch/blob/master/docs/readme.md
  * combined with gulp-batch: https://www.npmjs.com/package/gulp-batch
* gulp 4 migration
  * remove gulp-plumber
  * remove run-sequence
* add archive task (depend on default): https://github.com/h5bp/html5-boilerplate/blob/master/gulpfile.js
  * try and reuse/improve: https://github.com/lookfirst/gulp-helpers
* check-js-style: verify if esnext must be specified or not (it is in the .jscsrc so it should not also have to be in the gulp config)

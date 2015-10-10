* review: https://github.com/areusjs/load-common-gulp-tasks
  * eval possibility to reuse
* remove as much as possible from package.json
* ensure correct split between devDependencies and dependencies
* remove devDependencies if not necessary (duplication with dependencies)
* provide a way for client projects to override some parts of the configuration
* reusable build scripts
** implement a solution to make useful scripts reusable
** examples: npm run scripts in midnightLightV2
** these could be added as 'facade' tasks to the gulp tasks
* what to do/recommend regarding the following files?
** test behavior if absent:
** tsconfig.json
** .jscsrc
** .jshintrc
** .jshintignore
** tslint.json
** ...
* complete the readme
** feature list
** how to integrate in a project
** commands list
** how to release/deploy a version on npm & git
*** npm version patch|minor|major -m 'Bumped to %s' (git commit + git tag)
*** git push / git push --tags
*** adapt version info (description etc) in GitHub)
*** npm publish
* add tests
* refactor build to concat paths using  path.join()
* add Docker support
* add Makefile
* add shields: http://shields.io/
* add support for passing options
  * override default values
  * customize behavior (e.g., logging)
* refactor own build to mimic the task loading mechanism & reuse code
* add npm shrinkwrap
* remove gulp-load-plugins (prefer explicit loading) 

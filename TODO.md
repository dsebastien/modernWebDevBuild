* review: https://github.com/areusjs/load-common-gulp-tasks
  * eval possibility to reuse
* remove as much as possible from package.json
* ensure correct split between devDependencies and dependencies
* remove devDependencies if not necessary (duplication with dependencies)
* provide a way for client projects to override some parts of the configuration
* npm scripts
** review
** implement a solution to make them available/reusable where possible
** scripts\modernWebDevBuild.js
*** read input param being the name of the script to run (?)
*** to pass parameters to a package.json script: npm run task -- --<additional_param>
* add Docker support
* add Makefile
* add bower configuration
* complete the readme
** introduction
** feature list
** how to integrate in a project
** commands list
** how to release/deploy a version on npm & git
*** npm version patch|minor|major -m 'Bumped to %s' (git commit + git tag)
*** git push / git push --tags
*** adapt version info (description etc) in GitHub)
*** npm publish
** how to build from source section
** add more details for contributing (e.g., PR rules)
* add tests
* refactor build to concat paths using  path.join()
* switch back to TS 1.6.2+ (stable)
* add shiels: http://shields.io/
* add support for passing options
  * override default values
  * customize behavior (e.g., logging)
* refactor project build to mimic the task loading mechanism & reuse code
* add npm shrinkwrap
* integrate semantic release (?)

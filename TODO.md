* review: https://github.com/areusjs/load-common-gulp-tasks
* remove as much as possible from package.json
* ensure correct split between devDependencies and dependencies
* remove devDependencies if not necessary (duplication with dependencies)
* add shrinkwrap
* document how to integrate in a project
* provide a way for client projects to override some parts of the configuration
* facilitate the usage of gulp tasks (?)
** scripts\modernWebDevBuild.js
*** read input param being the name of the script to run (?)
*** to pass parameters to a package.json script: npm run task -- --<additional_param>
* Q: possible issue w/ different gulp version? both client project and this should be aligned
* add Docker support
* add Makefile
* add bower configuration
* complete the readme
** introduction
** feature list
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
* add npm shrinkwrap
* integrate semantic release (?)
* switch back to TS 1.6.2+ (stable)
* add shiels: http://shields.io/

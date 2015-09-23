* remove as much as possible from package.json
* ensure correct split between devDependencies and dependencies
* remove devDependencies if not necessary (duplication with dependencies)
* add shrinkwrap
* document how to integrate in a project
* provide a way for client projects to override some parts of the configuration
* facilitate the usage of gulp tasks (?)
** scripts\modernWebDevBuild.js
*** read input param being the name of the script to run (?)
* create yeoman generator project
* link the two projects
* Q: possible issue w/ different gulp version? both client project and this should be aligned
* move gulpfile & gulp folders to src + adapt package.json's "main" property
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

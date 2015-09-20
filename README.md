# Modern Web Dev Build

[![Build Status](https://secure.travis-ci.org/dsebastien/modernWebDevBuild.png?branch=master)](https://travis-ci.org/dsebastien/modernWebDevBuild)

## About
ModernWebDevBuild is a project aiming to provide a modern build for Web development.

The goal is to abstract as much of the build process as possible so that Web development projects can reuse this package to quickly get started without having to dive too deep in the boring details of how to setup a proper build that takes care of transpiling, minifying, optimizing images and whatnot.

This project is very opiniated and the goal is not to provide many options for many different needs. Rather, technology choices are embedded and either those are ok for or you're free to use something else that better fits your needs... :)

The provided build tasks are based on [Gulp](http://gulpjs.com/).

The idea for this project emerged as I was rediscovering the state of the art for Web development and the fact that tooling is now so much more complex than it was in the past (I would argue that it is way too complex nowadays and that isn't good for the accessibility of the platform itself).

This project is available as an NPM package: https://www.npmjs.com/package/modern-web-dev-build

## Status & roadmap
Check out the current [TODO list](TODO.md)

## Features
* TypeScript > ES6 > ES5 transpilation w/ sourcemaps
* SASS > CSS transformation w/ sourcemaps
* production build creation with minification & bundling
* ...

## Usage
For new projects, the easiest approach to integrate this build is to use our Yeoman Generator available over at https://github.com/dsebastien/modernWebDevGenerator and on NPM: https://www.npmjs.com/package/generator-modern-web-dev.

For existing projects, assuming that you're already using NPM, you first need to add the dependency in your project's package.json file.

Once the dependency is installed, edit the gulpfile of your project and add the following code:
```
var gulp = require('gulp');
...
require('modern-web-dev-build');
```

You can run the `gulp -T` command to see the list of available tasks. Check the commands section below for more details about the available tasks.

## Commands
* ...

## Building from source
If you want to build from source, you need to:
* install NodeJS
* clone this git repository
* go to the folder where you've cloned the project
* ...

## Build dependencies
* gulp: build system (https://www.npmjs.com/package/gulp)
* babel: ES6 to ES5 transpiler; used for the gulp build
* typescript: the typescript tools (compiler, ...)
* systemjs-builder: build tool for systemjs allows to create a single-file build of mixed-dependency module trees: https://www.npmjs.com/package/systemjs-builder
* browser-sync: live CSS reload & browser syncing: https://www.npmjs.com/package/browser-sync
* del: deletes files/folders: https://www.npmjs.com/package/del
* gulp-autoprefixer: automatically adds vendor prefixes to CSS: https://www.npmjs.com/package/gulp-autoprefixer
* gulp-cache: temp file based caching proxy task for gulp: https://www.npmjs.com/package/gulp-cache
* gulp-changed: only pass through changed files: https://www.npmjs.com/package/gulp-changed
* gulp-csso: minify CSS with CSS optimizer: https://www.npmjs.com/package/gulp-csso
* gulp-flatten: remove or replace relative path for files: https://www.npmjs.com/package/gulp-flatten
* gulp-if: conditionally run a task: https://www.npmjs.com/package/gulp-if
* gulp-imagemin: minify png, jpeg, gif and svg images: https://www.npmjs.com/package/gulp-imagemin
* gulp-jshint: JavaScript code quality checker plugin for gulp that uses JSHint: https://www.npmjs.com/package/gulp-jshint
* gulp-load-plugins: automatically load any gulp plugins defined in package.json: https://www.npmjs.com/package/gulp-load-plugins
* gulp-minify-html: minify html with minimize: https://www.npmjs.com/package/gulp-minify-html
* gulp-minify-css: minify css with clean-css: https://www.npmjs.com/package/gulp-minify-css
* gulp-replace: string replace plugin for gulp: https://www.npmjs.com/package/gulp-replace
* gulp-sass: sass plugin for gulp: https://www.npmjs.com/package/sass
* node-sass: used by gulp-sass and normally not needed but added to fix an issue with sourcemaps: https://github.com/sindresorhus/gulp-autoprefixer/issues/10
* gulp-size: display the size of the project: https://www.npmjs.com/package/gulp-size
* gulp-sourcemaps: js source map support for gulp: https://www.npmjs.com/package/gulp-sourcemaps
* gulp-uglify: minify files using Uglify JS: https://www.npmjs.com/package/gulp-uglify
* gulp-uncss: remove unused CSS selectors: https://www.npmjs.com/package/gulp-uncss
* gulp-util: utility methods for gulp: https://www.npmjs.com/package/gulp-util
* gulp-plumber: prevent pipe breaking caused by errors from gulp plugins: https://www.npmjs.com/package/gulp-plumber
* gulp-notify: display notifications on OSX, Linux and Windows (native). Fallsback to Growl or simply logging: https://www.npmjs.com/package/gulp-notify
* gulp-help: create a list of gulp tasks with documentation: https://www.npmjs.com/package/gulp-help/
* gulp-html-replace: replace build blocks in HTML: https://www.npmjs.com/package/gulp-html-replace
* gulp-strip-debug: remove console and debugger statements from JS code: https://www.npmjs.com/package/gulp-strip-debug
* gulp-concat: concatenate files: https://www.npmjs.com/package/gulp-concat
* gulp-rename: rename files: https://www.npmjs.com/package/gulp-rename
* gulp-debug: useful to verify the stream contents: https://www.npmjs.com/package/gulp-debug
* gulp-cssimport: replace CSS imports by stylesheet contents: https://www.npmjs.com/package/gulp-cssimport
* gulp-nice-package: validate npm's package.json file: https://www.npmjs.com/package/gulp-nice-package/
* gulp-inject: JavaScript, stylesheet and webcomponent injection: https://www.npmjs.com/package/gulp-inject
* gulp-tsd: TSD plugin for gulp: https://www.npmjs.com/package/gulp-tsd
* gulp-tslint: Linter for TypeScript code: https://www.npmjs.com/package/gulp-tslint
* gulp-typescript: TypeScript transpiler plugin for gulp: https://www.npmjs.com/package/gulp-typescript
* tsd: TypeScript Definition manager: https://www.npmjs.com/package/tsd
* gulp-babel: ES6 to ES5 transpiler plugin for gulp: https://www.npmjs.com/package/gulp-babel
* gulp-jscs: JavaScript code style checker plugin for gulp: https://www.npmjs.com/package/gulp-jscs
* gulp-jscs-stylish: Stylish reporter for gulp-jscs: https://www.npmjs.com/package/gulp-jscs-stylish
* jshint-stylish: stylish reporter for JSHint: https://www.npmjs.com/package/jshint-stylish
* opn: open stuff like websites, files, executables (cross-platform): https://www.npmjs.com/package/opn
* psi: PageSpeed insights with reporting: https://www.npmjs.com/package/psi
* require-dir: helper to require() directories: https://www.npmjs.com/package/require-dir
* run-sequence: run a series of dependent gulp tasks in order: https://www.npmjs.com/package/run-sequence
* event-stream: construct pipes of streams of events: https://www.npmjs.com/package/event-stream
* connect-history-api-fallback: useful to automatically redirect all non-existent directories to the index file; required for SPAs: https://www.npmjs.com/package/connect-history-api-fallback

## Building from sources
* clone the project
* ...

## Project configuration files
The project includes multiple configuration files. Here's some information about these:
* gulpfile.babel.js: gulp's configuration file. This is where the build magic happens (more information: http://gulpjs.com/)
* package.json: NPM's configuration file. This is where all dependencies are defined (more information: https://docs.npmjs.com/files/package.json)
* npm-shrinkwrap.json: file created using npm shrinkwrap. Blocks dependency versions (including transitive ones), needed for build stability

## Contributing
* Fork the project
* Create a feature branch in your fork
* Commit your changes & push to GitHub
* create a pull request :)

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

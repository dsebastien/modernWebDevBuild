# Modern Web Dev Build

[![Build Status](https://secure.travis-ci.org/dsebastien/modernWebDevBuild.png?branch=master)](https://travis-ci.org/dsebastien/modernWebDevBuild)
[![Coverage Status](https://img.shields.io/coveralls/dsebastien/modernWebDevBuild.svg?style=flat)](https://coveralls.io/r/dsebastien/modernWebDevBuild?branch=master)
[![Dependency Status](https://david-dm.org/dsebastien/modernWebDevBuild.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevBuild)
[![devDependency Status](https://david-dm.org/dsebastien/modernWebDevBuild/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevBuild#info=devDependencies)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/dsebastien/modernWebDevBuild?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![License](https://img.shields.io/cocoapods/l/AFNetworking.svg)](LICENSE.MD)

## About
A modern build for Web development.

Get started and use ES2015, TypeScript, SASS, code quality & style checking, testing, minification, bundling and whatnot TODAY! :)

ModernWebDevBuild abstracts away all the build pipeline boilerplate. Use it if you're not willing to dive too deep in the boring details of how to setup a proper build chain that takes care of transpiling, minifying, optimizing images and whatnot for production.

This project is very opiniated and technology choices are embedded. Although, the build is pretty flexible about code/assets organization (to some extent). Over time, it'll be interesting to see how customizable we can make this thing.

The provided build tasks are based on [Gulp](http://gulpjs.com/). Instructions are available below to get you started.

This project is available as an npm package: https://www.npmjs.com/package/modern-web-dev-build

## Background

The idea for this project emerged as I was rediscovering the state of the art for Web development (early 2015) and from my frustration of not finding everything I needed in a ready-to-use form.

What surprised me at first was that tooling had become so much more complex than it was in the past. I would argue that it is way too complex nowadays and that isn't good for the accessibility of the Web platform. Unfortunately for now, there aren't many alternatives and the benefits of a good build chain are too important to keep aside (who wouldn't want to use all the good stuff ES2015 has brought us?).

Note that this project is heavily inspired from:
* Google's [Web Starter Kit](https://github.com/google/web-starter-kit)
* Countless blog articles
  * [Dan Walhin](https://twitter.com/DanWahlin)'s TypeScript posts & course)
	* [Introduction to TypeScript](https://www.edx.org/course/introduction-typescript-microsoft-dev201x-0)
  * A gazillion Gulp articles
* Many others I'm forgetting :(

## Features
* ES2015 and TypeScript support
* built-in HTTP server with live reloading & cross-device synchronization
* awesome developer experience with a change detection mechanism that automagically:
  * transpiles TypeScript > ES5 w/ sourcemaps
  * transpiles ES2015 > ES5 w/ sourcemaps
  * transpiles SASS > CSS w/ sourcemaps
  * checks JavaScript/TypeScript code quality/style and report on the console (without breaking the build)
  * ...
* production bundle creation support with:
  * CSS bundle creation
  * CSS optimization & minification
  * JS bundle creation
  * JS minification
  * HTML minification
  * images optimization
* ...

Check out the [change log](CHANGELOG.MD)

## Status & roadmap
* Check out the current [TODO list](TODO.md)

## Embedded choices
As state above, some important technology choices are clearly embedded with this project. Here's a rundown of those choices:
* [TypeScript](http://www.typescriptlang.org/) and ES2015 (although the final output is ES5 for wider compatibility)
* [SystemJS](https://github.com/systemjs/systemjs): module loader
* [JSPM](http://jspm.io/) to manage your application dependencies (through jspm.conf.js)
* [SASS](http://sass-lang.com/): who doesn't want variables and mixins?
* component based code & assets organization (Angular friendly)
* [JSCS](http://jscs.info/) and included code style rules
* [JSHint](http://jshint.com/) and included code quality rules
* [TSLint](https://github.com/palantir/tslint) and included code quality/style rules
* [BrowserSync](http://www.browsersync.io/) development Web Server

## Installation

### New projects
The easiest approach to integrate this build is to use our Yeoman Generator available over at https://github.com/dsebastien/modernWebDevGenerator and on npm: https://www.npmjs.com/package/generator-modern-web-dev.
The generator will set up (almost) everything for you.

### Existing projects
First configure the required dependencies in your package.json file:
* add Modern Web Dev Build to your devDependencies: `npm install modern-web-dev-build --save-dev`
* ensure that you also have gulp in your devDependencies: `npm install gulp --save-dev`
* ensure that you also have JSPM in your devDependencies: `npm install jspm --save-dev`
* ensure that you also havebabel/babel-core (if not present, you'll just get a warning though): `npm install babel babel-core --global
* finally, you're probably better off installing those packages globally as well

Next, check the minimal require file contents below!

## Required folder structure and files
The build tries to provide a flexible structure, but given the technical choices that are embedded, some rules must be respected and the build expects certain folders and files to be present. In the future we'll see if we can make this more configurable.

### Mandatory folder structure & files
Here's an overview of the structure imposed by ModernWebDevBuild.
Note that if you've generated your project using the Yeoman generator, README files will be there to guide you.

Please make sure to check the file organization section for more background about the organization and usage guidelines.

* <project root>
  * app: folder containing all the files of the application
	* components: folder containing components of your application (e.g., login, menu, ...); basically reusable pieces
	* core: folder containing at least the entrypoint of your application
	  * commons: folder containing common reusable code (e.g., base utilities)
	  * services: folder containing generic services (e.g., for local storage)
	  * core.bootstrap.ts: the entrypoint of your application
	* fonts: folder containing fonts of your application (if any)
	* images: folder for image assets
	* pages: folder for full-blown pages of your application
	* scripts: folder for scripts
	* styles: folder for the main stylesheets
	  * main.scss: file used to import all application-specific stylesheets
	  * vendor.scss: file used to import all third-party stylesheets
	  * note that the goal isn't to put ALL your stylesheets in there, basically just the entrypoints and the generic parts (e.g., variables, mixins, responsive styles, ...)
	* index.html: the entrypoint of your application
  * typings: folder containing all type definitions
  * .jscsrc: JSCS rule set to use while checking JavaScript code style
	* reference: http://jscs.info/overview
  * .jshintrc: JSHint rule set to use while checking JavaScript code quality
	* reference: http://jshint.com/docs/
	* note that the file is actually optional but indeed recommended!
  * .jshintignore: files and folders to ignore while checking JavaScript code quality
  * gulpfile.babel.js: gulp configuration file
  * jspm.conf.js: JSPM configuration file
  * package.json: NPM configuration file (also used by JSPM)
  * tsconfig.json: TypeScript compiler configuration
  * tsd.json: TypeScript Definitions configuration file (needed by tsd)
  * tslint.json: TypeScript code quality/style rules

### Minimal (build-related) required file contents
Although we want to limit this list as much as possible, for everything to build successfully, some files need specific contents:

#### gulpfile.babel.js
In order to use ModernWebDevBuild, your gulpfile must at least contain the following.
The code below uses ES2015 (via gulpfile.babel.js), but if you're old school you can also simply use a gulpfile.js with ES5.
Note that the build tasks provided by ModernWebDevBuild are transpiled to ES5 before being published

```
"use strict";

import gulp from "gulp";

import modernWebDevBuild from "modern-web-dev-build";
let options = undefined; // no options are supported yet

modernWebDevBuild.registerTasks(gulp, options);
```

With the above, all the gulp tasks provided by ModernWebDevBuild will be available to you.

#### .jscsrc
Valid configuration

#### .jshintrc
At least the following:

```
node_modules/**/*
jspm_packages/**/*
jspm.conf.js
dist/**/*
.tmp/**/*
```

#### jspm.conf.js
The JSPM configuration file plays a very important role;
* it is where all your actual application dependencies are to be defined
* it is where you can define your own 'paths', allowing you to load modules of your application easily

You'll use JSPM to add dependencies to your project, simply with `jspm install`; check the [official JSPM documentation](http://jspm.io/) to know more about how to install packages.

With the help of the JSPM configuration file, SystemJS will be able to load your own application modules and well as third party dependencies.
In your code, you'll be able to use `import x from "y"`. In order for this to work, you'll also need to load SystemJS and the JSPM configuration file in your index.html (more on this afterwards).

```
System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
	"github:*": "jspm_packages/github/*",
	"npm:*": "jspm_packages/npm/*",
	"core/*": "./.tmp/core/*",
	"components/*": "./.tmp/components/*",
	"pages/*": "./.tmp/pages/*"
  }
});
```

In the above:
* baseURL: is mandatory otherwise modules will not be loaded correctly
* defaultJSExtensions: is mandatory so that extensions don't have to be specified when importing modules
* transpiler: is set to 'none' because we don't use in-browser transpilation
* paths
  * core/*, components/* and pages/* allow you to import modules from different parts of your codebase. This is covered in the folder structure section above.
  * you can rename those if you really need to, but it might break the build.. :)

#### package.json
In addition to the dependencies listed previously, you also need to have the following in your package.json file:

```
  "jspm": {
	"directories": {},
	"configFile": "jspm.conf.js",
	"dependencies": {
	},
	"devDependencies: {
	}
  }
```

This is where you let JSPM know where to save the information about dependencies you install. This is also where you can easily add new dependencies; for example: `"angular2": "npm:angular2@^2.0.0-alpha.44",`. Once a dependency is added there, you can invoke `jspm install` to get the files and transitive dependencies installed.

#### tsconfig.json
Given that TypeScript is one of the (currently) embedded choices of this project, the TypeScript configuration file is mandatory.

The tsconfig.json file contains:
* the configuration of the TypeScript compiler (e.g., target ES2015)
* TypeScript code style rules
* the list of files/folders to include/exclude

Here's is the minimal required contents for ModernWebDevBuild:

```
{
  "version": "1.7.0",
  "compilerOptions": {
	"target": "es5",
	"module": "commonjs",
	"declaration": false,
	"noImplicitAny": false,
	"removeComments": true,
	"noLib": false,
	"emitDecoratorMetadata": true,
	"experimentalDecorators": true,
	"noResolve": true,
	"noEmitOnError": false,
	"preserveConstEnums": true,
	"inlineSources": false,
	"sourceMap": false,
	"outDir": "./.tmp",
	"project": "./app"
  },
  "filesGlob": [
	"./app/**/*.ts"
  ],
  "exclude": [
	"node_modules",
	"jspm_packages"
  ]
}
```

Here's a more complete example including code style rules:

```
{
  "version": "1.7.0",
  "compilerOptions": {
	"target": "es5",
	"module": "commonjs",
	"declaration": false,
	"noImplicitAny": false,
	"removeComments": true,
	"noLib": false,
	"emitDecoratorMetadata": true,
	"experimentalDecorators": true,
	"noResolve": true,
	"noEmitOnError": false,
	"preserveConstEnums": true,
	"inlineSources": false,
	"sourceMap": false,
	"outDir": "./.tmp",
	"project": "./app"
  },
  "formatCodeOptions": {
	"indentSize": 2,
	"tabSize": 4,
	"newLineCharacter": "\r\n",
	"convertTabsToSpaces": false,
	"insertSpaceAfterCommaDelimiter": true,
	"insertSpaceAfterSemicolonInForStatements": true,
	"insertSpaceBeforeAndAfterBinaryOperators": true,
	"insertSpaceAfterKeywordsInControlFlowStatements": true,
	"insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
	"insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
	"placeOpenBraceOnNewLineForFunctions": false,
	"placeOpenBraceOnNewLineForControlBlocks": false
  },
  "filesGlob": [
	"./app/**/*.ts"
  ],
  "exclude": [
	"node_modules",
	"jspm_packages"
  ]
}
```

#### tsd.json
The tsd.json file is the TypeScript definition (tsd) configuration file. It contains the list of TypeScript typings to install when invokind tsd, as well as the bundling information.
This configuration is not used directly as part of the build but necessary when you want to update your typings file and re-generate the third party typings bundle (more on this later).

This goes in tandem with the 'typings' folder and its contents.

Here's the minimal required contents for tsd.json:

```
{
	"version": "v4",
	"repo": "borisyankov/DefinitelyTyped",
	"ref": "master",
	"path": "typings",
	"bundle": "typings/tsd.d.ts",
	"installed": {
	}
}
```

Basically, the file above:
* states that all typings should be stored in the 'typings' folder
* states that all typings should be bundled in 'typings/tsd.d.ts'

If you want to add typings for third-party libraries in your project, you can add entries to the 'installed' object. For example you would add the folllowing for jQuery:

```
{
	"version": "v4",
	"repo": "borisyankov/DefinitelyTyped",
	"ref": "master",
	"path": "typings",
	"bundle": "typings/tsd.d.ts",
	"installed": {
		"jquery/jquery.d.ts": {
			"commit": "40d7a3e0b4f615f16dd557cdfc0d535ddc623057"
		},
	}
}
```

You can find the typings files path & commit hash [in there](https://github.com/borisyankov/DefinitelyTyped).
For more information about DefinitelyTyped, check the [official site](http://definitelytyped.org/).


#### tslint.json
tslint.json is the configuration file for [TSLint](https://github.com/palantir/tslint).

Although not strictly mandatory (the build will work without this file), we heavily recommend you to use it as it is very useful to ensure a minimal code quality level and can help you avoid common mistakes and unnecessary complicated code:

Here's an example:
```
{
  "rules": {
	"class-name": true,
	"curly": true,
	"eofline": true,
	"forin": true,
	"indent": [false, "tabs"],
	"interface-name": false,
	"label-position": true,
	"label-undefined": true,
	"max-line-length": false,
	"no-any": false,
	"no-arg": true,
	"no-bitwise": true,
	"no-console": [false,
	  "debug",
	  "info",
	  "time",
	  "timeEnd",
	  "trace"
	],
	"no-construct": true,
	"no-debugger": true,
	"no-duplicate-key": true,
	"no-duplicate-variable": true,
	"no-empty": true,
	"no-eval": true,
	"no-imports": true,
	"no-string-literal": false,
	"no-trailing-comma": true,
	"no-unused-variable": false,
	"no-unreachable": true,
	"no-use-before-declare": null,
	"one-line": [true,
	  "check-open-brace",
	  "check-catch",
	  "check-else",
	  "check-whitespace"
	],
	"quotemark": [true, "double"],
	"radix": true,
	"semicolon": true,
	"triple-equals": [true, "allow-null-check"],
	"variable-name": false,
	"no-trailing-whitespace": true,
	"whitespace": [false,
	  "check-branch",
	  "check-decl",
	  "check-operator",
	  "check-separator",
	  "check-type",
	  "check-typecast"
	]
  }
}
```

If you're unfamiliar with TypeScript typings, please refer to the official TypeScript documentation but basically, know that Typings provide the magic necessary to let your IDE/editor know about the types.

#### typings folder
As explained in the previous section, the 'typings' folder is where all the types information will be stored, whether for third-party dependencies or for your own application's code.

For a bit of background, you can check Dan [Walhin's post](http://weblogs.asp.net/dwahlin/creating-a-typescript-workflow-with-gulp) as this part of the built is based on it.

Inside the typings folder, you must have the following files:
* tsd.d.ts: will contain the list of all third-party dependencies typings currently in your project
* typescriptApp.d.ts: will contain the list of TypeScript files in your project

The contents of these files will be completely managed by tsd and by ModernWebDevBuild.

Nevertheless, you need the following contents in 'typescriptApp.d.ts' to let the build work as expected.

typescriptApp.d.ts:
```
//{

//}
```

With that in place, the build will be able to insert the references as needed. For example if you only have the default entrypoint required by ModernWebDevBuild (app/core/core.bootstrap.ts), then it will look like this:

```
//{

/// <reference path="../app/core/core.bootstrap.ts" />

//}
```

Within your application code, you simply need to add the following lines to get your IDE/editor to know about all the types (third-party & your own):

```
///<reference path="../../typings/tsd.d.ts" />
///<reference path="../../typings/typescriptApp.d.ts" />
```

You only need to adapt the path depending on where your file stands in the hierarchy. The example above is what I currently use in 'app/core/core.bootstrap.ts'.


### Minimal (application-specific) required file contents
Although we want to limit this list as much as possible, for everything to build successfully, some files need specific contents:

#### core/core.bootstrap.ts
The core.bootstrap.ts file is the entrypoint of your application. Currently, it is mandatory for this file to exist (with that specific name), although that could change or be customizable later.

The contents are actually not important but here's a starting point:

```
///<reference path="../../typings/tsd.d.ts" />
///<reference path="../../typings/typescriptApp.d.ts" />
"use strict";

console.log("Hello world!");
```

#### styles/main.scss
The main.scss file is where you should load all the stylesheets scattered around in your application.

Here's an example of a main.scss:
```
//
// Main stylesheet.
// Should import all the other stylesheets
//

// Variables, functions, mixins and utils
@import "base/variables";
@import "base/functions";
@import "base/mixins";
@import "base/utils";

// Base/generic style rules
@import "base/reset";
@import "base/responsive";
@import "base/fonts";
@import "base/typography";
@import "base/base";

// Layout
@import "layout/layout";
@import "layout/theme";
@import "layout/print";

// Components
@import "../components/posts/posts";

// Pages
@import "../pages/home/home";
```

In the example above, you can see that in the main.scss file, we import many other stylesheets (sass partials).

Here's another example, this time for vendor.scss:
```
//
// Includes/imports all third-party stylesheets used throughout the application.
// Should be loaded before the application stylesheets
//

// Nicolas Gallagher's Normalize.css
@import '../../jspm_packages/github/necolas/normalize.css@3.0.3/normalize.css'; // the path refers to the file at BUILD time
```

As you can see above, a third-party stylesheet is imported.


### index.html
The index.html file is the entrypoint of your application. It is not mandatory per se for ModernWebDevBuild, but when you run `npm run serve`, it'll be opened. Also, the `html` build task will try and replace/inject content in it.

Here's the minimal required contents for index.html (required for production builds with minification and bundling):

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	...
	<!-- Stylesheets -->
	<!-- build:css-vendor -->
	<link rel="stylesheet" href="styles/vendor.css">
	<!-- endbuild -->
	<!-- build:css-bundle -->
	<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->
</head>
<body>

	<!-- build:js-app -->
	<!-- for production, this is all replaced by a minified bundle -->
	<script src="jspm_packages/system.src.js"></script>
	<script src="jspm.conf.js"></script>
	<script>
		System.import('core/core.bootstrap').catch(console.error.bind(console));
	</script>
	<!-- endbuild -->
</body>
</html>
```

In the above, the most important parts are:
* for production, the contents of `<!-- build:css-vendor --> ... <!-- endbuild -->` will be replaced by the vendor bundle created by the build
* for production, the contents of `<!-- build:css-bundle --> ... <!-- endbuild -->` will be replaced by the application's CSS bundle created by the build
* for production, the contents of `<!-- build:js-app --> ... <!-- endbuild -->` will be replaced by the application's JS bundle created by the build

Also, note that during development, SystemJS is loaded (system.src.js), the JSPM configuration is loaded (jspm.conf.js) and SystemJS is used to load the entrypoint of the application (core/core.bootstrap).


## Commands
Once you have added ModernWebDevBuild to your project, you can list all the available commands using `gulp help`.
The command will give you a description of each task. The most important to start discovering are:
* gulp serve: start a Web server with live reload, watching files, transpiling, generating sourcemaps, etc
* gulp serve-dist: same with the production version
* gulp clean
* gulp ts-lint: check TypeScript code quality/style
* gulp check-js-quality: check JavaScript code quality
* gulp check-js-style: check JavaScript code style

You can run the `gulp -T` command get an visual idea of the links between the different tasks.

## Build dependencies
* gulp: build system (https://www.npmjs.com/package/gulp)
* babel: ES2015 to ES5 transpiler; used for the gulp build
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
* gulp-babel: ES2015 to ES5 transpiler plugin for gulp: https://www.npmjs.com/package/gulp-babel
* gulp-jscs: JavaScript code style checker plugin for gulp: https://www.npmjs.com/package/gulp-jscs
* gulp-jscs-stylish: Stylish reporter for gulp-jscs: https://www.npmjs.com/package/gulp-jscs-stylish
* jshint-stylish: stylish reporter for JSHint: https://www.npmjs.com/package/jshint-stylish
* opn: open stuff like websites, files, executables (cross-platform): https://www.npmjs.com/package/opn
* require-dir: helper to require() directories: https://www.npmjs.com/package/require-dir
* run-sequence: run a series of dependent gulp tasks in order: https://www.npmjs.com/package/run-sequence
* event-stream: construct pipes of streams of events: https://www.npmjs.com/package/event-stream
* connect-history-api-fallback: useful to automatically redirect all non-existent directories to the index file; required for SPAs: https://www.npmjs.com/package/connect-history-api-fallback

## Contributing
* Fork the project
* Create a feature branch in your fork
* Rebase if needed to keep the project history clean
* Commit your changes & push to GitHub
* Try and flood me with pull requests :)

## Building from source
If you want to build from source, you need to:
* install NodeJS and npm
* install gulp: `npm install --global gulp`
* install babel: `npm install --global babel`
* clone this git repository
* run `npm run setup`
* run `npm run build`
* * start hacking :)

To clean, you can run `npm run clean`

## Project configuration files
The project includes multiple configuration files. Here's some information about these:
* gulpfile.babel.js: gulp's configuration file. This is where the build magic happens (more information: http://gulpjs.com/)
* package.json: NPM's configuration file. This is where all dependencies are defined (more information: https://docs.npmjs.com/files/package.json)
* npm-shrinkwrap.json: file created using npm shrinkwrap. Blocks dependency versions (including transitive ones), needed for build stability

## Releasing a version
* commit all changes to include in the release
* edit the version in package.json
  * respect semver
* update CHANGELOG.MD
* commit
* git tag <version>
* git push --tags
* draft the release on GitHub (add description, etc)
* npm publish

## Authors
### Sebastien Dubois
* [@Blog](https://www.dsebastien.net)
* [@Twitter](https://twitter.com/dSebastien)
* [@GitHub](https://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

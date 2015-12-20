# Upgrade guide

## From 0.2.1 to 0.2.2
If you are using Angular 2, you should set the minifyProductionHTML option to false (see changelog)

## From 0.2.0 to 0.2.1
No modification mandatory with this release.

## From 0.1.1 to 0.2.0
#61 breaks compatibility with existing projects.

In order to fix this, you need to rename app/core/core.bootstrap.ts to core/boot.ts (and rename the template accordingly) and ensure that you adapt app/index.html as well.

If you're not willing to rename as proposed above, then you can define the `distEntryPoint` option.

Here's an example gulpfile.babel.js:

```
"use strict";

import gulp from "gulp";

import modernWebDevBuild from "modern-web-dev-build";

let options = {};

options.distEntryPoint = "core/core.bootstrap";
```

## From 0.1.0 to 0.1.1
To upgrade you can simply increment the dependency version in your project.
To benefit from the unit testing support, you should add a karma.conf.js file to your project. Check the readme for details about its contents (though you can configure Karma as you wish/need).

## From 0.0.x to 0.1.0
First, add a .babelrc file to your project; the minimal contents should be as follows:
```
{
	"presets": ["es2015"],
	"plugins": ["transform-es2015-modules-commonjs"],
	"comments": false
}
```

That file is necessary to configure Babel 6 correctly. Basically, it instructs Babel to load all the es2015 plugins and generate commonjs modules.

Alternatively, you can include that configuration in your package.json file (refer to Babel's documentation).

Next, you need to update your package.json dependencies:
* any dependency on "babel" should be removed as it is no longer necessary (do this both for the jspm and npm dependencies)
* in the JSPM dependencies you should have
  * `"babel-runtime": "npm:babel-runtime@^6.1.18",` (6.1.x or higher)
* in the JSPM dev dependencies you should have
  * `"babel": "npm:babel-core@^6.1.21",` (6.1.x or higher)
* in the npm dependencies, you should have
  * `"babel-runtime": "6.1.x",`

Finally, in the npm dev dependencies you should have:
* `"babel-core": "6.1.x",`
* `"babel-plugin-transform-es2015-modules-commonjs": "6.1.x",`
* `"babel-preset-es2015": "6.1.x",`
* `"modern-web-dev-build": "0.1.0"`

Once the configuration is updated, get rid of your `node_modules` and `jspm_packages` folders and run `npm run setup`.

Good to go!

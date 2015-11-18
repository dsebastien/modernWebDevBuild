# Upgrade guide

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

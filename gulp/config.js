'use strict';

import utils from './utils';

let extensions = {
	javascript: '.js'
};

let folders = {
	root: '.',
	dist: './dist',
	src: './src',
	srcPkg: './gulp',
	nodeModules: './node_modules'
};

let globs = {
	any: '/**/*',
	scripts: {
		javascript: '/**/*' + extensions.javascript
	}
};

let files = {
	any: '*',
	packageJSON: folders.root + '/package.json',
	gulpfile: folders.root + '/gulpfile.babel.js'
};

let javascript = {
	src: [
		folders.src + globs.scripts.javascript
	],
	srcPkg: [
		folders.src + globs.scripts.javascript,
		folders.srcPkg + globs.scripts.javascript,
		files.gulpfile
	],
	dest: folders.dist
};

module.exports = {
	extensions,
	folders,
	globs,
	files,
	javascript
};

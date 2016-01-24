"use strict";

import utils from "./utils";

let extensions = {
	javascript: ".js",
	typescript: ".ts",
	css: ".css",
	sass: ".scss",
	html: ".html",
	sourcemap: ".map",
	png: ".png",
	jpg: ".jpg",
	jpeg: ".jpeg",
	gif: ".gif",
	svg: ".svg"
};

let folders = {
	root: ".",
	dist: "./dist",
	temp: "./.tmp",
	app: "./app",
	styles: "./styles",
	scripts: "./scripts",
	images: "./images",
	typings: "./typings",
	nodeModules: "./node_modules",
	jspmPackages: "./jspm_packages"
};

let globs = {
	any: "/**/*",
	scripts: {
		javascript: "/**/*" + extensions.javascript,
		typescript: "/**/*" + extensions.typescript
	},
	styles: {
		css: "/**/*" + extensions.css,
		sass: "/**/*" + extensions.sass,
		vendor: folders.styles + "/vendor" + "{" + extensions.sass + "," + extensions.css + "}"
	},
	images: folders.images + "/**/*" + "{" + extensions.png + "," + extensions.jpg + "," + extensions.jpeg + "," + extensions.gif + "," + extensions.svg + "}",
	html: "/**/*" + extensions.html,
	sourcemaps: "/**/*" + extensions.sourcemap
};

let files = {
	any: "*",
	packageJSON: folders.root + "/package.json",
	typeScriptDefinitions: folders.typings + globs.scripts.typescript,
	systemjsConfigDefault: "jspm.conf.js"
};

let webServerFolders = {
	dev: [
		// the order IS important. Folders above have precedence
		folders.root, // necessary to have jspm_packages & jspm config file without needing a copy step
		folders.temp, // before app so that ES5 code emitted by TypeScript/Babel takes precedence over ES2015 code that might be written in the app folder
		folders.app
	],
	dist: [
		folders.dist
	]
};

let webServerNames = {
	dev: "MDW_DEV",
	dist: "MDW_DIST"
};

let finalJsBundleName = "bundle.min.js";

let javascript = {
	src: [
		folders.app + globs.scripts.javascript
	],
	srcDist: folders.temp + "/core/boot.js",
	dest: folders.temp,
	destDist: folders.dist + "/" + finalJsBundleName,
	finalJsBundlePath: finalJsBundleName
};

let typescript = {
	srcAppOnly: [
		folders.app + globs.scripts.typescript
	],
	dest: folders.temp // JavaScript code is emitted in the temp folder
};

let finalCSSBundleName = "bundle.min.css";
let finalCSSVendorBundleName = "vendor.min.css";

let styles = {
	src: [
		folders.app + globs.styles.css,
		folders.app + globs.styles.sass
	],
	srcVendorOnly: [
		folders.app + globs.styles.vendor
	],
	srcWithoutVendor: [
		folders.app + globs.styles.css,
		folders.app + globs.styles.sass,
		utils.exclude(folders.app + globs.styles.vendor)
	],
	dest: folders.temp, // for DEV
	destFiles: folders.temp + globs.styles.css, // for DEV
	destDist: folders.dist, // for PROD
	finalCssBundleFilename: finalCSSBundleName,
	finalCssBundlePath: finalCSSBundleName,
	finalVendorCssBundleFilename: finalCSSVendorBundleName,
	finalVendorCssBundlePath: finalCSSVendorBundleName
};

let images = {
	src: [
		folders.app + globs.images
	],
	dest: folders.dist + folders.images
};

let html = {
	src: [
		folders.app + globs.html
	],
	dest: folders.dist
};

let copy = {
	src: [
		folders.app + globs.any,

		// ignore stuff handled by the other tasks
		utils.exclude(folders.app + globs.html),
		utils.exclude(folders.app + globs.styles.css),
		utils.exclude(folders.app + globs.styles.sass),
		utils.exclude(folders.app + globs.scripts.javascript),
		utils.exclude(folders.app + globs.scripts.typescript)
	],
	dest: folders.dist
};

let autoprefixerBrowsers = [
	"ie >= 10",
	"ie_mob >= 10",
	"ff >= 30",
	"chrome >= 34",
	"safari >= 7",
	"opera >= 23",
	"ios >= 7",
	"android >= 4.4",
	"bb >= 10"
];

let minifyCss = { // https://www.npmjs.com/package/gulp-minify
	keepBreaks: false, // no problem here
	keepSpecialComments: true, // necessary for licensing
	compatibility: false, // no problem here
	aggressiveMerging: false // necessary because it breaks PureCSS
};

export default {
	extensions,
	folders,
	globs,
	files,
	javascript,
	typescript,
	styles,
	images,
	html,
	copy,
	autoprefixerBrowsers,
	minifyCss,
	webServerFolders,
	webServerNames
};

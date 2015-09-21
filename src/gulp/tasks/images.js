'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import cache from 'gulp-cache';
import imageMin from 'gulp-imagemin';
import size from 'gulp-size';
import debug from 'gulp-debug';

import config from '../config';
import utils from'../utils';

gulp.task('images', 'Optimize images', () =>{
	return utils.plumbedSrc(
			config.images.src
	)

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}))

	// Minify and cache
	.pipe(cache(imageMin({
		progressive: true,
		interlaced: true
	})))

	// Output files
	.pipe(gulp.dest(config.images.dest))

	// Task result
	.pipe(size({
		title: 'images'
	}));
});

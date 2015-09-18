'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import pagespeed from 'psi';

import config from '../config';
let packageJSON = require('../../' + config.files.packageJSON);

gulp.task('pagespeed', 'Run PageSpeed Insights', (cb) =>{
	// Update the below URL to the public URL of your site
	pagespeed.output(packageJSON.homepage, {
		strategy: 'mobile' // desktop

		// Use the PageSpeed Insights free (no API key) tier.
		// Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
		// key: 'API_KEY'
	}, cb);
});

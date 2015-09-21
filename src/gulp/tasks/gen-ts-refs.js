'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import inject from 'gulp-inject';
import debug from 'gulp-debug';

import config from '../config';
import utils from '../utils';

gulp.task('gen-ts-refs', 'Generate the app.d.ts references file dynamically from all application *.ts files', () =>{
	let sources = utils.plumbedSrc(
			config.typescript.srcAppOnly,
			{
				read: false
			}
	);

	// Display the files in the stream
	//.pipe(debug({title: 'Stream contents:', minimal: true}));

	return utils.plumbedSrc(config.files.appTypeScriptReferences)
		.pipe(inject(sources, {
			starttag: '//{',
			endtag: '//}',
			transform: function(filepath){
			return '/// <reference path="..' + filepath + '" />';
		}
		}))

		// Display the files in the stream
		//.pipe(debug({title: 'Stream contents:', minimal: true}))

		.pipe(gulp.dest(config.folders.typings));
});

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
import minifyHtml from 'gulp-minify-html';
import browser from 'browser-sync';

import conf from '../config';
import siteConfig from '../../site-config.json';

gulp.task('view', () => gulp.src(conf.view.src)
  .pipe(plumber())
  .pipe(ejs(siteConfig, {}, { ext: '.html' }))
  .pipe(rename(conf.view.rename))
  .pipe(gulp.dest(conf.dest.dev))
  .pipe(browser.reload({ stream: true }))
);

gulp.task('b.view', () => gulp.src(conf.view.src)
  .pipe(ejs(siteConfig, {}, { ext: '.html' }))
  .pipe(minifyHtml())
  .pipe(rename(conf.view.rename))
  .pipe(gulp.dest(conf.dest.build))
);

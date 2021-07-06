const themeName = 'theme';

const { src, dest, parallel, series, watch } = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sassGlob = require('gulp-sass-glob'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber'),
    newer = require('gulp-newer'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    proxy: 'http://localhost:8888/wordpress/'+themeName+'/',
    notify: false,
    open: false
  })
}

function styles() {
	return src('./sass/main.scss')
  .pipe(sassGlob())
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(dest('./'))
  .pipe(browserSync.reload({stream: true}));
}

function scripts() {
  return src([
    './libs/swiper/dist/js/swiper.min.js',
    './libs/magnific-popup/dist/jquery.magnific-popup.min.js'
  ], {allowEmpty: true})
    .pipe(plumber())
    .pipe(concat('libs.min.js'))
    .pipe(dest('./js'))
    .pipe(browserSync.stream())
}

function startwatch() {
	watch(['./sass/**/*.scss)'], { usePolling: true }, styles)
	watch('./**/*.php').on('change', browserSync.reload)
  watch('./js/**/*.js').on('change', browserSync.reload)
}

function clean() {
  return del.sync('../'+themeName+'-build', {force: true});
}

function images() {
  return src('img/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(dest('../'+themeName+'-build/img/'));
}

function build() {
  return src(['./**/*',
  // exludes
  '!./img/**',
  '!./sass',
  '!./sass/**',
  '!./libs',
  '!./libs/**',
  '!./*.json',
  '!./gulpfile.js',
  '!./node_modules',
  '!./node_modules/**'
    ])
  .pipe(dest('../'+themeName+'-build'));
}

exports.scripts = scripts
exports.styles  = styles
exports.images  = images
exports.assets  = series(scripts, styles)
exports.build   = series(clean, scripts, styles, build, images)
exports.default = series(scripts, styles, parallel(browsersync, startwatch))

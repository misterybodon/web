//Imports
const { src, dest, watch, series, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const Fiber = require('fibers')
const sourcemaps = require('gulp-sourcemaps')
sass.compiler = require('sass')
const imagemin = require('gulp-imagemin')
const clean = require('gulp-clean')
const rename = require('gulp-rename')
//path to file
const files = {
	mainHTML:'source/**/*.html',
	mainCss: 'dist/css',
	mainScss: 'source/sass/index.scss',
	notmainScss:'!source/sass/index.scss',
	//post stands for posts, for each blog post, not for post processing.
	postScss:'source/**/*.scss',
	dist:'dist/',
	source:'source/',
	jsSource:'source/js/*',
	jsDist:'dist/js/',
	imgsrcfile:'source/images/*',
	imgSource:'source/images/',
	imgDest:'dist/images'
}
//copy files to dist folder.
const copyTask = parallel(cpJs, cpHtml, scssTask);

function cpHtml() {
	return src(files.mainHTML)
		.pipe(dest(files.dist))
}

function cpJs() {
	return src(`${files.jsSource}`)
		.pipe(dest(`${files.jsDist}`))
}

//..compile the scss files to compressed, prefixed css files and copy them to dist.
function scssTask(cb) {
	mainScss();
	postScss();
	cb()
}
function mainScss(){
	return src(files.mainScss)
		.pipe(sourcemaps.init())
		.pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(dest(files.dist))
}
//post stands for posts, for each blog post, not for post processing.
function postScss(){
	return src([files.postScss,files.notmainScss])
		.pipe(sourcemaps.init())
		.pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(dest(files.dist))
}
//only minified files that have not been minified before.
function minifyImgs(){
	return src([files.imgsrcfile, `!${files.imgSource}*-min*`])
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(clean())
		.pipe(rename(function(path){path.basename += '-min'}))
		.pipe(dest(files.imgSource))
		.pipe(dest(files.imgDest))
}
function watchTask() {
	return watch(
		[files.mainScss,
			files.postScss,
			files.mainHTML, 
			files.jsSource,
			files.imgSource], 
		parallel(copyTask, minifyImgs)
	)}
//to run when running 'gulp' i.e the default task
exports.onlyhtml = cpHtml 
exports.noImage = copyTask;
exports.onlyImage = minifyImgs;
exports.default = series(parallel(copyTask, minifyImgs), watchTask)

// TODOS
//checkout next.js on npm 
//add uglify for javascript.


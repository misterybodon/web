const { src, dest, watch, series, parallel } = require('gulp');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')
const Fiber = require('fibers');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');
const imagemin = require('gulp-imagemin');

//--paths to files----

const files = {
    mainHTML:'source/index.html',
    dist:'dist/',
	jsSource:'source/js/',
	jsDist:'dist/js/',
	scssPath: 'source/sass/*.scss',
	cssPath: 'dist/css',
    imgsrc:'source/images/*',
    imgdest:'dist/images'
}

//copy files to dist
function cpHtml() {
return src(files.mainHTML)
	.pipe(dest(files.dist))
}
function cpJs() {
return src(`${files.jsSource}/burger.js`)
	.pipe(dest(`${files.jsDist}`))
}
//..compile the scss files before copying to dist.
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(dest(files.cssPath))
}
//minify all the images before copying to dist.
function minifyImgs(){
   return src(files.imgsrc)
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
    .pipe(dest(files.imgdest))
}

function watchTask() {
	return watch(
        [files.scssPath, 
        files.mainHTML, 
        files.jsSource, 
        files.imgsrc], 
        parallel(scssTask, cpHtml, cpJs)
	)}


//to run when running 'gulp' i.e the default task
exports.default = series(parallel(cpHtml, scssTask, cpJs,minifyImgs), watchTask)

// TODOS
//checkout next.js on npm 
//add uglify for javascript.


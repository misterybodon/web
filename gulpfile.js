//Imports
const { src, dest, watch, series, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const Fiber = require('fibers')
const sourcemaps = require('gulp-sourcemaps')
sass.compiler = require('sass')
const imagemin = require('gulp-imagemin')

//path to file
const files = {
    mainHTML:'source/index.html',
    dist:'dist/',
	jsSource:'source/js/*',
	jsDist:'dist/js/',
	scssPath: 'source/sass/*.scss',
	cssPath: 'dist/css',
    imgsrc:'source/images/*',
    imgdest:'dist/images'
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
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(dest(files.cssPath))
}
//minify all images and copy them to dist.
function minifyImgs(){
    console.log('images not watched. only minified when running gulp')
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
        files.jsSource], 
        copyTask
	)}


//to run when running 'gulp' i.e the default task
exports.noImage = copyTask;
exports.onlyImage = minifyImgs;
exports.default = series(parallel(copyTask, minifyImgs), watchTask)

// TODOS
//checkout next.js on npm 
//add uglify for javascript.


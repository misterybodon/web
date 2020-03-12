//initialize the modules
const { src, dest, watch, series, parallel } = require('gulp');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')
const Fiber = require('fibers');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');
const imagemin = require('gulp-imagemin');
//const livereload = require('gulp-livereload');
//I found easier to use live-server, just issuing the command 
//on the working (dist) directory.

//PATHS
const files = {
    mainHTML:'source/index.html',
    dist:'dist/',
	jsSource:'source/js/',
	jsDist:'dist/js/',
	scssPath: 'source/sass/index.scss',
	cssPath: 'dist/css',
    imgsrc:'source/images/*',
    imgdest:'dist/images'
}

//move html files to dist
function cpHtml() {
return src(files.mainHTML)
	.pipe(dest(files.dist))
}
function cpJs() {
return src(`${files.jsSource}/burger.js`)
	.pipe(dest(`${files.jsDist}`))
}
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init())
		.pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write())
		.pipe(dest(files.cssPath))
}
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
//watch sass files and images for changes
function watchTask() {
	//	livereload.listen({basePath:'dist'});
	return watch([files.scssPath, files.mainHTML, files.jsSource, files.imgsrc], parallel(scssTask, cpHtml, cpJs, minifyImgs)
	)}


//to run when running 'gulp'
exports.default = series(parallel(cpHtml, scssTask, cpJs,minifyImgs), watchTask)

//html files are not updated in dist unless default gulp is ran.

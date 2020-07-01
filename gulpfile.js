//Imports
const { src, dest, watch, series, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
sass.compiler = require('sass')
const Fiber = require('fibers')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const clean = require('gulp-clean')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const filter = require('gulp-filter')
//as python 'require' is equivalent to the code pasted in this file.

//project files and folders
const project = {
    inFile:{
            html:'source/**/*.html',
            mainScss: 'source/sass/index.scss',
      //      notMainScss:'!source/sass/index.scss',
            scss:'source/**/*.scss',
            js:'source/js/*',
            smoothScroll:'source/js/smoothScroll.js', 
            img:'source/images/*'
    },
    outDir:{
            js:'dist/js/',
            css: 'dist/css',
            img:'dist/images'
    },
    inDir:{
        img:'source/images/'
    },
    dist:'dist/',
    source:'source/',
}
const basicTask = parallel(jsTask, cpHtml, scssTask); 
//parallel is a function defined in gulp like src, dest and series.


function cpHtml() {
    //copy html files from source to dist.
    return src(project.inFile.html)
        .pipe(dest(project.dist))
}

function jsTask() {
    const f = filter([ project.inFile.js, `!${project.inFile.smoothScroll}`], {restore: true})
    return src(project.inFile.js)
    .pipe(f)
    .pipe(concat("all.js"))
    .pipe(f.restore)
    .pipe(dest(project.outDir.js))
}

//..compile the scss project to compressed, prefixed css project and copy them to dist.
function scssTask(cb) {
    mainScss();
    scss();
    cb()
}
function mainScss(){
    return src(project.inFile.mainScss)
        .pipe(sourcemaps.init())
        .pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(dest(project.dist))
    //just place the compiled css file under dist.
}
//post stands for posts, for each blog post, not for post processing.
function scss(){
    return src([project.inFile.scss,`!${project.inFile.MainScss}`])
        .pipe(sourcemaps.init())
        .pipe(sass({ fiber: Fiber, outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write())
        .pipe(dest(project.dist))
}
//only minified project that have not been minified before.
function minifyImgs(){
    return src([project.inFile.img, `!${project.inFile.img}*-min*`])
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
        .pipe(dest(project.outDir.img))
        .pipe(dest(project.outDir.img))
}
function watchTask() {
    return watch(
        [project.inFile.mainScss,
            project.inFile.scss,
            project.inFile.html, 
            project.inFile.js,
            project.inFile.img], 
        parallel(basicTask, minifyImgs)
    )}
//to run when running 'gulp' i.e the default task
exports.onlyhtml = cpHtml 
exports.noImage = basicTask;
exports.onlyImage = minifyImgs;
exports.default = series(parallel(basicTask, minifyImgs), watchTask)
// TODOS
//checkout next.js on npm 
//add uglify for javascript.


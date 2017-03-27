'use strict';

var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    concatcss = require('gulp-concat-css'),
    htmlmin = require('gulp-htmlmin'),
    watch = require('gulp-watch'),
    uncss = require('gulp-uncss'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
    

var config = {
    server: {
        baseDir: "./webpro/build"
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

var path = {
    build: {
        html: 'webpro/build/',
        js: 'webpro/build/js/',
        css: 'webpro/build/css/',
        img: 'webpro/build/img/',
        fonts: 'webpro/build/fonts/',
        php: 'webpro/build/'
    },
    src: {
        html: 'webpro/src/*.html',
        js: 'webpro/src/js/index2.0.js',
        styleSass: 'webpro/src/style/main_style.sass',
        styleConcat: 'webpro/src/style/concat/',
        img: 'webpro/src/img/**/*.*',
        fonts: 'webpro/src/fonts/**/*.*'
    },
    watch: {
        html: 'webpro/src/**/*.html',
        js: 'webpro/src/js/**/*.js',
        style: 'webpro/src/style/**/*.sass',
        img: 'webpro/src/img/**/*.*',
        fonts: 'webpro/src/fonts/**/*.*',
        php: 'webpro/src/**/*.php'
    },
    clean: './build',
    uncssHTML: 'webpro/build/*.html'
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function () {
     gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:sass-converter', function () {
    gulp.src(path.src.styleSass)
        .pipe(rigger())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(path.src.styleConcat));
});

gulp.task('style:build', ['style:sass-converter'], function () {
    gulp.src(path.src.styleConcat + '*.css')
        .pipe(concatcss('main_style.css'))
        .pipe(cssmin())
        .pipe(uncss({
            html: [path.uncssHTML],
            ignore: [/\.mob-nav-wrapper/, /\.ps-container/]
        }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

//gulp.task('image:build', function () {
//    gulp.src(path.src.img)
////        .pipe(imagemin({
////            progressive: true,
////            svgoPlugins: [{removeViewBox: false}],
////            use: [pngquant()],
////            interlaced: true
////        }))
//        .pipe(gulp.dest(path.build.img))
//});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    //'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build', 'style:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
//    watch([path.watch.img], function(event, cb) {
//        gulp.start('image:build');
//    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', [
  'build', 
  'webserver', 
  'watch'
]);

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
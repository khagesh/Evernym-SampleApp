/**
 * Created by Khagesh.Sharma on 4/25/2015.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var extReplace = require('gulp-ext-replace');
var autoPrefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var paths = {
    styles: 'app/styles/**/*.less',
    vendor: [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/oclazyload/dist/ocLazyLoad.min.js'
    ],
    app: [
        'app/app.module.js',
        'app/app.config.js',
        'app/core/core.module.js',
        'app/core/directives/**/*.js',
        'app/core/constants/**/*.js',
        'app/core/services/**/*.js'
    ]
};

gulp.task('less', function () {
   return gulp
       .src(paths.styles)
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(autoPrefixer())
       .pipe(minifyCss())
       .pipe(extReplace('.min.css'))
       .pipe(sourcemaps.write('./maps'))
       .pipe(gulp.dest('app/styles/'));
});

gulp.task('vendor', function () {
    return gulp
        .src(paths.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('vendor'));
});

gulp.task('app', function () {
   return gulp
       .src(paths.app)
       .pipe(concat('app.all.js'))
       .pipe(gulp.dest('app'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.app, ['app']);
    gulp.watch(paths.styles, ['less']);
});

gulp.task('default', ['watch', 'less', 'vendor', 'app']);
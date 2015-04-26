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

gulp.task('less', function () {
   return gulp
       .src('app/styles/**/*.less')
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
        .src([
            'bower_components/angular/angular.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/oclazyload/dist/ocLazyLoad.min.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('vendor'));
});

gulp.task('app', function () {
   return gulp
       .src(['app/app.module.js', 'app/app.config.js'])
       .pipe(concat('app.all.js'))
       .pipe(gulp.dest('app'));
});

gulp.task('default', ['less', 'vendor', 'app']);
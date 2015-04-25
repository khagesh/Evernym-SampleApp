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

gulp.task('less', function () {
   return gulp
       .src('app/styles/**/*.less')
       .pipe(watch('app/styles/**/*.less'))
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(autoPrefixer())
       .pipe(minifyCss())
       .pipe(extReplace('.min.css'))
       .pipe(sourcemaps.write('./maps'))
       .pipe(gulp.dest('app/styles/'));
});

gulp.task('default', ['less']);
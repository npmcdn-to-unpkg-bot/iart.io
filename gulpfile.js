// Sass configuration
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

var sassPath = './public/**/**/**/*.scss';

gulp.task('build-css', function() {
  return gulp.src('source/scss/style.scss')
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(sassPath, ['sass']);
});

// define the default task and add the watch task to it
gulp.task('default', ['default:watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('public/assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('default:watch', function() {
  gulp.watch('source/scss/*.scss', ['build-css']);
  gulp.watch('public/assets/js/*.js', ['jshint']);
});
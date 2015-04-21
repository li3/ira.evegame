var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('concat-javascript',  ['lint'], function() {
  return gulp.src('./src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('uglify', ['concat-javascript'], function() {
  return gulp.src('./build/**/*.js')
    .pipe(uglify('app.min.js'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('copy-build', ['uglify'], function() {
  return gulp.src('./build/**/*.js')
    .pipe(gulp.dest('./public/javascript'))
});

gulp.task('copy-templates', ['uglify'], function() {
  return gulp.src('./src/**/*.template.html')
    .pipe(gulp.dest('./public/templates'))
});

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    //.pipe(jshint.reporter('fail'))
});

gulp.task('default', [
  'lint',
  'concat-javascript',
  'uglify',
  'copy-build',
  'copy-templates'
]);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', ['default']);
});
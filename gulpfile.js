var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: './'
  });

  gulp.watch('stylesheets/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch("javascripts/script.js", ['js-watch']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Make sure that the browser reload is executed after the js task
// The reload also needs to be wrapped in an anonymous function
gulp.task('js-watch', ['js'], function() {
  browserSync.reload();
});


// Convert javascript with babel
gulp.task('js', function() {
  return gulp.src("javascripts/script.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['serve'])

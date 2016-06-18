var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: './'
  });

  gulp.watch('stylesheets/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch("javascripts/*.js", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('stylesheets/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
		.pipe(gulp.dest('dist'))
  	.pipe(browserSync.stream());
});

gulp.task('default', ['serve'])

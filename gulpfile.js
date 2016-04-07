// This is a very simple, barebones sass+autoprefixer setup.
// Check out https://gist.github.com/mikestreety/9525414 for more
// bells and whistles.

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
	return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('watch', () => {
  gulp.watch('./src/css/**/*.scss', ['sass']);
});

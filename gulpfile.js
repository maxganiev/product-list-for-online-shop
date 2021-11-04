const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

//optimizing images
gulp.task('imageMin', async () => {
	gulp.src('src/assets/*.png').pipe(imagemin()).pipe(gulp.dest('dist/assets'));
	gulp.src('src/*.png').pipe(imagemin()).pipe(gulp.dest('dist/'));
});

//shrinking js
gulp.task('minifyJs', async () => {
	gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist/'));
});

//shrinking css
gulp.task('minifyCss', () => {
	return gulp
		.src('src/*.css')
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(gulp.dest('dist/'));
});

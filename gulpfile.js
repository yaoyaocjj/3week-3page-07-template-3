const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('index.html').on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
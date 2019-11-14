const gulp = require('gulp');

sass = require('gulp-sass');
concat = require('gulp-concat');
watch = require('gulp-watch');
browserSync = require('browser-sync');
cache = require('gulp-cache');

gulp.task('clearCache', () =>
    cache.clearAll()
)

gulp.task('sass', () =>
    gulp.src('./src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./src/styles'))
        .pipe(browserSync.stream())
)

gulp.task('browser-sync', () =>
    browserSync.init({
        server: "./",
        port: 80
    })
)

gulp.task('watch', () =>
    gulp.watch('./src/sass/*.sass', gulp.series('clearCache', 'sass')).on('change', browserSync.reload)
)
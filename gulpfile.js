var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    reload = browserSync.reload;

    function css() {
        return gulp.src('./app/assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/assets/css'))
        .pipe(browserSync.stream());
    }

    function watch() {
        browserSync.init({
            server: {
                baseDir: './app'
            }
        });
        gulp.watch('./app/assets/sass/**/*.scss', css);
        gulp.watch('./app/**/*.html').on('change', reload);
    }

    exports.css = css;
    exports.watch = watch;
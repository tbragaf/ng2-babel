import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';

const dirs = {
  src: 'src',
  dist: 'dist', // Not being used for now. To be used in prodution
  dev: 'dev'
};

const files = {
  indexJS: 'bootstrap.js',
  indexSASS: 'index.sass'
}

gulp.task('copy', () => {
  return gulp.src(`${dirs.src}/**/*.html`)
    .pipe(gulp.dest(`${dirs.dev}`));
});

gulp.task('build', function () {
  return gulp.src(`${dirs.src}/**/*.js`)
    .pipe(babel())
    .pipe(gulp.dest(`${dirs.dev}`));
});

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('default', ['copy', 'build']);

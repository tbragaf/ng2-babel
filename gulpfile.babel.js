import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import gls from 'gulp-live-server';

const port = 12345;
const dirs = {
  src: 'src',
  dist: 'dist', // Not being used for now. To be used in prodution
  dev: 'dev'
};

const files = {
  indexJS: 'bootstrap.js',
  indexSASS: 'index.sass'
}

gulp.task('serve', function () {
  var server = gls.static(`/`, port);
  server.start();

  gulp.watch([`${dirs.dev}/${files.indexJS}`], function (file) {
    server.notify.apply(server, [file]);
  });
});

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
  return del(dirs.dev);
});

gulp.task('default', ['copy', 'build']);

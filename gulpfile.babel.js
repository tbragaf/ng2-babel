import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import gls from 'gulp-live-server';

const port = 12345;
const dirs = {
  src: 'src',
  dist: 'dist', // Not being used for now. To be used in prodution
  build: 'build'
};

gulp.task('serve', () => {
  var server = gls.static(`/`, port);
  server.start();

  gulp.watch([`${dirs.build}/**/*.js`], (file) => {
    server.notify.apply(server, [file]);
  });
});

gulp.task('copy', () => {
  return gulp.src(`${dirs.src}/**/*.html`)
    .pipe(gulp.dest(`${dirs.build}`));
});

gulp.task('build', () => {
  return gulp.src(`${dirs.src}/**/*.js`)
    .pipe(babel())
    .pipe(gulp.dest(`${dirs.build}`));
});

gulp.task('clean', () => {
  return del(dirs.build);
});

gulp.task('default', ['copy', 'build']);

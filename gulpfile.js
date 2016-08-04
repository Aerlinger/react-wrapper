var gulp = require('gulp');
var react = require('gulp-react');

var path = {
  HTML: 'src/index.html',
  JS: ['panel/*.js'],
  MINIFIED_OUT: 'panel/dist/build.min.js',
  DEST_SRC: 'panel/dist',
  DEST_BUILD: 'panel/dist/build',
  DEST: 'panel/dist'
};

gulp.task('transform', function(){
  gulp.src(path.JS)
      .pipe(react())
      .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('default', ['transform']);


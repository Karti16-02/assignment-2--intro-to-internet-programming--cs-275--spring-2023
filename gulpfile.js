const {src, task} = require('gulp');
const eslint = require('gulp-eslint');

task('default', () => {
    return src(['scripts/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
browserSync({server: true}, function(err, bs) {
    console.log(bs.options.urls.local);
});
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);
const eslint = require('gulp-eslint');

task('default', () => {
    return src(['scripts/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
gulp.task('lint-css', function lintCssTask() {
    const gulpStylelint = require('gulp-stylelint');

    return gulp
      .src('src/**/*.css')
      .pipe(gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      }));
  });
  var htmlmin = require('htmlmin');
  var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('compress', function () {
  return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
  );
});
browserSync({server: true}, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
});

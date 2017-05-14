var gulp = require('gulp')
var babelify = require('babelify')
var browserify = require('browserify')
var reactify = require('reactify')
var through2 = require('through2')
var path = require('path')
// var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var concat = require('gulp-concat')
var copy = require('gulp-copy')
var newer = require('gulp-newer')
var batch = require('gulp-batch')
var watch = require('gulp-watch')
var uglifycss = require('gulp-uglifycss')
var ll = require('gulp-ll')
var markdown = require('gulp-markdown')
var jslist = ['static/js/**/*.js', 'src/**/*.js']
var csslist = ['static/css/**/*.css']

ll.tasks(['javascript', 'markdown'])

gulp.task('javascript', function () {
  return gulp.src(jslist)
    .pipe(newer('./dist/js'))
    .pipe(through2.obj(function (file, enc, next) {
      browserify(file.path, { debug: process.env.NODE_ENV === 'development' })
        .transform(babelify)
        .transform(reactify)
        .bundle(function (err, res) {
          if (err) { return next(err) }
          file.contents = res
          next(null, file)
        })
    }))
    .on('error', function (error) {
      console.log(error.stack)
      this.emit('end')
    })
    .pipe(rename('gapp.js'))
    .pipe(gulp.dest('./dist/js/'))
})

gulp.task('css', function () {
  return gulp.src(csslist)
  .pipe(newer('./dist/css'))
  .pipe(uglifycss({
    'maxLineLen': 80
  }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('dist/css/'))
})

// gulp.task('markdown', function () {
//   return gulp.src(['blog/**/*.md'])
//   .pipe(copy('dist/src', {prefix: 1}))
//   .pipe(newer('dist/blog/'))
//   .pipe(markdown())
//   .pipe(rename(function (path) {
//     path.dirname = ''
//   }))
//   .pipe(gulp.dest('dist/blog/'))
// })

gulp.task('staticFiles', function () {
  return gulp.src(['index.html', 'CNAME'])
  .pipe(newer('dist'))
  .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
  return gulp.src(['static/images/*'])
  .pipe(newer('dist/images/'))
  .pipe(rename(function (path) {
    path.dirname = ''
  }))
  .pipe(gulp.dest('dist/images/'))
})

gulp.task('watch', function () {
  var list = ['index.html'].concat(jslist)
  return watch(list, batch(function (events, done) {
    gulp.start(['javascript', 'staticFiles'], done)
  }))
})

gulp.task('default', ['staticFiles', 'images', 'javascript', 'css'])

gulp.task('dev', ['staticFiles', 'javascript', 'watch'])

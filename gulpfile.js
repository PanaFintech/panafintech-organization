var gulp = require('gulp')
var babelify = require('babelify')
var browserify = require('browserify')
var reactify = require('reactify')
var through2 = require('through2')
var newer = require('gulp-newer')
// var path = require('path')
// var cleanCSS = require('gulp-clean-css')
var thisGapp = {// 'main': require('.'),
  'package': require('./package.json')}//,
  // 'schema': require('./schema.json')}
// thisGapp.main.lang = thisGapp.main.lang || 'es'
const template = require('gulp-template')
const rename = require('gulp-rename')

gulp.task('build-js', function () {
  return gulp.src(['src/**/*.js', 'src/**/*.json'])
    .pipe(through2.obj(function (file, enc, next) {
      browserify(file.path, { 'bundleExternal': true })
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
    // .pipe(rename('index.js'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('jsDependencies', function () {
  return gulp.src(['node_modules/react/dist/react.js',
    'node_modules/react-dom/dist/react-dom.js',
    'node_modules/reactstrap/dist/reactstrap.min.js',
    'node_modules/tether/dist/js/tether.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'])
  .pipe(newer('dist/js/'))
  .pipe(gulp.dest('dist/js/'))
})

gulp.task('cssDependencies', function () {
  return gulp.src(['static/css/*.css', 'node_modules/tether/dist/css/tether.css',
    'node_modules/bootswatch/spacelab/bootstrap.css'])
  .pipe(newer('dist/css/'))
  .pipe(gulp.dest('dist/css/'))
})

gulp.task('build-static-files', () =>
  gulp.src(['templates/index.html', 'templates/CNAME'])
    .pipe(template(thisGapp))
    .pipe(gulp.dest('dist'))
)

gulp.task('images', function () {
  return gulp.src(['static/images/*'])
  .pipe(newer('dist/images/'))
  .pipe(rename(function (path) {
    path.dirname = ''
  }))
  .pipe(gulp.dest('dist/images/'))
})

gulp.task('build-display', ['build-static-files', 'build-js', 'cssDependencies', 'images'])

gulp.task('default', ['build-display'])

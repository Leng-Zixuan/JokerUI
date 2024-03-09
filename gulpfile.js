const gulp = require('gulp');
const path = require('path');
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const merge2 = require('merge2');
const tsConfig = require('./tsconfig.json');
const babelConfig = require('./babel.config.js');

const source = [
  'components/**/*.{js,jsx,ts,tsx}',
  '!components/**/*.stories.{js,jsx,ts,tsx}',
  '!components/**/_e2e_/*',
  '!components/**/_tests_/*',
];

function getProjectPath(filePath) {
  return path.join(process.cwd(), filePath);
}

const baseDir = getProjectPath('components');
const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

/**
 * 执行编译
 * @param {*} module 是否要模式转换
 * true: 转ES5 false: 保留原模式
 */
function compile(module) {
  const targetDir = module === false ? esDir : libDir;
  rimraf.sync(targetDir);
  const { js, dts } = gulp.src(source, { baseDir }).pipe(ts(tsConfig.compilerOptions));
  const dtsStream = dts.pipe(gulp.dest(targetDir));
  let jsStream = js;
  if (module) {
    jsStream = js.pipe(babel(babelConfig));
  }
  jsStream = jsStream.pipe(gulp.dest(targetDir));
  return merge2([dtsStream, jsStream]);
}

gulp.task('compile-with-es', done => {
  console.log("Compile to es...");
  compile(false).on('finish', done);
});

gulp.task('compile-with-lib', done => {
  console.log("Compile to lib...");
  compile(true).on('finish', done);
});

gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'));
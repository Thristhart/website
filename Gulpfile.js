const gulp = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const cleanCSS = require('gulp-clean-css');

function buildHTML() {
  return gulp.src("./src/**/*.html", {sourcemaps: true})
    .pipe(replace(/src="(.*)"/g, 'src="https://static.tom.shea.at/$1"'))
    .pipe(replace(/href="(.*)\.css"/g, 'href="https://static.tom.shea.at/$1.css"')) // replace <link>s
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true}))
    .pipe(gulp.dest("./dist"), {sourcemaps: "./"});
}

function buildJS() {
  return gulp.src("./src/**/*.js", {sourcemaps: true})
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(uglify({
      mangle: {toplevel: true},
    }))
    .pipe(gulp.dest("./dist", {sourcemaps: "./"}));
}

function buildCSS() {
  return gulp.src("./src/**/*.css", {sourcemaps: true})
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist", {sourcemaps: "./"}));
}

const child_process = require('child_process');
function pushToGithub(done) {
  const lastCommitMessage = child_process.execSync('git show -s --format=%B HEAD').toString();
  child_process.exec(`cd dist && git add . && git commit -m '${lastCommitMessage}'`, done);
}

gulp.task(buildHTML);
gulp.task(buildJS);
gulp.task(buildCSS);
gulp.task(pushToGithub);
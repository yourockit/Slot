const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");
const copy = require("gulp-copy");

// Задача для сборки компонентов в index.html
gulp.task("build", function () {
  return gulp
    .src("src/index.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Задача для копирования index.html из src в dist
gulp.task("copy-html", function () {
  return gulp.src("src/index.html").pipe(copy("dist", { prefix: 1 }));
});

// Задача для копирования файлов js из src в dist
gulp.task("js", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Задача для копирования файлов SVG из src в dist/svg
gulp.task("copy-svg", function () {
  return gulp.src("src/**/*.svg").pipe(copy("dist/", { prefix: 1 }));
});

// Задача для компиляции Sass, добавляем префиксы и обновление браузера
gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Задача для отслеживания изменений в файлах Sass и перезагрузки браузера
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "dist/", // Корневая папка проекта
    },
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/*.js", gulp.series("js"));
  gulp.watch("src/html/**/*.html", gulp.series("build"));
  gulp.watch("src/**/*.svg", gulp.series("copy-svg"));
  gulp.watch("dist/index.html").on("change", browserSync.reload);
});

// Запуск задачи по умолчанию
gulp.task("default", gulp.series("sass", "build", "watch"));

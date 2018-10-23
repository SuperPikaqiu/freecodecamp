var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var livereload = require("gulp-livereload");

var srcPath = "project/**/*.!(babel.)js";
var destPath = "";

function jsChange() {
    return gulp
        .src([srcPath])
        .pipe(babel())
        .pipe(rename({ suffix: ".babel" }))
        .pipe(gulp.dest(destPath));
}

gulp.task("js", jsChange);

gulp.task("all", function() {});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("project/**/*.js", function(event) {
        srcPath = event.path;
        let reg = /.*\.babel/;
        if (reg.test(srcPath)) {
            return;
        }
        destPath = srcPath.slice(0, srcPath.lastIndexOf("\\"));

        jsChange();
    });
    gulp.watch([
        "project/**/*.babel.js",
        "project/**/*.css",
        "project/**/*.html"
    ]).on("change", function(path) {
        livereload.changed(path);
    });
});

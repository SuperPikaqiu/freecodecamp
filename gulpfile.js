var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var livereload = require("gulp-livereload");
var sass = require("gulp-sass");

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

gulp.task('style',function(){
    return gulp.src('project/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('project'));
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("project/**/*.js", function(event) {
        srcPath = event.path;//src的路径形如D:\Project\...
        
        let reg = /.*\.babel/;
        if (reg.test(srcPath)) {
            return;
        }
        destPath = srcPath.slice(0, srcPath.lastIndexOf("\\"));

        jsChange();
    });

    gulp.watch('project/**/*.scss',['style']);

    gulp.watch([
        "project/**/*.babel.js",
        "project/**/*.css",
        "project/**/*.html"
    ]).on("change", function(path) {
        livereload.changed(path);
    });
});

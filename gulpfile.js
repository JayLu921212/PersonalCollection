//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject');
    uglify  = require('gulp-uglify');
    concat = require('gulp-concat');
    minifyCss =  require('gulp-minify-css');

gulp.task('compileLess', function () {
    gulp.src('src/less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(minifyCss())
        // .pipe(concat('main.css'))
        .pipe(gulp.dest('src/css'))
});
gulp.task('compressJs',function () {
    // gulp.src('src/js/*.js')
    //     .pipe(uglify())
    //     // .pipe(concat('main.js'))
    //     .pipe(gulp.dest('src/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/less/*.less', ['compileLess', 'inject']);
    //监听任何文件变化，实时刷新页面
    gulp.watch("./src/**/*.*").on('change', browserSync.reload);
});

// browser 需要在制定目录下创建index.html
gulp.task('serve', function () {
    browserSync.init({
        //指定服务器启动根目录  
        // server: "./src"
        //http://www.browsersync.cn/docs/options/ 选项配置说明
        server: {
            baseDir: "./src",
            //注意这里不要用./
            index: "index.html"
        }
    });
});


gulp.task('inject', function () {
    // auto inject fn here
});


gulp.task('default', ['compileLess','compressJs','watch', 'inject', 'serve']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务


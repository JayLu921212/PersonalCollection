//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css'))//将会在src/css下生成index.css
});
//用gulp起web服务器
gulp.task("buildweb",function () {
	connect.server({
		livereload: true,
		root: ['.', '.tmp']
	});
});
gulp.task('autoreload', function() {

//todo
  // gulp.src('src/csss/*.css')
    // .pipe(watch('src/csss/*.css'),connect.reload());
});

gulp.task('watch', function() {
    // gulp.watch('src/less/*.less', ['testLess']);
    gulp.watch('src/less/*.less', ['testLess']);
});


 
gulp.task('default',['testLess','buildweb','watch','autoreload']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径


//todo
// gulp.task('serve',['testLess'], function() {  
//     browserSync.init({  
//         //指定服务器启动根目录  
//         server: "src"  
//     });  
//     //监听Less编译  
//     gulp.watch("src/less/*.less", ['testLess']);  
//     //监听任何文件变化，实时刷新页面  
//     gulp.watch("./src/**/*.*").on('change', browserSync.reload);  
// });  
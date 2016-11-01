/**
 * gulp的主文件,用于注册任务
 */
 var gulp = require('gulp');
 var less = require('gulp-less');
 var cssnano = require('gulp-cssnano');

 gulp.task('copy', function() {
   // 当gulp执行say任务时,会自动执行这个函数
  //  合并 压缩 之类的操作
  //  复制文件
  // gulp.src的作用是取一个文件
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist/'));//将此处需要的操作传递进去

 });
 gulp.task('dist', function() {
  gulp.watch('src/index.html',['copy']);
  gulp.watch('src/style/*.less',['style']);
 });


 gulp.task('style', function () {
   gulp.src('src/style/*.less')
     .pipe(less())
     .pipe(cssnano())
     .pipe(gulp.dest('dist/css/'));
 });

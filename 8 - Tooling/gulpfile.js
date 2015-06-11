var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat =require('gulp-concat');
var debug = require('gulp-debug');
var del = require('del');
var hint = require('gulp-jshint');

gulp.task('mainBowerFiles',['demo'], function () {
    console.log('Dit kan ook');

    return gulp.src(mainBowerFiles(), {
        base: './bower_components'
    }).pipe(gulp.dest('wwwroot/lib/'))
});

gulp.task('default', ['mainBowerFiles']);


function delStuff(glob, cb){
    del(glob, cb)

}

gulp.task('del-dump', function(cb){
    delStuff('./dump', cb);
});


gulp.task('demo', ['del-dump', 'child-task1', 'child-task2'], function () {
    console.log('Demo')

    return gulp.src('./wwwroot/*.js')
        .pipe(debug())
        .pipe(hint())
        .pipe(hint.reporter('jshint-stylish'))
        .pipe(concat('concated.js'))
        .pipe(gulp.dest('./dump'));

});


gulp.task('keep-running', function(){
    gulp.watch("./wwwroot/**/*.js", ['demo']);

})

gulp.task('child-task1',['del-dump'],function(){
    console.log('child')
    return gulp.src('./wwwroot/*.js')
        .pipe(concat('concated.js'));
});

gulp.task('child-task2', function(){
    console.log('child')
    return gulp.src('./wwwroot/*.js')
        .pipe(concat('concated.js'));
});
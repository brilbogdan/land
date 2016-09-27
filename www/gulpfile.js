var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');


gulp.task('less', function(){
    gulp.src('./less/style_main.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 50 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));

});


gulp.task('watch', function(){
    return watch('./less/*.less', function(){
        gulp.start('less');
    })
});

gulp.task('default',['less', 'watch']);

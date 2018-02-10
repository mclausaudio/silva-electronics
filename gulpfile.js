var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task('default', function(){
   console.log("test"); 
});

gulp.task('styles',function(){
    return gulp.src('client/css/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('client/temp/styles'));
})

gulp.task('watch', function(){
    watch('client/css/**/*.css', function() {
        gulp.start('styles');
    })
})
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();


gulp.task('twig:watch', function () {
    gulp.watch(['./**/*.twig'], ['twig']);
});

gulp.task('twig', function () {
    return gulp.src('./*.twig')
        .pipe(plugins.twig({
            data: {
                images: require('./config/images.json'),
                icons: require('./config/icons.json'),
                navigationLinks: require('./config/navigation.json')
            },
            filters: [
                {
                    name: 'jsonDecode',
                    func: function (args) {
                        return JSON.parse(args);
                    }
                }
            ]
        }))
        .pipe(gulp.dest('./dist/'));
});

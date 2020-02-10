var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

const pretty = require('pretty');
const cssbeautify = require('cssbeautify');

gulp.task('twig:watch', function () {
    gulp.watch(['./**/*.twig'], ['twig']);
});

gulp.task('twig', function () {
    return gulp.src('./pages/*.twig')
        .pipe(plugins.twig({
            data: {
                // images: require('./config/images.json'),
                // icons: require('./config/icons.json'),
                // navigationLinks: require('./config/navigation.json')
            },
            filters: [
                {
                    name: 'jsonDecode',
                    func: function (args) {
                        return JSON.parse(args);
                    }
                },
                {
                    name: 'singleLine',
                    func: function (args) {
                        if (typeof args !== 'undefined') {
                            return args.replace(/\r?\n|\r/g, '');
                        }
                    }
                },
                {
                    name: 'leadingWhitespaces',
                    func: function (args) {
                        if (typeof args !== 'undefined') {
                            return args.replace(/(^([ ]*(\r?\n|\r)*)[ ]*)/g, '');
                        }
                    }
                },
                {
                    name: 'prettyHtml',
                    func:  function (args) {
                        if (typeof args !== 'undefined') {
                            return pretty(args, {ocd: false});
                        }
                    }
                },
                {
                    name: 'prettyCSS',
                    func:  function (args) {
                        if (typeof args !== 'undefined') {
                            return cssbeautify(args, {
                                indent: '    ',
                                openbrace: 'end-of-line',
                                autosemicolon: true
                            });
                        }
                    }
                }

            ]
        }))
        .pipe(gulp.dest('./dist/'));
});

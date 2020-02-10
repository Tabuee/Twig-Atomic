const sass         = require('node-sass');
const fs           = require('fs');
const jsonImporter = require('node-sass-json-importer');

// Example 1
sass.render({
    file: 'static/style.scss',
    importer: jsonImporter
}, function (err, result) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    // console.log(result);
    fs.writeFileSync('static/style.css', result.css.toString());
});

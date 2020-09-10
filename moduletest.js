const mymodule = require('./mymodule');

mymodule('/Users/chrisowens/Downloads', 'png', function (err, files) {
    files.map(file => {
        console.log('file is:', file);
    })
})
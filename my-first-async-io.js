const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const splitString = data.split('\n');
        console.log(splitString.length - 1);
    }
})
'use strict';

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.error(err);
    } else {
        list.map(file => {
            if (path.extname(file) === '.' + process.argv[3]) {
                console.log(file);
            }
        })
    }
});


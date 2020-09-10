'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function mymodule(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter((file) => {
            if (path.extname(file) === '.' + ext) {
                return file;
            }

        });
        callback(null, filteredList);
    })
}


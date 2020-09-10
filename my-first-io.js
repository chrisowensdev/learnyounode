'use strict'

const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);

const string = buf.toString();

const splitString = string.split('\n');


console.log(splitString.length - 1);

const { doesNotMatch } = require('assert');
const fs = require('fs');
module.exports = function(file, done) {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            throw err;
        } else {
            done(data);
        }
    })
}
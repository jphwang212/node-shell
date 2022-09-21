const request = require('request');
const req = require('request');
module.exports = function(site, done) {
    request(site, function(error, response, body){
        if(error){
            throw error; // Print the error if one occurred
        } else {
            done('statusCode:' + response && response.statusCode + 'body:' + body);
        }
        // console.log('statusCode:' + response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:' + body); // Print the HTML for the Google homepage.
    });
}
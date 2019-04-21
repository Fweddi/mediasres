const fs = require('fs');
const path = require('path');
const nodeRequest = require('request');
const env = require('env2')('./.env');

const handleAPIRoute = (req, res) => {
    // fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    //     if (err) return err;
    //     //writeHead 500?
    //     res.writeHead(200, {'Content-Type':'text/html'});
    //     res.end(file);
    // })
}

module.exports = handleAPIRoute;
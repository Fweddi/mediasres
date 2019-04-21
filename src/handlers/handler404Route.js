const fs = require('fs');
const path = require('path');

const handle404Route = (req, res) => {
    fs.readFile(path.join(__dirname, '..', '..', 'public', 'error.html'), (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end(err);
            }
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end(file);
    })
}

module.exports = handle404Route;
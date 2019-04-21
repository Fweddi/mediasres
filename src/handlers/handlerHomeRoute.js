const fs = require('fs');
const path = require('path');

const handleHomeRoute = (req, res) => {
    fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), (err, file) => {
        if (err) {
        res.writeHead(500);
        return err;
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(file);
    })
}

module.exports = handleHomeRoute;



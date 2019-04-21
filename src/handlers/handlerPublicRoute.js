const fs = require('fs');
const path = require('path');

const handlePublicRoute = (req, res, endpoint) => {
    const [, extensionType] = endpoint.split('.');
    console.log(endpoint);
    const extensionSelector = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
        json: 'application/json',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
        otf: 'font/otf',
        ttf: 'font/ttf'
    };

    fs.readFile(path.join(__dirname, '..', '..', endpoint), (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end(err);
            }
            res.writeHead(200, { "Content-Type": extensionSelector[extensionType] });
            res.end(file);
    })
}

module.exports = handlePublicRoute;


const fs = require('fs');
const path = require('path');

const handlePublicRoute = (req, res, endpoint) => {
    [, extensionType] = endpoint.split('.');
    console.log(endpoint);
    const extensionSelector = {
        "html":"text/html",
        "css":"text/css",
        "js":"application/javascript",
        "png":"image/png",
        "jpg":"image/jpeg",
        "jpeg":"image/jpeg",
        "ico":"image/x-icon",
        "ttf":"font/tff"
    }

    fs.readFile(path.join(__dirname, '..', '..', endpoint), (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end(err);
            }
        res.writeHead(200, {'Content-Type':extensionSelector[extensionType]});
        res.end(file);
    })
}

module.exports = handlePublicRoute;
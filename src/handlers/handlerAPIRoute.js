const nodeRequest = require('request');
require('env2')('.env');

const handlerAPIRoute = (req, res, endpoint) => {
    const userID = endpoint.split('=')[1];
    const goodreadsAPI = process.env.GOODREADS_KEY;
    const apiUrl = `https://www.goodreads.com/review/list/${userID}.xml?key=${goodreadsAPI}&v=2&shelf=read&sort=date_read`;



    nodeRequest(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            response.writeHead(500,{'Content-Type' : 'text/html'})
            response.end('APIhandler error: ' + error);
        }
        else {
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify(body));
        }
    });
}

module.exports = handlerAPIRoute;
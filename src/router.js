const handler = require('./handlers');

const router = (req, res) => {
    const endpoint = req.url;
    const method = req.method;

    console.log(endpoint);

    if (method === 'GET') {
        if (endpoint === '/') {
            handler.handlerHomeRoute(req, res);
        } else if (endpoint.includes('/public')) {
            handler.handlerPublicRoute(req, res, endpoint);
        } else if (endpoint.includes('/goodreads?=')) {
            handler.handlerAPIRoute(req, res, endpoint);
        } else if (endpoint === '/goodreadsUser') {
            handler.handlerGoodreadsUserRoute(req, res);
        }
        else {
            handler.handler404Route(req, res);
        }
    } 
    else if (method === 'POST') {
    }
}

module.exports = router;
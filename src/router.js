const handler = require('./handlers');

const router = (req, res) => {
    const endpoint = req.url;
    const method = req.method;

    if (method === 'GET') {
        if (endpoint === '/') {
            handler.handlerHomeRoute(req, res);
        } else if (endpoint.includes('/public')) {
            handler.handlerPublicRoute(req, res, endpoint);
        }
        else {
            handler.handler404Route(req, res);
        }
    } 
    else if (method === 'POST') {
    }
}

module.exports = router;
const handlerHomeRoute = require('./handlerHomeRoute');
const handlerPublicRoute = require('./handlerPublicRoute');
const handlerAPIRoute = require('./handlerAPIRoute');
const handler404Route = require('./handler404Route');
const handlerGoodreadsUserRoute = require('./handlerGoodreadsUserRoute');

module.exports = {
    handlerHomeRoute,
    handlerPublicRoute,
    handlerAPIRoute,
    handler404Route,
    handlerGoodreadsUserRoute
}
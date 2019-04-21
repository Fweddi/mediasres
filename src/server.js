const http = require('http');
const router = require('./router');
const port = process.env.PORT || 8000;

const server = http.createServer(router);

server.listen(port, () => {
    console.log(`We are now on port ${port}`);
});
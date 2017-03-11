// require express to act as Firebase server
const express = require('express');
// require local app middleware
const func = require('./src').default;
// create app
const server = express();
// enable express server
server.use(func);
server.listen(8080);

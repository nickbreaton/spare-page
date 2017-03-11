const express = require('express');
const func = require('./src').default;
const app = express();
app.use(func);
app.listen(8080);

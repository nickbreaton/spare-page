const functions = require('firebase-functions');
const func = require('./dist').default;
exports.parse = functions.https.onRequest(func);

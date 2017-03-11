// enable async / await
require('regenerator-runtime/runtime');
// require Firebase dependency
const functions = require('firebase-functions');
// require local app middleware
const func = require('./dist').default;
// export Firebase functions hook
exports.parse = functions.https.onRequest(func);

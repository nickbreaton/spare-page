// include Firebase functions lib
const functions = require('firebase-functions')

// enable async / await
require('regenerator-runtime/runtime')

// import app
const { default: app } = require('./dist')

// Firebase HTTP hook
exports.parse = functions.https.onRequest(app)

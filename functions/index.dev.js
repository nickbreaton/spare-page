import express from 'express'
import app from './src'

// create server
const server = express()

// start development server
server.use(app)
server.listen(8081)

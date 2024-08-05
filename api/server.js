const express = require('express')
const server = express()

server.use(express.json())
server.disable('x-powered-by')

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});
  
module.exports = server;
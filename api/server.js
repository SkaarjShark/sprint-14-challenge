const express = require('express')
const server = express()

const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

server.use(express.json())
server.disable('x-powered-by')

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});
  
module.exports = server;
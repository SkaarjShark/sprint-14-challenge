// build your `/api/projects` router here
const Project = require('./model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router
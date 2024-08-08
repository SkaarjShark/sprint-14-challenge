// build your `/api/projects` router here
const Project = require('./model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            const result = projects.map(project => ({
                ...project,
                project_completed: project.project_completed === 1
            }))
            res.status(200).json(result)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    // const newProject = { 
    //     project_name: req.body.project_name, 
    //     project_description: req.body.project_description,
    //     project_completed: req.body.project_completed === undefined ? false : project_completed
    // }
    Project.createProject(req.body)
        .then(project => {
            const result = { ...project, project_completed: project.project_completed === 1}
            res.status(201).json(result)
        })
        .catch(next)
})

module.exports = router
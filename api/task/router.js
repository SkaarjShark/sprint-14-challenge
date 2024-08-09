// build your `/api/tasks` router here
const Task = require('./model')
const Project = require('../project/model')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
        const gotProjects = await Project.getProjects()
        Task.getTasks()
            .then(tasks => {
                const result = tasks.map(task => {
                    const project = gotProjects.find(p => p.project_id === task.project_id)
                    return {
                        ...task,
                        task_completed: task.task_completed === 1,
                        project_name: project.project_name,
                        project_description: project.project_description
                    }
                })
                res.status(200).json(result)
            })
            .catch(next)
        } catch (err) {
            res.status(500).json({ error: 'Internal server error '})
        }
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(task => {
            const result = { ...task, task_completed: task.task_completed === 1}
            res.status(201).json(result)
        })
        .catch(next)
})

module.exports = router
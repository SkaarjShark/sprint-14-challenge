// build your `/api/tasks` router here
const Task = require('./model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            const result = tasks.map(task => ({
                ...task,
                task_completed: task.task_completed === 1
            }))
            res.status(200).json(result)
        })
        .catch(next)
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
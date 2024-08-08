// build your `/api/resources` router here
const Resource = require('./model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(resource => {
            if (resource === "nameExists") {
                res.status(400).json({ message: 'Name already exists in table.' })
            } else {
                res.status(201).json(resource)
            }
        })
        .catch(next)
})

module.exports = router
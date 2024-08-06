// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db ('project')
}

async function createProject(newProject) {
    const [project_id] = await db('project').insert(newProject)
    return getProjects().where({ project_id }).first()
}

module.exports = {
    getProjects,
    createProject
}
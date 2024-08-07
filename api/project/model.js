// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db ('projects')
}

async function createProject(newProject) {
    const [project_id] = await db('projects').insert(newProject)
    return getProjects().where({ project_id }).first()
}

module.exports = {
    getProjects,
    createProject
}
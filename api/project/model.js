// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db ('project')
}

module.exports = {
    getProjects
}
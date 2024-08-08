// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db ('tasks')
}

async function createTask(newTask) {
    const [task_id] = await db('tasks').insert(newTask)
    return getTasks().where({ task_id }).first()
}

module.exports = {
    getTasks,
    createTask
}
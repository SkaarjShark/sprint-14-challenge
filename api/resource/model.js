// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db ('resources')
}

async function createResource(newResource) {
    const possibleResource = await db('resources').where('resource_name', newResource.resource_name)
    if (!possibleResource.length) {
        const [resource_id] = await db('resources').insert(newResource)
        return getResources().where({ resource_id }).first()
    } else {
        return "nameExists"
    }
}

module.exports = {
    getResources,
    createResource
}
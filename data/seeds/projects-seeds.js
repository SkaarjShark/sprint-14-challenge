exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        { project_id: 1, project_name: 'foo', project_completed: true},
        { project_id: 2, project_name: 'bar', project_description: 'sample text'}
    ])
}
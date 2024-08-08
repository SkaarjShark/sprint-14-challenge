exports.seed = function(knex, promise) {
    return knex('tasks').insert([
        { task_description: 'This is a task description.', task_notes: 'This is a task note.', task_completed: false, project_id: 2 },
        { task_description: 'Another description.', task_completed: true, project_id: 1 }
    ])
}
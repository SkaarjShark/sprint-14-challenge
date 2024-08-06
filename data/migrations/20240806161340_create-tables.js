/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.text('project_description', 250)
        tbl.boolean('project_completed').defaultTo(false)
    })
    .createTable('resource', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable()
        tbl.text('resource_description', 250)
    })
    .createTable('task', tbl => {
        tbl.increments('task_id')
        tbl.text('task_description', 250).notNullable()
        tbl.text('task_notes', 250)
        tbl.boolean('task_completed').defaultTo(false)
        // foreign key goes here
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};

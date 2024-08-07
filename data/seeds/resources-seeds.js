exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {resource_name: 'resource_name'}
    ])
}
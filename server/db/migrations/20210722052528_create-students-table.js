
exports.up = (knex) => {
  return knex.schema.createTable('students', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.unique('email') 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('students')
};

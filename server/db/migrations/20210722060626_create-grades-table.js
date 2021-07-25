
exports.up = (knex) => {
  return knex.schema.createTable('grades', table => {
    table.increments('id').primary()
    table.integer('score').notNullable()
    table.string('letter').notNullable()
  })
};

exports.down = function(knex) {  
  return knex.schema.dropTable('grades')
};

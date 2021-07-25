
exports.up = (knex) => {
  return knex.schema.createTable('courses', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('grade')
      .references('id')
      .inTable('grades')
    table.integer('student')
      .references('id')
      .inTable('students')
      .index()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('courses')
};

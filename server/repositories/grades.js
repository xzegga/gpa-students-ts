const knex = require('../db/db')

const grades = {}

grades.create = (grade) => {
  return knex('grades').insert(grade)
}

grades.find = () => {
  return knex('grades').select()
}

grades.findById = (id) => {
  return knex('grades').where('id', id).select()
}

grades.delete = (id) => {
  return knex('grades').where('id', id).del()
}

grades.update = (id, grade) => {
  return knex('grades').where('id', id).update(grade)
}

grades.create = (grade) => {
  return knex('grades').insert(grade)
}

module.exports = grades
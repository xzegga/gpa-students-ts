const knex = require('../db/db')

const students = {}

students.create = (student) => {
  return knex('students').insert(student)
}

students.find = () => {
  return knex('students').select()
}

students.findById = (id) => {
  return knex('students').where('id', id).select().first()
}

students.delete = (id) => {
  return knex('students').where('id', id).del()
}

students.update = (id, student) => {
  return knex('students').where('id', id).update(student)
}

students.create = (student) => {
  return knex('students').insert(student)
}

module.exports = students
const knex = require('../db/db')

const courses = {}

courses.create = (course) => {
  return knex('courses').insert(course)
}

courses.find = (course) => {
  return knex('courses').select()
}

courses.findByStudentId = (id) => {
  return knex
    .select('courses.id', 'name', 'grades.score', 'grades.letter')
    .from('courses')
    .join('grades', 'courses.grade', '=', 'grades.id')
    .where('student', id)
}

courses.delete = (id) => {
  return knex('courses').where('id', id).del()
}

courses.update = (id, course) => {
  return knex('courses').where('id', id).update(course)
}

courses.create = (course) => {
  return knex('courses').insert(course)
}

module.exports = courses
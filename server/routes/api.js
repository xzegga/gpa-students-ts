const express = require('express');
const router = express.Router();
const db = require('../repositories')


/* Courses */
router.get('', async (req, res) => {
  res.status(201).json('Server running')
});

/* Courses */
router.post('/courses', async (req, res) => {
  const results = await db.courses.create(req.body)
  const [id] = results
  res.status(201).json({ id })
});

router.get('/courses', async (req, res) => {
  const courses = await db.courses.find()
  res.status(201).json({ courses })
});

/* Grades */
router.post('/grades', async (req, res) => {
  const grade = await db.grades.create(req.body)
  const [id] = grade
  res.status(201).json({ id })
});

router.get('/grades', async (req, res) => {
  const grades = await db.grades.find()
  res.status(200).json({ grades })
});


/* Students */
router.post('/students', async (req, res) => {
  const results = await db.students.create(req.body)
  const [id] = results
  res.status(201).json({ id })
});

router.get('/students', async (req, res) => {
  const results = await db.students.find(req.body)
  res.status(200).json({ results })
});

router.get('/students/grades', async (req, res) => {
  const students = await db.students.find()
  if (students) {
    for await (const student of students) {
      student.courses = await db.courses.findByStudentId(student.id)
      student.gpa = calculateGPA(student)
    }
  }

  res.status(200).json({ students })
});

router.get('/students/:id', async (req, res) => {
  const student = await db.students.findById(req.params.id)
  if (student) {
    student.courses = await db.courses.findByStudentId(req.params.id)
    student.gpa = calculateGPA(student)
  }
  res.status(200).json(student)
});

const calculateGPA = (student) => {
  return student.courses.length
    ? student.courses.reduce((a, b) => a + (b['score'] || 0), 0) / student.courses.length
    : 0;
}

module.exports = router;
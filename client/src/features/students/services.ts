// Fech student from our Bacekend Node Server
import Axios from 'axios';
import { StudentList, Student, StudentResponse, StudentCourse, GradesResponse } from './model';

const API_URL = 'http://localhost:5000'

export const getStudetsGrades = () => {
  return Axios.get<StudentResponse>(`${API_URL}/students/grades`)
    .then(res => res.data.students)
}

export const getGrades = () => {
  return Axios.get<GradesResponse>(`${API_URL}/grades`)
    .then(res => res.data.grades)
}

export const addStudents = (student: Student) => {
  return Axios.post(`${API_URL}/students`, student)
    .then(res => {
      return { id: res.data.id, ...student, courses: [], gpa: 0 } as StudentList
    })
}

export const addCourse = (course: StudentCourse) => {
  return Axios.post<StudentCourse>(`${API_URL}/courses`, course)    
    .then(res => {
      return {id: res.data.id, ...course}
    })
}


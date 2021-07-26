// Fech student from our Bacekend Node Server
import Axios from 'axios';
import { StucentGrades, Student, StudentResponse } from './model';

const API_URL = 'http://localhost:5000'

export const getStudetsGrades = () => {
  return Axios.get<StudentResponse>(`${API_URL}/students/grades`)
    .then(res => res.data.students)
}


export const addStudents = (student: Student) => {
  return Axios.post(`${API_URL}/students`, student)
    .then(res => {
      return { id: res.data.id, ...student, courses: [], gpa: 0 } as StucentGrades
    })
}

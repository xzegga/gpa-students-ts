// Fech student from our Bacekend Node Server
import Axios from 'axios';

const API_URL = 'http://localhost:5000'

export const getStudetsGrades = () => {
  return Axios.get(`${API_URL}/students/grades`)
    .then(res => res.data.students);
}
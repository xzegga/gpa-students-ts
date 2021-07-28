import { getStudetsGrades, addStudents, addCourse, getGrades } from './services';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentState, STATUS, Student, StudentCourse, Grade, StudentList } from './model';
import { RootState } from 'state/store';

export const initialState: StudentState = {
  summary: [],
  status: STATUS.idle,
  error: '',
  grades: []
}

export const getStudentsAsync = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    return getStudetsGrades()
  }
);

export const getGradesAsync = createAsyncThunk(
  'students/fetchGrades',
  async () => {
    return getGrades()
  }
);

export const addStudentsAsync = createAsyncThunk(
  'students/addStudent',
  async (student: Student) => {
    return addStudents(student)
  }
);

export const addCourseAsync = createAsyncThunk(
  'students/addCourse',
  async (course: StudentCourse) => {
    return addCourse(course)
  }
);

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        state.status = STATUS.idle;
        state.summary = action.payload;
      })
      .addCase(getStudentsAsync.rejected, (state) => {
        state.status = STATUS.failed;
      })
      .addCase(addStudentsAsync.fulfilled, (state, action) => {
        state.summary = [...state.summary, action.payload]
      })
      .addCase(addStudentsAsync.rejected, (state) => {
        state.error = 'Error saving the student';
      })
      .addCase(getGradesAsync.fulfilled, (state, action) => {
        state.grades = action.payload
      })
      .addCase(getGradesAsync.rejected, (state) => {
        state.error = 'Error saving the course';
      })
      .addCase(addCourseAsync.fulfilled, (state, action) => {
        const [student] = state.summary.filter((st: StudentList) => st.id === action.payload.student)
        const [{ score, letter }] = state.grades.filter(gr => gr.id === action.payload.grade)

        const newCoure = {
          id: action.payload.id,
          name: action.payload.name,
          score, letter
        }

        student.courses.push(newCoure)
        student.gpa = student.courses.reduce((a, b) => a + (b['score'] || 0), 0) / student.courses.length
      })
      .addCase(addCourseAsync.rejected, (state) => {
        state.error = 'Error saving the course';
      })
  },
})

export const selectStudents = (state: RootState): StudentState => state.students;
export const selectGrades = (state: RootState): Grade[] => state.students.grades;

export default studentsSlice.reducer
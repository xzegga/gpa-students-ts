import { getStudetsGrades, addStudents } from './services';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentState, STATUS, Student } from './model';
import { RootState } from '../../state/store';

export const initialState: StudentState = {
  summary: [],
  status: STATUS.idle,
  error: ''
}

export const getStudentsAsync = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    return getStudetsGrades()
  }
);

export const addStudentsAsync = createAsyncThunk(
  'students/addStudent',
  async (student: Student) => {
      return addStudents(student)
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
      .addCase(getStudentsAsync.rejected, (state, action) => {
        state.status = STATUS.failed;
      })
      .addCase(addStudentsAsync.fulfilled, (state, action) => {        
        state.summary = [...state.summary, action.payload]
      })
      .addCase(addStudentsAsync.rejected, (state, action) => {
        state.error = 'Error saving the student';
      });
    },
})

export const selectStudents = (state: RootState): StudentState => state.students;

export default studentsSlice.reducer
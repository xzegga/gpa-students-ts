import { getStudetsGrades } from './services';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StudentState, STATUS } from './model';
import { RootState } from '../../state/store';

const initialState: StudentState = {
  summary: [],
  status: STATUS.idle
}

export const getStudentsAsync = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    return getStudetsGrades()
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
      });
  },
})

export const selectStudents = (state: RootState): StudentState => state.students;

export default studentsSlice.reducer
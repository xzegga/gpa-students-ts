import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import studentReducer from '../features/students/slices'


export const store = configureStore({
  reducer: {
    students: studentReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
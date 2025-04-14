import { configureStore } from '@reduxjs/toolkit';
import coursesReducers, { fetchCategories, fetchCourses, fetchLevels, fetchTeachers } from './courseSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducers
  },
});

store.dispatch(fetchCourses())
store.dispatch(fetchCategories())
store.dispatch(fetchLevels())
store.dispatch(fetchTeachers())
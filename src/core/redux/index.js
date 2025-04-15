import { configureStore } from '@reduxjs/toolkit';
import coursesReducers, { fetchCategories, fetchCourses, fetchLevels, fetchTeachers } from './courseSlice';
import blogReducers, { fetchBlogCategories, fetchBlogs } from './blogSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducers,
    blogs: blogReducers
  },
});
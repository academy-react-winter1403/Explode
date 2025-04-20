import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userPanelReducer from './userPanelSlice';
import coursesReducers from './courseSlice';
import blogReducers from './blogSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    userpanel: userPanelReducer,
    courses: coursesReducers,
    blogs: blogReducers,
  },
});

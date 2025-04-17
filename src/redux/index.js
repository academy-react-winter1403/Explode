import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userPanelReducer from './userPanelSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    userpanel: userPanelReducer,
  },
});

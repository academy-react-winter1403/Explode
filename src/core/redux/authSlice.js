import { createSlice } from '@reduxjs/toolkit';
import { getItemGeneric, setItemGeneric } from '../common/storage.services';

const initialState = {
  token: getItemGeneric('token'),
  isAuthenticated: !!getItemGeneric('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      setItemGeneric('token', action.payload.token);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

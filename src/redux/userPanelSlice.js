import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  panelState: 'dashboard',
  error: null,
};
const userPanelSlice = createSlice({
  name: 'userPanel',
  initialState,
  reducers: {
    setPanelState(state, action) {
      state.loading = true;
      state.panelState = action.payload;
    },
  },
});
export const { setPanelState } = userPanelSlice.actions;
export default userPanelSlice.reducer;

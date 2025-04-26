import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: false
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export const { setDarkMode } = darkSlice.actions
export default darkSlice.reducer
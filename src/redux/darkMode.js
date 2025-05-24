import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../core/common/storage.services";

const darkSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: getItem('theme') 
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export const { setDarkMode } = darkSlice.actions
export default darkSlice.reducer
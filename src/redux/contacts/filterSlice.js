import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
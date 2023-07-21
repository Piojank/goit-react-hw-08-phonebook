import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const initialState = {
    items: [],
    isLoading: true,
    error: '',
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.error = action.payload;
    state.isLoading = false;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.items = state.items.filter(({ id }) => id !== action.payload);
            state.loading = false;
        },

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    },
});

export const contactsReducer = contactsSlice.reducer;
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

    extraReducers: builder =>
    builder

    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
    })
    .addCase(fetchContacts.rejected, handleRejected)

    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)

    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
            contact => contact.id !== action.payload
        );
    })
    .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
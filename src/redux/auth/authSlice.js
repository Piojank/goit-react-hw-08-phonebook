import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setPath: (state, action) => {
            state.currentPath = action.payload;
        },
    },

    extraReducers: {
        [register.fulfilled]: handleFulfilled,
        [logIn.fulfilled]: handleFulfilled,

        [logOut.fulfilled]: (state, _) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.currentPath = null;
        },
        [refreshUser.pending]: (state, _) => {
            state.pendingUserData = true;
        },
        [refreshUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.pendingUserData = false;
        },
        [refreshUser.rejected]: state => {
            state.pendingUserData = false;
        },
    },
});

export const { setPath } = authSlice.actions;

export const authReducer = authSlice.reducer;
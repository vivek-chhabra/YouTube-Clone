import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/config";

// initial state
const initialState = {
    user: null,
    error: null,
    isPending: false,
    isAuthReady: false,
};

// createAsyncThunk
export const loginAuth = createAsyncThunk("login", async () => {
    const res = await signInWithPopup(auth, googleProvider);
    return res.user;
});
export const logoutAuth = createAsyncThunk("logout", async () => {
    const res = await signOut(auth);
    return res;
});

// createSlice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        initialAuth: (state, action) => {
            state.user = action.payload;
            state.error = null;
            state.isAuthReady = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAuth.pending, (state) => {
            state.isPending = true;
            state.error = null;
            state.isAuthReady = false;
        });
        builder.addCase(loginAuth.fulfilled, (state, action) => {
            state.isPending = false;
            state.user = action.payload;
            state.isAuthReady = true;
        });
        builder.addCase(loginAuth.rejected, (state, action) => {
            console.log(action.error.message);
            state.isPending = false;
            state.error = action.error.message;
            state.user = null;
            state.isAuthReady = true;
        });
    },
});

const logoutSlice = createSlice({
    name: "logout",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(logoutAuth.pending, (state) => {
            state.isPending = true;
            state.error = null;
            state.user = null;
        });
        builder.addCase(logoutAuth.fulfilled, (state, action) => {
            state.isPending = false;
            state.user = null;
        });
        builder.addCase(logoutAuth.rejected, (state, action) => {
            console.log(action.error.message);
            state.isPending = false;
            state.error = action.error.message;
            state.user = null;
        });
    },
});

// reducer
export const authReducer = authSlice.reducer;

// actions
export const { initialAuth } = authSlice.actions;

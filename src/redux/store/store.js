import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slice/authSlice";

// combined reducers
const rootReducer = combineReducers({
    auth: authReducer,
});

// store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

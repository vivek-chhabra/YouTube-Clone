import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slice/authSlice";
import { fetchVideosByCategory, videosByCategoryReducer, videosReducer } from "../slice/videoSlice";

// combined reducers
const rootReducer = combineReducers({
    auth: authReducer,
    videos: videosReducer,
    videosByCategory: videosByCategoryReducer,
});

// store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

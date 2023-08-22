import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import request from "../../API";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { store } from "../store/store";

// initial state
const initialState = {
    error: null,
    isPending: false,
    videos: {
        items: [],
        nextPageToken: "",
        keyword: "All",
    },
};

// createAsyncThunk (TO FETCH VIDEOS)
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const res = await request("/videos", {
        params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: "20",
            pageToken: "",
        },
    });
    // return {
    //     items: res.data.items,
    //     nextPageToken: res.data.nextPageToken,
    //     keyword: "all",
    // };
});


// createAsyncThunk (TO FETCH VIDEOS ON THE BASIS OF CATEGORIES)
export const fetchVideosByCategory = createAsyncThunk("videosByCategory/fetchVideosByCategory", async ({ keyword }, { getState }) => {
    console.log("keyword", keyword);
    const token = getState().videos.nextPageToken;
    console.log("token", token);
    const res = await request("/search", {
        params: {
            part: "snippet",
            maxResults: "20",
            pageToken: token,
            q: keyword,
            type: "video",
        },
    });
    return {
        items: res.data.items,
        nextPageToken: res.data.nextPageToken,
        keyword,
    };
});

// Video slice
const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.error = null;
            state.isPending = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.error = null;
            state.isPending = false;
            state.videos = action.payload;
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            console.log(action.error.message);
            state.error = action.error.message;
            state.isPending = false;
        });
    },
});

// videosByCategorySlice
const videosByCategorySlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideosByCategory.pending, (state, action) => {
            state.error = null;
            state.isPending = true;
        });
        builder.addCase(fetchVideosByCategory.fulfilled, (state, action) => {
            state.error = null;
            state.isPending = false;
            state.videos = action.payload;
        });
        builder.addCase(fetchVideosByCategory.rejected, (state, action) => {
            console.log(action.error.message);
            state.error = action.error.message;
            state.isPending = false;
        });
    },
});

// reducer
export const videosReducer = videosSlice.reducer;
export const videosByCategoryReducer = videosByCategorySlice.reducer;
import VideoDisplay from "../../components/VideoDisplay";
import React from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMsg } from "../../helpers";
import { useEffect } from "react";
import { fetchVideos } from "../../redux/slice/videoSlice";

export default function Home({ isSidebarActive }) {
    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos());
    }, []);

    // useSelector
    const state = useSelector((data) => data);
    const { error, isPending, videos } = state.videos;

    return (
        <div className={isSidebarActive ? "Home sidebar-active" : "Home"}>
            {state.videos.error && <ErrorMsg error={state.videos.error} />}
            {state.auth.error && <ErrorMsg error={state.auth.error} />}
            <div className="videos flex">{videos.items.length > 0 && videos.items.map((video) => <VideoDisplay video={video} key={crypto.randomUUID()} />)}</div>
        </div>
    );
}

import VideoDisplay from "../../components/VideoDisplay";
import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { ErrorMsg } from "../../helpers";

export default function Home({ isSidebarActive }) {
    const state = useSelector((data) => {
        return data;
    });
    const { error, isPending, user } = state;
    return (
        <div className={isSidebarActive ? "Home sidebar-active" : "Home"}>
            {error && <ErrorMsg error={error} />}
            <div className="videos flex">
                <VideoDisplay />
                <VideoDisplay />
                <VideoDisplay />
                <VideoDisplay />
            </div>
        </div>
    );
}

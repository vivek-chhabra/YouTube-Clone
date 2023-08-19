import React from "react";
import "./Home.scss";
import VideoDisplay from "../../components/VideoDisplay";

export default function Home({isSidebarActive}) {
    return (
        <div className={isSidebarActive ? 'Home sidebar-active' : 'Home'}>
            <div className="videos flex" >
                <VideoDisplay />
                <VideoDisplay />
                <VideoDisplay />
                <VideoDisplay />
            </div>
        </div>
    );
}

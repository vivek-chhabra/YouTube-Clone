import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

// icons
const home = <span class="material-symbols-outlined">home</span>;
const subscription = <span class="material-symbols-outlined">subscriptions</span>;
const liked = <span class="material-symbols-outlined">thumb_up</span>;
const history = <span class="material-symbols-outlined">history</span>;
const library = <span class="material-symbols-outlined">video_library</span>;
const logout = <span class="material-symbols-outlined">logout</span>;
const disliked = <span class="material-symbols-outlined">thumb_down</span>;

export default function Sidebar({isSidebarActive}) {
    return (
        <div className={isSidebarActive ? "Sidebar" : "Sidebar hide"}>
            <NavLink to={"/"} className="item" id="item-1">
                {home}
                Home
            </NavLink>
            <NavLink to={"/subscription"} className="item" id="item-2">
                {subscription}
                Subscription
            </NavLink>
            <div className="hr"></div>
            <NavLink to={"/liked"} className="item" id="item-3">
                {liked}
                Liked
            </NavLink>
            <NavLink to={"/history"} className="item" id="item-4">
                {history}
                History
            </NavLink>
            <NavLink to={"/library"} className="item" id="item-5">
                {library}
                Library
            </NavLink>
            <NavLink to={"/disliked"} className="item" id="item-6">
                {disliked}
                Disliked
            </NavLink>
            <NavLink to={"/logout"} className="item" id="item-7">
                {logout}
                Logout
            </NavLink>
        </div>
    );
}

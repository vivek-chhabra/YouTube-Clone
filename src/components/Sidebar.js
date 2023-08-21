import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { initialAuth, logoutAuth } from "../redux/slice/authSlice";
import { auth } from "../firebase/config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

// icons
const home = <span class="material-symbols-outlined">home</span>;
const subscription = <span class="material-symbols-outlined">subscriptions</span>;
const liked = <span class="material-symbols-outlined">thumb_up</span>;
const history = <span class="material-symbols-outlined">history</span>;
const library = <span class="material-symbols-outlined">video_library</span>;
const logout = <span class="material-symbols-outlined">logout</span>;
const disliked = <span class="material-symbols-outlined">thumb_down</span>;
const login = <span class="material-symbols-outlined">login</span>;

export default function Sidebar({ isSidebarActive }) {
    // dispatch
    const dispatch = useDispatch();

    // handle logout
    const handleLogout = () => {
        dispatch(logoutAuth());
        dispatch(initialAuth());
    };

    // selector
    const state = useSelector((data) => {
        return data;
    });
    const { error, isPending, user } = state.auth;

    // initial auth
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            dispatch(initialAuth(user));
        });

        return unSub();
    }, []);

    // to avoid serializableCheck error
    const customizedMiddleware = getDefaultMiddleware({
        serializableCheck: false,
    });

    return (
        <div className={isSidebarActive ? "Sidebar" : "Sidebar hide"}>
            <NavLink to={"/"} className="item" id="item-1">
                {home}
                <span className="link-text">Home</span>
            </NavLink>
            <NavLink to={"/subscription"} className="item" id="item-2">
                {subscription}
                <span className="link-text">Subscription</span>
            </NavLink>
            <div className="hr"></div>
            <NavLink to={"/liked"} className="item" id="item-3">
                {liked}
                <span className="link-text">Liked</span>
            </NavLink>
            <NavLink to={"/history"} className="item" id="item-4">
                {history}
                <span className="link-text">History</span>
            </NavLink>
            <NavLink to={"/library"} className="item" id="item-5">
                {library}
                <span className="link-text">Library</span>
            </NavLink>
            <NavLink to={"/disliked"} className="item" id="item-6">
                {disliked}
                <span className="link-text">Disliked</span>
            </NavLink>
            {!user && (
                <>
                    <div className="hr"></div>
                    <div className="nav-signin flex-column">
                        <p>Sign in to like videos, comment, and subscribe.</p>
                        <NavLink to={"/login"} className="sign-in">
                            <i class="fa-regular fa-user"></i> Sign in
                        </NavLink>
                    </div>
                    <div className="hr"></div>
                </>
            )}
            {user &&
                (isPending ? (
                    <div className="item" id="item-8">
                        {/* {logout} */}
                        <span className="link-text">Logging Out...</span>
                    </div>
                ) : (
                    <div onClick={handleLogout} className="item" id="item-8">
                        {logout}
                        <span className="link-text">Logout</span>
                    </div>
                ))}
        </div>
    );
}

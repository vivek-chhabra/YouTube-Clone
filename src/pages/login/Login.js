import { useLoginAuth } from "../../hooks/useLoginAuth";
import { loginAuth } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "./Login.scss";
import { ErrorMsg } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    // dispatch
    const dispatch = useDispatch();

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAuth());
    };

    const state = useSelector((data) => {
        return data;
    });
    const { error, isPending, user } = state.auth;

    // navigation
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <div className="Login flex-column">
            {error && <ErrorMsg error={error} />}
            <form action="" onSubmit={handleSubmit}>
                <img src={require("../../assets/logo2.png")} alt="" />
                {!isPending ? <button>Login with Google</button> : <div>Loading...</div>}
                <p>A YouTube Clone Project made with YouTube API</p>
            </form>
        </div>
    );
}

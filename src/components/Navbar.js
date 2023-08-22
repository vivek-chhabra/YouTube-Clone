import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import ListeningModal from "./ListeningModal";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
    // state
    const [isListening, setIsListening] = useState(false);
    const [microphoneClicked, setMicrophoneClicked] = useState(false);
    const [input, setInput] = useState("");

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    const { transcript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (!microphoneClicked) {
            setInput(transcript);
        }
    }, [microphoneClicked]);

    // selector
    const { user, error, isPending } = useSelector((data) => data.auth);
    // useEffect(() => {
    //     if(user) {

    //     }
    // }, [user])

    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return null;
    }

    // start listening
    const handleStart = () => {
        resetTranscript();
        setIsListening(true);
        startListening();
    };

    // stop listening
    const handleStop = () => {
        setIsListening(false);
        SpeechRecognition.stopListening();
    };

    // handleMicrophoneClicked
    const handleMicrophoneClicked = () => {
        setMicrophoneClicked(true);
        handleStart();
    };

    // handleRemoveModel
    const handleRemoveModal = () => {
        setMicrophoneClicked(false);
        handleStop();
    };

    return (
        <div className="Navbar flex">
            {microphoneClicked ? (
                <ListeningModal
                    isListening={isListening}
                    transcript={transcript}
                    setMicrophoneClicked={setMicrophoneClicked}
                    handleRemoveModal={handleRemoveModal}
                    setIsListening={setIsListening}
                    transcript={transcript}
                    handleStart={handleStart}
                    handleStop={handleStop}
                    handleRemoveModal={handleRemoveModal}
                />
            ) : (
                ""
            )}
            <div className="left">
                <span class="material-symbols-outlined" onClick={toggleSidebar}>
                    menu
                </span>
                <img src={require("../assets/logo.png")} height={"40px"} alt="" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control shadow-none" value={microphoneClicked ? transcript : input} onChange={(e) => setInput(e.target.value)} placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Search</span>
                </button>
                <div className="voice-search" onClick={handleMicrophoneClicked}>
                    <i class="fa-solid fa-microphone"></i>
                    <span>Search with your voice</span>
                </div>
            </div>
            <div className="right">
                {user ? (
                    <>
                        <span class="hover material-symbols-outlined">
                            apps
                            <span>Apps</span>
                        </span>
                        <i class="hover fa-regular fa-bell">
                            <div className="num">3</div>
                            <span>Notifications</span>
                        </i>
                        <div className="img">
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="" />
                            {/* <span>Notifications</span> */}
                        </div>
                    </>
                ) : (
                    <NavLink to={"/login"} className="sign-in">
                        <i class="fa-regular fa-user"></i> Sign in
                    </NavLink>
                )}
            </div>
        </div>
    );
}

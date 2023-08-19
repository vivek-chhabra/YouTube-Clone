import React from "react";
import "./ListeningModal.scss";
import { useToggle } from "../hooks/useToggle";
import { useEffect } from "react";
import { useState } from "react";

export default function ListeningModal({ handleMicrophoneClicked, setMicrophoneClicked, handleRemoveModal, handleStart, handleStop, isListening, setIsListening, transcript }) {
    // state
    const [state, toggle] = useToggle(false);
    const [transcriptClone, setTranscriptClone] = useState("");

    useEffect(() => {
        setTranscriptClone(transcript);
    });

    // toggle microphone
    const toggleMicrophone = () => {
        toggle();
        setIsListening(state);
    };

    useEffect(() => {
        if (isListening) {
            handleStart();
        } else {
            handleStop();
        }
    }, [isListening]);

    // remove model
    const removeModel = () => {
        handleRemoveModal();
        setTranscriptClone("");
    };

    return (
        <div className="ListeningModal">
            <div className="model flex-column">
                <div className="top flex">
                    {transcript ? <p>{transcriptClone}</p> : <h1>{isListening ? "Listening..." : "Microphone off. Try again. "}</h1>}
                    <i className="fa-solid fa-xmark" onClick={removeModel}></i>
                </div>
                <div className="bottom flex-column">
                    <i style={isListening ? { backgroundColor: "#CD0100" } : { backgroundColor: "#4c4c4c" }} onClick={toggleMicrophone} class="fa-solid fa-microphone">
                        <span className={isListening ? "listen" : ""} style={{ borderRadius: "50%" }}></span>
                    </i>
                    <p style={!isListening ? { opacity: "1" } : { opacity: "0" }}>Tap microphone to try again</p>
                </div>
            </div>
        </div>
    );
}

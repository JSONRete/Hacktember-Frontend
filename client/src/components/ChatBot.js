import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import TypeIt from 'typeit';
import axios from 'axios';

export default function ChatBot() {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecordingText, setIsRecordingText] = useState(false);
    const [audioBlob, setAudioBlob] = useState("");

    const handleStop = (blob) => {
        console.log(blob)
        // axios.post('/transcribe', "file", audioFile)

        // fetch('/transcribe', {
        //     method: "POST", 
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({audio: audioFile})
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // setAudioBlob(data)
        

    };

const handleBtnClick = () => {
    console.log("Record button toggle")
    setIsRecordingText(!isRecordingText);
}

// useEffect(() => {
//     // Initialize TypeIt
//     new TypeIt("#response-text", {
//         strings: "I'm your Python learning assistant! Type or speak any Python related questions.",
//         speed: 40,
//         waitUntilVisible: true,
//         cursorChar: "▊",
//     }).go();
// }, [])



    return (
        <div id="chat" style={{ display: "block" }}>
            <p>Chatbot goes here!</p>
            <div id="response-text"></div>
            <input
                    type="text"
                    id="transcription-box"
                    placeholder="Type your question"
                    className="border-solid rounded border-4 border-black max-w-lg"
                />
            <div>
                <ReactMediaRecorder
                    audio
                    onStop={handleStop}
                    render={({ status, startRecording, stopRecording }) => (
                        <div className="mt-2">
                            <button
                                onClick={handleBtnClick}
                                onMouseDown={startRecording}
                                onMouseUp={stopRecording}
                                className="bg-black text-lg p-4 rounded-full text-white"
                            >{isRecordingText ? "Stop" : "Record"}</button>
                            <p className="mt-2 font-bold text-lg">{status}</p>
                        </div>
                    )}
                />
            </div>
            <div>
                <p className="font-bold mt-2 text-md">Transcribed messages go here</p>
                {/* <audio src={audioBlob} controls /> */}
                <textarea className="border-solid border-4 border-black" onChange={handleStop} value={audioBlob}></textarea>
            </div>
        </div>
    );
}

// <div>
//     <input type="file" accept="audio/*" capture id="recorder" />
// </div>
// <div>
//     <audio ref={playerRef} autoPlay controls>
//     Your browser does not support the audio element.
//     </audio>
// </div>

// const playerRef = useRef(null);
// useEffect(() => {
//     const handleSuccess = function (stream) {
//       if (window.URL) {
//         playerRef.current.srcObject = stream;
//       } else {
//         playerRef.current.src = stream;
//       }
//     };

//     navigator.mediaDevices
//       .getUserMedia({ audio: true, video: false })
//       .then(handleSuccess)
//       .catch((error) => {
//         console.error('Error accessing microphone:', error);
//       });
//   }, []);

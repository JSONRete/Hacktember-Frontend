import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import TypeIt from 'typeit';
import axios from 'axios';

export default function ChatBot() {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecordingText, setIsRecordingText] = useState(false);
    const [audioBlob, setAudioBlob] = useState("");
    const [transcription, setTranscription] = useState("")
    const [aiResponse, setAiResponse] = useState("")

    const handleStop = (blobUrl, blob) => {
        // console.log(blob)
        const audiofile = new File([blob], "audiofile.wav", {
            type: "audio/wav",
        });
        setAudioBlob(audiofile)

    }

    const sendAudio = (audioBlob) => {
        // console.log(audioBlob)
        const formData = new FormData();
        formData.append("file", audioBlob);
        axios.post(
            "http://127.0.0.1:5555/transcribe",
            formData,
            {
                "content-type": "multipart/form-data",
            }
        )
            .then(res => {
                setTranscription(res.data.text) 
                    console.log(transcription)
            })
    }
    
    useEffect(() => {
        if (transcription !== '') {
          sendTranscript(transcription); // Send the updated transcription
        }
    }, [transcription]);

    console.log(transcription)
    
    const sendTranscript = (transcript) => {
        console.log(transcript)
        const text = {question: transcript}
        axios.post('http://127.0.0.1:5555/ask', text)
            .then((res) => {
                // Handle the response from the server here
                console.log('Server Response:', res.data);
                setAiResponse(res.data)
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
    }



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
                            >{isRecordingText ? "Stop" : "Recording"}</button>
                            {/* <p className="mt-2 font-bold text-lg">{status}</p> */}
                        </div>
                    )}
                />
            </div>
            <div>
                <button className="bg-black text-lg p-4 rounded-full text-white" onClick={() => sendAudio(audioBlob)}>Send Recording</button>
                {/* <p className="font-bold mt-2 text-md">Transcribed messages go here</p> */}
                <p className="border-solid border-4 border-black">{aiResponse.text}</p>
            </div>
                <div>
                    <audio src={aiResponse.audio} controls />
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

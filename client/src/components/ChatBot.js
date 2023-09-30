import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import TypeIt from 'typeit';
import axios from 'axios';

export default function ChatBot() {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecordingText, setIsRecordingText] = useState(false);
    const [transcription, setTranscription] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [userQuestion, setUserQuestion] = useState('')

    const handleStop = (blobUrl, blob) => {
        const audiofile = new File([blob], "audiofile.wav", {
            type: "audio/wav",
        });
        const formData = new FormData();
        formData.append("file", audiofile);
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
            console.log(transcription)
        }
    }, [transcription]);


    const sendTranscript = (transcript) => {
        console.log(transcript)
        const question = { question: transcript }
        axios.post(
            'http://127.0.0.1:5555/ask',
            question
        )
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the user's question to the /ask endpoint
        sendTranscript(userQuestion);
        // Optionally, you can clear the input field after submission
        setUserQuestion('');
    };

    const handleBtnClick = () => {
        console.log("Record button toggle")
        setIsRecordingText(!isRecordingText);
    }

    return (
        <div id="chat" style={{ display: "block" }}>
            <p>Chatbot goes here!</p>
            <div id="response-text"></div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="transcription-box"
                    placeholder="Type your question"
                    className="border-solid rounded border-4 border-black max-w-lg"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                />
                <button className="border-solid rounded border-4 border-black max-w-lg" type="submit">Submit</button>
            </form>
            <div>
                <ReactMediaRecorder
                    audio
                    onStop={handleStop}
                    render={({ status, startRecording, stopRecording }) => (
                        <div className="mt-2">
                            {isRecordingText === false ?
                                <button
                                    onClick={handleBtnClick}
                                    onMouseDown={startRecording}
                                    className="bg-green-500 text-lg p-4 rounded-full text-white"
                                >{isRecordingText ? "Stop" : "Recording"}</button> :
                                <button
                                    onClick={handleBtnClick}
                                    onMouseUp={stopRecording}
                                    className="bg-red-700 text-lg p-4 rounded-full text-white"
                                >{isRecordingText ? "Stop" : "Recording"}</button>
                            }
                        </div>
                    )}
                />
            </div>
            <div>
                <p className="border-solid border-4 border-black">{aiResponse.text}</p>
            </div>
            <div>
                <audio src={aiResponse.audio} controls />
            </div>
        </div>
    );
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
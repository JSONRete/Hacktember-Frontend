import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

import axios from 'axios';

export default function ChatBot() {
    // const [isLoading, setIsLoading] = useState(false);
    const [isRecordingText, setIsRecordingText] = useState(false);
    const [transcription, setTranscription] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [userTextQuestion, setUserTextQuestion] = useState('')
    const [conversation, setConversation] = useState([]);

    // const createBlobUrl = (aiData) => {
    //     const blob = new Blob([aiData])
    //     const url = window.URL.createObjectURL(blob)
    //     return url
    // }

    // is triggered from recorder which takes in audio blob, converts it to audio file
    // sets up data as form that's sent to openai API
    // response set as new transcription state
    const handleStop = (blobUrl, blob) => {

        const audiofile = new File([blob], "audiofile.wav", {
            type: "audio/wav",
        });
        const formData = new FormData();
        formData.append("file", audiofile);
        axios.post(
            "http://127.0.0.1:5555/transcribe", formData, {
            headers: { "content-type": "multipart/form-data" },
        })
            .then(res => {
                // handles state of transcription whenever a new one is created
                setTranscription((prevTranscription) => {
                const newTranscription = res.data.text
                return newTranscription
                })
            })
    }

    const updateConversation = (message) => {
        console.log("who's responding in updateConversation: ", message)
        console.log("state of conversation: ", conversation)
        setConversation((preConversation) => [...preConversation, message])
    }

    // checks state of transcription is updated before sending it to sendTranscript func
    // and updateConversation func
    useEffect(() => {
        if (transcription !== '') {
            const userMessage = { role: "user", content: transcription }
            updateConversation(userMessage)
            sendTranscript(transcription); // Send the updated transcription
        }
    }, [transcription]);

    // takes in state of transcription and sends to elevenlab api
    // returns the AI response as object that includes audio and text  
    const sendTranscript = async (transcript) => {
        console.log(transcript)
        const question = { question: transcript }
        await axios.post(
            'http://127.0.0.1:5555/ask',
            question
        )
            .then((res) => {
            // Handle the response from the server here
                console.log('Server Response:', res.data);
                setAiResponse((prevAiResponse) => {
                    const newAiResponse = res.data
                    const botObj = { role: "bot", content: newAiResponse.text }
                    updateConversation(botObj)
                    return newAiResponse
                })

                // const audio = new Audio()
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
    }

    // handles taking in the text question from user and sends to api
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the user's question to the /ask endpoint
        sendTranscript(userTextQuestion);
        //converts userTextQuestion from input into object and sends to updateConversation func
        const userTextObj = { role: "user", content: userTextQuestion }
        updateConversation(userTextObj)
        // Clear the input field after submission
        setUserTextQuestion('');
    };

    // Handles text toggle on record btn
    const handleBtnClick = () => {
        console.log("Record button toggle")
        setIsRecordingText(!isRecordingText);
    }

    return (
        <div id="chat" className="p-6 bg-white min-h-screen">
            <div id="messages" className="space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {conversation.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'bot' ? 'justify-start' : 'justify-end'} items-end`}>
                        <div className={`flex flex-col space-y-2 text-md leading-tight max-w-lg ${message.role === 'bot' ? 'order-2 items-start' : 'order-3 items-end'}`}>
                            <div>
                                <span className={`px-4 py-3 rounded-xl inline-block ${message.role === 'bot' ? 'bg-gray-100 text-gray-600 rounded-bl-none' : 'bg-blue-500 text-white rounded-br-none'}`}>
                                    {message.content}
                                </span>
                            </div>
                        </div>
                        {message.role === 'user' && (
                            <img src="https://cdn.icon-icons.com/icons2/933/PNG/512/round-account-button-with-user-inside_icon-icons.com_72596.png"
                                alt="null"
                                className='w-6 h-6 ml-1 rounded-full order-last'
                            />
                        )}
                        {message.role === 'bot' && (
                            <img src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                                alt="null"
                                className="w-6 h-6 rounded-full order-1" />
                        )}
                    </div>
                ))}
                <div className="flex items-end" x-show="botTyping" style={{ display: 'none' }}>
                    <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                        <div><img src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif" alt="..." className="w-16 ml-6" /></div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <div className="relative flex">
                    <input
                        type="text"
                        placeholder="Ask any python question..."
                        autoComplete="off"
                        autoFocus={true}
                        value={userTextQuestion}
                        onChange={(e) => setUserTextQuestion(e.target.value)}
                        className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 rounded-full py-2"
                    />
                    <div className="absolute right-2 items-center inset-y-0 hidden sm:flex">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-200 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                            onClick={handleSubmit}
                        >
                            <i className="mdi mdi-arrow-right text-xl leading-none"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div className="mt-2">
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
                                >{isRecordingText ? "Stop" : "Record"}</button> :
                                <button
                                    onClick={handleBtnClick}
                                    onMouseUp={stopRecording}
                                    className="bg-red-700 text-lg p-4 rounded-full text-white"
                                >{isRecordingText ? "Stop" : "Record"}</button>
                            }
                        </div>
                    )}
                />
            </div>
            <div>
            </div>
        </div>

        // <div id="chat" style={{ display: "block" }}>
        //     <p>Chatbot goes here!</p>
        //     <div id="response-text"></div>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             id="transcription-box"
        //             placeholder="Type your question"
        //             className="border-solid rounded border-4 border-black max-w-lg"
        //             value={userQuestion}
        //             onChange={(e) => setUserQuestion(e.target.value)}
        //         />
        //         <button className="border-solid rounded border-4 border-black max-w-lg" type="submit">Submit</button>
        //     </form>
        //     <div>
        //         <ReactMediaRecorder
        //             audio
        //             onStop={handleStop}
        //             render={({ status, startRecording, stopRecording }) => (
        //                 <div className="mt-2">
        //                     {isRecordingText === false ?
        //                         <button
        //                             onClick={handleBtnClick}
        //                             onMouseDown={startRecording}
        //                             className="bg-green-500 text-lg p-4 rounded-full text-white"
        //                         >{isRecordingText ? "Stop" : "Recording"}</button> :
        //                         <button
        //                             onClick={handleBtnClick}
        //                             onMouseUp={stopRecording}
        //                             className="bg-red-700 text-lg p-4 rounded-full text-white"
        //                         >{isRecordingText ? "Stop" : "Recording"}</button>
        //                     }
        //                 </div>
        //             )}
        //         />
        //     </div>
        //     <div>
        //         <p className="border-solid border-4 border-black">{aiResponse.text}</p>
        //     </div>
        //     <div>
        //         <audio src={aiResponse.audio} controls />
        //     </div>
        // </div>
    );
}

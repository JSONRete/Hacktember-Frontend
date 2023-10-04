import React, { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { HiOutlineMicrophone } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";
import axios from 'axios';

export default function ChatBot() {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecordingText, setIsRecordingText] = useState(false);
    const [transcription, setTranscription] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [userTextQuestion, setUserTextQuestion] = useState('')
    const [conversation, setConversation] = useState([{ role: 'bot', content: "Hi, I'm your friendly AI assistant. Click on the microphone or type any Python questions." }]);


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
        setIsLoading(true)
        console.log(isLoading)
        const question = { question: transcript }
        await axios.post(
            'http://127.0.0.1:5555/ask',
            question
        )
            .then((res) => {
                // Handle the response from the server here
                console.log('Server Response:', res.data);
                const newAiResponse = res.data
                const botObj = { role: "bot", content: newAiResponse.text }
                updateConversation(botObj)
                setAiResponse(newAiResponse.audio)
                setIsLoading(false)

            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
                setIsLoading(false)
            });
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:5555/${aiResponse}`).then(res => console.log(res))
    }, [aiResponse])

    console.log(aiResponse)
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
        <div id="chat" className="p-6 bg-white h-8 bg-local">
            <div id="messages" className="space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {conversation.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'bot' ? 'justify-start' : 'justify-end'} items-end`}>
                        <div className={`flex flex-col space-y-2 text-md leading-tight max-w-lg ${message.role === 'bot' ? 'order-2 items-start' : 'order-3 items-end'}`}>
                            <div>
                                <span className={`px-4 py-3 rounded-xl inline-block ${message.role === 'bot' ? 'bg-gray-100 text-gray-600 rounded-bl-none mx-width-md' : 'bg-blue-500 text-white rounded-br-none'}`}>
                                    {message.content}
                                    {message.role === 'bot' && message.content !== "Hi, I'm your friendly AI assistant. Click on the microphone or type any Python questions." ? <audio src={aiResponse} className="appearance-none" controls /> : null}
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
                {isLoading && (
                    <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                        <div><img src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif" alt="..." className="w-16 ml-6" /></div>
                    </div>
                )}
            </div>
            <div id="buttons-container">
                <div className="">
                    <div id='record-button'>
                        <ReactMediaRecorder
                            audio
                            onStop={handleStop}
                            render={({ status, startRecording, stopRecording }) => (
                                <div className="mt-2">
                                    {isRecordingText === false && status !== 'recording' ?
                                        <button onClick={handleBtnClick} onMouseDown={startRecording}>
                                            <HiOutlineMicrophone className="text-sky-500 w-6 h-6" />
                                        </button>
                                        :
                                        <button onClick={handleBtnClick} onMouseUp={stopRecording}>
                                            <HiOutlineMicrophone className="animate-pulse text-red-500 w-6 h-6" />
                                        </button>
                                    }
                                </div>
                            )}
                        />
                    </div>
                    <form onSubmit={handleSubmit} className="border-t-2 border-gray-200 px-4 pt-4 mb-4 sm:mb-0">
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
                                    <VscSend className="mdi mdi-arrow-right text-xl leading-none" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

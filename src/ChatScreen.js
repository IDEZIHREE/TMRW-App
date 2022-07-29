import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./ChatScreen.css";

function ChatScreen () {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState ([
        {
            name: "Elon",
            image: "https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
            message: "Lemme take you to mars"
        },
        {
            name: "Elon",
            image: "https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
            message: "Why you leaving me on read"
        },
        {
            message: "Hey"
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp"> 
            YOU MATCHED WITH ELON ON 07/29/2022
            </p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                            />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            )}
                <form className="chatScreen_input">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen_inputField"
                        placeholder="Type a message..." 
                        type="text"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>
            </div>   
    );
};

export default ChatScreen;

///background-color#121212
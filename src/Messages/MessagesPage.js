import React, { useState } from "react";
import "./MessagesPage.css";
import "../Footer.css";
import { Link } from "react-router-dom";
//ICONS
import { IconButton } from "@mui/material";
import { RiMoonFill } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
function MessagesPage () {
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
            <img className="message_image" src="https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt="message-pic" />
            <p className="chatScreen_timestamp">
            YOU MATCHED WITH ELON ON 7/29
            </p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen_message">
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
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">Send</button>
                </form>
                <Footer />
            </div>   
    );
};

function Footer() {

    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
    }
    const handleClick1 = () => {
        setIsActive1(true);
        setIsActive(false);
        setIsActive2(false);
        setIsActive3(false);
    }
    const handleClick2 = () => {
        setIsActive2(true);
        setIsActive1(false);
        setIsActive(false);
        setIsActive3(false);
    }
    const handleClick3 = () => {
        setIsActive3(true);
        setIsActive1(false);
        setIsActive(false);
        setIsActive2(false);
    }

    return (
        <div className="footer">
            <IconButton>
            <Link to="/">
                <RiMoonFill
                    style={{
                        color: isActive ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick} 
                    fontSize="150%" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/premium">
                <BsHeartFill
                    style={{
                        color: isActive1 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick1} 
                    fontSize="150%" />
            </Link >
            </IconButton>
            <IconButton>
            <Link to="/chat">
                <TiMessages
                    style={{
                        color: isActive2 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick2} 
                    fontSize="150%" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/profile">
                <BsFillPersonFill
                     style={{
                        color: isActive3 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick3} 
                    fontSize="150%" />
            </Link>
            </IconButton>
        </div>
    )
}

export default MessagesPage;


///photo on top not every line
import { React, useState } from "react";
import "./ChatPreview.css";
import Chat from "./Chat";
import Header from "../Header";
import "../Footer.css";
import { Link } from "react-router-dom";
//Icons
import { IconButton } from "@mui/material";
import { RiMoonFill } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
function ChatPreview () {
    return (
        <div>
            <Header />
            <div className="chats">
                <Chat
                    name="Elon"
                    message="Lemme show u mars"
                    timestamp="40 seconds ago"
                    profilePic="https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                />
                <Chat
                    name="Jake"
                    message="thought you looked cute wanna date?"
                    timestamp="1 hour ago"
                    profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFRnAOS7lqcTQ/profile-displayphoto-shrink_200_200/0/1638564696511?e=1659571200&v=beta&t=XhNDChX1TfUxjwpVPrFHPFTdr7Dywl8uMrKdopJ-5PU"
                />
            </div>
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

export default ChatPreview;
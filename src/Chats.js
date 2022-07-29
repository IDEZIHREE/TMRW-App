import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats () {
    return (
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

    );
};

export default Chats;
import { React, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from './Header';
import "./Footer.css";
import "./Popup";
import "./Popup.css";
import { IconButton } from "@mui/material";
//Icons
import { RiMoonFill } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";



function Profile ({ profilePic, name, age }) {
    return (
        <div className="profile">
          <Header />
            <div className="profilepic-background">
                <div className="picture">
                <img className="profile_picture" src={profilePic} alt="profile-pic" />
                </div>
            </div>
            <div className="profile_info">
                <h2>{name}, {age}</h2>
            </div>
            <div className="button_group">
                <Link to="settings">
                    <button>Settings</button>
                </Link>
                <Link to="editprofile">
                    <button>EditProfile</button>
                </Link>
                <Link to="contactus">
                    <button>Contact</button>
                </Link>
            </div>
            <div className="log_out">
            <Link to ="/signin">
                <button>Log out</button>
            </Link>
            </div>
            <button className="button delete-button">Delete my account</button>
                <dialog className="modal" id="modal">
                <div className="modal-header">
                    <div className="title">Delete your Account</div>
                    <button className="button close-button">&times;</button>
                </div>   
                <div className="modal-body"> 
                    <p>You will have to sign in within 30 days to keep your account or it will be lost. Are you sure you wish to delete your account?</p>
                </div>
            <Link to="/signin">
            <button className="button end-account"> Yes delete my account </button>
            </Link>
                </dialog>
        <Footer />
        </div>
    );
};

//Link delete button to sign in page
function ProfileInformations () {
    return (
        <div className="profile_extras">
            <Profile
                name="Elon"
                age="45"
                profilePic="https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
            />
        </div>
    )
};

function Footer() {

    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(true);

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
            </Link>
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



export default ProfileInformations;
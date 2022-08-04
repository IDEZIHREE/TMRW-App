import { React, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Header from './Header';
import "./Footer.css";
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Profile ({ profilePic, name, age }) {
    return (
        <div className="profile">
          <Header />
            <img className="profile_picture" src={profilePic} />
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
                    <button>Contact</button>
            </div>
            <div className="log_out">
                <button>Log out</button>
            </div>
            <div className="delete">
                <button>Delete my accout</button>
            </div>
        <Footer />
        </div>
    );
};

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
                <NightlightRoundedIcon 
                    style={{
                        color: isActive ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick} 
                    fontSize="large" />
            </Link>
            </IconButton>
            <IconButton>
                <FavoriteIcon 
                    style={{
                        color: isActive1 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick1} 
                    fontSize="large" />
            </IconButton>
            <IconButton>
            <Link to="/chat">
                <QuestionAnswerRoundedIcon 
                    style={{
                        color: isActive2 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick2} 
                    fontSize="large" />
            </Link>
            </IconButton>
            <IconButton>
            <Link to="/profile">
                <PersonIcon 
                     style={{
                        color: isActive3 ? '#FF5349' : '',
                    }}
                    className="titleIcon"
                    onClick={handleClick3} 
                    fontSize="large" />
            </Link>
            </IconButton>
        </div>
    )
}


export default ProfileInformations;
import { React, useState } from "react";
import "./Premium.css";
import Header from './Header';
import "./Footer";
import { Link } from "react-router-dom";
//Icons
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Premium () {
    return (
        <div>
            <Header />
            <h1 className="temp-title">TMRW Plus coming Soon</h1>





            <Footer />
        </div>
    )
};


function Footer() {

    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
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

export default Premium;
import React from "react";
import "./Footer.css";
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <Link to="/">
            <IconButton>
                <NightlightRoundedIcon className="titleIcon" fontSize="large" />
            </IconButton>
            </Link>
            <IconButton>
                <FavoriteIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            <Link to="/chat">
            <IconButton>
                <QuestionAnswerRoundedIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            </Link>
            <Link to="profile">
            <IconButton>
                <PersonIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Footer;
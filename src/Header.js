import React from "react";
import "./Header.css";
import tmrwLogo from './logos/tmrwLogo.png'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import { IconButton } from "@mui/material";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            <img className = "titleLogo" src= {tmrwLogo} alt = "TMRW Logo"/>
            <IconButton>
                <QuestionAnswerRoundedIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
        </div>
    )
}

export default Header
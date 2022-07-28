import React from "react";
import "./Footer.css";
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {

    return (
        <div className="footer">
            <IconButton>
                <NightlightRoundedIcon className="titleIcon" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            <IconButton>
                <QuestionAnswerRoundedIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
            <IconButton>
                <PersonIcon className = "titleIcon" fontSize = "large" />
            </IconButton>
        </div>
    )
}

export default Footer
import React from 'react';
import "./SwipeButtons.css";
//Icons
import { IconButton } from "@mui/material";
import { MdOutlineReplay } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <MdOutlineReplay fontSize="150%" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <BsHeartFill fontSize="150%" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;

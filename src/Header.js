import React from "react";
import { IconButton } from "@mui/material";
import "./Header.css";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

function Header() {

    return (
        <div className="header">
            <h1 className="Title">tmrw</h1>
            <IconButton>
                <FilterListRoundedIcon className="HeaderIcon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header;
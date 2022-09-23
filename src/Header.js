import React from "react";
import { IconButton } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

function Header() {

    return (
       <div>
            <div className="header">
            <div>
                <FilterListRoundedIcon className="FakeHeaderIcon" fontSize="large" />
            </div>
                <h1 className="Title">tmrw</h1>
                <IconButton>
                <Link to="/filters">
                    <FilterListRoundedIcon className="HeaderIcon" fontSize="large" />
                </Link>
                </IconButton>
            </div>
        </div> 
    )
}

export default Header;
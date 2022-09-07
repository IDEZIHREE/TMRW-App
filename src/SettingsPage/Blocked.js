import React from "react";
import "./Blocked.css"
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";

function Blocked () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile/settings" >
                    <NavigateBeforeIcon className="navigate-back" fontSize="large"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Blocked Contacts
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
        </div>
    )
};


    
export default Blocked;
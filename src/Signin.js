import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";

function Signin () {
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
                Email
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
        </div>
    )
};

export default Signin;
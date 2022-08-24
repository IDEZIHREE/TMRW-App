import React from "react";
import "./Religion.css";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Icons
import ChurchIcon from '@mui/icons-material/Church';

function Religion () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile/editprofile" >
                    <NavigateBeforeIcon className="navigate-back" fontSize="large"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Religion
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
            <form action="/action_page.php">
                <div className="email_page">
                    <div className="email_info">
                        <label for="work"><ChurchIcon fontSize="large" /></label>
                            <input type="text" placeholder="Enter your Religion" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Religion;
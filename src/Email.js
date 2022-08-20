import React from "react";
import "./Email.css"
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Button Icons
import EmailIcon from '@mui/icons-material/Email';

function Email () {
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
            <form action="/action_page.php">
                <div className="container">
                    <div className="email-info">
                        <label for="work"><EmailIcon /></label>
                            <input type="text" placeholder="Enter your Email" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};




export default Email;
import React from "react";
import "./Phonenumber.css"
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Button Icons
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Phonenumber () {
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
                Phone Number
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
            <form action="/action_page.php">
                <div className="phonenumber_page">
                    <div className="phonenumber_info">
                        <label for="work"><PhoneIphoneIcon fontSize="large"/></label>
                            <input type="text" placeholder="Enter your Phone Number" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};




export default Phonenumber;
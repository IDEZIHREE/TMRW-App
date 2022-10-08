import React from "react";
import "./Phonenumber.css"
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";
//Button Icons
import { GiVibratingSmartphone } from "react-icons/gi";

function Phonenumber () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile/settings" >
                    <IoIosArrowBack className="navigate-back" fontSize="115%"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Phone Number
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
            <form action="/action_page.php">
                <div className="phonenumber_page">
                    <div className="phonenumber_info">
                        <label for="work"><GiVibratingSmartphone fontSize="150%"/></label>
                            <input type="text" placeholder="Enter your Phone Number" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};




export default Phonenumber;
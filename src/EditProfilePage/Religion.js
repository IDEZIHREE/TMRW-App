import React from "react";
import "./Religion.css";
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
//Icons
import { IconButton } from "@mui/material";
import { GiChurch } from "react-icons/gi";

function Religion () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile/editprofile" >
                    <IoIosArrowBack className="navigate-back" fontSize="115%"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Religion
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
            <form action="/action_page.php">
                <div className="email_page">
                    <div className="email_info">
                        <label for="work"><GiChurch fontSize="150%" /></label>
                            <input type="text" placeholder="Enter your Religion" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Religion;
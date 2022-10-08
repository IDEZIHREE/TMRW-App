import React from "react";
import "./Email.css"
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";
//Button Icons
import { MdOutlineMailOutline } from "react-icons/md";

function Email () {
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
                Email
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
            <form action="/action_page.php">
                <div className="email_page">
                    <div className="email_info">
                        <label for="work"><MdOutlineMailOutline fontSize="150%" /></label>
                            <input type="text" placeholder="Enter your Email" name="pDetail" id="work" required>
                            </input>   
                    </div>
                </div>
            </form>
        </div>
    )
};




export default Email;
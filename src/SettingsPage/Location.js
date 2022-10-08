import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";

function Location () {
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
                Location
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
        </div>
    )
};


    
export default Location;
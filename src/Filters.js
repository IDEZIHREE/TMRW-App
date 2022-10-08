import React from "react";
import "./Filters.css";
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";

function Filters () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/" >
                    <IoIosArrowBack className="navigate-back" fontSize="115%"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Filters
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
            <div>
                <h1 className="temp-filter">Filters Page Coming Soon</h1>
            </div>
        </div>
    )
};

export default Filters;
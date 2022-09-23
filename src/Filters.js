import React from "react";
import "./Filters.css";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";

function Filters () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/" >
                    <NavigateBeforeIcon className="navigate-back" fontSize="large"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Filters
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
            <div>
                <h1 className="temp-filter">Filters Page Coming Soon</h1>
            </div>
        </div>
    )
};

export default Filters;
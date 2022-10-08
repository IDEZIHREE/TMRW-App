import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//Icons
import { IconButton } from "@mui/material";
import { MdFilterList } from "react-icons/md";

function Header() {

    return (
       <div>
            <div className="header">
            <div>
                <MdFilterList className="FakeHeaderIcon" fontSize="150%" />
            </div>
                <h1 className="Title">tmrw</h1>
                <IconButton>
                <Link to="/filters">
                    <MdFilterList className="HeaderIcon" fontSize="150%" />
                </Link>
                </IconButton>
            </div>
        </div> 
    )
}

export default Header;
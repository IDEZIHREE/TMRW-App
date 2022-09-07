import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";

function Contact () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile" >
                    <NavigateBeforeIcon className="navigate-back" fontSize="large"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Contact Us
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
            <div className="contact-email">
                <h1 className="email-us">Email Us</h1>
                <h3 className="email-words">tmrwapp@gmail.com</h3>
            </div>
            <div className="contact-other">
                <h1 className="contact-us">Other Ways of Contacting Us</h1>
                <div className="contact-categories">
                    <h3>Twitter</h3>
                    <br></br>
                    <h3>Instagram</h3>
                </div>
            </div>
        </div>
    )
};

export default Contact;
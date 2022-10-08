import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";

function Contact () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
                <IconButton>
                <Link to="/profile" >
                    <IoIosArrowBack className="navigate-back" fontSize="115%"/>
                </Link>
                </IconButton>
            </div>
            <span className="header_span">
                Contact Us
            </span>
            <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
            </div>
            </div>
            <div className="contact-email">
                <h1 className="email-us">Email Us</h1>
                <h3 className="email-words">tmrwapp@gmail.com</h3>
            </div>
            <div className="contact-other">
                <h1 className="contact-us">Other Ways of Contacting Us</h1>
                <div className="contact-categories">
                    <h3>Twitter:</h3>
                    <br></br>
                    <h3>Instagram:</h3>
                    <br></br>
                    <h3>Facebook:</h3>
                    <br></br>
                    <h3>Go online to wwww.----------.com to view our frequenetly asked questions</h3>
                </div>
            </div>
        </div>
    )
};

export default Contact;
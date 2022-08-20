import React from "react";
import "./Settings.css";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Button Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Settings () {
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
                Settings
              </span>
              <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
              </div>
            </div>
            <div>
                <form action="/action_page.php">
                    <div className="container">
                      <div className="account-settings">
                        <label for="Account Settigs"><b>Account Information</b></label>
                      </div>
                      <Link to="email">
                        <button className="button open-button">Email <NavigateNextIcon /></button>
                      </Link>
                      <Link to="PhoneNumberPage">
                        <button className="button open-button">Phone Number <NavigateNextIcon /></button>
                      </Link>
                      <div className="account-settings-info">
                        <label for="Account Settigs Info"><b>By verifing a phone number and email it helps protect your account against possible threats.</b></label>
                      </div>
                    <br></br>
                    <br></br>
                      <div className="Location">
                        <label for="Location"><b>Location</b></label>
                      </div>
                        <button className="button open-button">Location <NavigateNextIcon /></button>
                        <button className="button open-button">Location Range <NavigateNextIcon /></button>
                    <br></br>
                    <br></br>
                      <div className="Preferences">
                        <label for="Preferences"><b>Preferences</b></label>
                      </div>
                        <button className="button open-button">Looking For <NavigateNextIcon /></button>
                        <button className="button open-button">Age Range <NavigateNextIcon /></button>
                        <button className="button open-button">Languages <NavigateNextIcon /></button>
                      <div className="preferences-info">
                        <label for="Preferences Info"><b>Add you preferences to find people that fit your liking.</b></label>
                      </div>
                    <br></br> 
                      <div className="Extra Settings">
                        <label for="Extra Settings"><b>Extra Settings</b></label>
                      </div>
                        <button className="button open-button">Read Receipts <NavigateNextIcon /></button> 
                        <button className="button open-button">Blocked Contacts <NavigateNextIcon /></button> 
                        <button className="button open-button">Languages <NavigateNextIcon /></button> 
                        <button className="button open-button">Languages <NavigateNextIcon /></button> 
                    <br></br> 
                      <div className="Legal">
                        <label for="Legal"><b>Legal</b></label>
                      </div>
                        <button className="button open-button">Terms of Service <NavigateNextIcon /></button> 
                        <button className="button open-button">License <NavigateNextIcon /></button> 
                        <button className="button open-button">Privacy Policy <NavigateNextIcon /></button> 
                        <button className="button open-button">Cookies <NavigateNextIcon /></button> 
                    <br></br> 
                      <div className="Contact">
                        <label for="Contact"><b>Contact Us</b></label>
                      </div>
                        <button className="button open-button">Contact Us <NavigateNextIcon /></button> 
                    </div>
                </form>
            </div>





        </div>
    )
};

export default Settings;
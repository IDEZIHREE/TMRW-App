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
                        <label for="Account Settigs"><h4 className="container_titles">Account Information</h4></label>
                      </div>
                      <Link to="email">
                        <button className="button open-button">Email <NavigateNextIcon /></button>
                      </Link>
                      <Link to="Phonenumber">
                        <button className="button open-button">Phone Number <NavigateNextIcon /></button>
                      </Link>
                      <div className="account-settings-info">
                        <label for="Account Settigs Info"><b>By verifing a phone number and email it helps protect your account against possible threats.</b></label>
                      </div>
                    <br></br>
                    <br></br>
                      <div className="Location">
                        <label for="Location"><h4 className="container_titles">Location</h4></label>
                      </div>
                        <button className="button open-button">Location <NavigateNextIcon /></button>
                        <button className="button open-button">Location Range <NavigateNextIcon /></button>
                    <br></br>
                    <br></br>
                      <div className="Preferences">
                        <label for="Preferences"><h4 className="container_titles">Preferences</h4></label>
                      </div>
                        <div className="lookingfor-dropdown">
                          <details className="custom-select">
                            <summary className="options">
                              <input type="radio" name="Gender" id="Looking For" title="Looking For" checked />
                              <input type="radio" name="gen" id="Male" title="Male" />
                              <input type="radio" name="gen" id="Female" title="Female" />
                            </summary>
                            <ul className="list">
                              <li>
                                <label for="Male">
                                  Male
                                  <span></span>
                                </label>
                              </li>
                              <li>
                                <label for="Female">Female</label>
                              </li>
                            </ul>
                          </details>
                        </div>
                        <button className="button open-button">Age Range <NavigateNextIcon /></button>
                        <button className="button open-button">Languages <NavigateNextIcon /></button>
                      <div className="preferences-info">
                        <label for="Preferences Info"><b>Add you preferences to find people that fit your liking.</b></label>
                      </div>
                    <br></br> 
                      <div className="Extra-settings">
                        <label for="Extra Settings"><h4 className="container_titles">Extra Settings</h4></label>
                      </div>
                        <button className="button open-button">Read Receipts <NavigateNextIcon /></button> 
                        <button className="button open-button">Blocked Contacts <NavigateNextIcon /></button> 
                        <button className="button open-button">Languages <NavigateNextIcon /></button> 
                        <button className="button open-button">Languages <NavigateNextIcon /></button> 
                    <br></br> 
                      <div className="Legal">
                        <label for="Legal"><h4 className="container_titles">Legal</h4></label>
                      </div>
                        <button className="button open-button">Terms of Service <NavigateNextIcon /></button> 
                        <button className="button open-button">License <NavigateNextIcon /></button> 
                        <button className="button open-button">Privacy Policy <NavigateNextIcon /></button> 
                        <button className="button open-button">Cookies <NavigateNextIcon /></button> 
                    <br></br> 
                      <div className="Contact">
                        <label for="Contact"><h4 className="container_titles">Contact Us</h4></label>
                      </div>
                        <button className="button open-button">Contact Us <NavigateNextIcon /></button> 
                    </div>
                </form>
            </div>
        </div>
    )
};


///CSS for "Looking for" in Editprofile.css



export default Settings;
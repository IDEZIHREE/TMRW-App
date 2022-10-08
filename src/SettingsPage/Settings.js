import "./Settings.css";
import { Link } from "react-router-dom";
import React from "react";
//Header Icons
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";
//Button Icons
import { MdNavigateNext } from "react-icons/md";

function Settings () {



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
                Settings
              </span>
              <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
              </div>
            </div>
            <div>
                <form action="/action_page.php">
                    <div className="container">
                      <div className="account-settings">
                        <label for="Account Settigs"><h4 className="container_titles">Account Information</h4></label>
                      </div>
                      <Link to="email">
                        <button className="button open-button">Email <MdNavigateNext className="next-arrow" /></button>
                      </Link>
                      <Link to="Phonenumber">
                        <button className="button open-button">Phone Number <MdNavigateNext className="next-arrow" /></button>
                      </Link>
                      <div className="account-settings-info">
                        <label for="Account Settigs Info"><b>By verifing a phone number and email it helps protect your account against possible threats.</b></label>
                      </div>
                    <br></br>
                    <br></br>
                      <div className="Location">
                        <label for="Location Section"><h4 className="container_titles">Location</h4></label>
                      </div>
                      <Link to="location">
                        <button className="button open-button">Location <MdNavigateNext className="next-arrow" /></button>
                      </Link>
                      <div className="slider-body">
                        <div className="wrapper">
                          <header>
                            <h2 className="age-range-slider">Age Range</h2>
                          </header>
                          <div className="price-input">
                            <div className="field">
                              <span>Min</span>
                              <input type="number" className="input-min" value="2500" />
                            </div>
                            <div className="seperator"> - </div>
                            <div className="field">
                              <span>Max</span>
                              <input type="number" className="input-max" value="7500" />
                            </div>  
                          </div>
                          <div className="slider">
                            <div className="progress"></div>
                          </div>
                          <div className="range-input">
                            <input type="range" className="range-min" min="0" max="10000" value="2500" steps="100" />
                            <input type="range" className="range-max" min="0" max="10000" value="7500" steps="100"/>
                          </div>
                        </div>
                      </div>
                 
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
                        <button className="button open-button">Age Range <MdNavigateNext className="next-arrow" /></button>
                 
                        <button className="button open-button">Languages <MdNavigateNext className="next-arrow" /></button>
                      <div className="preferences-info">
                        <label for="Preferences Info"><b>Add you preferences to find people that fit your liking.</b></label>
                      </div>
                    <br></br> 
                      <div className="Extra-settings">
                        <label for="Extra Settings"><h4 className="container_titles">Extra Settings</h4></label>
                      </div>
                      <div className="read-receipt">Read Receipt 
                        <label className="toggle">
                            <input className="toggle-checkbox" type="checkbox" />
                            <div className="toggle-switch"></div>
                          </label>
                      </div>
                      <Link to="blocked">
                        <button className="button open-button">Blocked Contacts <MdNavigateNext className="next-arrow" /></button> 
                      </Link>
                      <div className="Light-Mode">Light Mode On/Off
                        <label className="toggle">
                            <input className="toggle-checkbox" type="checkbox" />
                            <div className="toggle-switch"></div>
                          </label>
                      </div> 
                        <button className="button open-button">Languages <MdNavigateNext className="next-arrow" /></button> 
                    <br></br> 
                      <div className="Legal">
                        <label for="Legal"><h4 className="container_titles">Legal</h4></label>
                      </div>
                      <Link to="TermsOfService">
                        <button className="button open-button">Terms of Service <MdNavigateNext className="next-arrow" /></button> 
                      </Link>
                      <Link to="License">
                        <button className="button open-button">License <MdNavigateNext className="next-arrow" /></button>
                      </Link>
                      <Link to="PrivacyPolicy">
                        <button className="button open-button">Privacy Policy <MdNavigateNext className="next-arrow" /></button>
                      </Link>
                      <Link to="Cookies">
                        <button className="button open-button">Cookies <MdNavigateNext className="next-arrow" /></button> 
                      </Link>
                    <br></br> 
                    
                      <div className="Contact">
                        <label for="Contact"><h4 className="container_titles">Contact Us</h4></label>
                      </div>
                        <button className="button open-button">Contact Us <MdNavigateNext className="next-arrow" /></button> 
                    </div>
                </form>
            </div>
        </div>
    )
};


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInput.forEach(input =>{
  input.addEventListener("input", e =>{
    //getting two inputs value and parsing them to number
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if((maxVal- minVal >= priceGap) && maxVal <= 10000){
        if(e.target.className === "input-min"){ //if active input is min input
          rangeInput[0].value = minVal;
          progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        }else{
          priceInput[1].value = maxVal;
          progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
     }
  });
});

rangeInput.forEach(input =>{
  input.addEventListener("input", e =>{
    //getting two ranges value and parsing them to number
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if(maxVal- minVal < priceGap){
        if(e.target.className === "range-min"){ //if active slider is min slider
          rangeInput[0].value = maxVal - priceGap;
      }else{
          rangeInput[1].value = minVal + priceGap;
      }
    }else{
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

    }
  });
});

///CSS for "Looking for" in Editprofile.css

///figure out why read receipt isnt centered
// onChange={(e) => setValue(e.target.value)}
export default Settings;
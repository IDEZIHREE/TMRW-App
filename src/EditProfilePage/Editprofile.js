import React from "react";
import "./Editprofile.css"
import "../Popup";
import "../Popup.css";
import { Link } from "react-router-dom";
//import db from "../firebase";
//Header Icon
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";
//Icons
import { AiFillTags } from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import { RiSuitcaseFill } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { CgGym } from "react-icons/cg";
import { ImFire } from "react-icons/im";
import { MdAccessibilityNew } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { MdSmokingRooms } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { GiStarSwirl } from "react-icons/gi";
import { GiChurch } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { MdStroller } from "react-icons/md";
import { GiGavel } from "react-icons/gi";
import { GiAirplaneDeparture } from "react-icons/gi";
//Buttons


function Editprofile () {
   
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
                Edit Profile
              </span>
              <div>
                <IoIosArrowBack className="fake-back" fontSize="115%"/>
              </div>
            </div>
            <div>
            
                    <div className="container">
                        <div className="personal_details">
                          <label for="About Me"><h4 className="container_titles">My bio</h4></label>
                        </div>
                        <div className="about_me_bio">
                          <input className="about_me_input" type="text" placeholder="Write a fun introduction about yourself" name="about" id="about me" >
                          </input>
                        </div>
                        <div className="personal_details">
                          <label for="Personal Details"><h4 className="container_titles">Personal Details</h4></label>
                        </div>
                        <div className="about_me_q">
                          <label for="Hometown"><GiModernCity className="pedetails-logos"/></label>
                            <input type="text" placeholder="Enter Hometown" name="pDetail" id="Hometown" >
                            </input> 
                        </div>
                        <div className="about_me_q">
                          <label for="work"><RiSuitcaseFill className="pedetails-logos"/></label>
                            <input type="text" placeholder="Where do you work" name="pDetail" id="work" >
                            </input>   
                        </div>
                        <div className="about_me_q">
                          <label for="education"><HiAcademicCap className="pedetails-logos"/></label>
                            <input type="text" placeholder="where do you go to school?" name="pDetail" id="education" >
                            </input>   
                        </div>
                    </div>
         
                <h1 className="Tags">Tags <AiFillTags /></h1>
                <br></br>
                <br></br>
                <div>
                  <div className="tags-info">
                    <label for="Tags Info"><b>By adding tags to your account you can show others your interests at a glance.</b></label>
                  </div>
                </div>
                <br></br>
                <br></br>
                <h1 className="extra-about-me">Extra About Me</h1>
                <div className="Exercise-dropdown">
                    <details className="custom-select">
                      <summary className="options"><CgGym className="extrapage-logos" />
                        <input type="radio" name="Exercise" id="Exercise" title="Exercise" checked />
                        <input type="radio" name="Workout" id="Gym Rat" title="Gym Rat" />
                        <input type="radio" name="Workout" id="3-4 times a week" title="3-4 times a week" />
                        <input type="radio" name="Workout" id="1-2 times a week" title="1-2 times a week" />
                        <input type="radio" name="Workout" id="Never" title="Never" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Gym Rat">
                            Gym Rat
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="3-4 times a week">3-4 times a week</label>
                        </li>
                        <li>
                          <label for="1-2 times a week">1-2 times a week</label>
                        </li>
                        <li>
                          <label for="Never">Never</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="gender-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <MdAccessibilityNew className="extrapage-logos" checked/>
                        <input type="radio" name="Gender" id="Gender" title="Gender" />
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
                  <div className="sexual-orientation-dropdown">
                    <details className="custom-select">
                      <summary className="radios"><ImFire className="extrapage-logos" />
                        <input type="radio" name="Sexual Orientation" id="Sexual Orientation" title="Sexual Orientation" />
                        <input type="radio" name="sexualO" id="Straight" title="Straight" />
                        <input type="radio" name="sexualO" id="Gay" title="Gay" />
                        <input type="radio" name="sexualO" id="Bisexual" title="Bisexual" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Straight">
                            Straight
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Gay">Gay</label>
                        </li>
                        <li>
                          <label for="Bisexual">Bisexual</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div>
                  <Link to="height">
                      <button className="height-button"><GiBodyHeight className="extrapage-logos" />Height </button>
                  </Link>
                  </div>
                  <div className="smoking-dropdown">
                    <details className="custom-select">
                      <summary className="options"><MdSmokingRooms  className="extrapage-logos"/>
                        <input type="radio" name="Smoking" id="Smoking" title="Smoking" />
                        <input type="radio" name="smoke" id="Chain Smoker" title="Chain Smoker" />
                        <input type="radio" name="smoke" id="A couple times a week" title="A couple times a week" />
                        <input type="radio" name="smoke" id="On special occasions" title="On special occasions" />
                        <input type="radio" name="smoke" id="Socially" title="Socially" />
                        <input type="radio" name="smoke" id="I dont smoke" title="I dont smoke" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Chain Smoker">
                            Chain Smoker
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="A couple times a week">A couple times a week</label>
                        </li>
                        <li>
                          <label for="Socially">Socially</label>
                        </li>
                        <li>
                          <label for="On special occasions">On special occasions</label>
                        </li>
                        <li>
                          <label for="I dont smoke">I dont smoke</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="Drinking-dropdown">
                    <details className="custom-select">
                      <summary className="options"><BiDrink className="extrapage-logos"/>
                        <input type="radio" name="Drinking" id="Drinking" title="Drinking"  />
                        <input type="radio" name="drink" id="Binge Drinker" title="Binge Drinker" />
                        <input type="radio" name="drink" id="A few times a week" title="A few times a week" />
                        <input type="radio" name="drink" id="Mostly weekends" title="Mostly weekends" />
                        <input type="radio" name="drink" id="Social drinker" title="Social drinker" />
                        <input type="radio" name="drink" id="I dont drink" title="I dont drink" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Binge Drinker">
                          Binge Drinker
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="A few times a week">A couple times a week</label>
                        </li>
                        <li>
                          <label for="Mostly weekends">I drink on the weekend with friends</label>
                        </li>
                        <li>
                          <label for="Social drinker">Socially here and there</label>
                        </li>
                        <li>
                          <label for="I dont drink">I Dont Drink</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="zodiac-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <GiStarSwirl className="extrapage-logos"/>
                        <input type="radio" name="Zodiac Sign" id="Zodiac Sign" title="Zodiac Sign"/>
                        <input type="radio" name="Zodiac" id="Aries" title="Aries" />
                        <input type="radio" name="Zodiac" id="Taurus" title="Taurus" />
                        <input type="radio" name="Zodiac" id="Gemini" title="Gemini" />
                        <input type="radio" name="Zodiac" id="Cancer" title="Cancer" />
                        <input type="radio" name="Zodiac" id="Leo" title="Leo" />
                        <input type="radio" name="Zodiac" id="Virgo" title="Virgo" />
                        <input type="radio" name="Zodiac" id="Libra" title="Libra" />
                        <input type="radio" name="Zodiac" id="Scorpius" title="Scorpius" />
                        <input type="radio" name="Zodiac" id="Sagittarius" title="Sagittarius" />
                        <input type="radio" name="Zodiac" id="Capricornus" title="Capricornus" />
                        <input type="radio" name="Zodiac" id="Aquarius" title="Aquarius" />
                        <input type="radio" name="Zodiac" id="Pisces" title="Pisces" />

                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Aries">
                            Aries
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Taurus">Taurus</label>
                        </li>
                        <li>
                          <label for="Gemini">Gemini</label>
                        </li>
                        <li>
                          <label for="Cancer">Cancer</label>
                        </li>
                        <li>
                          <label for="Leo">Leo</label>
                        </li>
                        <li>
                          <label for="Virgo">Virgo</label>
                        </li>
                        <li>
                          <label for="Libra">Libra</label>
                        </li>
                        <li>
                          <label for="Scorpius">Scorpius</label>
                        </li>
                        <li>
                          <label for="Sagittarius">Sagittarius</label>
                        </li>
                        <li>
                          <label for="Capricornus">Capricornus</label>
                        </li>
                        <li>
                          <label for="Aquarius">Aquarius</label>
                        </li>
                        <li>
                          <label for="Pisces">Pisces</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div>
                    <input type="radio" name="religion" id="rel" title="" />
                    <Link to="religion">
                        <button className="religion-button"><GiChurch className="extrapage-logos" />Religion </button>
                       
                    </Link>
                  </div>
                  <div className="Pets-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <MdPets className="extrapage-logos"/>
                        <input type="radio" name="Pets" id="Pets" title="Pets" />
                        <input type="radio" name="Pet" id="Animal Lover" title="Animal Lover" />
                        <input type="radio" name="Pet" id="Dog Person" title="Dog Person" />
                        <input type="radio" name="Pet" id="Cat Person" title="Cat Person" />
                        <input type="radio" name="Pet" id="People Person" title="People Person" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Animal Lover">
                          Animal Lover
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Dog Person">Dog Person</label>
                        </li>
                        <li>
                          <label for="Cat Person">Cat Person</label>
                        </li>
                        <li>
                          <label for="People Person">People Person</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="Kids-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <MdStroller className="extrapage-logos"/>
                        <input type="radio" name="Kids" id="Kids" title="Kids" />
                        <input type="radio" name="Kid" id="I Want Kids" title="I Want Kids" />
                        <input type="radio" name="Kid" id="Not Even Thinking About It" title="Not Even Thinking About It" />
                        <input type="radio" name="Kid" id="I Have Kids" title="I Have Kids" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="I Want Kids">
                          I Want Kids
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Not Even Thinking About It">Not Even Thinking About It</label>
                        </li>
                        <li>
                          <label for="I Have Kids">I Have Kids</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="Political-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <GiGavel className="extrapage-logos"/>
                        <input type="radio" name="Political Views" id="Political Views" title="Political Views" />
                        <input type="radio" name="Politics" id="Republican" title="Republican" />
                        <input type="radio" name="Politics" id="Democratic" title="Democratic" />
                        <input type="radio" name="Politics" id="No Opinion" title="No Opinion" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Republican">
                            Republican
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Democratic">Democratic</label>
                        </li>
                        <li>
                          <label for="No Opinion">No Opinion</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="Travel-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <GiAirplaneDeparture className="extrapage-logos"/>
                        <input type="radio" name="Travel" id="Travel" title="Travel"  />
                        <input type="radio" name="Trav" id="As Much as Possible" title="As Much as Possible" />
                        <input type="radio" name="Trav" id="When I Get The Chance" title="When I Get The Chance" />
                        <input type="radio" name="Trav" id="Once I Get Money" title="Once I Get Money" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="As Much as Possible">
                          As Much as Possible
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="When I Get The Chance">When I Get The Chance</label>
                        </li>
                        <li>
                          <label for="Once I Get Money">Once I Get Money</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="extra-about-me-info">
                    <label for="Extra About Me Info"><b>By including more information in the extra about me section you show your matches some of your interests and beliefs.</b></label>
                  </div>
                  <br></br>
            </div>
        </div>
    )
};

export default Editprofile;


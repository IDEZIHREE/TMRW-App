import React from "react";
import "./Editprofile.css"
import "./Popup";
import "./Popup.css";
import { Link } from "react-router-dom";
//Header Icon
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Icons
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';
//Buttons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function Editprofile () {
    
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
                Edit Profile
              </span>
              <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
              </div>
            </div>
            <div>
                <form action="/action_page.php">
                    <div class="container">
                        <div className="personal_details">
                          <label for="About Me"><h4 className="container_titles">My bio</h4></label>
                        </div>
                        <div className="about_me_bio">
                          <input className="about_me_input" type="text" placeholder="Write a fun introduction about yourself" name="about" id="about me" required>
                          </input>
                        </div>
                        <div className="personal_details">
                          <label for="Personal Details"><h4 className="container_titles">Personal Details</h4></label>
                        </div>
                        <div className="about_me_q">
                          <label for="Hometown"><HouseIcon /></label>
                            <input type="text" placeholder="Enter Hometown" name="pDetail" id="Hometown" required>
                            </input> 
                        </div>
                        <div className="about_me_q">
                          <label for="work"><WorkIcon /></label>
                            <input type="text" placeholder="Where do you work" name="pDetail" id="work" required>
                            </input>   
                        </div>
                        <div className="about_me_q">
                          <label for="education"><SchoolIcon /></label>
                            <input type="text" placeholder="where do you go to school?" name="pDetail" id="education" required>
                            </input>   
                        </div>
                    </div>
                </form>
                <h1 className="extra-about-me">Extra About Me</h1>
                <div>
                      <button className="button open-button">Exercise <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">How often do you exercise?</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body"> 
                              <button> Everyday </button>
                              <button> a few times a week</button>
                              <button> Never</button>   
                        </div>
                      </dialog>
                  </div>
                  <div className="gender-dropdown">
                    <details className="custom-select">
                      <summary className="options">
                        <input type="radio" name="Gender" id="Gender" title="Gender" checked />
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
                      <summary className="radios">
                        <input type="radio" name="Sexual Orientation" id="Sexual Orientation" title="Sexual Orientation" checked />
                        <input type="radio" name="sexualO" id="Straight" title="Straight" />
                        <input type="radio" name="sexualO" id="Gay" title="Gay" />
                        <input type="radio" name="sexualO" id="LGBTQA+" title="LGBTQA+" />
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
                          <label for="LGBTQA+">LGBTQA+</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div>
                      <button className="button open-button">Height <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Height</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How tall are you?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div className="smoking-dropdown">
                    <details className="custom-select">
                      <summary className="options">
                        <input type="radio" name="Smoking" id="Smoking" title="Smoking" checked />
                        <input type="radio" name="smoke" id="Everyday" title="Everyday" />
                        <input type="radio" name="smoke" id="A couple Times a Week" title="A couple Times a Week" />
                        <input type="radio" name="smoke" id="Ocassionally" title="Ocassionally" />
                        <input type="radio" name="smoke" id="Socially" title="Socially" />
                        <input type="radio" name="smoke" id="Never" title="Never" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Everyday">
                            Everyday
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="A couple Times a Week">A couple times a Week</label>
                        </li>
                        <li>
                          <label for="Ocassionally">Occasionaly</label>
                        </li>
                        <li>
                          <label for="Socially">Socially</label>
                        </li>
                        <li>
                          <label for="Never">Never</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="Drinking-dropdown">
                    <details className="custom-select">
                      <summary className="options">
                        <input type="radio" name="Drinking" id="Drinking" title="Drinking" checked />
                        <input type="radio" name="drink" id="Daily" title="Daily" />
                        <input type="radio" name="drink" id="Few" title="Few" />
                        <input type="radio" name="drink" id="Mostly Weekends" title="Mostly Weekends" />
                        <input type="radio" name="drink" id="Social Drinker" title="Social Drinker" />
                        <input type="radio" name="drink" id="Never" title="Never" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="Daily">
                           Daily
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="Few">A couple times a Week</label>
                        </li>
                        <li>
                          <label for="Mostly Weekends">I drink on the Weekend With Friends</label>
                        </li>
                        <li>
                          <label for="Social Drinker">Socially Here and There</label>
                        </li>
                        <li>
                          <label for="Never">Never</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div>
                      <button className="button open-button">Zodiac Sign <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Zodiac Sign</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>What is your zodiac sign?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Religion <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Religion</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>What is your religion?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Pets<NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Pets</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>Do you have any pets?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Kids <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Kids</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>Do you have any kids?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Political Views <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Political Views</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>What are your political views</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Loooking for <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Looking for</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>Looking for male/female?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Travel <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Travel</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How often do you travel? (rarely, asmuch as possible, homebody)</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Travel <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Travel</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How often do you travel? (rarely, asmuch as possible, homebody)</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Travel <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Travel</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How often do you travel? (rarely, asmuch as possible, homebody)</h2>
                        </div>
                      </dialog>
                  </div>
            </div>
        </div>
    )
};

export default Editprofile;

///above about me add gender hometown ethnicity
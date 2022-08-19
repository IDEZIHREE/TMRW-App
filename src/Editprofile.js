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
                EditProfile
              </span>
              <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
              </div>
            </div>
            <div>
                <form action="/action_page.php">
                    <div class="container">
                        <div className="personal_details">
                          <label for="About Me"><b>My bio</b></label>
                        </div>
                        <div className="about_me_bio">
                          <input className="about_me_input" type="text" placeholder="Write a fun introduction about yourself" name="about" id="about me" required>
                          </input>
                        </div>
                        <div className="personal_details">
                          <label for="Personal Details"><b>Personal Details</b></label>
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
                        <h1>Extra About Me</h1>
                    </div>
                </form>
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
                      <summary className="radios">
                        <input type="radio" name="item" id="default" title="Gender" checked />
                        <input type="radio" name="item" id="item1" title="Straight" />
                        <input type="radio" name="item" id="item2" title="Gay" />
                        <input type="radio" name="item" id="item3" title="Pansexual" />
                        <input type="radio" name="item" id="item4" title="Item 4" />
                        <input type="radio" name="item" id="item5" title="Item 5" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="item1">
                            Male
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="item2">Female</label>
                        </li>
                      </ul>
                    </details>
                  </div>
                  <div className="sexual-orientation-dropdown">
                    <details className="custom-select">
                      <summary className="radios">
                        <input type="radio" name="item" id="default" title="Sexual Orientation" checked />
                        <input type="radio" name="item" id="item1" title="Straight" />
                        <input type="radio" name="item" id="item2" title="Gay" />
                        <input type="radio" name="item" id="item3" title="Pansexual" />
                        <input type="radio" name="item" id="item4" title="Item 4" />
                        <input type="radio" name="item" id="item5" title="Item 5" />
                      </summary>
                      <ul className="list">
                        <li>
                          <label for="item1">
                            Straight
                            <span></span>
                          </label>
                        </li>
                        <li>
                          <label for="item2">Gay</label>
                        </li>
                        <li>
                          <label for="item3">Pansexual</label>
                        </li>
                        <li>
                          <label for="item4">Item 4</label>
                        </li>
                        <li>
                          <label for="item5">Item 5</label>
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
                  <div>
                      <button className="button open-button">Smoking <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Smoking</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How often do you smoke?</h2>
                        </div>
                      </dialog>
                  </div>
                  <div>
                      <button className="button open-button">Drinking <NavigateNextIcon /></button>
                      <dialog className="modal" id="modal">
                        <div className="modal-header">
                          <div className="title">Drinking</div>
                            <button className="button close-button">&times;</button>
                        </div>   
                        <div className="modal-body">        
                            <h2>How often do you drink?</h2>
                        </div>
                      </dialog>
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
import React from "react";
import "./Editprofile.css"
import "./Popup.js";
import { useState } from "react";
import Popup from "./Popup.js";
//Icons
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';

function Editprofile () {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className="editprofileheader">
                <h1>EditProfile</h1>
            </div>
            <div>
                <form action="/action_page.php">
                    <div class="container">
                        <h1>About Me</h1>
                        <p>Please fill in this form to create an account</p>
                        
                        <label for="About Me"><b>About Me</b></label>
                        <input type="text" placeholder="Tell us about yourself..." name="about" id="about me" required>
                        </input>

                        <label for="Hometown"><HouseIcon /><b>Hometown</b></label>
                        <input type="text" placeholder="Enter Hometown" name="Hometown" id="Hometown" required>
                        </input> 

                        <label for="work"><WorkIcon /><b>Work</b></label>
                        <input type="text" placeholder="Where do you work" name="work" id="work" required>
                        </input>   
                        
                        <label for="education"><SchoolIcon /><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        <label for="education"><b>Education</b></label>
                        <input type="text" placeholder="where do you go to school?" name="education" id="education" required>
                        </input>   
                        
                        <h1>Extra About Me</h1>
                        <p>Give us the deets...... gender, sexual orientation, height, exercise, smoking drinking zodiac, religion, pets, kids, looking for?, politics</p>
                    </div>
                </form>
                <div>
                    <input
                        className="exercise"
                        type="button"
                        value="Exercise"
                        onClick={togglePopup}
                    />
                    {isOpen && <Popup
                        content={<>
                            <b>Design your Popup</b>
                            <p>Lorem ipsum dolor sit amet</p>
                            <button>Test button</button>
                    </>}
                    handleClose={togglePopup}
                    />}
                </div>
            </div>
        </div>
    )
};

export default Editprofile;

///above about me add gender hometown ethnicity
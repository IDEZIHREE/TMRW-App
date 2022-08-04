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
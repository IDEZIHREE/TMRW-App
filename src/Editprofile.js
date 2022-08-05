import React from "react";
import "./Editprofile.css"
import "./Popup";
import "./Popup.css";
//Icons
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';

const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
  button.addEventListener("click:", () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener("click", () => {
  const modal = document.querySelectorAll(".modal.active")
  modal.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener("click:", () => {
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add("active")
  overlay.classList.add ("active")
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}


function Editprofile () {
    
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
                        <div>
                            <button data-modal-target="#modal">Open Modal</button>
                                <div className="modal" id="modal">
                                    <div className="modal_header">
                                        <div className="title">Example Modal</div>
                                        <button data-close-button classname="close_button">&times;</button>
                                    </div>
                                    <div className="modal_body">
                                    Lorem ipsum dolor sit amet consectetur adi
                                    </div>
                                </div>  
                        </div>
                        <div id="overlay"></div>
                </div>
            </div>
        </div>
    )
};

export default Editprofile;

///above about me add gender hometown ethnicity
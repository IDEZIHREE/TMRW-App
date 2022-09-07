import React from "react";
import "./Editprofile.css"
import "../Popup";
import "../Popup.css";
import { Link } from "react-router-dom";
//Header Icon
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";
//Icons
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HeightIcon from '@mui/icons-material/Height';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import LiquorIcon from '@mui/icons-material/Liquor';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChurchIcon from '@mui/icons-material/Church';
import PetsIcon from '@mui/icons-material/Pets';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import GavelIcon from '@mui/icons-material/Gavel';
import FlightIcon from '@mui/icons-material/Flight';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
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
                <h1 className="Tags">Tags <LocalOfferIcon /></h1>
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
                      <summary className="options"><FitnessCenterIcon className="extrapage-logos"/>
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
                      <summary className="options"> <EmojiPeopleIcon className="extrapage-logos"/>
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
                      <summary className="radios"><WhatshotIcon className="extrapage-logos" />
                        <input type="radio" name="Sexual Orientation" id="Sexual Orientation" title="Sexual Orientation" checked />
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
                      <button className="height-button"><HeightIcon className="extrapage-logos" />Height </button>
                  </Link>
                  </div>
                  <div className="smoking-dropdown">
                    <details className="custom-select">
                      <summary className="options"><SmokingRoomsIcon className="extrapage-logos"/>
                        <input type="radio" name="Smoking" id="Smoking" title="Smoking" checked />
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
                      <summary className="options"><LiquorIcon className="extrapage-logos"/>
                        <input type="radio" name="Drinking" id="Drinking" title="Drinking" checked />
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
                      <summary className="options"> <AutoAwesomeIcon className="extrapage-logos"/>
                        <input type="radio" name="Zodiac Sign" id="Zodiac Sign" title="Zodiac Sign" checked />
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
                    <input type="radio" name="religion" id="rel" title="" checked />
                    <Link to="religion">
                        <button className="religion-button"><ChurchIcon className="extrapage-logos" />Religion </button>
                       
                    </Link>
                  </div>
                  <div className="Pets-dropdown">
                    <details className="custom-select">
                      <summary className="options"> <PetsIcon className="extrapage-logos"/>
                        <input type="radio" name="Pets" id="Pets" title="Pets" checked />
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
                      <summary className="options"> <ChildFriendlyIcon className="extrapage-logos"/>
                        <input type="radio" name="Kids" id="Kids" title="Kids" checked />
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
                      <summary className="options"> <GavelIcon className="extrapage-logos"/>
                        <input type="radio" name="Political Views" id="Political Views" title="Political Views" checked />
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
                      <summary className="options"> <FlightIcon className="extrapage-logos"/>
                        <input type="radio" name="Travel" id="Travel" title="Travel" checked />
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

///male female other for gender
///straigt gay bi other for sexal orientation
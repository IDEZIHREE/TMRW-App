import React from "react";
import "./Settings";
import { Link } from "react-router-dom";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from "@mui/material";


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

                    </div>

                </form>
             
            </div>





        </div>
    )
};

export default Settings;
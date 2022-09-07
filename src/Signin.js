import React from "react";
import "./Signin.css";
//Header Icons
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


function Signin () {
    return (
        <div>
            <div className="header_style">
            <div className="header_img">
            </div>
            <span className="header_span">
                Sign In
            </span>
            <div>
                <NavigateBeforeIcon className="fake-back" fontSize="large"/>
            </div>
            </div>
        </div>
    )
};

export default Signin;
import React from "react";
import "./SigninGender.css";

function SigninGender () {
    return (
        <div>
            <div className="progress-gender">
                <div className="progress-valuegender"></div>
            </div>
            <div>
                <h1 className="myGender">I Am A</h1>
                <button className="myGender-option">Male</button>
                <button className="myGender-option">Female</button>
            </div>
            <div>
                <h1 className="lookingforGender">I Am Looking For</h1>
                <button className="lookingfor-option">Males</button>
                <button className="lookingfor-option">Females</button>
                <h5 className="lookingfor-info">The answer selected will be what is show on the tmrw swipe card page</h5>
            </div>
            <div>
                <button className="continue-button-gender">Continue</button>
            </div>
        </div>
    )
};

export default SigninGender;
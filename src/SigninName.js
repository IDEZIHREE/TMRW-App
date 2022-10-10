import React from "react";
import "./SigninName.css";

function SigninName () {
    return (
        <div>
            <div className="progress-name">
                <div className="progress-valuename"></div>
            </div>
            <h1 className="myName">My Name Is</h1>
            <div className="signup-name">
                <input type="text" placeholder="Name" name="signupname" id="Name" ></input>
                <h5 className="name-info">Your first name will be displayed on your tmrw page</h5>
            </div>
            <div>
                <button className="continue-button-name">Continue</button>
            </div>
        </div>
    );
};

export default SigninName;
import React from "react";
import "./SigninEmailPassword.css";

function SigninEmailPassword () {
    return (
        <div>
            <div className="progress-EmailPassword">
                <div className="progress-value-EmailPassword"></div>
            </div>
            <h1 className="myEmail">My Email Is</h1>
            <div className="signup-email">
                <input type="text" placeholder="Email" name="signupEmail" id="Email" ></input>
                <h5 className="email-info">This will be used to recover your account if needed</h5>
            </div>
            <h1 className="myPassword">My Password Is</h1>
            <div className="signup-password">
                <input type="text" placeholder="Password" name="signuppassword" id="password" ></input>
                <h5 className="password-info">Making a secure password helps protect your account the most</h5>
            </div>
            <div>
                <button className="continue-button-emailpassword">Continue</button>
            </div>
        </div>
    )
};

export default SigninEmailPassword;
import React from "react";
import "./SigninDOB.css";


function SigninDOB () {
    return (
        <div>
            <div className="progress-DOB">
                <div className="progress-valueDOB"></div>
            </div>
            <h1 className="myDOB">My Date of Birth Is</h1>
            <div>
                <h5 className="DOB-info">This will be used to display your age on your profile </h5>
            </div>
            <div>
                <button className="continue-button-dob">Continue</button>
            </div>
        </div>
    );
};

export default SigninDOB;
//scroll wheel above info
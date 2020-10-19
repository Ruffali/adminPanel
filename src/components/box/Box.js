import React from "react";
import "./Box.scss";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Box = () => {
    return (
        <div className="box">
            <div className="one_box">
                <div className="left_box"><CastForEducationIcon /></div>
                <div className="right_box">Learn online <br /> at a flexible pace</div>
            </div>
            <div className="one_box">
                <div className="left_box"><DeviceHubIcon /></div>
                <div className="right_box">Work with expert mentors <br />and build your portfolio</div>
            </div>
            <div className="one_box">
                <div className="left_box"><VerifiedUserIcon /></div>
                <div className="right_box">Land a job in tech<br />backed by our president</div>
            </div>
        </div>
    )
}

export default Box
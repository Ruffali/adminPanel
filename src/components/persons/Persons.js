import React from "react";
import "./Persons.scss";
import man from "../assets/img/man01.png";

const Persons = () => {
    return (
        <div className="persons">
            <div className="header">View our all teachers</div>
            <div className="person_box">
                <div className="each">
                    <div className="each_img"><img src={man} /></div>
                    <span className="name">Fazil</span>
                </div>
            </div>
        </div>
    )
}

export default Persons
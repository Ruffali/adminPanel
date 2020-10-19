import React from "react";
import "./TopSide.scss";
import background from "../assets/img/teacher.png";

const TopSide = () => {
    return (
        <div className="top_side">
            <div className="left_side">
                <h1>You are a great teacher !!!</h1>
                <h2>What links two large furry Loch Ness Monsters, key-cards, and donning a gown to eat pot noodles? </h2>
            </div>
            <div className="right_side">
                <img src={background} />
            </div>
        </div>
    )
}

export default TopSide
import React from 'react';
import "./Teacher.scss";
import { connect } from "react-redux"
import { addClass } from "../../redux/index";

const Teacher = ({ numOfClasses, addClass }) => {
    return (
        <div className='teacher'>
            <div className='top'>
                <span className='top_span'>Part</span>
                Teacher
                <span className='bottom_span'>Side</span>
            </div>
            {/* Classes: {numOfClasses}
            <button onClick={addClass}>Add Class</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfClasses: state.numOfClasses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addClass: () => dispatch(addClass())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);

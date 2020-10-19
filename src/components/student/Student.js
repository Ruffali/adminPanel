import React from 'react';
import "./Stundet.scss";
import { connect } from "react-redux";
import { addBook } from "../../redux/index";

const Student = ({ numofBooks, addBook }) => {
    return (
        <div className='student'>
            <div className='top'>
                <span className='top_span'>Part</span>
                Studnet
                <span className='bottom_span'>Side</span>
            </div>
            {/* Books: {numofBooks}
            <button onClick={addBook}>Add Book</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numofBooks: state.numofBooks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: () => dispatch(addBook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
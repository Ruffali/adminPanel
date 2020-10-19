import React, { useEffect } from "react";
import TopSide from "../topSide/TopSide";
import { connect } from "react-redux";
import Box from "../box/Box";
import Persons from "../persons/Persons";
import { addBook } from "../../redux/index";

const AllTeachers = ({numofBooks, addBook}) => {
    return (
        <div>
            <TopSide />
            <Box />
            <Persons />
            Books: {numofBooks}
            <button onClick={addBook}>Add Book</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllTeachers);
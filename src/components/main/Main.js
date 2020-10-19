import React from 'react';
import "./Main.scss";
import { Link } from "react-router-dom";
import Background from "./img/backgorund.png";
import Teacher from "../teacher/Teacher";
import Student from "../student/Student";
import { Provider } from 'react-redux';
import storeTeacher from "../../redux/storeTeacher";
import storeStudent from "../../redux/storeStudent";
import AllTeachers from '../allTeachers/AllTeachers';
import Book from '../books/Book';

const Main = () => {
  return (
    <div className="main">
      <Provider store={storeTeacher}>
        <Link className="left_link" to='/allTeachers'>
          <Teacher />
        </Link>
      </Provider>
      <Provider store={storeStudent}>
        <Link className="right_link" to='/book'>
          <Student />
        </Link>
      </Provider>
      <img className='back' src={Background} />
    </div>
  );
}

export default Main;

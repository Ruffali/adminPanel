import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Book from './components/books/Book';
import AllTeachers from './components/allTeachers/AllTeachers';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/book" exact component={Book} />
      <Route path="/allTeachers" exact component={AllTeachers} />
      {/* <Route path="/:id" exact component={OnePost} /> */}
    </Switch>
    // <div className="app">
    //   <Main />  
    // </div>
  );
}

export default App;

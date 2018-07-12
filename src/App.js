import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Restaurant from "./components/Restaurant"
import Header from "./components/Header"
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Router>
          <Route exact path="/" component={Restaurant}/>
        </Router>
      </Fragment>

    );
  }

}

export default App;

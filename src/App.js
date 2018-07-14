import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header/>
        <Router>
          <Fragment>
            <Route exact path="/" component={Restaurant}/>
            <Route path="/checkout" component={Checkout}/>
          </Fragment>
        </Router>
      </Fragment>
    );
  }

}

export default App;

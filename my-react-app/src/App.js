import React, { Component } from "react";
import "./App.css";
import UsersPage from "./pages/users";
import WorksPage from "./pages/works";
import Index from "./pages/index";
import './typography.css';

//Import all needed Component for this tutorial
import MainPage from "./pages"; ///< index.jsx will be automatically imported 
//And render that route with the MainPage component for the root path /

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages


class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Index} />
       <Route exact path="/users" component={UsersPage} />
       <Route exact path="/works" component={WorksPage} />
      </Router>
    );
  }
}

export default App;
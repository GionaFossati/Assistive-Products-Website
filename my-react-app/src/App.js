import React, { Component } from "react";
import "./App.css";
import UsersPage from "./pages/users";

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
       <Route exact path="/" component={MainPage} />
       <Route exact path="/users" component={UsersPage} />
      </Router>
    );
  }
}

export default App;
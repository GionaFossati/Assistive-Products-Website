import React, { Component } from "react";
import "./App.css";

import UsersPage from "./pages/users";
import WorksPage from "./pages/works";
import ProductPage from "./pages/productpage";
import AboutPage from "./pages/about";
import Home from "./pages/home";
import './typography.css';

//Import all needed Component for this tutorial
import MainPage from "./pages/home"; ///< index.jsx will be automatically imported 
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
       <Route exact path="/" component={Home} />
       <Route exact path="/users" component={UsersPage} />
       <Route exact path="/works" component={WorksPage} />
       <Route exact path="/about" component={AboutPage} />
       <Route exact path="/product" component={ProductPage} />
       {/* <Route exact path="/product/:id" component={ProductPage} /> */}
      </Router>
    );
  }
}

export default App;
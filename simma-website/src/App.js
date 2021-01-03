import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import './App.css';

const NavBar = () => (
  <nav aria-label="Simma Fine Art Website" >
    <ul role="menubar" className='navbar'>
      <li role="none">
        <a href="" className='navbar__item' role="menuitem" className='navbar__logo'>
          Simma
        </a>
        </li>
      <li role="none">
          <a href="" className='navbar__item navbar_item_active' role="menuitem">Home</a>
        </li>
      <li role="none" >
        <a href="" className='navbar__item' role="menuitem">About</a>
        </li>
      <li role="none">
          <a href="" className='navbar__item' role="menuitem">Works</a> 
        </li>
    </ul>
             
  </nav>
);
function App() {
  return (
    <NavBar />
  )
  }

export default App;

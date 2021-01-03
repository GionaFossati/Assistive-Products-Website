import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import Logo from './assets/logo.svg';
import './App.css';
import './typography.css';

const NavBar = () => (
  <nav aria-label="Simma Fine Art Website" >
    <ul role="menubar" className='navbar'>
      <li role="none">
        <a href="" className='navbar__item' role="menuitem" className='navbar__logo' role="">
        <img src={Logo} alt="Simma Logo" />
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


const Hero = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  return(
    <div className="hero">
      <h1 className="hero__title">Simma</h1>
      <p> Toronto-based fine artist</p>
      <Button className="button__primary">My Works</Button>
    </div>
  )
}

function App() {
  return (
    <div className="root"> 
      <NavBar />
      <Hero />  
      </div>
    
  )
  }

export default App;

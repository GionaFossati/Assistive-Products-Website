import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import Logo from './assets/logo.svg';
import HeroImage from './assets/hero.png';
import HeroBackImage from './assets/heroback.svg';
import ImgDecoration1 from './assets/decoration.svg';
import './App.css';
import './typography.css';

const NavBar = () => (
  <nav aria-label="Simma Fine Art Website" >
    <ul role="menubar" className='navbar'>
      <li role="none">
        <a href="" className='navbar__item' className='navbar__logo' role="Simma Art Logo">
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


const Hero = () => {
  return(
    <div className="hero">
      <h1 className="hero__title">Simma</h1>
      <p className="hero__subtitle"> Toronto-based fine artist</p>
      <Button className="button__primary">My Works</Button>
      <img src={HeroImage} role="presentation" className="hero__image"></img>
      <img src={HeroBackImage} role="presentation" className="hero__backimage"></img>
      <img src={ImgDecoration1} role="presentation" className="hero__decoration"></img>

    </div>
  )
}

const Services = () => {
  
  
  return(
    <div className="services">
      <h2 className="services__title">What do I do?</h2>

    </div>
  )
}

function App() {
  return (
    <div className="root"> 
      <NavBar />
      <Hero />  
      <Services />
      </div>
    
  )
  }

export default App;

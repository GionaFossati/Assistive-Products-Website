import React from "react";
import Logo from '../assets/logo.svg';
import "./navbar.css"
import { Separator } from "reakit/Separator";

const NavBar = () => (
  <nav aria-label="Simma Fine Art Website" >
    <ul className='navbar'>
      <li>
        <a href="/" className='navbar__item navbar__logo' aria-label="Simma Logo">
        <img src={Logo} alt=""/>
        </a>
        </li>
        <Separator orientation="vertical" />;
      <li>
          <a href="/" className='navbar__item navbar_item_active'>Home</a>
        </li>
      <li>
        <a href="/about" className='navbar__item'>About</a>
        </li>
      <li>
          <a href="/works" className='navbar__item'>Works</a> 
        </li>
    </ul>   
  </nav>
);

export default NavBar

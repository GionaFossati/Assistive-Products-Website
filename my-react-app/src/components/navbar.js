import React from "react";
import Logo from '../assets/logo.svg';
import "./navbar.css"
import { Separator } from "reakit/Separator";
import { Grid, Row, Col } from 'react-flexbox-grid';

const NavBar = () => (
  <header>
    <a class="skip-to-content-link shadow" href='#main'>Skip to content</a>
    <nav aria-label="Simma Fine Art Website" className="shadow__low">
      <ul className='navbar'>
        <li>
          <a href="/" className='navbar__item navbar__logo' aria-label="Simma Logo">
          <img src={Logo} alt=""/>
          </a>
          </li>
          <Separator orientation="vertical" />
        <li>
            <a href="/" className='navbar__item'>Home</a>
          </li>
        <li>
          <a href="/about" className='navbar__item'>About</a>
          </li>
        <li>
            <a href="/works" className='navbar__item'>Works</a> 
          </li>
      </ul>   
    </nav>
  </header>
);

export default NavBar

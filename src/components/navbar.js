import React from "react";
import Logo from '../assets/logo.svg';
import "./navbar.css"
import { Separator } from "reakit/Separator";
import { Grid, Row, Col } from 'react-flexbox-grid';

const NavBar = () => (
  <header>
    <nav aria-label="Simma Fine Art Website" className='navbar presentation__verticalcenter'>
    <a class="skip-to-content-link shadow__low" href='#main'>Skip to content</a>
      <Grid fluid>
        <ul>
        <Row>
          <Col xs={0} md={3} lg={9} id="logocol">
              <li>
              <a href="/" className='navbar__item navbar__logo' aria-label="Simma Logo - Go to Home Page">
              <img src={Logo} alt=""/>
              </a>
              </li>
            </Col>
          <Col xs={4} md={3} lg={1}>
              <li>
                <a href="/" className='navbar__item'>Home</a>
              </li>
            </Col>
          <Col xs={4} md={3} lg={1}>
              <li>
              <a href="/about" className='navbar__item'>About</a>
              </li>
            </Col>
          <Col xs={4} md={3} lg={1}>
              <li>
                <a href="/works" className='navbar__item'>Works</a> 
              </li>
            </Col>
        </Row>
        </ul>
      </Grid>
    </nav>
    {/* 
    <a class="skip-to-content-link shadow__low" href='#main'>Skip to content</a>
    <nav aria-label="Simma Fine Art Website">
      <ul className='navbar'>
        <li>
          <a href="/" className='navbar__item navbar__logo' aria-label="Simma Logo">
          <img src={Logo} alt=""/>
          </a>
          </li>
          
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
    </nav> */}
  </header>
);

export default NavBar

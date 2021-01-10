import React from "react";
import TextLogo from '../assets/textlogo.svg';
import "./footer.css"

import { Grid, Row, Col } from 'react-flexbox-grid';

import InstagramLogo from '../assets/insta.svg';
import FacebookLogo from '../assets/face.svg';

const Footer = () => (
  <footer className="shadow__up">
    {/* <Grid fluid className="contactbanner">
    <Row>
      <Col  xs={12} md={6} lg={6}>
          <p> Do you want a personalized work?</p>
        </Col>
        <Col  xs={12} md={6} lg={6}>
          <Button id="footer__contactbutton" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/#contact"}>
            <img src={SendIcon} alt=""/>
            Send me a request</Button>
          </Col>
      </Row>
    </Grid> */}
    <Grid fluid className="presentation__center">
    <nav aria-label="Simma Fine Art Website" >
      <ul className='footer__list'>
      <Row id="footer__nav">
        <Col xs={12} md={3} lg={3}>
          <li>
            <a href="/" className='footer__item footer__logo' aria-label="Simma Logo">
            <img src={TextLogo} alt=""/>
            </a>
            </li>
            </Col>

            {/* <Separator orientation="vertical" />; */}
            <Col xs={12} md={3} lg={3}>
                <li>
                <a href="/" className='footer__item'>Home</a>
              </li>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <li>
                <a href="/about" className='footer__item'>About</a>
                </li>
            </Col>
            <Col xs={12} md={3} lg={3}>
          <li>
              <a href="/works" className='footer__item works'>Works</a> 
            </li>
            </Col>
        </Row>
        
      </ul>   
    </nav>

    <Row>
    <Col xs={12} md={3} lg={3}>
    </Col>
    <Col xs={12} md={6} lg={3}>
        <a href="https://www.instagram.com/simma__art/?hl=en" className="footer__socialtext presentation__center">
          <img src={InstagramLogo} alt="" height="24px" width="24px" className="socialogo"></img>
          Instagram
        </a>
    </Col>
    <Col xs={12} md={6} lg={3}>
        <a href="https://www.facebook.com/simmakart/" className="footer__socialtext presentation__center">
            <img src={FacebookLogo} alt="" height="24px" width="24px" className="socialogo"></img>
            Facebook
          </a>
    </Col>
    <Col xs={12} md={3} lg={3}>
    </Col>
    </Row>

    <Row>
    <Col xs={12} md={12} lg={12}>
      <p id="copyright">©2020 Simma Art</p>
    </Col>
    </Row>
    </Grid>
  </footer>
);

export default Footer

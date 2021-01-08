import React from "react";
import "./home.css";

import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import SimmaImage from '../assets/symmaimage.svg';

const AboutPage = () => {
  return (
    <div>
    <Grid>
      <Row>
        <Col xs={6} s={8}>
            <h5>About Simma</h5>
          <p>Simma is a Toronto based fine artist. Her art work reflects and synthesizes the historical experience of the twentieth century. Her paintings have appeared in Hollywood films, won multiple awards, and have been exhibited in a number of galleries across North America, Europe, and Israel. Simma posseses an undergraduate degree from Yeshiva University, and a Masters Degree in Fine Art from Brooklyn College. Her work can be found at Posters International Toronto.</p>
        </Col>
        <Col xs={6} s={8}>
        <img src={SimmaImage} alt="Potrait of Simma" className="simma__potrait"></img>
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={12} m={12} l={12}>
        <h5>Services Offered</h5>
          <ul>
            <li>Fine Art Paintings</li>
            <li>Digital Prints</li>
            <li>Personalized Gifts</li>
            <li>Custom Requests</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={12} m={12} l={12}>
        <h5>Connect with me on my social accounts</h5>
        <Row>
          <Col xs={6} s={6} m={6} l={6}>
            <a href="https://www.instagram.com/simma__art/?hl=en" alt="Simma's Instagram page">Instagram</a>
          </Col>
          <Col xs={6} s={6} m={6} l={6}>
           <a href="https://www.facebook.com/simmakart/" alt="Simma's Facebook page">Facebook</a>
          </Col>
        </Row>
        </Col>
      </Row>
    </Grid>
  </div>

  );
};

function About() {
  return (
    <div> 
      <NavBar />
      <main id="main">
          <About/>
        </main>
      <Footer />
      </div>
    
  )
  }

export default AboutPage;
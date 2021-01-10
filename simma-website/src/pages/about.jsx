import React from "react";
import "./about.css";
import "../components/footer.css";


import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import SimmaImage from '../assets/symmaimage.svg';  
import InstagramLogo from '../assets/insta.svg';
import FacebookLogo from '../assets/face.svg';


const ServicesList = () => (
  <ul>
    {['Fine Art Paintings', 'Digital Paintings', 'Personalized Gifts', 'Custom Requests'].map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);

const AboutPage = () => {
  return (
    <div>
    <Grid flex>
      <Row>
        <Col xs={6} s={8}>
            <h1 className="title">About Simma</h1>
          <p>Simma is a Toronto based fine artist. Her art work reflects and synthesizes the historical experience of the twentieth century. Her paintings have appeared in Hollywood films, won multiple awards, and have been exhibited in a number of galleries across North America, Europe, and Israel. Simma posseses an undergraduate degree from Yeshiva University, and a Masters Degree in Fine Art from Brooklyn College. Her work can be found at Posters International Toronto.</p>
        </Col>
        <Col xs={6} s={8}>
        <img src={SimmaImage} alt="Potrait of Simma" className="simma__potrait"></img>
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={12} m={12} l={12}>
        <h1 className="title">Services Offered</h1>
        <ServicesList />  
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={12} m={12} l={12}>
        <h5>Reviews</h5>
        <p>Simma Sudley has the talent, professionalism, and attention to creating high quality art continuously receives praise and outstanding reviews by collectors, designers, and her repeat clients.
</p>
      <p>"Simma is a superb artist, and we've felt so proud to have her work hanging in our home. This painting looks exactly like the photograph - only better because the thick application of paint is so compelling.  I look at this painting and my heart soars.  So her art also has the rare capacity of creating great joy."<i>- 3x Repeat Client, Kate Ludeman</i></p>
      <p>"I received my painting last week and love it!! You are so talented. Wish you had a gallery here in Birmingham. I am looking to order another painting. Probably will put my order in this afternoon once I make a decision.  Thanks you for representing your work so well online. It's perfect and looks great in our home!"<i>- Designer, Roberto</i></p>
      <p>"Beautifully done art work. We were very impressed and were happy to have her work in our exhibit in Toronto"<i>- Art Collector, Patricia Gonzales</i></p>
        </Col>
      </Row>
    </Grid>

    <Grid flex id="social__contact">
      <Row>
        <Col xs={12} md={6} lg={8}>
            <h1 className="title">Contact me on my socials</h1>
        </Col>
        <Col xs={6} md={3} lg={2} clas>
            <a href="https://www.instagram.com/simma__art/?hl=en" id="socialtext1">
            <img src={InstagramLogo} alt="" height="24px" width="24px" className="socialogo"></img>
            Instagram
          </a>
        </Col>
        <Col xs={6} md={3} lg={2}>
            <a href="https://www.facebook.com/simmakart/" id="socialtext2">
            <img src={FacebookLogo} alt="" height="24px" width="24px" className="socialogo"></img>
            Facebook
            </a>
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
          <AboutPage/>
        </main>
      <Footer />
      </div>
    
  )
  }

export default About;
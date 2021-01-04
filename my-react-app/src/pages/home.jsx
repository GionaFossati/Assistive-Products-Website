import React from "react";
import "./home.css";

import { Button } from "reakit/Button";
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';

import HeroImage from '../assets/hero.png';
import HeroBackImage from '../assets/heroback.svg';
import ImgDecoration1 from '../assets/decoration.svg';
import ServicesImage from '../assets/servicesimage.png';
import SimmaImage from '../assets/symmaimage.svg';
import HomeImage1 from '../assets/homeimage1.png';
import HomeImage2 from '../assets/homeimage2.png';
import HomeImage3 from '../assets/homeimage3.png';
import HomeImage4 from '../assets/homeimage4.png';

const Hero = () => {
  return(
    <div className="hero">
      
      <h1 className="hero__title">Simma</h1>
      <p className="hero__subtitle"> Toronto-based fine artist</p>
      <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/works"}>My Works</Button>
      
      <img src={HeroImage} alt="" className="hero__image"></img>
      <img src={HeroBackImage} alt="" className="hero__backimage"></img>
      <img src={ImgDecoration1} alt="" className="hero__decoration"></img>

    </div>
  )
}

const Services = () => {
  
  
  return(
    <div className="services">
      <Grid fluid>
        <Row>
              <Col xs={12} md={12} lg={12}>
              <h2 className="services__title">What do I do?</h2>
              </Col>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12} >
                <ul className='services__list'>
                  <li className="services__item">
                    <h3>Paintings</h3>
                    <p> I let my creativity flow to produce fine art paintings.</p>
                  </li>
                  <li>
                    <h3>Personalized Gifts</h3>
                    <p> I can provide you with unique high quality gifts for every occasion.</p>
                  </li>
                </ul>
              </Col>
          </Row>
      </Grid>
      
      <img src={ServicesImage} alt="" className="services__image"></img>
    </div>
  )
}

const Presentation = () => {
  
  
  return(
    <div className="presentation">
      <Grid fluid>
        <Row>
              <Col xs={12} md={12} lg={12}>
              <h2 className="presentation__center">I'm Symma Robinson</h2>
              </Col>
              <Col xs={12} md={12} lg={12} className="presentation__center">
              <img src={SimmaImage} alt="Potrait of Simma" className="simma__potrait"></img>
              <p className="presentation__text">I live in Toronto. My paintings have appeared in Hollywood films, won multiple awards, and have been exhibited in a number of galleries across North America, Europe, and Israel.</p>
              </Col>
            </Row>
        <Row id="artrow">
        <Col xs={12} md={6} lg={3} className="presentation__center">
        <img src={HomeImage1} alt=""></img>
        </Col>

        <Col xs={12} md={6} lg={3} className="presentation__center">
        <img src={HomeImage2} alt="" ></img>
        </Col>

        <Col xs={12} md={6} lg={3} className="presentation__center">
        <img src={HomeImage3} alt=""></img>
        </Col>

        <Col xs={12} md={6} lg={3} className="presentation__center">
        {/* <div id="image4" alt=""></div> */}
        <img src={HomeImage4} alt=""></img>
        </Col>
        </Row>
        <Row xs={12} md={12} lg={12}className="presentation__center">
        <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/works"}>My Works</Button>
        </Row>
      </Grid>
    </div>
  )
}

function Home() {
  return (
    <div className="root"> 
      <NavBar />
      <div role="main">
      <Hero />  
      <Services />
      <Presentation />
      </div>
      </div>
    
  )
  }

export default Home;

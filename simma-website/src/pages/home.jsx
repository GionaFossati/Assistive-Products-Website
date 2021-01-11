import React from "react";
import "./home.css";

import { Button } from "reakit/Button";

import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactform';

import HeroImage from '../assets/hero.png';
import ImgDecoration1 from '../assets/decoration.svg';
import SimmaImage from '../assets/symmaimage.svg';
import HomeImage1 from '../assets/homeimage1.png';
import HomeImage2 from '../assets/homeimage2.png';
import HomeImage3 from '../assets/homeimage3.png';
import HomeImage4 from '../assets/homeimage4.png';

const Hero = () => {
  return(
    <div className="hero" role="banner">
      <Grid fluid>
        <Row>
              <Col xs={12} md={6} lg={6}>
                <h1 className="hero__title">Simma</h1>
                <p className="subtitle"> Toronto-based fine artist</p>
                <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/product"}>My Works</Button>
              </Col>
              <Col xs={0} md={6} lg={6}>
                <img src={HeroImage} alt="" className="hero__image"></img>
                {/* <img src={HeroBackImage} alt="" className="hero__backimage shadow__up"></img> */}
                <img src={ImgDecoration1} alt="" className="hero__decoration"></img>
              </Col>
            </Row>
      </Grid>
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
            <Col xs={12} md={4} lg={8} >
                <ul className='services__list shadow__up'>
                 
                  <li className="services__item">
                    <p className="subtitle">Paintings</p>
                    <p> I let my creativity flow to produce fine art paintings.</p>
                  </li>
                 
                  <li className="services__item">
                    <p className="subtitle">Personalized Gifts</p>
                    <p> I can provide you with unique high quality gifts for every occasion.</p>
                  </li>
                </ul>
              </Col>
            <Col xs={12} md={8} lg={4} >            
                <img src={HomeImage3} alt="" className="services__image2"></img>
              </Col>
          </Row>
      </Grid>
      
      
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
        <img src={HomeImage4} alt=""></img>
        </Col>
        </Row>
        <Row xs={12} md={12} lg={12} className="presentation__center">
        <Button id="cta__presentation" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/works"}>My Works</Button>
        </Row>
      </Grid>
    </div>
  )
}


const Contact = () => {
  
  
  return(
    <div className="contact shadow__low" id="contact">
      <Grid fluid>
        <Row>
              <Col xs={12} md={12} lg={6} className="contact__textbox">
              <h4>Contact Me</h4>
              <p id="contact__text"> Please contact me regarding any work you see on the site, custom paintings or to book an appointment to meet with me.</p>
              </Col>

              <Col xs={12} md={12} lg={6} className="form__box presentation__center">
              <ContactForm />
              </Col>
          </Row>
      </Grid>
    </div>
  )
}


function Home() {
  return (
    <div> 
      <NavBar />
      <main id="main">
          <Hero />  
          <Services />
          <Presentation />
          <Contact />
        </main>
      <Footer />
      </div>
    
  )
  }

export default Home;

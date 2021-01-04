import React from "react";
import "./home.css";

import { Button } from "reakit/Button";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";

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
      <Grid fluid>
        <Row>
              <Col xs={12} md={12} lg={6}>
                <h1 className="hero__title">Simma</h1>
                <p className="subtitle"> Toronto-based fine artist</p>
                <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/works"}>My Works</Button>
              </Col>
              <Col xs={0} md={6} lg={6}>
                <img src={HeroImage} alt="" className="hero__image"></img>
                <img src={HeroBackImage} alt="" className="hero__backimage"></img>
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
            <Col xs={12} md={12} lg={12} >
                <ul className='services__list'>
                 
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
          </Row>
      </Grid>
      
      <img src={ServicesImage} alt="" className="services__image"></img>
      <img src={HomeImage3} alt="" className="services__image2"></img>
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
        <Row xs={12} md={12} lg={12} className="presentation__center">
        <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={() => window.location = "/works"}>My Works</Button>
        </Row>
      </Grid>
    </div>
  )
}

const ContactForm = () => {
    const form = useFormState({
      values: { message: "", name: "" },
      onValidate: (values) => {
        if (!values.message) {
          var errors = {
            message: "Please enter a message.",
          };
          throw errors;
        }

        if (!values.name) {
          var errors = {
            name: "How can we be friends without knowing your name?",
          };
          throw errors;
        }
      },

      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <Form {...form} className="contact__form presentation__center">
        
        <Row xs={12} md={12} lg={12}>
          <FormLabel name="name">
            Name
          </FormLabel >
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormInput {...form} name="name" placeholder="Grace Kelly" />
        </Row>

        <Row xs={12} md={12} lg={12}>
          <FormMessage {...form} name="name" />
        </Row>
        

        <Row xs={12} md={12} lg={12}>
          <FormLabel {...form} name="message">
            Message
          </FormLabel>
        </Row>
        
        <Row xs={12} md={12} lg={12}>
          <FormInput
            {...form}
            name="message"
            placeholder="Type here what would you like to contact me about"
            as="textarea"
          />
        </Row>
        

        <Row xs={12} md={12} lg={12} >
          <FormMessage {...form} name="message" />
        </Row>

        <Row xs={12} md={12} lg={12} >
          <FormSubmitButton {...form}>Submit</FormSubmitButton>
        </Row>
      </Form>
    );
  }



const Contact = () => {
  
  
  return(
    <div className="contact">
      <Grid fluid>
        <Row>
              <Col xs={12} md={12} lg={6} className="contact__text">
              <h4>Contact Me</h4>
              <p> Please contact me regarding any work you see on the site, custom paintings or to book an appointment to meet with me.</p>
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
      <div role="main">
          <Hero />  
          <Services />
          <Presentation />
          <Contact />
        </div>
      </div>
    
  )
  }

export default Home;

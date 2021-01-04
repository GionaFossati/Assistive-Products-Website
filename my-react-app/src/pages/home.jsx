import React from "react";
import { Button } from "reakit/Button";
import NavBar from '../components/navbar';
import HeroImage from '../assets/hero.png';
import HeroBackImage from '../assets/heroback.svg';
import ImgDecoration1 from '../assets/decoration.svg';
import ServicesImage from '../assets/servicesimage.png';

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
      <img src={ServicesImage} role="presentation" className="services__image"></img>
    </div>
  )
}

function Index() {
  return (
    <div className="root"> 
      <NavBar />
      <div role="main">
      <Hero />  
      <Services />
      </div>
      </div>
    
  )
  }

export default Index;

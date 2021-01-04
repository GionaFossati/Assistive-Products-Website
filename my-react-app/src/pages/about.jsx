import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import SimmaImage from '../assets/symmaimage.svg';

const AboutPage = () => {
  return (
    <div>
    <Grid>
      <Row>
        <Col xs={6} s={8} style={{ border: "1px solid teal" }}>
            <h5>About Simma</h5>
          <p>Simma is a Toronto based fine artist. Her art work reflects and synthesizes the historical experience of the twentieth century. Her paintings have appeared in Hollywood films, won multiple awards, and have been exhibited in a number of galleries across North America, Europe, and Israel. Simma posseses an undergraduate degree from Yeshiva University, and a Masters Degree in Fine Art from Brooklyn College. Her work can be found at Posters International Toronto.</p>
        </Col>
        <Col xs={6} s={8} style={{ border: "1px solid palevioletred" }}>
        <img src={SimmaImage} alt="Potrait of Simma" className="simma__potrait"></img>
        </Col>
      </Row>
      <Row>
        <Col xs={12} s={12} m={12} l={12} style={{ border: "1px solid teal" }}>
        <h5>Services Offered</h5>
          <p>Hello</p>
        </Col>
      </Row>
    </Grid>
  </div>

  );
};

export default AboutPage;
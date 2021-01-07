import React from 'react';

import { data } from '../assets/productsJS.js'
import "./works.css";

import Product from '../components/productPreview';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


import { Grid, Row, Col } from 'react-flexbox-grid';

const ProductsList = () => {
  return (
    <Grid fluid>
           <Row>
        { 
          data.map( (singleProduct) => {
           return (
                <Product product={singleProduct}/>
           )
          })
        }
        </Row>
      </Grid>
  )
}


function WorkPage() {
  return (
  <div>
      <NavBar />
      <main id="main">
          <h1 id="pagetitle">My Works</h1>
          <ProductsList />
        </main>
      <Footer />    
  </div>

  
  )
  }
  
  export default WorkPage;

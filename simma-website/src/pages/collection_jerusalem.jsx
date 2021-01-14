import React, { useState, useEffect } from 'react';

import { data } from '../assets/jerusalemCollection.js'
import "./collection.css";

import Product from '../components/productPreview';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';


import { Grid, Row, Col } from 'react-flexbox-grid';


const ProductsList = ({productlist=[]}) => {
  return (
    <Grid fluid id="products__grid">
           <Row id="products__row" aria-live="polite">
        { 
          productlist.map( (singleProduct) => {
           return (
                <Product product={singleProduct}/>
           )
          })
        }
        </Row>
      </Grid>
  )
}


function JerusalemCollectionPage() {
  const [input, setInput] = useState('');
  const [productsListDefault, setProductsListDefault] = useState();
  const [productsList, setProductsList] = useState();

  const updateInput = async (input) => {
    const filtered = productsListDefault.filter(singleProduct => {
      return JSON.stringify(singleProduct).toLowerCase().includes(input.toLowerCase()) 
     })
     setInput(input);
     setProductsList(filtered);
  }

  useEffect( () => {
    setProductsList(data) 
    setProductsListDefault(data)},[]);

  return (
  <div>
      <NavBar />
      <main id="main">
            <Row>
            <Col xs={12} md={8} lg={8}>
              <h1 id="page__title">Jerusalem Collection</h1>
              </Col>
            <Col xs={12} md={4} lg={4} id="search__column">
                        <SearchBar
                          input={input} 
                          onChange={updateInput}
                        />
                  </Col>
              </Row>
          <Row>
              <Col xs={12} md={8} lg={8}>
                  <p id="collection_description" className="paintings__title">
                    Sand and warmness, the Jerusalem Collection potraits distant landscapes that have been 
                    narrated in books and, thanks to this, came to us. Simma draws for the viewer arid and 
                    hopless landscapes.
                  </p>
            </Col>
          </Row>

          <ProductsList productlist={productsList}/>
        </main>
      <Footer />    
  </div>

  
  )
  }
  
  export default JerusalemCollectionPage;

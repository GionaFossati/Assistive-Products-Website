import React, { useState, useEffect } from 'react';

import { data } from '../assets/1940Collection.js'
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


function NineteenCollectionPage() {
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
              <h1 id="page__title">1940 Inspired Collection</h1>
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
                    The 40s have been a time of shock and revolution for the entire humanity,
                    from the ashes the modern society rose and the modern societies born.
                    Simma pays respect by representing this turbulent times in his self-explanatory and 
                    impactful collection of sights from the past.  
                  </p>
            </Col>
          </Row>

          <ProductsList productlist={productsList}/>
        </main>
      <Footer />    
  </div>

  
  )
  }
  
  export default NineteenCollectionPage;

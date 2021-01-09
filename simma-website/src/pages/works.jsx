import React, { useState, useEffect } from 'react';

import { data } from '../assets/productsJS.js'
import "./works.css";

import Product from '../components/productPreview';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';


import { Grid, Row, Col } from 'react-flexbox-grid';


const CollectionsList = () => {
  return (
    <Grid fluid>
           <Row id="collections__row">
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="vintagedress" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">Vintage Dress Collection</h1>
                  </a>
              </Col>
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="nineteenforty" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">1940s Inspired Collection</h1>
                  </a>
              </Col>
            <Col xs={12} md={4} lg={4}>
                  <a href="/" id="jerusalem" className="wrapper presentation__center presentation__verticalcenter">
                    <h1 className="content">Jerusalem</h1>
                  </a>
              </Col>
           
            
            
            
        </Row>
      </Grid>
  )
}

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


function WorkPage() {
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
          
          <h1 id="page__title">My Works</h1>
          <h2 className="paintings__title">Collections</h2>
          <CollectionsList />
          
          <Row id="products__head">
              <Col xs={12} md={6} lg={6}>
                  <h2 id="search__title" className="paintings__title">Paintings</h2>
            </Col>
              <Col xs={12} md={6} lg={6} id="search__column">
                  <SearchBar
                    input={input} 
                    onChange={updateInput}
                  />
            </Col>
          </Row>

          <ProductsList productlist={productsList}/>
        </main>
      <Footer />    
  </div>

  
  )
  }
  
  export default WorkPage;

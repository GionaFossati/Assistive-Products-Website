import React from 'react';
import data from '../assets/products.json'
import Product from '../components/productPreview';


import { Grid, Row, Col } from 'react-flexbox-grid';


const ProductsList = () => {
  return (
    <Grid fluid>
           <Row>
        { 
          data.products.map( (singleProduct, index) => {
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
      <main id="main">
        <ProductsList />
      </main>
      
  </div>
  
  )
  }
  
  export default WorkPage;

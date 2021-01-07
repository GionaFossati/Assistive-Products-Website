import React from 'react';
import data from '../assets/products.json'


function loadData() {
  return data;
}


const ProductsList = () => {
  return (
    <div>
        { 
          data.products.map( (singleProduct, index) => {
           return (
             <div>
               <h1>{singleProduct.name}</h1>
               <p>{singleProduct.description}</p>
             </div>
           )
          })
        }
      </div>
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

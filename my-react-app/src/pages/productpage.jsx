import React from "react";
import "./productpage.css";

import { Button } from "reakit/Button";
import {
    unstable_useGridState as useGridState,
    unstable_Grid as ReakitGrid,
    unstable_GridRow as GridRow,
    unstable_GridCell as GridCell,
  } from "reakit/Grid";

import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import HeroImage from '../assets/hero.png';

const Product = () => {
return(
<div className="product presentation__verticalcenter">
    <Grid fluid>
        <Row>
            <Col xs={0} md={6} lg={6}>
            <img src={HeroImage} alt="" className="product__image presentation__center"></img>
            </Col>
            <Col xs={12} md={12} lg={6}>
            <h1 className="product__title">Jerusalem</h1>
            <p className="product__herodescription">
                Oil on canvas
            </p>
            <p id="product__measure">120x70cm</p>
            <p className="product__requesttext">
                <a href="/#contact" id="request"> Sizing available on request</a>
            </p>
            <div className="product__description">
            <h2 className="product__descriptiontitle"> Description</h2>
                <p id="description">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.
                </p>
            </div>
            <Button id="cta__hero" className="button__primary" alt="Go to Simma's Works" onClick={()=> window.location =
                "/works"}>My Works</Button>
            </Col>
        </Row>
    </Grid>
</div>
)
}

function ProductGrid() {
    const grid = useGridState();
    return (
      <ReakitGrid {...grid} aria-label="Art cost">
        <GridRow {...grid}>
          <GridCell {...grid}></GridCell>
          <GridCell {...grid}>Black & White</GridCell>
          <GridCell {...grid}>Black & White + Frame</GridCell>
          <GridCell {...grid}>Coloured</GridCell>
          <GridCell {...grid}>Coloured + Frame</GridCell>
        </GridRow>
        <GridRow {...grid}>
          <GridCell {...grid}>30x40cm</GridCell>
          <GridCell {...grid}>70x120cm</GridCell>
          <GridCell {...grid}>100x180cm</GridCell>
        </GridRow>
        <GridRow {...grid}>
          <GridCell {...grid}>cell</GridCell>
          <GridCell {...grid}>cell</GridCell>
          <GridCell {...grid}>cell</GridCell>
        </GridRow>
      </ReakitGrid>
    );
  }


function ProductPage() {
return (
<div>
    <NavBar />
    <main id="main">
        <Product />
        <ProductGrid />
    </main>
    <Footer />
</div>

)
}

export default ProductPage;
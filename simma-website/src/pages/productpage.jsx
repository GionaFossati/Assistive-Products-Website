import React from "react";
import "./productpage.css";

import { Button } from "reakit/Button";

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
            <img src={HeroImage} alt="" className="product__image presentation__center shadow__low"></img>
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
            </Col>
        </Row>
    </Grid>
</div>
)
}

function ProductTable() {
    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <table className="tablefill shadow__low">
                            <caption>Product Cost:</caption>
                            <tr>
                                <td></td>
                                <th scope="col" id="bw">Black & White</th>
                                <th scope="col" id="bw__frame">Black & White + Frame</th>
                                <th scope="col" id="coloured">Coloured</th>
                                <th scope="col" id="coloured__frame">Coloured + Frame</th>
                            </tr>
                            <tr>
                                <th scope="row" id="70x100cm">70x100cm</th>
                                <td headers="70x100cm bw">30€</td>
                                <td headers="70x100cm bw__frame">30€</td>
                                <td headers="70x100cm coloured">30€</td>
                                <td headers="70x100cm coloured__frame">30€</td>
                            </tr>
                            <tr>
                                <th scope="row">80x120cm</th>
                                <td>30€</td>
                                <td>30€</td>
                                <td>30€</td>
                                <td>30€</td>
                            </tr>
                            <tr>
                                <th scope="row">80x120cm</th>
                                <td>30€</td>
                                <td>30€</td>
                                <td>30€</td>
                                <td>30€</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
          </Grid>
          
        </div>
    );
  }


function ProductPage() {
return (
<div>
    <NavBar />
    <main id="main">
        <Product />
        <ProductTable />
    </main>
    <Footer />
</div>

)
}

export default ProductPage;
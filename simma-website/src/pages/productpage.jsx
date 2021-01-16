import React from "react";
import "./productpage.css";

import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import HeroImage from '../assets/hero.png';

const Product = (ascs) => {
/* constructor props super props this state 
    pass prop react as function to component
*/

return(
<div className="product presentation__verticalcenter">
    <Grid fluid>
        <Row>
            <Col xs={0} md={6} lg={6}>
            <img src={HeroImage} alt="" className="product__image presentation__center shadow__low"></img>
            </Col>
            <Col xs={12} md={12} lg={6}>
            <h1 className="product__title">Jerusalem at Twilight</h1>
            <p className="product__herodescription">
            Watercolor, Mixed Media
            </p>
            <p id="product__measure">120x70cm</p>
            <p className="product__requesttext">
                <a href="/#contact" id="request"> Sizing available on request</a>
            </p>
            <div className="product__description">
            <h2 className="product__descriptiontitle"> Description</h2>
                <p id="description">
                Beautiful painting of an overview of Jerusalem with a soft color pallete with shades of purple, yellow, and orange. The beauty of Jerusalem is present and is the main focus among the softened colors in the background. Beautiful, vibrant, and sure to be the focal point of any room decor! Each painting purchased comes with a signed and dated Certificate of Authenticity verifying that this is an original piece of art created by internationally collected artist, Simma Sudaley. Available and ready to ship.
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
                                <th scope="row" id="70x100cm">100x100cm</th>
                                <td headers="70x100cm bw">210€</td>
                                <td headers="70x100cm bw__frame">420€</td>
                                <td headers="70x100cm coloured">350€</td>
                                <td headers="70x100cm coloured__frame">560€</td>
                            </tr>
                            <tr>
                                <th scope="row">200x200cm</th>
                                <td>360€</td>
                                <td>550€</td>
                                <td>450€</td>
                                <td>560€</td>
                            </tr>
                            <tr>
                                <th scope="row">300x300cm</th>
                                <td>490€</td>
                                <td>650€</td>
                                <td>590€</td>
                                <td>780€</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
          </Grid>
          
        </div>
    );
  }


function ProductPage(csca) {
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
import React from 'react';
import {render} from 'react-dom';

import "./productPreview.css";

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Product extends React.Component {
    render() {

        return(

                        <Col xs={12} md={6} lg={4} className="singleproduct">
                            <a href="/">
                            	<div className="presentation__center">
                            	    <img src={(this.props.product.picture).default} alt={this.props.product.shortDesc}/>
                            	</div>
                            	<div id="product__info">
                                    <h1 id="product__name"> {this.props.product.name}</h1>
                                    <p id="product__material">  {this.props.product.material} </p>
                                    <p>  {this.props.product.description} </p>
                                </div>
                                <a href="/" id="moredetails" alt={"see more details about " + this.props.product.name}>More details</a>
                            </a>
                        </Col>

                        /* importa react router link
                           cambiare href con il link di react router : to al pagina del prodotto 
                            IN APP.JS PASSA DATA IN BASE ALL'ID
                           */
                    
        ) 
    }
}
import React from 'react';
import {render} from 'react-dom';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Product extends React.Component {
    render() {
        console.log(this.props.product.pictures[0])
        return(

                        <Col xs={12} md={6} lg={4}>
                            <img src={this.props.product.pictures[0]} alt={this.props.product.shortDesc} ></img>
                            <h1> {this.props.product.name}</h1>
                            <p>  {this.props.product.material} </p>
                            <p>  {this.props.product.description} </p>
                        </Col>
                    
        )
    }
}
import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
/* We simply can use an array and loop and print each user */
const AboutPage = () => {
  return (
    <div>
    <h1>Two columns, gap in the middle</h1>
    <Grid>
      <Row>
        <Col xs={5} style={{ border: "1px solid teal" }}>
          <p>First column</p>
        </Col>
        <Col
          xs={5}
          xsOffset={2}
          style={{ border: "1px solid palevioletred" }}
        >
          <p>Second column</p>
        </Col>
      </Row>
    </Grid>
  </div>

  );
};

export default AboutPage;
import React from "react";
import "./RatingFullView.css";
import OneToTen from './components/OneToTen';

const RatingFullView = props => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        //Left Column
        <img alt={props.name} src={props.image} />
        <OneToTen />

      </Col>
      <Col xs={6} md={4}>
        //Right Column
      </Col>
    </Row>
  </Grid>;
);

export default RatingFullView;

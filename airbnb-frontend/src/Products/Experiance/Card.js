import React, { Component } from "react";
import styled from "styled-components";
import expone from "./expone.png";
import exptwo from "./exptwo.png";
import expthr from "./expthr.png";
import expfour from "./expfour.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 7.2%;
  padding-right: 7.2%;
`;
const Col = styled.div`
  flex-basis: 25%;

  box-sizing: border-box;
`;

const Img = styled.img`
  width: 229px;
  height: 346.88px;
`;

class Card extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <Img src={expone} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={exptwo} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={expthr} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={expfour} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Card;

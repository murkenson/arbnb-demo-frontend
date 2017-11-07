import React, { Component } from "react";
import styled from "styled-components";
import Chumleys from "./Chumleys.png";
import Hanjan from "./Hanjan.png";
import PrimeMeats from "./PrimeMeats.png";
import Seaprice from "./Seaprice.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  flex-basis: 25%;
  padding-left: 81px;
  padding-right: 81px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 229px;
  height: 164px;
`;

class Cardthr extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <Img src={Chumleys} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={Hanjan} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={PrimeMeats} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={Seaprice} alt="Card" />
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

export default Cardthr;

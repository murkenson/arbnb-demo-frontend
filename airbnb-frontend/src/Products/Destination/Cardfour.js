import React, { Component } from "react";
import styled from "styled-components";
import Tokyo from "./Tokyo.png";
import LA from "./LA.png";
import Paris from "./Paris.png";
import Seoul from "./Seoul.png";
import CapeTown from "./CapeTown.png";
import Miami from "./Miami.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 7.2%;
  padding-right: 7.2%;
`;
const Col = styled.div`
  flex-basis: 16.6666666667%;
  box-sizing: border-box;
`;

const Img = styled.img`
  display: block;
  width: 147px;
  height: 220px;
`;

class Cardfour extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <Img src={Paris} alt="Card" />
            <p>Paris</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={Miami} alt="Card" />
            <p>Miami</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={Tokyo} alt="Card" />
            <p>Tokyo</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={CapeTown} alt="Card" />
            <p>Cape town</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={Seoul} alt="Card" />
            <p>Seoul</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={LA} alt="Card" />
            <p>Los Angeles</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Cardfour;

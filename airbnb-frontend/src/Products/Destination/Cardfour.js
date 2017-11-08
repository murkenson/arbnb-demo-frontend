import React, { Component } from "react";
import styled from "styled-components";
import Tokyo from "./Tokyo.png";
import LA from "./LA.png";
import Paris from "./Paris.png";
import Seoul from "./Seoul.png";
import CapeTown from "./CapeTown.png";
import Miami from "./Miami.png";

const Container = styled.div`
  width: 1108px;
  margin-left: auto;
  margin-right: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  flex-basis: 16.6666666667%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
`;

const Img = styled.img`
  display: block;
  width: 147px;
  height: 220px;
`;

const DivText = styled.text`margin-top: 8px;`;

const StyleSpa = styled.span`
  font-size: 15px;
  font-family: "CircularAir" sans-serif;
  font-weight: bold;
  color: #383838;
  line-height: 18px;
`;

class Cardfour extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <Img src={Paris} alt="Card" />
              <DivText>
                <StyleSpa>Paris</StyleSpa>
              </DivText>
            </div>
          </Col>
          <Col>
            <div>
              <Img src={Miami} alt="Card" />
              <DivText>
                <StyleSpa>Miami</StyleSpa>
              </DivText>
            </div>
          </Col>
          <Col>
            <div>
              <Img src={Tokyo} alt="Card" />
              <DivText>
                <StyleSpa>Tokyo</StyleSpa>
              </DivText>
            </div>
          </Col>
          <Col>
            <div>
              <Img src={CapeTown} alt="Card" />
              <DivText>
                <StyleSpa>Cape town</StyleSpa>
              </DivText>
            </div>
          </Col>
          <Col>
            <div>
              <Img src={Seoul} alt="Card" />
              <DivText>
                <StyleSpa>Seoul</StyleSpa>
              </DivText>
            </div>
          </Col>
          <Col>
            <div>
              <Img src={LA} alt="Card" />
              <DivText>
                <StyleSpa>Los Angeles</StyleSpa>
              </DivText>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cardfour;

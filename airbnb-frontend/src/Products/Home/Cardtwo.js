import React, { Component } from "react";
import styled from "styled-components";
import homesone from "./homesone.png";
import hometwo from "./hometwo.png";
import homethr from "./homethr.png";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Col = styled.div`
  flex-basis: 33.33333%;
  padding-left: 81px;
  padding-right: 81px;
  box-sizing: border-box;
`;
const Img = styled.img`
  width: 310px;
  height: 204px;
`;

class Cardtwo extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <Img src={homesone} alt="Card" />
            <p>
              <strong>$82 La Salentina, see, nature & relax</strong>
            </p>
            <p>Entire house · 9 beds</p>
            <p>97 · Superhost</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={hometwo} alt="Card" />
            <p>
              <strong>$82 Your private 3 bedr. riad and exclusi…</strong>
            </p>
            <p>Entire house · 5 beds</p>
            <p>161 · Superhost</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={homethr} alt="Card" />
            <p>
              <strong>$200 Dreamy Tropical Tree House</strong>
            </p>
            <p>Entire treehouse · 1 bed</p>
            <p>364 · Superhost</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Cardtwo;

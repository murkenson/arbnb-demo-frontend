import React, { Component } from "react";
import styled from "styled-components";
import home from "./home.png";
import restrant from "./restrant.png";
import exper from "./exper.png";

const Container = styled.div`heignt: 130px;`;

const Row = styled.div`display: flex;`;
const Col1 = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  flex-basis: 33.3333%;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  align-items: center;
  border-radius: 4px;
`;
const Title = styled.h2`
  color: rgba(56, 56, 56, 1);
  margin-top: 50px;
  font-family: CircularBold;
`;
const Text = styled.p`
  font-weight: bold;
  margin-left: 25px;
  color: rgba(56, 56, 56, 1);
`;

const Img = styled.img`
  width: 96px;
  height: 72px;
`;

class Cardone extends React.Component {
  render() {
    return (
      <Container className="exploreContainer">
        <Title>Explore Airbnb</Title>
        <Row className="rowExplore">
          <Col1 className="col1">
            <Card>
              <Img src={home} alt="" />
              <Text>Homes</Text>
            </Card>
          </Col1>
          <Col1 className="col2">
            <Card>
              <Img src={restrant} alt="" />
              <Text>Experience</Text>
            </Card>
          </Col1>
          <Col1 className="col3">
            <Card>
              <Img src={exper} alt="" />
              <Text>Restaurants</Text>
            </Card>
          </Col1>
        </Row>
      </Container>
    );
  }
}

export default Cardone;

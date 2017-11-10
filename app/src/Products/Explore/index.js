import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Column, Row, Title, Cards, Container } from "../CommonStyles";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png")
];

export default function() {
  return (
    <Container>
      <Row>
        <Column size="12">
          <Title>Explore Airbnb</Title>
        </Column>
      </Row>
      <Row>
        <Column size="4">
          <Card img={CardArrayImg[0]} alt="Homes" title="Homes" />
        </Column>
        <Column size="4">
          <Card img={CardArrayImg[1]} alt="Experiences" title="Experiences" />
        </Column>
        <Column size="4">
          <Card img={CardArrayImg[2]} alt="Restaurants" title="Restaurants" />
        </Column>
      </Row>
    </Container>
  );
}

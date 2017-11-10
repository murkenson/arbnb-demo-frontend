import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SeeAllBtn from "../SeeAllBtn";
import NextBtn from "../NextBtn";
import { Column, Row, Title, Cards, Container } from "../CommonStyles";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png"),
  require("./img/Card4.png")
];

export default function() {
  return (
    <Container>
      <Row>
        <Column size="12">
          <Title>Feature destinations</Title>
        </Column>
      </Row>
      <Row>
        <Cards>
          <Column size="2">
            <Card img={CardArrayImg[1]} alt="Paris" title="Paris" />
          </Column>
          <Column size="2">
            <Card img={CardArrayImg[2]} alt="Miami" title="Miami" />
          </Column>
          <Column size="2">
            <Card img={CardArrayImg[3]} alt="Tokyo" title="Tokyo" />
          </Column>
          <Column size="2">
            <Card img={CardArrayImg[3]} alt="Cape Town" title="Cape Town" />
          </Column>
          <Column size="2">
            <Card img={CardArrayImg[3]} alt="Seoul" title="Seoul" />
          </Column>
          <Column size="2">
            <Card img={CardArrayImg[3]} alt="Los Angeles" title="Los Angeles" />
          </Column>
          <NextBtn top="109" />
        </Cards>
      </Row>
    </Container>
  );
}

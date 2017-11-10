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
        <Column size="11">
          <Title>Experiences</Title>
        </Column>
        <Column>
          <SeeAllBtn />
        </Column>
      </Row>
      <Row>
        <Cards>
          <Column size="3">
            <Card
              img={CardArrayImg[0]}
              alt="Forest therapy"
              price="29"
              title="Forest therapy"
              review_count="44"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[1]}
              alt="Whale whatching"
              price="69"
              title="Whale whatching"
              review_count="46"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[2]}
              alt="Table Mountain Summit; Cable Car Down"
              price="69"
              title="Table Mountain Summit; Cable Car Down"
              review_count="44"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[3]}
              alt="Salsa Night"
              price="50"
              title="Salsa Night"
              review_count="44"
            />
          </Column>
          <NextBtn top="163" />
        </Cards>
      </Row>
    </Container>
  );
}

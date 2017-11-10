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
          <Title>Popular reservations around the world</Title>
        </Column>
        <Column>
          <SeeAllBtn />
        </Column>
      </Row>
      <Row>
        <Cards>
          <Column size="3">
            <Card
              img={CardArrayImg[3]}
              alt="Chumley's"
              category="speakeasy"
              title="Chumley's"
              price="60"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[1]}
              alt="Hanjan"
              category="korean gastropub"
              title="Hanjan"
              price="50"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[2]}
              alt="Prime Meats"
              category="german american"
              title="Prime Meats"
              price="55"
            />
          </Column>
          <Column size="3">
            <Card
              img={CardArrayImg[3]}
              alt="Seaprice"
              category="fine seafood"
              title="Seaprice"
              price="70"
            />
          </Column>
          <NextBtn top="72" />
        </Cards>
      </Row>
    </Container>
  );
}

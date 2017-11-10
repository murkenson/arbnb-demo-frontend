import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SeeAllBtn from "../SeeAllBtn";
import NextBtn from "../NextBtn";
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
        <Column size="11">
          <Title>Homes</Title>
        </Column>
        <Column>
          <SeeAllBtn />
        </Column>
      </Row>
      <Row>
        <Cards>
          <Column size="4">
            <Card
              img={CardArrayImg[0]}
              alt="La Salentina, see, nature & relax"
              price="82"
              title="La Salentina, see, nature & relax"
              type="Entire house"
              bed_counter="9"
              review_count="97"
            />
          </Column>
          <Column size="4">
            <Card
              img={CardArrayImg[1]}
              alt="Your private 3 bedr. riad and exclusi..."
              price="82"
              title="Your private 3 bedr. riad and exclusi..."
              type="Entire house"
              bed_counter="5"
              review_count="161"
            />
          </Column>
          <Column size="4">
            <Card
              img={CardArrayImg[2]}
              alt="Dreamy Tropical Tree House"
              price="200"
              title="Dreamy Tropical Tree House"
              type="Entire treehouse"
              bed_counter="1"
              review_count="364"
            />
          </Column>
          <NextBtn top="90" />
        </Cards>
      </Row>
    </Container>
  );
}

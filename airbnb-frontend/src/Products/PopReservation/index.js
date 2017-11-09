import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SeeAllBtn from "../SeeAllBtn";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png"),
  require("./img/Card4.png")
];

const List = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const SectionTitle = styled.h2`
  margin-top: 48px;
  font-family: CircularBold, Helvetica, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;
export default function() {
  return (
    <section>
      <SectionTitle>Popular reservations around the world</SectionTitle>
      <SeeAllBtn />
      <List>
        <Card
          title="Chumley’s"
          image={CardArrayImg[0]}
          type="Speakeasy"
          prising="About $60 per person"
        />
        <Card
          title="Hanjan"
          image={CardArrayImg[1]}
          type="Korean gastropub"
          prising="About $55 per person"
        />
        <Card
          title="Prime Meats"
          image={CardArrayImg[2]}
          type="German american"
          prising="About $50 per person"
        />
        <Card
          title="Seaprice"
          image={CardArrayImg[3]}
          type="Fine seafood"
          prising="About $70 per person"
        />
      </List>
    </section>
  );
}

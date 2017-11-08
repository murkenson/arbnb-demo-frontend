import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png"),
  require("./img/Card3.png")
];

const List = styled.ul`
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
      <SectionTitle>Experiences</SectionTitle>
      <List>
        <Card
          image={CardArrayImg[0]}
          title="Forest Therapy"
          price="29$"
          review="44 reviews"
        />
        <Card
          title="Whale watching"
          image={CardArrayImg[1]}
          price="69$"
          review="46 reviews"
        />
        <Card
          title="Table Mountain Summit, Cable Car Downing"
          image={CardArrayImg[2]}
          price="69$"
          review="44 reviews"
        />
        <Card
          title="Salsa night"
          image={CardArrayImg[3]}
          price="50$"
          review="44 reviews"
        />
      </List>
    </section>
  );
}

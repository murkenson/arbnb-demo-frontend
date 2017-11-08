import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png")
];

const SectionTitle = styled.h2`padding-top: 45px;`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

export default function() {
  return (
    <section>
      <SectionTitle>Explore Airbnb</SectionTitle>
      <List>
        <Card title="Home" image={CardArrayImg[0]} />
        <Card title="Experiences" image={CardArrayImg[1]} />
        <Card title="Restourants" image={CardArrayImg[2]} />
      </List>
    </section>
  );
}

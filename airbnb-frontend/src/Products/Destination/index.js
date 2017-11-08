import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png"),
  require("./img/Card4.png"),
  require("./img/Card6.png"),
  require("./img/Card5.png")
];

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
const SectionTitle = styled.h2`
  margin-top: 48px;
  font-family: "CircularBold", sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

export default function() {
  return (
    <section>
      <SectionTitle>Featured destinations</SectionTitle>
      <List>
        <Card title="Paris" image={CardArrayImg[0]} />
        <Card title="Tokyo" image={CardArrayImg[1]} />
        <Card title="Miami" image={CardArrayImg[2]} />
        <Card title="Cape town" image={CardArrayImg[3]} />
        <Card title="Seoul" image={CardArrayImg[4]} />
        <Card title="Los Angeles" image={CardArrayImg[5]} />
      </List>
    </section>
  );
}

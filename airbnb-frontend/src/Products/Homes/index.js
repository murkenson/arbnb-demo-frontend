import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import SeeAllBtn from "../SeeAllBtn";

const CardArrayImg = [
  require("./img/Card1.png"),
  require("./img/Card2.png"),
  require("./img/Card3.png")
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
      <SectionTitle>Homes</SectionTitle>
      <SeeAllBtn />
      <List>
        <Card
          image={CardArrayImg[0]}
          title="La Salentina, see, nature, relax"
          price="82$"
          type="Entire house"
          amount="9 beds"
          review="91 Superhost"
        />
        <Card
          image={CardArrayImg[1]}
          title="Your private 3 bedr. riad exclusiv.."
          price="82$"
          type="Entire house"
          amount="5 beds"
          review="161 Superhost"
        />
        <Card
          image={CardArrayImg[2]}
          title="Dreamy Tropical Tree House"
          price="200$"
          type="Entire treehouse"
          amount="1 bed"
          review="364 Superhost"
        />
      </List>
    </section>
  );
}

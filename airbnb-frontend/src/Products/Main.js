import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Experiance/Card";
import Cardone from "./Explore/Cardone";
import Cardtwo from "./Home/Cardtwo";
import Cardthr from "./PopReservation/Cardthr";
import Cardfour from "./Destination/Cardfour";
import RightBotton from "./RightBotton.png";

const AppMain = styled.main`
  position: relative;
  width: 100%;
  height: auto;
  padding-left: 81px;
  padding-right: 77px;
  font-size: 32px;
  line-height: 34px;
`;

const Title = styled.h2`
  color: rgba(56, 56, 56, 1);
  margin-top: 50px;
  font-weight: bold;
  font-family: "CircularAir" sans-serif;
  font-weight: bold;
  color: #383838;
  line-height: 34px;
  font-size: 32px;
`;

const SeeAll = styled.p`
  padding-top: 20px;
  font-size: 14px;
`;

export default function() {
  return (
    <AppMain>
      <Title>Explore Airbnb</Title>
      <Cardone />
      <Title>Experiances</Title>
      <SeeAll>See all</SeeAll>
      <Card />
      <Title>Homes</Title>
      <Cardtwo />
      <Title>Popular reservations around the world</Title>
      <Cardthr />
      <Title>Featured destinations</Title>
      <Cardfour />
    </AppMain>
  );
}

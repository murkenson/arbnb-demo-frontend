import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Experiances/";
import Cardone from "./Explore/";
import Cardtwo from "./Homes/";
import Cardthr from "./PopReservation/";
import Cardfour from "./Destination/";

const AppMain = styled.main`
  position: relative;
  width: 100%;
  height: auto;
  padding-left: 81px;
  padding-right: 77px;
  font-size: 32px;
  line-height: 34px;
`;

export default function() {
  return (
    <AppMain>
      <Cardone />
      <Card />
      <Cardtwo />
      <Cardthr />
      <Cardfour />
    </AppMain>
  );
}

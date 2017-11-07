import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Experiance/Card";
import Cardone from "./Explore/Cardone";
import Cardtwo from "./Home/Cardtwo";
import Cardthr from "./PopReservation/Cardthr";
import Cardfour from "./Destination/Cardfour";

const AppMain = styled.main`
  position: relative;
  width: 100%;
  height: auto;
`;

export default function() {
  return (
    <AppMain>
      <h3>Explore Airbnb</h3>
      <Cardone />
      <h3>Experiances</h3>
      <Card />
      <h3>Homes</h3>
      <Cardtwo />
      <h3>Popular reservations around the world</h3>
      <Cardthr />
      <h3>Featured destinations</h3>
      <Cardfour />
    </AppMain>
  );
}

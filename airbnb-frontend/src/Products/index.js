import React, { Component } from "react";
import styled from "styled-components";
import Explore from "./Explore/";
import Experiances from "./Experiances/";
import Homes from "./Homes/";
import PopReservation from "./PopReservation/";
import Destination from "./Destination/";

const Main = styled.main`
  position: relative;
  width: 100%;
  height: auto;
  padding-left: 81px;
  padding-right: 77px;
  font-size: 32px;
  line-height: 34px;
  padding-bottom: 64px;
`;

export default function() {
  return (
    <Main>
      <Explore />
      <Experiances />
      <Homes />
      <PopReservation />
      <Destination />
    </Main>
  );
}

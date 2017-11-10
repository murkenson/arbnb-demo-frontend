import React, { Component } from "react";
import styled from "styled-components";
import Explore from "./Explore/";
import Experiances from "./Experiance/";
import Homes from "./Homes/";
import PopularReservation from "./PopReservation/";
import FutureDestination from "./Destination/";

const Wrapper = styled.div`
  font-family: "Circular", sans-serif;
  padding-bottom: 48px;
`;

export default function() {
  return (
    <Wrapper>
      <Explore />
      <Experiances />
      <Homes />
      <PopularReservation />
      <FutureDestination />
    </Wrapper>
  );
}

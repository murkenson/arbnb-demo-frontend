import React from "react";
import star from "./Star.svg";
import styled from "styled-components";
import { Ratings } from "./CommonStyles";

const Star = styled.img`
  width: 12px;
  height: 13px;
  margin-right: 4px;
`;

export default function() {
  return (
    <Ratings>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
    </Ratings>
  );
}

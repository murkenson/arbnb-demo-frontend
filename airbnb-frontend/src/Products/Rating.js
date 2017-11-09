import React from "react";
import star from "./Star.svg";
import styled from "styled-components";
import { Rating } from "./CommonStyles";

const Star = styled.img`
  width: 12px;
  height: 13px;
  margin-right: 4px;
`;

export default function() {
  return (
    <Rating>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
    </Rating>
  );
}

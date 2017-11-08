import React from "react";
import styled from "styled-components";
import {
  Card,
  WrapLink,
  Img,
  PriceInfo,
  Title,
  Description,
  Type,
  Amount,
  Ratio,
  Review
} from "./Styles";

const Pricing = styled.span`
  margin-top: 8px;
  font-family: "Circular-Light", sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

export default function(props) {
  return (
    <Card>
      <WrapLink href="">
        <Img src={props.image} alt="Home" />
        <Type>{props.type}</Type>
        <Title>{props.title}</Title>
        <Pricing>{props.prising}</Pricing>
      </WrapLink>
    </Card>
  );
}

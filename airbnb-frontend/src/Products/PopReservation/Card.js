import React from "react";
import styled from "styled-components";
import { PriseLight } from "../CommonStyles";

export const Card = styled.li`
  flex-basis: 23.27235%;
  display: flex;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const WrapLink = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #383838;
`;
const Title = styled.h3`
  margin-top: 2px;
  margin-bottom: 0px;
  flex-basis: 100%;
  font-family: "Circular-Light", sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

const Type = styled.span`
  margin-top: 12px;
  margin-bottom: 0;
  flex-basis: 100%;
  font-family: "Circular-Bold", sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;

export default function(props) {
  return (
    <Card>
      <WrapLink href="">
        <Img src={props.image} alt="PopReservation" />
        <Type>{props.type}</Type>
        <Title>{props.title}</Title>
        <PriseLight>{props.prising}</PriseLight>
      </WrapLink>
    </Card>
  );
}

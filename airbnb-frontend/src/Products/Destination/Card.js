import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardTitles } from "../CommonStyles";

const CardTitle = CardTitles.extend`
  margin: 0px 0px 4px;
  font-size: 18px;
  font-family: "Circular-Bold", sans-serif;
`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}

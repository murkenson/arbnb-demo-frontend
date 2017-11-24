import React from "react";
import styled from "styled-components";
import { CardImg, Card, CardTitles, Category } from "../CommonStyles";

const CardCategory = Category.extend``;

const CardTitle = CardTitles.extend`
  margin: 0px 0px 4px;
  font-size: 18px;
`;

const CardSubTitle = styled.div`
  font-family: "Circular-Air", sans-serif;
  margin-bottom: 6px;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  font-size: 18px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardCategory>{props.category}</CardCategory>
      <CardTitle>{props.title}</CardTitle>
      <CardSubTitle>About ${props.price} per person</CardSubTitle>
    </Card>
  );
}

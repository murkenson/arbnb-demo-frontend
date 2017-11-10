import React from "react";
import styled from "styled-components";
import Rating from "../Rating";
import { Card, CardImg } from "../CommonStyles";

const CardTitle = styled.div`
  line-height: normal;
  margin: 8px 0px 6px;
  font-size: 15px;
  color: #383838;
`;

const ReviewCounter = styled.div`
  font-family: "Circular-Air", sans-serif;
  line-height: normal;
  font-size: 12px;
  text-align: center;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.span`font-weight: bold;`;

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardTitle>
        <Price>${props.price}</Price> {props.title}
      </CardTitle>
      <Reviews>
        <Rating>
          <Rating />
        </Rating>
        <ReviewCounter>{props.review_count} reviews</ReviewCounter>
      </Reviews>
    </Card>
  );
}

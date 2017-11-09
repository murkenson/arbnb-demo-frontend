import React from "react";
import styled from "styled-components";
import Rating from "../Rating";

const Img = styled.img`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #ffffff;
`;

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
      <Img src={props.img} alt={props.alt} width="100%" />
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

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

const Reviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Category = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 8px 0px 2px;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
`;

const CardTitle = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 0px 0px 4px;
  font-size: 18px;
  color: #383838;
  font-family: "Circular-Bold", sans-serif;
`;

const CardSubTitle = styled.div`
  font-family: Circular;
  margin-bottom: 6px;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  font-size: 18px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;
const ReviewCounter = styled.div`
  font-family: Circular;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  font-family: "Circular-Book", sans-serif;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <CardTitle>
        ${props.price} {props.title}
      </CardTitle>
      <CardSubTitle>
        {props.type} · {props.bed_counter} beds
      </CardSubTitle>
      <Reviews>
        <Rating />
        <ReviewCounter>{props.review_count} · Superhost</ReviewCounter>
      </Reviews>
    </Card>
  );
}

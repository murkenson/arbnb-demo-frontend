import React from "react";
import styled from "styled-components";
import { Img, Link, PriceInfo, Title, Ratio, Review } from "./Styles";
import { Card } from "./Styles";
import StarIcon from "../Star.svg";

const Price = styled.span`
  margin-top: 8px;
  font-family: "Circular-Light", sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

const Star = styled.div`
  width: 12px;
  height: 13px;
  margin-right: 4px;
  background-image: url(${StarIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <PriceInfo>
          <Price>{props.price}</Price>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Ratio>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Review>{props.review}</Review>
        </Ratio>
      </Link>
    </Card>
  );
}

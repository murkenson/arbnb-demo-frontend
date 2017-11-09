import React from "react";
import styled from "styled-components";
import StarIcon from "../Star.svg";
import { PriceBold, Star } from "../CommonStyles";

const Card = styled.li`
  flex-basis: 23.27235%;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  color: #383838;
`;
const PriceInfo = styled.div`
  margin-top: 0;
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
`;
const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  display: inline;
  font-size: 15px;
  line-height: 18px;
  font-family: "Circular-Bold", sans-serif;
`;
const Rating = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: baseline;
`;
const Review = styled.span`
  margin-left: 8px;
  font-size: 12px;
  line-height: 14px;
  font-family: "Circular-Light", sans-serif;
`;

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Experiance" width="229" height="346" />
        <PriceInfo>
          <PriceBold>{props.price}</PriceBold>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Rating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Review>{props.review}</Review>
        </Rating>
      </Link>
    </Card>
  );
}

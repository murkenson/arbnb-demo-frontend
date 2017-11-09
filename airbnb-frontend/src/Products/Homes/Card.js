import React from "react";
import styled from "styled-components";
import StarIcon from "../Star.svg";
import { PriceBold, Star } from "../CommonStyles";

const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
`;

const CardLi = styled.li`
  flex-basis: 31.504%;
  display: flex;
`;
const Img = styled.img`
  width: 310px;
  height: 204px;
`;
const WrapLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  color: #383838;
`;
const PriceInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  display: inline;
  font-family: "Circular-Light", sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
`;

const Rating = styled.div`
  display: flex;
  margin-top: 6px;
`;

const Review = styled.span`
  margin-top: 2px;
  margin-left: 8px;
  font-size: 12px;
  line-height: 14px;
  font-family: "Circular-Light", sans-serif;
`;

export default function(props) {
  return (
    <Wrapper>
      <CardLi>
        <WrapLink href="">
          <Img src={props.image} alt="Home" />
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
        </WrapLink>
      </CardLi>
    </Wrapper>
  );
}

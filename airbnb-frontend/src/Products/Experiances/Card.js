import React from "react";
import styled from "styled-components";
import {
  Card,
  Img,
  Link,
  PriceInfo,
  Title,
  RatingStar,
  Review,
  Price
} from "./Styles";

import StarIcon from "../Star.svg";

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
        <RatingStar>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Review>{props.review}</Review>
        </RatingStar>
      </Link>
    </Card>
  );
}

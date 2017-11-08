import React from "react";
import styled from "styled-components";
import {
  Card,
  Img,
  Link,
  PriceInfo,
  Title,
  Ratio,
  Review,
  Price
} from "./Styles";

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
          <Review>{props.review}</Review>
        </Ratio>
      </Link>
    </Card>
  );
}

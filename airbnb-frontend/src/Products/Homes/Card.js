import React from "react";
import styled from "styled-components";
import { Card, Img, Link, PriceInfo, Title, Ratio, Review } from "./Styles";

const Price = styled.span`
  margin-top: 8px;
  font-family: "Circular-Light", sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
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
          <Review>{props.review}</Review>
        </Ratio>
      </Link>
    </Card>
  );
}

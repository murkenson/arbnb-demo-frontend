import styled from "styled-components";
import StarIcon from "./Star.svg";

export const PriceBold = styled.span`
  margin-top: 8px;
  font-size: 15px;
  line-height: 18px;
  font-family: "Circular-Bold", sans-serif;
  color: #383838;
`;

export const PriseLight = PriceBold.extend`
  font-family: "Circular-Light", sans-serif;
`;

export const Star = styled.div`
  width: 12px;
  height: 13px;
  margin-right: 4px;
  background-image: url(${StarIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function() {}

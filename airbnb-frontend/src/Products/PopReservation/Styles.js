import styled from "styled-components";

export const Card = styled.li`
  flex-basis: 23.27235%;
  display: flex;
`;

export const Img = styled.img`
  width: 229px;
  height: 164px;
`;
export const WrapLink = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #383838;
`;
export const Title = styled.h3`
  margin-top: 2px;
  margin-bottom: 0px;
  flex-basis: 100%;
  font-family: "Circular-Bold", sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

export const Type = styled.span`
  margin-top: 12px;
  margin-bottom: 0;
  flex-basis: 100%;
  font-family: "Circular-Bold", sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;
export const Pricing = styled.span`
  margin-top: 4px;
  flex-basis: 100%;
  font-family: "Circular-Light", sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

export default function() {}

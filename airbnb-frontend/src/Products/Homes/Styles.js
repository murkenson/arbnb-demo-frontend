import styled from "styled-components";

export const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
`;
export const Card = styled.li`
  flex-basis: 31.504%;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  color: #383838;
`;
export const PriceInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  font-family: "Circular-Bold", sans-serif;
  font-size: 15px;
  line-height: 18px;
`;

export const Description = styled.div`
  flex-basis: 100%;
  display: flex;
`;
export const Type = styled.span`
  font-family: CircularLight, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  margin-top: 2px;
`;
export const Amount = styled.span`
  margin: 2px 0px 0px 8px;
  font-family: "Circular-Light", sans-serif;
  font-size: 15px;
  line-height: 18px;
`;

export const Ratio = styled.div`
  display: flex;
  margin-top: 6px;
`;
export const Review = styled.span`
  margin-top: 2px;
  margin-left: 8px;
  font-family: "Circular-Light", sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

export default function() {}

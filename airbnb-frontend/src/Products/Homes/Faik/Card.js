import React from "react";
import styled from "styled-components";

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

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <Category>{props.category}</Category>
      <CardTitle>{props.title}</CardTitle>
      <CardSubTitle>About ${props.price} per person</CardSubTitle>
    </Card>
  );
}

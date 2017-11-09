import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 72px;
  width: 96px;
  @media (max-width: 400px) {
    height: 78px;
    width: 144px;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const CardTitle = styled.p`
  padding-left: 24px;
  font-family: Circular;
  line-height: normal;
  font-size: 17px;
  font-weight: bold;
  color: #383838;
`;

const Pic = styled(Img)`
  border-radius: 3px 0px 0px 3px;
  margin: -1px;
`;

export default function(props) {
  return (
    <Card>
      <Pic src={props.img} alt={props.alt} />
      <CardTitle>{props.title}</CardTitle>
    </Card>
  );
}

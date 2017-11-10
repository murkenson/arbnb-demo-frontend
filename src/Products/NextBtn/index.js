import React, { Component } from "react";
import styled from "styled-components";
import NextBtn from "./next-page.svg";

const Next = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NextButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0px;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  background: #ffffff url(${NextBtn}) no-repeat;
  background-position: center center;
  background-size: auto 10px;
  transform: scale(2, 2);
  box-sizing: border-box;

  top: ${props => (props.top ? props.top : "auto")}px;
`;

export default function(props) {
  return (
    <Next>
      <NextButton top={props.top} />
    </Next>
  );
}

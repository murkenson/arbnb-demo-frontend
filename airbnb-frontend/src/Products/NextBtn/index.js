import React, { Component } from "react";
import styled from "styled-components";
import NextBtn from "./NextBtn.svg";

const NavBtn = styled.button`
  position: absolute;
  top: 35%;
  right: -10px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: #ffffff;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  width: 10px;
  height: 18px;
`;

export default props => (
  <NavBtn className={props.className}>
    <Img src={NextBtn} alt="Next slide" />
  </NavBtn>
);

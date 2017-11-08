import React, { Component } from "react";
import styled from "styled-components";

import RightIcon from "./RightIcon.svg";

const SeeAllBtn = styled.a`
  position: relative;
  display: block;
  padding-right: 15px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  text-decoration: none;
  color: #383838;
`;

const BtnPic = styled.img`
  position: absolute;
  width: 6px;
  height: 10px;
  right: 2px;
  top: 7px;
`;

export default () => (
  <SeeAllBtn href="#">
    See all
    <BtnPic src={RightIcon} />
  </SeeAllBtn>
);

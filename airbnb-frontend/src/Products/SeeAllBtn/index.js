import React, { Component } from "react";
import styled from "styled-components";
import RightIcon from "./RightIcon.svg";

const SeeAllBtn = styled.div`
  position: relative;
  display: block;
  padding-right: 15px;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  font-family: "Circular-Book", sans-serif;
  color: #383838;
`;

const BtnPic = styled.img`
  position: absolute;
  top: 7px;
  width: 6px;
  height: 10px;
  right: 2px;
`;

export default function() {
  return (
    <SeeAllBtn href="#">
      See all
      <BtnPic src={RightIcon} />
    </SeeAllBtn>
  );
}

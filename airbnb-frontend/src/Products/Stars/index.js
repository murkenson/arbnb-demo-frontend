import React, { Component } from "react";
import styled from "styled-components";
import StarPic from "../Stars.svg";
import Card from "./Card";

const Rating = styled.span`
  display: inline-block;
  width: 76px;
  height: 13px;
  margin-right: 8px;
`;

const Reviews = styled.p`margin: 0;`;

export default props => (
  <Reviews>
    <Rating>
      <img width="76" height="13" src={StarPic} alt="5 stars" />
    </Rating>{" "}
    />
    <Count content={props.content} />
  </Reviews>
);

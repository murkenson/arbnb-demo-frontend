import React, { Component } from "react";
import styled from "styled-components";

const Count = styled.span`
  font-family: "Circular Air Book", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

export default props => <Count>{props.content}</Count>;

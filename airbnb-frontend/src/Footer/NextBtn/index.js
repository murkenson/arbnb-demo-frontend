import React, { Component } from "react";
import styled from "styled-components";
import { Next, NextButton } from "../Styles";

export default function(props) {
  return (
    <Next>
      <NextButton top={props.top} />
    </Next>
  );
}

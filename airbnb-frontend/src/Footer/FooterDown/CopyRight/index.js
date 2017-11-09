import React, { Component } from "react";
import styled from "styled-components";
import FooterLogo from "./FooterLogo.svg";

const FooterLogoSection = styled.a`
  display: block;
  position: relative;
  padding-left: 32px;
  text-decoration: none;
  margin-right: auto;
`;
const FooterLogoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 21px;
  height: 22px;
`;

const Desc = styled.span`
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 15px;
  color: #636363;
`;

export default () => (
  <FooterLogoSection href="#">
    <FooterLogoContainer>
      <img src={FooterLogo} alt="Airbnb" />
    </FooterLogoContainer>
    <Desc>© Airbnb Inc.</Desc>
  </FooterLogoSection>
);

import React from "react";
import logo from "../Assets/logo.svg";
import styled from "styled-components";
import Navigation from "./Navigation";
import InputSearch from "./InputSearch";

const Header = styled.header`
  width: 100%;
  padding: 16px 0;
  box-shadow: 0px 1px 0px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;
const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

export default function() {
  return (
    <Header>
      <Wrapper>
        <Logo src={logo} alt="logo" />
        <InputSearch />
        <Navigation />
      </Wrapper>
    </Header>
  );
}

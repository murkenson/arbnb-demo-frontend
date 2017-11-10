import React from "react";
import Logo from "../Assets/Logo.svg";
import DropDown from "../Assets/DropDown.svg";
import styled from "styled-components";
import Navigation from "./Navigation";
import InputSearch from "./InputSearch";

const LogoIcon = styled.img`
  width: 30px;
  height: 32px;
  cursor: pointer;
`;

const DropDownIcon = styled.img`
  background: #ffffff;
  position: relative;
  margin-bottom: 11px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-flex;
  }
`;

const Container = styled.div`
  max-width: 1124px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 0px 8px;
  flex-basis: ${props => (props.size ? props.size / 12 * 100 : "8.33333333")}%;
  @media screen (max-width: 767px) {
    flex-basis: 33%;
  }
`;

const Offset = styled(Column)``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  box-sizing: border-box;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 0px;
  margin-bottom: 0px;
  background: #484848;
  mix-blend-mode: normal;
  opacity: 0.25;
`;

export default function() {
  return (
    <Container>
      <Row>
        <Column size="1">
          <LogoIcon src={Logo} alt="logo" />
          <DropDownIcon src={DropDown} alt="icon" />
        </Column>
        <Column size="5">
          <InputSearch />
        </Column>
        <Offset size="2" />
        <Column size="4">
          <Navigation />
        </Column>
      </Row>
      <Row>
        <Column size="12">
          <Line />
        </Column>
      </Row>
    </Container>
  );
}

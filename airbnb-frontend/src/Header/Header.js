import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import Navigation from "./Navigation";

const HeaderLine = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const ImgLogo = styled.img`margin: 24px 51px 21px 80px;`;

const ImgLink = styled.div`display: flex;`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margit-bottom: 20px;
`;
const Col1 = styled.div`flex-basis: 8.3333%;`;
const Col5 = styled.div`flex-basis: 58.3333%;`;
const Col6 = styled.div`
  flex-basis: 33.3333%;
  padding-right: 71px;
  box-sizing: border-box;
`;

export default function() {
  return (
    <HeaderLine>
      <Row>
        <Col1>
          <ImgLink href="#">
            <ImgLogo src={logo} alt="logo" />
          </ImgLink>
        </Col1>
        <Col5>
          <InputSearch />
        </Col5>{" "}
        <Navigation />
      </Row>
    </HeaderLine>
  );
}

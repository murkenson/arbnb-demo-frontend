import React, { Component } from "react";
import styled from "styled-components";
import ArrownDown from "./ArrownDown.png";

const Footer = styled.footer`
  width: 100%;
  padding: 48px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;
const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
`;
const FooterWrapper = Wrapper.extend`
  display: flex;
  justify-content: space-between;
`;

const Col1 = styled.div`flex-basis: 8.3333%;`;
const Col2 = styled.div`flex-basis: 58.3333%;`;
const Col3 = styled.div`
  flex-basis: 33.3333%;
  padding-left: 81px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NavLinks = styled.nav`
  position: relative;
  display: inline-block;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-size: 0.75rem;
  color: #636363;
`;

const Title = styled.h3`
  margin-top: 0;
  font-family: CircularBold, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

const Settings = styled.div`flex-basis: 23.27235%;`;

const DropDown = styled.div`
  position: relative;
  margin-bottom: 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  &::after {
    position: absolute;
    content: "";
    width: 16px;
    height: 9px;
    top: 20px;
    right: 16px;
    background-image: url(${ArrownDown});
    background-position: 0 0;
    background-size: cover;
  }
`;
const DropDownSelect = styled.select`
  border: none;
  width: 100%;
  padding: 12px 50px 12px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: "Circular-Air", sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

export default function() {
  return (
    <Footer>
      <FooterWrapper>
        <NavLinks>
          <Settings>
            <DropDown>
              <DropDownSelect name="lang" id="lang">
                <option value="eng">English</option>
                <option value="rus">Russian</option>
                <option value="isp">Ispanion</option>
                <option value="grm">German</option>
              </DropDownSelect>
            </DropDown>
            <DropDown>
              <DropDownSelect>
                <option value="">United State Dollars</option>
                <option value="">Roubles</option>
                <option value="">Evro</option>
              </DropDownSelect>
            </DropDown>
          </Settings>
        </NavLinks>
        <NavLinks>
          <Col1 className="col-2">
            <Title>Airbnb</Title>
            <Link href="#">About us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
            <Link href="#">Policies</Link>
            <Link href="#">Help</Link>
            <Link href="#">Diversity &amp; Belonging</Link>
          </Col1>
        </NavLinks>
        <NavLinks>
          <Col1 className="col-3">
            <Title>Discover</Title>
            <Link href="#">Trust &amp; Safety</Link>
            <Link href="#">Travel Credit</Link>
            <Link href="#">Gift Cards</Link>
            <Link href="#">Airbnb Citizen</Link>
            <Link href="#">Business Travel</Link>
            <Link href="#">Guidebooks</Link>
            <Link href="#">Airbnbmag</Link>
          </Col1>
        </NavLinks>
        <NavLinks>
          <Col1 className="col-4">
            <Title>Hosting</Title>
            <Link href="#">Why Host</Link>
            <Link href="#">Hospitality</Link>
            <Link href="#">Responsible Hosting</Link>
            <Link href="#">Community Center</Link>
          </Col1>
        </NavLinks>
      </FooterWrapper>
    </Footer>
  );
}

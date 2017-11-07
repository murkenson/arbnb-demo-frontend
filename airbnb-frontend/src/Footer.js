import React, { Component } from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  border-top: 1px solid #ccc;
  display: block;
  background-color: #ffffff;
  margin-top: 60px;
  padding: 60px 0;
`;
const Col1 = styled.div`
  flex-basis: 25%;
  padding-left: 81px;
  box-sizing: border-box;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  color: #383838;
  background-repeat: no-repeat;
  background-position: 15px;
  padding: 0.5em;
  margin: 0.5em;
  padding-left: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  width: 229px;
  height: 48px;
  font-size: 24px;
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
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
`;

export default function() {
  return (
    <AppFooter>
      <Row>
        <NavLinks>
          <div>
            <Col1 className="col-1">
              <Input placeholder="English" type="text" />
              <Input placeholder="United States Dollars" type="text" />
            </Col1>
          </div>
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
      </Row>
    </AppFooter>
  );
}

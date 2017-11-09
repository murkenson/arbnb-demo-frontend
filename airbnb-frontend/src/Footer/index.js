import React, { Component } from "react";
import styled from "styled-components";
import FooterDown from "./FooterDown";
import {
  Container,
  Row,
  LineTop,
  Column,
  DropDown,
  DropDownSelect,
  Link,
  Title
} from "./Styles";

export default function() {
  return (
    <Container>
      <LineTop />
      <Row>
        <Column size="12" />
      </Row>
      <Row>
        <Column size="3">
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
        </Column>
        <Column size="1" />
        <Column size="2">
          <Title>Airbnb</Title>
          <Link href="#">About us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Press</Link>
          <Link href="#">Policies</Link>
          <Link href="#">Help</Link>
          <Link href="#">Diversity &amp; Belonging</Link>
        </Column>
        <Column size="1" />
        <Column size="2">
          <Title>Discover</Title>
          <Link href="#">Trust &amp; Safety</Link>
          <Link href="#">Travel Credit</Link>
          <Link href="#">Gift Cards</Link>
          <Link href="#">Airbnb Citizen</Link>
          <Link href="#">Business Travel</Link>
          <Link href="#">Guidebooks</Link>
          <Link href="#">Airbnbmag</Link>
        </Column>
        <Column size="1" />
        <Column size="2">
          <Title>Hosting</Title>
          <Link href="#">Why Host</Link>
          <Link href="#">Hospitality</Link>
          <Link href="#">Responsible Hosting</Link>
          <Link href="#">Community Center</Link>
        </Column>
      </Row>
      <Row>
        <Column size="12">
          <FooterDown />
        </Column>
      </Row>
    </Container>
  );
}

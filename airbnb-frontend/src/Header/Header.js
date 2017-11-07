import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Search from "./Path.png";

const Input = styled.input`
  background-image: url({Search});
  background-repeat: no-repeat;
  text-indent: 20px;
  background-position: 15px;
  padding: 0.5em;
  margin: 0.5em;
  padding-left: 50px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  width: 392px;
  font-size: 24px;
`;

const ImgLogo = styled.img`align-items: center;`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margit-bottom: 20px;
`;
const Col1 = styled.div`flex-basis: 8.3333%;`;
const Col2 = styled.div`flex-basis: 58.3333%;`;
const Col3 = styled.div`
  flex-basis: 33.3333%;
  list-style: none;
  margin: 0;
`;
const Ul = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  padding: 15px;
`;
const Link = styled.li`
  text-decoration: none;
  font-size: 14px;
  color: #383838;
`;

export default function() {
  return (
    <div className="main">
      <div className="headerContainer">
        <header className="App-header">
          <Row className="rowHeader">
            <Col1 className="col-1">
              <ImgLogo src={logo} alt="logo" />
            </Col1>
            <Col2 className="col-2">
              <Input placeholder="Try &quot;Miami&quot;" type="text" />
            </Col2>
            <Col3>
              <Ul className="col-3">
                <Link href="#">Become a host</Link>
                <Link href="#">Become a host</Link>
                <Link href="#">Become a host</Link>
                <Link href="#">Become a host</Link>
              </Ul>
            </Col3>
          </Row>
        </header>
      </div>
    </div>
  );
}

import React, { Component } from "react";
import styled from "styled-components";

const Company = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  list-style: none;
  margin: 0;
  margin-right: 12px;
  padding: 0;
`;

const ListItem = styled.li`margin-left: 16px;`;

const ListLink = styled.a`
  text-decoration: none;
  font-family: "Circular Air", "Arial", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 15px;
  color: #636363;
`;

export default () => (
  <Company>
    <ListItem>
      <ListLink href="#">Terms</ListLink>
    </ListItem>
    <ListItem>
      <ListLink href="#">Privacy</ListLink>
    </ListItem>
    <ListItem>
      <ListLink href="#">Site map</ListLink>
    </ListItem>
  </Company>
);

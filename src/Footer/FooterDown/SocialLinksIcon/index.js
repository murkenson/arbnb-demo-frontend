import React, { Component } from "react";
import styled from "styled-components";

const SocialArrayIcon = [
  require("./img/facebook.svg"),
  require("./img/twitter.svg"),
  require("./img/instagram.svg")
];

const Socials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`margin-left: 12px;`;

const ListLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  text-decoration: none;
  background-image: url(${props => props.pic});
  background-repeat: no-repeat;
  background-position: 0 0;
`;

const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export default () => (
  <Socials>
    <ListItem>
      <ListLink pic={SocialArrayIcon[0]} href="#">
        <HiddenText>Facebook</HiddenText>
      </ListLink>
    </ListItem>
    <ListItem>
      <ListLink pic={SocialArrayIcon[1]} href="#">
        <HiddenText>Twitter</HiddenText>
      </ListLink>
    </ListItem>
    <ListItem>
      <ListLink pic={SocialArrayIcon[2]} href="#">
        <HiddenText>Instagram</HiddenText>
      </ListLink>
    </ListItem>
  </Socials>
);

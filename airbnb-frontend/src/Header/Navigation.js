import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, Helvetica, sans-serif;
  font-size: 14px;
  color: #383838;
`;
const Nav = styled.nav`
  padding-top: 11px;
  width: 31.12033%;
  float: right;
  display: flex;
  justify-content: space-between;
`;

class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <Link href="#">Become a host</Link>
        <Link href="#">Help</Link>
        <Link href="#">Sign Up</Link>
        <Link href="#">Sign In</Link>
      </Nav>
    );
  }
}

export default Navigation;

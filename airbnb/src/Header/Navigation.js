import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
  color: #383838;
`;
const Navigate = styled.nav`
  color: #383838;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    position: relative;
    display: none;
    float: auto;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Navigate>
        <Link href="#">Become a host</Link>
        <Link href="#">Help</Link>
        <Link href="#">Sign Up</Link>
        <Link href="#">Sign In</Link>
      </Navigate>
    );
  }
}

export default Navigation;

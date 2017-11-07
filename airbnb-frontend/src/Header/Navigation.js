import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const NavUl = styled.ul`
  list-style: none;
  display: flex;
`;
const NavLi = styled.li`margin-left: 18px;`;
const NavA = styled.a`
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavUl>
        <NavLi>
          <NavA>Become a host</NavA>
        </NavLi>
        <NavLi>
          <NavA>Help</NavA>
        </NavLi>
        <NavLi>
          <NavA>Sign Up</NavA>
        </NavLi>
        <NavLi>
          <NavA>Log In</NavA>
        </NavLi>
      </NavUl>
    );
  }
}

export default Navigation;

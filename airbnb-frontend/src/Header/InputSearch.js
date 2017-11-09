import React from "react";
import styled from "styled-components";
import SearchIcon from "../Assets/Search.svg";

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  border: 0px;
  width: 100%;
  color: #383838;
  opacity: 0.64;
  font-family: inherit;
  padding-left: 54px;
  outline: none;
  background: url(${SearchIcon}) 16px center no-repeat;
  @media (max-width: 400px) {
  }
`;

class InputSearch extends React.Component {
  render() {
    return (
      <Form>
        <SearchInput type="search" placeholder="Try &quot;Miami&quot;" />
      </Form>
    );
  }
}

export default InputSearch;

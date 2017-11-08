import React from "react";
import styled from "styled-components";
import searchicon from "../Assets/Search.svg";

const Form = styled.form`
  display: inline-block;
  margin-left: 51px;
  width: 392px;
  position: relative;
`;
const Search = styled.input`
  width: 100%;
  padding: 12px 53px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  font-family: CircularBook, Helvetica, sans-serif;
  color: #383838;
  font-size: 16px;
`;
const SearchIcon = styled.button`
  position: absolute;
  border: none;
  width: 20px;
  height: 20px;
  right: 356px;
  top: 12px;
  background-color: transparent;
  background-image: url(${searchicon});
  backround-repeat: no-repeat;
  background-size: cover;
`;

class InputSearch extends React.Component {
  render() {
    return (
      <Form>
        <Search type="search" placeholder="Try Miami" />
        <SearchIcon type="submit" />
      </Form>
    );
  }
}

export default InputSearch;

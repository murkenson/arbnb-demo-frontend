import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import search from "./Search.png";

const InputSmt = styled.input`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 15px;
  padding: 0.5em;
  margin: 0.5em;
  padding-left: 50px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  width: 392px;
  font-size: 24px;
`;
/**const InputForm = styled.input`
  max-width: 390px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: #fff;
  margin: 16px 188px 16px 0;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
`;**/
const InputMenu = styled.div`
  margin: 12px 17px 12px 16px;
  line-height: 20px;
  display: flex;
`;
const InputText = styled.p`
  color: #383838;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
`;

class InputSearch extends React.Component {
  render() {
    return (
      <div>
        <InputSmt placeholder="Try &quot;Miami&quot;" type="text" />
      </div>
    );
  }
}

export default InputSearch;

import styled from "styled-components";
import ArrownDown from "./DropDown.svg";
import NextBtn from "../Assets/next-page.svg";

export const Container = styled.div`
  max-width: 1124px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;
export const LineTop = styled.hr`
  border: 0;
  height: 1px;
  background: #484848;
  mix-blend-mode: normal;
  opacity: 0.25;
  margin-top: 64px;
  margin-bottom: 48px;
`;

export const Column = styled.div`
  box-sizing: border-box;
  padding: 0px 8px;
  flex-basis: ${props => (props.size ? props.size / 12 * 100 : "8.33333333")}%;
`;

export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  font-size: 0.75rem;
  color: #636363;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 16px;
  color: #383838;
  font-family: "Circular-Bold", sans-serif;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const DropDown = styled.div`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  &::after {
    position: absolute;
    content: "";
    width: 16px;
    height: 9px;
    top: 20px;
    right: 16px;
    background-image: url(${ArrownDown});
    background-position: 0 0;
    background-size: cover;
  }
`;
export const DropDownSelect = styled.select`
  border: none;
  width: 100%;
  padding: 12px 50px 12px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  font-family: "Circular-Air", sans-serif;
`;
export const Next = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const NextButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0px;
  top: ${props => (props.top ? props.top : "auto")}px;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  background: #ffffff url(${NextBtn}) no-repeat;
  background-position: center center;
   background-size: auto 10px;
  transform: scale(2,2)
  box-sizing: border-box;
`;
export default function() {}

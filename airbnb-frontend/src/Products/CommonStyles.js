import styled from "styled-components";
import StarIcon from "./Star.svg";

export const Star = styled.div`
  width: 12px;
  height: 13px;
  margin-right: 4px;
  background-image: url(${StarIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Column = styled.div`
  box-sizing: border-box;
  padding: 0px 8px;
  flex-basis: ${props => (props.size ? props.size / 12 * 100 : "8.33333333")}%;
  `;

export const Title = styled.h2`
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  font-family: "Circular-Bold", sans-serif;
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;

export const Ratings = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Row = Ratings.extend`align-items: center;`;

export const Cards = Ratings.extend`align-items: flex-start;`;

export const Container = styled.div`
  max-width: 1124px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;
export const CardTitles = styled.p`
  line-height: normal;
  font-weight: bold;
  color: #383838;
`;

export const CardImg = styled.img`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
`;

export const Card = Cards.extend`
  box-sizing: border-box;
  flex-direction: column;
  background: #ffffff;
`;

export const Category = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 8px 0px 2px;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
`;

export default function() {}

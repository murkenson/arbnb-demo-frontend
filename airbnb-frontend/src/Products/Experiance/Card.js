import React, { Component } from "react";
import styled from "styled-components";
import expone from "./expone.png";
import exptwo from "./exptwo.png";
import expthr from "./expthr.png";
import expfour from "./expfour.png";
import Star from "./Star.svg";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 7.2%;
  padding-right: 7.2%;
`;
const Col = styled.div`
  flex-basis: 25%;

  box-sizing: border-box;
`;

const Img = styled.img`
  display: block;
  width: 229px;
  height: 346.88px;
`;

const StarBotton = styled.img`
  width: 12px;
  height: 12.03px;
  padding: 4px;
`;
const FeedbackLike = styled.div`margin: 0 4px 0 0;`;

const FeedbackReview = styled.div`
  font-family: "Circular-Book", sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const ConetentFeedback = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

class Card extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <div>
            <Img src={expone} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <ConetentFeedback>
              <FeedbackLike>
                <StarBotton src={Star} alt="Star" />
                <StarBotton src={Star} alt="Star" />
                <StarBotton src={Star} alt="Star" />
                <StarBotton src={Star} alt="Star" />
                <StarBotton src={Star} alt="Star" />
              </FeedbackLike>
              <FeedbackReview>44 reviews</FeedbackReview>
            </ConetentFeedback>
            <StarBotton src={Star} alt="Card" />
          </div>
        </Col>
        <Col>
          <div>
            <Img src={exptwo} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={expthr} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
        <Col>
          <div>
            <Img src={expfour} alt="Card" />
            <p>
              <strong>$29</strong> Forest therapy
            </p>
            <p>44 reviews</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Card;

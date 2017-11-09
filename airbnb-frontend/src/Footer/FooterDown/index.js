import React, { Component } from "react";
import styled from "styled-components";
import CopyRight from "./CopyRight";
import SocialLinks from "./SocialLinksIcon";
import ContentInfo from "./ContentInfo";

const FooterDown = styled.section`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  min-height: 88px;
  margin-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default () => (
  <FooterDown>
    <CopyRight />
    <Container>
      <ContentInfo />
      <SocialLinks />
    </Container>
  </FooterDown>
);

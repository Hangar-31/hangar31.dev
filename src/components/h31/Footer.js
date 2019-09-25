/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";

// Images
import ImgFooterBackground from "../../images/background/footer-layer-1.png";
import ImgLogo from "../images/ImgLogo";
import Link1 from "./base/Link1";
import Text1 from "./base/Text1";

// Components

const Container = styled.section`
  position: relative;
  height: 1000px;
  width: 100%;
  background: url(${ImgFooterBackground}) no-repeat center top/cover, linear-gradient(180deg, transparent 0%, #49E9FF 100%);
`;

const Wrapper = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  display: block;
  width: 100%;
  height: 300px;
  max-width: 1200px;
`

export default () => (
  <Container>
    <Wrapper>
      <ImgLogo cssProp={`
        max-width: 150px;
        margin-bottom: 15px;
      `}
      />
      <Text1>
        HANGAR 31 LLC - COPYRIGHT © 2019
      </Text1>
      <Link1 />
    </Wrapper>
  </Container>
);

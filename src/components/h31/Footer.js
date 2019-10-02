/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";

// Images
import ImgLogo from "../images/ImgLogo";

// Components
import Text1 from "./base/Text1";
import AnimeFooterBackground from "./animations/AnimeFooterBackground";

// Styled Components
const Container = styled.section`
  position: relative;
  z-index: 2;
  height: 1000px;
  width: 100%;
  background: linear-gradient(180deg, transparent 0vw, transparent 12.3vw,  #FFFFFF 12.31vw, #FFFFFF 16.31vw, transparent 100%);
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

    <AnimeFooterBackground />

    <Wrapper>
      <ImgLogo cssProp={`
        max-width: 150px;
        margin-bottom: 15px;
      `}
      />
      <Text1>
        HANGAR 31 LLC - COPYRIGHT © 2019
      </Text1>
    </Wrapper>
  </Container>
);

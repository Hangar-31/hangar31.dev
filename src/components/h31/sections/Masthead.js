/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Images
import ImgLogo from "../../images/ImgLogo";

// Components
import TitleLogo from "../base/TitleLogo";

// Styled Components
const Container = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: calc(80vh - 100px);
  
  transform: translateY(calc(-80vh + 100px));
`;

const WrapperLogo = styled.section`
  width: 24%;
  max-width: 350px;
  min-width: 175px;
  margin-bottom: 30px;
`

export default () => (
  <Container>
    <WrapperLogo>
      <ImgLogo />
    </WrapperLogo>
    <TitleLogo
      css={css`
        font-size: 2.25rem;
        @media (max-width: 1366px) {
          font-size: 2rem;
        }
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      `}
    >
      Website Design & Development
    </TitleLogo>
  </Container>
);

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
  transform: translateY(-30vw);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30vw;
  width: 100%;
`;

const WrapperLogo = styled.section`
  width: 30%;
  max-width: 350px;
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
      `}
    >
      Website Design & Development
    </TitleLogo>
  </Container>
);

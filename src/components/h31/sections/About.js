/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import Fade from "react-reveal";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Text1 from "../base/Text1";
import _configSite from "../../_configSite";

export default () => (
  <Container>
    <Wrapper
      css={css`
        display: block;
        > .react-reveal {
          ${Wrapper.__emotion_styles}
          padding: 0 !important;
        }
      `}
    >
      <Fade bottom>
        <Title2
          css={css`
          grid-column: 3 / span 8;
          @media (max-width: ${_configSite.md}px) {
            grid-column: 2 / span 10; 
          }
          @media (max-width: ${_configSite.xs}px) {
            grid-column: 1 / span 12;
          }
        `}
        >
        RAJDHANI REGULAR 30PT ALL CAPS - HEADERS
        </Title2>
        <Text1
          css={css`
          grid-column: 3 / span 8;
          @media (max-width: ${_configSite.md}px) {
            grid-column: 2 / span 10; 
          }
          @media (max-width: ${_configSite.xs}px) {
            grid-column: 1 / span 12;
          }
        `}
        >
        Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit elementum diam iaculis imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pulvinar ultrices tortor, a tincidunt risus fermentum in. Nam maximus nunc quam. Pellentesque at posuere ipsum. Etiam volutpat faucibus eros, a sagittis nulla cursus sed. Mauris eget nisi vestibulum, feugiat lacus vitae, dictum nisl.
        </Text1>
        <div css={css`
          height: 300px;
          width: 100%;
          background: grey;
          margin-bottom: 30px;
          grid-column: 3 / span 8;
          @media (max-width: ${_configSite.md}px) {
            grid-column: 2 / span 10; 
          }
          @media (max-width: ${_configSite.xs}px) {
            grid-column: 1 / span 12;
          }
        `}
        />
        <Text1
          css={css`
          grid-column: 3 / span 8;
          @media (max-width: ${_configSite.md}px) {
            grid-column: 2 / span 10; 
          }
          @media (max-width: ${_configSite.xs}px) {
            grid-column: 1 / span 12;
          }
        `}
        >
        Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit elementum diam iaculis imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pulvinar ultrices tortor, a tincidunt risus fermentum in. Nam maximus nunc quam. Pellentesque at posuere ipsum. Etiam volutpat faucibus eros, a sagittis nulla cursus sed. Mauris eget nisi vestibulum, feugiat lacus vitae, dictum nisl.
        </Text1>
      </Fade>
    </Wrapper>
  </Container>
);

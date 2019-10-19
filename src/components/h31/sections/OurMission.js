import React from "react";
import { css } from "@emotion/core";

// Components
import Subtitle1 from "../base/Subtitle1";
import Container from "../layouts/Container";
import Text1 from "../base/Text1";
import Title2 from "../base/Title2";
import Wrapper from "../layouts/Wrapper";

// Images
import ImgAirplaneWindow from "../../images/_home/ImgAirplaneWindow";

export default () => (
  <Container>
    <Wrapper
      css={css`
        padding-top: 400px;
        padding-bottom: 275px;
        max-width: 992px;
        @media (max-width: 1280px) {
          padding-top: 300px;
          padding-bottom: 225px;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-gap: 15px;
          grid-column: 2 / span 6;
          grid-auto-rows: min-content;
          grid-row-gap: 30px;
        `}
      >
        <Subtitle1
          css={css`
            grid-column: 1 / full;
            grid-column-end: inherit;
          `}
        >
          Our Mission
        </Subtitle1>

        <div
          css={css`
            grid-column: 2 / span 5;
            > * {
              grid-column-end: inherit;
            }
          `}
        >
          <Title2>Crafting Digital Experiences</Title2>

          <Text1>
            We aim to bring you and your audience closer through creatively
            tailored websites, that host some serious power under the hood!
          </Text1>

          <Text1>
            Add in the ability to scale as you grow, along with our dedication
            to long-term support, and you&apos;ve got yourself a solid flight
            plan for your online journey!
          </Text1>
        </div>
      </div>

      <ImgAirplaneWindow
        cssProp={`
          border: 5px solid #313131;
          border-radius: 50%;
          box-shadow: 8px 8px 16px rgba(0,0,0,0.4);
          grid-column: 9 / span 3;
        `}
      />
    </Wrapper>
  </Container>
);

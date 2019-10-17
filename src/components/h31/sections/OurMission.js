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
          <Title2>This is a test title area</Title2>

          <Text1>
            Turning personal visions into amazing digital experiences. Our goal
            is to bring you and your audience closer, through creatively
            personal design, and seriously powerful technology!
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

import React from "react";
import { css } from "@emotion/core";
import Fade from "react-reveal";

// Components
import Subtitle1 from "../base/Subtitle1";
import Container from "../layouts/Container";
import Text1 from "../base/Text1";
import Title2 from "../base/Title2";
import Wrapper from "../layouts/Wrapper";
import AnimeAirplaneWing from "../animations/AnimeAirplaneWing";

export default () => (
  <Container>
    <Wrapper
      css={css`
        padding-top: 400px;
        padding-bottom: 275px;
        max-width: 992px;

        > .react-reveal:nth-of-type(1) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-gap: 15px;
          grid-column: 2 / span 6;
          grid-auto-rows: min-content;
          grid-row-gap: 30px;
        }
        > .react-reveal:nth-of-type(2) {
          display: block;
          z-index: -1;
          position: absolute;
          width: 1200px;
          bottom: -130px;
          right: -630px;
        }

        @media (max-width: 1280px) {
          padding-top: 300px;
          padding-bottom: 225px;
        }
      `}
    >
      <Fade left>
        <div>
          <Subtitle1
            css={css`
              grid-column: 1 / full;
              grid-column-end: inherit;
              margin-left: -5px;
            `}
          >
            Our Mission
          </Subtitle1>
          <div
            css={css`
              grid-column: 1 / span 6;
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
      </Fade>

      <Fade bottom>
        <AnimeAirplaneWing />
      </Fade>
    </Wrapper>
  </Container>
);

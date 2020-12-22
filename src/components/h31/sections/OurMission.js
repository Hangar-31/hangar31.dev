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
import _configSite from "../../_configSite";

export default () => (
  <Container
    css={css`
      overflow: hidden;
    `}
  >
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
          overflow-x: hidden;
        }

        @media (max-width: 1280px) {
          padding-top: 300px;
          padding-bottom: 225px;
        }
        @media (max-width: ${_configSite.md}px) {
          padding-top: 200px;
          padding-bottom: 125px;
          > .react-reveal:nth-of-type(1) {
            display: block;
            grid-column: 2 / span 10;
          }
        }
        @media (max-width: ${_configSite.xs}px) {
          > .react-reveal:nth-of-type(1) {
            display: block;
            grid-column: 1 / span 12;
          }
        }
      `}
    >
      <Fade left>
        <div>
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
              grid-column: 1 / span 6;
              > * {
                grid-column-end: inherit;
              }
            `}
          >
            <Title2>Solving Problems With Web Technology</Title2>

            <Text1
              css={css`
                text-align: left;
              `}
            >
              We assist companies and individuals develop web solutions that
              save time, scale for growth, and solve business problems. We
              accomplish this by translating visions and ideas into tailored,
              web based tools that utilize cutting-edge technology. We also work
              with non-technical clients by helping them understand and
              strategize how to leverage the web to solve existing problems.
            </Text1>
          </div>
        </div>
      </Fade>

      <AnimeAirplaneWing />
    </Wrapper>
  </Container>
);

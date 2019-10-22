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
            <Title2>LET YOUR WEBSITE TAKE FLIGHT</Title2>

            <Text1
              css={css`
                text-align: justify;
              `}
            >
              Welcome to Hangar 31! Chances are, you’re here looking for the
              right team to help create a standout website that captivates your
              visitors. And as it happens, it’s our passion to bring that vision
              to life! By crafting unique and tailored digital experiences, we
              aim to bring you and your audience closer. Through creative
              design, some seriously powerful technology, and a commitment to
              long-term support, we look forward to helping your business soar!
            </Text1>
          </div>
        </div>
      </Fade>

      <AnimeAirplaneWing />
    </Wrapper>
  </Container>
);

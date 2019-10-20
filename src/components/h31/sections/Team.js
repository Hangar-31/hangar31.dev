import React from "react";
import { css } from "@emotion/core";
import Fade from "react-reveal";

// Config
import _configSite from "../../_configSite";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title1 from "../base/Title1";
import CardTeammates from "../cards/CardTeammates";

export default ({ bios }) => (
  <Container>
    <Wrapper
      css={css`
        display: block;
        > .react-reveal {
          ${Wrapper._emotion_styles}
          padding: 0 !important;
        }
      `}
    >
      <Fade bottom>
        <Title1
          css={css`
            text-align: center;
            font-size: 9rem;
            margin-bottom: 60px;
            grid-column: 3 / span 8;
            @media (max-width: ${_configSite.md}px) {
              grid-column: 2 / span 10;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 12;
            }
          `}
        >
          The Team
        </Title1>

        <CardTeammates bios={bios} />
      </Fade>
    </Wrapper>
  </Container>
);

import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";

// Config
import _configSite from "../../_configSite";
import ImgAppUsician from "../../images/apps/ImgAppUsician";
import ImgAppOnArk from "../../images/apps/ImgAppOnArk";
import ImgAppTestDayPrep from "../../images/apps/ImgAppTestDayPrep";

const data = [
  {
    title: "Test Day Prep",
    website: "https://test-day-prep-frontend-pr-1.onrender.com/",
    image: <ImgAppTestDayPrep />
  },
  {
    title: "Usician",
    website: "https://demo.usician.app",
    image: <ImgAppUsician />
  },
  {
    title: "OnArk",
    website: "https://onark.app",
    image: <ImgAppOnArk />
  }
];

const Card = styled.article`
  position: relative;
  height: 520px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  @media (max-width: ${_configSite.lg}px) {
    height: 425px;
  }
  @media (max-width: ${_configSite.md}px) {
    height: 525px;
  }
  @media (max-width: ${_configSite.sm}px) {
    height: 400px;
  }
  @media (max-width: ${_configSite.xs}px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 550px;
  }
  @media (max-width: 450px) {
    height: 500px;
  }
  @media (max-width: 400px) {
    height: 420px;
  }
`;

export default () => (
  <Container>
    <Wrapper
      css={css`
        padding-bottom: 120px !important;
      `}
    >
      {data.map(d => (
        <a
          href={d.website}
          css={css`
            text-decoration: none;
            cursor: pointer;
            grid-column: span 4;
            ${Card} .gatsby-image-wrapper {
              position: absolute !important;
              left: 0;
              right: 0;
              margin: 0 auto;
              bottom: 0;

              width: 100%;
              height: calc(100% + 4px);
              transition: 3s;
              transition-timing-function: cubic-bezier(0.05, 0.68, 0, 1.01);
            }

            @media (max-width: ${_configSite.md}px) {
              grid-column: span 6;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 12;
            }

            &:hover {
              > ${Card} .gatsby-image-wrapper {
                transform: scale(1.1) translateY(-4%);
              }
            }
          `}
        >
          <Card key={d.title}>
            <>{d.image}</>
          </Card>
        </a>
      ))}
    </Wrapper>
  </Container>
);

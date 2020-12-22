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
          Company Profile
        </Title2>
        <Text1
          css={css`
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
          We are a remote, web application development company based in Orlando Florida, that services clients across the United States. The industries of our clientele are diverse, which allows us to work on a wide variety of projects. Before beginning any project though, we offer a free consultation to get to know each client to make sure we are a good fit for the client, and the project.
        </Text1>
      </Fade>
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
          Web Technology Used
        </Title2>
        <Text1
          css={css`
          margin-bottom: 200px;
          grid-column: 3 / span 8;
          @media (max-width: ${_configSite.md}px) {
            grid-column: 2 / span 10; 
          }
          @media (max-width: ${_configSite.xs}px) {
            grid-column: 1 / span 12;
          }
        `}
        >
          We are able to develop in a variety of stacks and frameworks, but currently we work in a JavaScript stack, that typically involves Next.js, Node, GraphQL, and PostgreSQL. The technologies we use are reviewed on an annual basis to ensure we are staying on top of the latest tech and development practices. Besides technology usage, we are also versed in Databases, APIs, Automations, Security, Payments, and more. 
        </Text1>
      </Fade>
    </Wrapper>
  </Container>
);

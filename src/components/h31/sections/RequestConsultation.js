/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {css} from "@emotion/core";
import Fade from "react-reveal";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Title1 from "../base/Title1";
import LinkStyled1 from "../base/LinkStyled1";
import _configSite from "../../_configSite";

export default () => (
  <Container
    css={css`
      background: linear-gradient(180deg, #B6ECFA 0%, #E6EEF5 95.83%);
      padding-bottom: 200px;
      margin-bottom: -200px;
    `}
  >
    <Wrapper
      css={css`
        display: block;
        grid-gap: 0px;
        padding: 120px 0!important;
        > .react-reveal {
          ${Wrapper.__emotion_styles}
          grid-gap: 0px;
          padding: 0!important;
        }
      `}
    >
      <Fade bottom>
        <Title1 css={css`
          font-size: 8.7rem;
          text-align: center;
          grid-column: 1 / span 12;
          @media (max-width: ${_configSite.xl}px) {
            font-size: 7rem;
          }
          @media (max-width: ${_configSite.lg}px) {
            font-size: 5.8rem;
          }
          @media (max-width: ${_configSite.md}px) {
            font-size: 4.58rem;
          }
          @media (max-width: ${_configSite.sm}px) {
            font-size: 3.25rem;
          }
          @media (max-width: ${_configSite.xs}px) {
            font-size: 2.6rem;
          }
        `}
        >
          Request a Free
        </Title1>

        <Title1 css={css`
        font-size: 9.5rem;
        text-align: center;
        grid-column: 1 / span 12;
        @media (max-width: ${_configSite.xl}px) {
          font-size: 7.65rem;
        }
        @media (max-width: ${_configSite.lg}px) {
          font-size: 6.3rem;
        }
        @media (max-width: ${_configSite.md}px) {
          font-size: 5rem;
          grid-column: 2 / span 10;
        }
        @media (max-width: ${_configSite.sm}px) {
          font-size: 3.55rem;
          grid-column: 1 / span 12;
        }
        @media (max-width: ${_configSite.xs}px) {
          font-size: 2.825rem;
        }
      `}
        >
          Consultation
        </Title1>

        <Title2
          css={css`
          line-height: 1;
          font-size: 2rem;
          text-align: justify;
          padding: 0 9px;
          margin: 0 auto 30px auto;
          grid-column: 1 / span 12;
          max-width: 905px;

          @media (max-width: ${_configSite.xl}px) {
            max-width: 720px
          }
          @media (max-width: ${_configSite.lg}px) {
            max-width: 600px;
          }
          @media (max-width: ${_configSite.md}px) {
            max-width: 475px;
          }
          @media (max-width: ${_configSite.sm}px) {
            max-width: 338px;
            font-size: 1.25rem;
          }
          @media (max-width: ${_configSite.xs}px) {
            max-width: 270px;
            font-size: 1rem;
          }
        `}
        >
          Not sure how to get started? Let us get you on the right path!
        </Title2>

        <div css={css`
          grid-column: 1 / span 12;
          text-align: center;
        `}
        >
          <LinkStyled1 name="get started with a free consultation" to="/free-consultation">
            GET STARTED
          </LinkStyled1>
        </div>
      </Fade>
    </Wrapper>
  </Container>
);

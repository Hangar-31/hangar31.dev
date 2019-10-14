/* eslint-disable prettier/prettier */
import React from "react";
import {css} from "@emotion/core";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Title1 from "../base/Title1";
import LinkStyled1 from "../base/LinkStyled1";

export default () => (
  <Container
    css={css`
      background: linear-gradient(180deg, #B6ECFA 0%, #E6EEF5 95.83%);
      padding-bottom: 5vw;
      margin-bottom: -10vw;
    `}
  >
    <Wrapper
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 992px;
      `}
    >
      <Title1 css={css`
        font-size: 9.435rem;
        @media (max-width: 1100px) {
          font-size: 8.25rem;
        }
        @media (max-width: 930px) {
          font-size: 6rem;
        }
        @media (max-width: 700px) {
          font-size: 4rem;
        }
      `}
      >
        Request a Free
      </Title1>
      <Title1 css={css`
        font-size: 10.2rem;
        @media (max-width: 1100px) {
          font-size: 9rem;
        }
        @media (max-width: 930px) {
          font-size: 6.5rem;
        }
        @media (max-width: 700px) {
          font-size: 4.34rem;
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
          margin-bottom: 60px;
          @media (max-width: 1100px) {
            max-width: 856px;
          }
          @media (max-width: 930px) {
            max-width: 620px;
            font-size: 1.5rem;
          }
          @media (max-width: 700px) {
            max-width: 410px;
            font-size: 1rem;
          }
        `}
      >
        Not sure how to get your website started? Let us help get you on the right path!
      </Title2>
      <LinkStyled1 to="/contact">
        Get Started
      </LinkStyled1>
    </Wrapper>
  </Container>
);

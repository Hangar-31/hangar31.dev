/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Fade from "react-reveal";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title1 from "../base/Title1";
import Form1 from "../forms/Form1";
import ImgLogo from "../../images/ImgLogo";
import _configSite from "../../_configSite";

const ContainerTitle = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  grid-column: 3 / span 8;
  @media (max-width: ${_configSite.md}px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: ${_configSite.sm}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

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
        padding: 120px 15px!important;
        > .react-reveal {
          ${Wrapper.__emotion_styles}
          grid-gap: 0px;
          padding: 0!important;
        }
        > .react-reveal:nth-of-type(1) {
          margin-bottom: 30px;
        }
      `}
    >
      <Fade bottom>
        <ContainerTitle>
          <Title1 css={css`
            font-size: 5.5rem !important;
            grid-column: 3 / span 5;
            @media (max-width: ${_configSite.lg}px) {
              font-size: 4rem !important;
            }
            @media (max-width: ${_configSite.md}px) {
              font-size: 3rem !important;
            }
            @media (max-width: ${_configSite.sm}px) {
              order: 2;
            }
            @media (max-width: ${_configSite.xs}px) {
              font-size: 2.5rem !important;
            }
          `}
          >
            Inquiry Form
          </Title1>

          <ImgLogo cssProp={`
            width: 180px;
            @media (max-width: ${_configSite.lg}px) {
              width: 150px;
            }
            @media (max-width: ${_configSite.md}px) {
              width: 125px;
            }
            @media (max-width: ${_configSite.sm}px) {
              order: 1;
              margin-bottom: 15px;
            }
          `} 
          />
        </ContainerTitle>
      </Fade>

      <Fade bottom>
        <Form1 formName="Inquiry Form - Contact" />
      </Fade>
      
    </Wrapper>
  </Container>
);

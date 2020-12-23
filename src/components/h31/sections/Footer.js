/* eslint-disable no-underscore-dangle */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Images
import ImgLogo from "../../images/ImgLogo";

// Components
import Text1 from "../base/Text1";
import AnimeFooterBackground from "../animations/AnimeFooterBackground";
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import FooterLink from "../base/FooterLink";

// Config
import _configSite from "../../_configSite";

const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  grid-column: 2 / span 10;
  @media (max-width: ${_configSite.md}px) {
    grid-column: 1 / span 12;
  }
  @media (max-width: ${_configSite.sm}px) {
    flex-direction: column;
  }
`;

const TopBarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const TopBarItem = styled.li`
  margin-left: 45px;
  @media (max-width: ${_configSite.sm}px) {
    margin: 15px;
  }
`;

const BottomBarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-column: 2 / span 10;
  @media (max-width: ${_configSite.md}px) {
    grid-column: 1 / span 12;
  }
  @media (max-width: ${_configSite.sm}px) {
    flex-direction: column;
  }
`;

const BottomBarItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: ${_configSite.sm}px) {
    text-align: center;
    margin: 0 0 15px 0;
  }
`;

export default () => (
  <>
    <Container
      css={css`
        z-index: 1;
        height: 900px;
        background: transparent;
        @media (max-width: ${_configSite.lg}px) {
          height: 850px;
        }
        @media (max-width: ${_configSite.md}px) {
          height: 700px;
        }
        @media (max-width: ${_configSite.sm}px) {
          height: 750px;
        }
      `}
    >
      <AnimeFooterBackground />

      <Wrapper
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;

          @media (max-width: ${_configSite.xl}px) {
            padding-bottom: 60px;
          }
          @media (max-width: ${_configSite.md}px) {
            padding-bottom: 30px;
          }
        `}
      >
        <TopBar>
          <ImgLogo
            cssProp={`
              width: 150px;
              @media (max-width: ${_configSite.md}px) {
                width: 125px;
              }
            `}
          />

          <TopBarList>
            {_configSite.mainNav.map(link => (
              <TopBarItem>
                <FooterLink to={link.to}>{link.name}</FooterLink>
              </TopBarItem>
            ))}
          </TopBarList>
        </TopBar>

        <BottomBarList>
          <BottomBarItem>
            <Text1
              css={css`
                color: ${_configSite.colorWhite};
                text-transform: uppercase;
              `}
            >
              Hangar 31 LLC - Copyright © 2020
            </Text1>
          </BottomBarItem>

          <BottomBarItem>
            <FooterLink
              cssProp={`
                ${Text1.__emotion_styles};
                color: ${_configSite.colorWhite};
                text-transform: uppercase;
              `}
              to="/terms-of-service"
            >
              Terms of Service
            </FooterLink>
          </BottomBarItem>

          <BottomBarItem>
            <FooterLink
              cssProp={`
                ${Text1.__emotion_styles};
                color: ${_configSite.colorWhite};
                text-transform: uppercase;
              `}
              to="/privacy-policy"
            >
              Privacy Policy
            </FooterLink>
          </BottomBarItem>
        </BottomBarList>
      </Wrapper>
    </Container>
  </>
);

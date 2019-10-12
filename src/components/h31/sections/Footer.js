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
`;

const TopBarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const TopBarItem = styled.li`
  margin-left: 45px;
`;

const BottomBarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
const BottomBarItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export default () => (
  <>
    <Container
      css={css`
        z-index: 1;
        height: 1200px;
        background: transparent;
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
        `}
      >
        <TopBar>
          <ImgLogo
            cssProp={`
            width: 150px;
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
              Hangar 31 LLC - Copyright © 2019
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
              Privacy
            </FooterLink>
          </BottomBarItem>
        </BottomBarList>
      </Wrapper>
    </Container>
  </>
);

/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link';

// Config
import _config from "../../_configSite";

// Images
import ImgLogo from "../../images/ImgLogo";
import MainLink from "../base/MainLink";
import MainLinkButton from "../base/MainLinkButton";
import TitleLogo from "../base/TitleLogo";

// Styled Components
const Container = styled.nav`
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: ${_config.padding}px;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 993px) {
    display: flex
  }
`;

const WrapperLogo = styled(TransitionLink)`
  display: flex;
  align-items: center;
  max-width: 300px;
  
  text-decoration: none;

  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`

const ListLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

const ItemLink = styled.li`
  display: flex;
  align-items: center;
  margin: 0 30px;
  @media (max-width: 1200px) {
    margin: 0 20px;
  }
`

export default ({ path }) => (
  <Container>
    <WrapperLogo
      to="/"
      entry={{
        delay: 1.5,
        zIndex: 1
      }}
      exit={{
        length: 2,
        zIndex: 1
      }}
    >
      <div
        css={css`
          width: 125px;
          margin-right: 45px;
          @media(max-width: 1100px) {
            margin-right: 30px;
          }
        `}
      >
        <ImgLogo />
      </div>
      <TitleLogo>
        Hangar31.dev
      </TitleLogo>
    </WrapperLogo>

    <ListLinks>
      {_config.mainNav.map(link => (
        <ItemLink>
          <MainLink
            to={link.to}
            activeClassName="current-page"
            entry={{
              delay: path ==="/" ? 1.5 : 0.5,
              zIndex: 1
            }}
            exit={{
              length: path ==="/" ? 2: 0.5,
              zIndex: 1
            }}
          >
            {link.name}
          </MainLink>
        </ItemLink>
      ))}
      <ItemLink
        css={css`
          width: 1px;
          height: 22px;
          background: #ffffff;
          margin: 0 5px;
          @media(max-width: 1100px) {
            margin: 0px;
          }
        `}
      />
      <ItemLink
        css={css`
            margin-right: 0px;
        `}
      >
        <MainLinkButton
          to="/free-consultation"
          activeClassName="current-page-free-consultation"
          entry={{
              delay: path ==="/" ? 1.5 : 0.5,
              zIndex: 1
            }}
          exit={{
              length: path ==="/" ? 2: 0.5,
              zIndex: 1
            }}
        >
          Free Consultation
        </MainLinkButton>
      </ItemLink>


    </ListLinks>
  </Container>
);

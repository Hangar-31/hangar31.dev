/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link';

// Config
import _config from "../_configSite";

// Images
import ImgLogo from "../images/ImgLogo";
import MainLink from "./base/MainLink";

// Styled Components
const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${_config.padding}px;
  max-width: 1440px;
  margin: 0 auto;
`;

const WrapperLogo = styled(TransitionLink)`
  width: 100px;
`

const ListLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

const ItemLink = styled.li`
  margin: 0 30px;
`

export default ({ path }) => (
  <Container>
    <WrapperLogo
      to="/"
      entry={{
        delay: 1.5
      }}
      exit={{
        length: 2
      }}
    >
      <ImgLogo />
    </WrapperLogo>

    <ListLinks>
      {_config.mainNav.map(link => (
        <ItemLink>
          <MainLink
            to={link.to}
            entry={{
              delay: path ==="/" ? 1.5 : 0.5
            }}
            exit={{
              length: path ==="/" ? 2: 0.5
            }}
          >
            {link.name}
          </MainLink>
        </ItemLink>
      ))}
    </ListLinks>
  </Container>
);

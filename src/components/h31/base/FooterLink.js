import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import TransitionLink from "gatsby-plugin-transition-link";
import Scroll from "react-scroll";

// Configs
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

const Link = styled(TransitionLink)`
  ${_configBase}

  position: relative;

  color: ${_configSite.colorWhite};
  line-height: 1;
  font-size: 1.125rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: 400;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    display: block;

    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;

    background: ${_configSite.colorWhite};
    transition: 0.2s ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export default ({ to, cssProp, children }) => (
  <Link
    to={to}
    entry={{
      delay: 1.5
    }}
    exit={{
      length: 2,
      trigger: () =>
        Scroll.animateScroll.scrollToTop({
          smooth: true,
          duration: 1250
        })
    }}
    css={css`
      ${cssProp};
    `}
  >
    {children}
  </Link>
);

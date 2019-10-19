import React from "react";
import styled from "@emotion/styled";
import TransitionLink from "gatsby-plugin-transition-link";
import Scroll from "react-scroll";

// Configs
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

const Link = styled(TransitionLink)`
  ${_configBase}

  text-decoration: none;
  color: ${_configSite.colorPrimary};
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: ${_configSite.colorTertiary};
    text-decoration: underline;
  }
`;

export default ({ to, children }) => (
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
  >
    {children}
  </Link>
);

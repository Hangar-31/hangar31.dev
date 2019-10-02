/** @jsx jsx */
import styled from "@emotion/styled";
import TransitionLink from "gatsby-plugin-transition-link";

// Configs
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled(TransitionLink)`
  ${_configBase}

  position: relative;
  color: ${_configSite.colorWhite};
  line-height: 1;
  font-size: 1.25rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: light;
  text-decoration: none;

  &::after {
    content: "";
    position: relative;
    margin: 5px auto 0 auto;
    display: block;
    width: 0%;
    height: 2px;
    background: ${_configSite.colorWhite};
    transition: 0.2s ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

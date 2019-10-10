/** @jsx jsx */
import styled from "@emotion/styled";
import TransitionLink from "gatsby-plugin-transition-link";

// Configs
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled(TransitionLink)`
  ${_configBase}
  padding: 10px 15px;

  border: 1px solid #ffffff;
  border-radius: 8px;

  position: relative;
  color: ${_configSite.colorWhite};
  line-height: 1;

  font-size: 1.25rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: light;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: #ffffff;
    color: #069bd5;
  }
`;